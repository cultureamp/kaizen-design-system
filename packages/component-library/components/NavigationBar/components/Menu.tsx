import {
  IconButton,
  OffCanvas,
  OffCanvasContext,
} from "@kaizen/component-library"
const arrowLeftIcon = require("@kaizen/component-library/icons/arrow-left.icon.svg")
  .default
import * as React from "react"
import Media from "react-media"
import { MOBILE_QUERY } from "../constants"
import Link from "./Link"
import classNames from "classnames"

const styles = require("./Menu.module.scss")

type MenuItem = {
  label: string
  url: string
  method?: "get" | "post" | "put" | "delete"
}

type Submenu = {
  title: string
  items: MenuItem[]
}

export type MenuProps = {
  header?: React.ReactElement<any>
  items: Array<MenuItem | Submenu>
  automationId?: string
  heading: string
  mobileEnabled?: boolean
}

type State = {
  open: boolean
}

export default class Menu extends React.Component<MenuProps, State> {
  static displayName = "Menu"
  static defaultProps = {
    items: [],
    mobileEnabled: true,
  }
  rootRef = React.createRef<HTMLElement>()

  state = { open: false }

  render() {
    const { children, automationId, heading, mobileEnabled } = this.props

    return (
      <Media query={MOBILE_QUERY}>
        {(matches: boolean) =>
          mobileEnabled && matches ? (
            <React.Fragment>
              <OffCanvasContext.Consumer>
                {({ toggleVisibleMenu }) => (
                  <Link
                    text={heading}
                    href="#"
                    onClick={() => toggleVisibleMenu(heading)}
                    hasMenu
                  />
                )}
              </OffCanvasContext.Consumer>
              {this.renderOffCanvas()}
            </React.Fragment>
          ) : (
            <nav className={styles.root} ref={this.rootRef}>
              <button
                className={styles.button}
                onClick={this.toggle}
                aria-expanded={this.state.open}
                data-automation-id={automationId}
                onMouseDown={e => e.preventDefault()}
              >
                {children}
              </button>
              {this.state.open && this.renderMenu()}
            </nav>
          )
        }
      </Media>
    )
  }

  toggle = (e: React.SyntheticEvent<HTMLButtonElement> | MouseEvent) => {
    const open = !this.state.open
    this.setState({ open })
  }

  renderMenu() {
    const { header, items } = this.props

    return (
      <div className={styles.menu}>
        <div>
          {header}
          {items.map((item, index) => {
            if ("url" in item) {
              return this.renderMenuItem(item, index)
            } else if ("title" in item) {
              return this.renderSubmenu(item, index)
            }
          })}
        </div>
      </div>
    )
  }

  renderOffCanvas() {
    const { items, heading } = this.props
    const links = items.map((item, index) => {
      if ("url" in item) {
        return this.renderOffCanvasMenuItem(item, index)
      } else if ("title" in item) {
        return this.renderOffCanvasSubmenu(item, index)
      }
    })

    return (
      <OffCanvas
        links={links}
        heading={heading ? heading : "Menu"}
        headerComponent={this.renderBackButton()}
        menuId={heading}
      />
    )
  }

  renderBackButton() {
    return (
      <OffCanvasContext.Consumer>
        {({ toggleVisibleMenu }) => (
          <IconButton
            label="Back"
            icon={arrowLeftIcon}
            onClick={() => toggleVisibleMenu(this.props.heading)}
            reversed
          />
        )}
      </OffCanvasContext.Consumer>
    )
  }

  renderOffCanvasMenuItem = (item: MenuItem, index: number) => (
    <Link key={index} text={item.label} href={item.url} />
  )

  renderOffCanvasSubmenu = (submenu: Submenu, index: number) => {
    const { title, items } = submenu

    return (
      <div className={classNames(styles.offCanvasSubmenu, {
        [styles.first]: index === 0
      })}>
        <h4 className={styles.offCanvasSubmenuTitle}>{title}</h4>
        {items.map(this.renderOffCanvasMenuItem)}
      </div>
    )
  }

  renderMenuItem = (item: MenuItem, index: number) => {
    const { label, url, method } = item

    if (method && method !== "get") {
      return (
        // HTML forms only accept POST. We use a hidden `_method` input as a convention for emulating other HTTP verbs.
        // This behaviour is the same as what is implemented by UJS and supported by Rails:
        // https://github.com/rails/jquery-ujs
        <form method="post" action={url}>
          <input name="_method" value={method} type="hidden" />
          <button type="submit" className={styles.menuItem}>
            {label}
          </button>
        </form>
      )
    }

    return (
      <a href={url} className={styles.menuItem} tabIndex={0}>
        {label}
      </a>
    )
  }

  renderSubmenu = (submenu: Submenu, index: number) => {
    const { title, items } = submenu

    return (
      <div className={classNames(styles.submenu, {
        [styles.first]: index === 0
      })}>
        <h4 className={styles.submenuTitle}>{title}</h4>
        {items.map(this.renderMenuItem)}
      </div>
    )
  }

  componentDidMount() {
    document.addEventListener("click", this.clickDocument)
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.clickDocument)
  }

  clickDocument = (e: MouseEvent) => {
    // We can't just stopPropagation of click events in the menu, because a
    // click in this menu may also need to dismiss another open menu.
    if (
      this.state.open &&
      this.rootRef.current &&
      !(e.target instanceof Node && this.rootRef.current.contains(e.target))
    ) {
      this.toggle(e)
    }
  }
}
