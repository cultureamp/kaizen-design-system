import * as React from "react"
import uuid from "uuid/v4"

import { Icon } from "@kaizen/component-library"
import { IconButton } from "@kaizen/draft-button"

import classNames from "classnames"
import Media from "react-media"
import arrowLeftIcon from "@kaizen/component-library/icons/arrow-left.icon.svg"
import chevronDownIcon from "@kaizen/component-library/icons/chevron-down.icon.svg"
import { OffCanvasContext, ZenOffCanvas } from "../helpers"
import { NavBarContext } from "../context"
import { MenuProps, NavigationItem } from "../types"
import Dropdown from "./Dropdown"
import Link from "./Link"
import MenuGroup from "./MenuGroup"
import Indicator from "./Indicator"

import styles from "./Menu.module.scss"

type State = {
  open: boolean
}

class Menu extends React.Component<MenuProps, State> {
  static displayName = "Menu"
  static contextType = NavBarContext
  static defaultProps = {
    items: [],
    active: false,
    mobileEnabled: true,
    small: false,
    opaque: false,
    showIndicator: false,
  }
  rootRef = React.createRef<any>()

  state = { open: false }

  toolId: string

  constructor(props: MenuProps) {
    super(props)
    this.toolId = uuid()
  }

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
      colorScheme,
      showIndicator,
    } = this.props

    return (
      <Media query={`(max-width: ${styles.caBreakpointMobileMax})`}>
        {(matches: boolean) =>
          mobileEnabled && matches ? (
            <React.Fragment>
              <OffCanvasContext.Consumer>
                {({ toggleVisibleMenu }) => (
                  <Link
                    key={this.toolId}
                    text={`${heading}…`}
                    href="#"
                    onClick={() => toggleVisibleMenu(heading)}
                    opaque={opaque}
                    showIndicator={showIndicator}
                  />
                )}
              </OffCanvasContext.Consumer>
              {this.renderOffCanvas()}
            </React.Fragment>
          ) : (
            <nav className={styles.root} ref={this.rootRef}>
              <button
                className={classNames([
                  styles.button,
                  ...(colorScheme ? [styles[colorScheme]] : []),
                  {
                    [styles.opaque]: opaque,
                    [styles.small]: small,
                    [styles.buttonLink]: !children,
                    [styles.linkText]: !!heading,
                    [styles.menuOpen]: this.state.open,
                    [styles.active]: active,
                    [styles.extendedNavigation]: hasExtendedNavigation,
                  },
                ])}
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
                    {showIndicator && !icon && <Indicator />}
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
              // These keys should not be derived from the array index
              key={`${item.url}-${index}`}
              text={item.label}
              href={item.url}
              badge={item.badge}
            />
          )
        } else if ("title" in item) {
          return (
            <MenuGroup
              // These keys should not be derived from the array index
              key={`${item.title}-${index}`}
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
export default Menu
