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
import Link, { LinkProps } from "./Link"

const styles = require("./Menu.module.scss")

type MenuItem = {
  label: string
  url: string
  method?: "get" | "post" | "put" | "delete"
}

type MenuGroup = {
  title: string
  items: MenuItem[]
}

export type MenuProps = {
  header?: React.ReactElement<any>
  items: Array<MenuItem | MenuGroup>
  automationId?: string
  heading: string
  mobileEnabled?: boolean
  active?: boolean
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
            <React.Fragment>
              <Link
                ref={this.rootRef}
                text={heading}
                href="#"
                onClick={e => this.toggle(e)}
                aria-expanded={this.state.open}
                data-automation-id={automationId}
                hasMenu
                menuOpen={this.state.open}
              />
              {this.state.open && this.renderMenu()}
            </React.Fragment>
          )
        }
      </Media>
    )
  }

  toggle = (e: React.SyntheticEvent<HTMLAnchorElement> | MouseEvent) => {
    const open = !this.state.open
    this.setState({ open })
  }

  renderMenu() {
    const { items } = this.props

    return (
      <ul className={styles.menu}>
        {items.map(item => {
          if ("url" in item) {
            return this.renderMenuItem(item)
          } else if ("title" in item) {
            return this.renderMenuGroup(item)
          }
        })}
      </ul>
    )
  }

  renderOffCanvas() {
    const { items, heading } = this.props
    const links = items.map(item => {
      if ("url" in item) {
        return this.renderOffCanvasMenuItem(item)
      } else if ("title" in item) {
        return this.renderOffCanvasMenuGroup(item)
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

  renderOffCanvasMenuItem = (item: MenuItem) => (
    <Link key={item.url} text={item.label} href={item.url} />
  )

  renderOffCanvasMenuGroup = (menuGroup: MenuGroup) => {
    const { title, items } = menuGroup

    return (
      <div className={styles.offCanvasMenuGroup}>
        <h4 className={styles.offCanvasMenuGroupTitle}>{title}</h4>
        {items.map(this.renderOffCanvasMenuItem)}
      </div>
    )
  }

  renderMenuItem = (item: MenuItem) => {
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

  renderMenuGroup = (menuGroup: MenuGroup) => {
    const { title, items } = menuGroup

    return (
      <div className={styles.menuGroup}>
        <h4 className={styles.menuGroupTitle}>{title}</h4>
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
