import * as React from "react"
import uuid from "uuid/v4"

import { Icon, IconButton } from "@kaizen/component-library"
import { OffCanvasContext, ZenOffCanvas } from "@kaizen/draft-zen-off-canvas"

import classNames from "classnames"
import Media from "react-media"
import { NavBarContext } from "../context"
import { MenuProps, NavigationItem } from "../types"
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
  static contextType = NavBarContext
  static defaultProps = {
    items: [],
    active: false,
    mobileEnabled: true,
    small: false,
    opaque: false,
  }
  rootRef = React.createRef<any>()

  state = { open: false }

  render() {
    const { hasExtendedNavigation } = this.context

    const {
      active,
      children,
      automationId,
      heading,
      mobileEnabled,
      opaque,
      small,
      icon,
      items,
      header,
    } = this.props

    return (
      <Media query={`(max-width: ${styles.caBreakpointMobileMax})`}>
        {(matches: boolean) =>
          mobileEnabled && matches ? (
            <React.Fragment>
              <OffCanvasContext.Consumer>
                {({ toggleVisibleMenu }) => (
                  <Link
                    key={uuid()}
                    text={`${heading}…`}
                    href="#"
                    onClick={() => toggleVisibleMenu(heading)}
                    opaque={opaque}
                  />
                )}
              </OffCanvasContext.Consumer>
              {this.renderOffCanvas()}
            </React.Fragment>
          ) : (
            <nav className={styles.root} ref={this.rootRef}>
              <button
                className={classNames(styles.button, {
                  [styles.opaque]: opaque,
                  [styles.small]: small,
                  [styles.buttonLink]: !children,
                  [styles.linkText]: !!heading,
                  [styles.menuOpen]: this.state.open,
                  [styles.active]: active,
                  [styles.extendedNavigation]: hasExtendedNavigation,
                })}
                onClick={this.toggle}
                aria-expanded={this.state.open}
                data-automation-id={automationId}
                onMouseDown={e => e.preventDefault()}
              >
                {children ? (
                  <div className={styles.customChild}>{children}</div>
                ) : (
                  <span className={styles.hoverArea}>
                    {icon && (
                      <span className={styles.linkIcon}>
                        <Icon
                          icon={icon}
                          role="presentation"
                          title={`${heading} icon`}
                        />
                      </span>
                    )}
                    <span className={styles.linkText}>{heading}</span>
                    <span className={styles.downIcon}>
                      <Icon icon={chevronDownIcon} role="presentation" />
                    </span>
                  </span>
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
    const links: Array<NavigationItem | undefined> = items.map(
      (item, index) => {
        if ("url" in item) {
          return (
            <Link
              key={`${item.url}-${uuid()}`}
              text={item.label}
              href={item.url}
            />
          )
        } else if ("title" in item) {
          return (
            <MenuGroup
              key={`${item.title}-${uuid()}`}
              first={index === 0}
              {...item}
              offCanvas
            />
          )
        }
      }
    )

    return (
      <ZenOffCanvas
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
