import * as React from "react"

import {
  Icon,
  IconButton,
  OffCanvas,
  OffCanvasContext,
} from "@kaizen/component-library"

import classNames from "classnames"
import Media from "react-media"
import { MOBILE_QUERY } from "../constants"
import { MenuProps } from "../types"
import Dropdown from "./Dropdown"
import Link from "./Link"
import MenuGroup from "./MenuGroup"

const arrowLeftIcon = require("@kaizen/component-library/icons/arrow-left.icon.svg")
  .default
const chevronDownIcon = require("@kaizen/component-library/icons/chevron-down.icon.svg")
  .default

const styles = require("./Menu.module.scss")

type State = {
  open: boolean
}

export default class Menu extends React.Component<MenuProps, State> {
  static displayName = "Menu"
  static defaultProps = {
    items: [],
    active: false,
    mobileEnabled: true,
  }
  rootRef = React.createRef<any>()

  state = { open: false }

  render() {
    const {
      active,
      children,
      automationId,
      heading,
      mobileEnabled,
      section,
      items,
      header,
    } = this.props

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
                    section={section}
                  />
                )}
              </OffCanvasContext.Consumer>
              {this.renderOffCanvas()}
            </React.Fragment>
          ) : (
            <nav className={styles.root} ref={this.rootRef}>
              <button
                className={classNames(styles.button, {
                  [styles.buttonLink]: section === "primary",
                  [styles.linkText]: !!heading,
                  [styles.menuOpen]: this.state.open,
                  [styles.secondary]: section === "secondary",
                  [styles.active]: active,
                })}
                onClick={this.toggle}
                aria-expanded={this.state.open}
                data-automation-id={automationId}
                onMouseDown={e => e.preventDefault()}
              >
                {children ? (
                  children
                ) : (
                  <React.Fragment>
                    <span className={styles.linkText}>{heading}</span>
                    <Icon icon={chevronDownIcon} role="presentation" />
                  </React.Fragment>
                )}
              </button>
              {this.state.open && <Dropdown items={items} header={header} />}
            </nav>
          )
        }
      </Media>
    )
  }

  toggle = (
    e: React.SyntheticEvent<HTMLAnchorElement | HTMLButtonElement> | MouseEvent
  ) => {
    const open = !this.state.open
    this.setState({ open })
  }

  renderOffCanvas() {
    const { items, heading } = this.props
    const links = items.map((item, index) => {
      if ("url" in item) {
        return <Link key={item.url} text={item.label} href={item.url} />
      } else if ("title" in item) {
        return <MenuGroup {...item} index={index} offCanvas />
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
