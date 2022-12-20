import React from "react"
import styles from "./Layout.module.scss"

type GenericChildrenProps = {
  children?: React.ReactNode
}

const NavigationBar = ({ children }: GenericChildrenProps): JSX.Element => (
  <div className={styles.navigationBar}>{children}</div>
)

NavigationBar.displayName = "NavigationBar"

const Sidebar = ({ children }: GenericChildrenProps): JSX.Element => (
  <div className={styles.sidebar}>
    <div className={styles.sidebarInner}>{children}</div>
  </div>
)

Sidebar.displayName = "Sidebar"

const Header = ({ children }: GenericChildrenProps): JSX.Element => (
  <aside className={styles.header}>{children}</aside>
)

Header.displayName = "Header"

const Footer = ({ children }: GenericChildrenProps): JSX.Element => (
  <footer className={styles.footer}>{children}</footer>
)

Footer.displayName = "Footer"

/**
 * An area for toast notifications that will also trigger a screen-reader announcement.
 * Content is absolutely positioned in the top right, but it is up to you to add appropriately styled notifications.
 * By setting the children of `<Layout.Toasts>` the screen reader will immediately read its contents, without losing
 * focus. You can safely add and remove toasts without worrying about the screen reader announcement being interrupted
 * or repeated.
 */
const Toasts = ({ children }: GenericChildrenProps): JSX.Element => (
  <div className={styles.toasts} aria-live="assertive">
    {children}
  </div>
)

Toasts.displayName = "Toasts"

/**
 * Announcements intended for screen readers only. Content will be invisible for sighted users.
 * By setting the children of `<Layout.Announcers>` the screen reader will immediately read its contents,
 * without losing focus. You can safely override the contents when adding a new announcement rather than
 * appending the contents.
 */
const Announcers = ({ children }: GenericChildrenProps): JSX.Element => (
  <div className={styles.announcers} aria-live="assertive">
    {children}
  </div>
)

Announcers.displayName = "Announcers"

/**
 * @deprecated Layout is deprecated. Please use draft-page-layout instead.
 */
class Layout extends React.Component<GenericChildrenProps> {
  static displayName = "Layout"
  static NavigationBar = NavigationBar
  static Sidebar = Sidebar
  static Header = Header
  static Footer = Footer
  static Toasts = Toasts
  static Announcers = Announcers

  render(): JSX.Element {
    const content = React.Children.toArray(this.props.children)
    const navbar = extractChildOfType(content, NavigationBar)
    const header = extractChildOfType(content, Header)
    const sidebar = extractChildOfType(content, Sidebar)
    const footer = extractChildOfType(content, Footer)
    const announcers = extractChildOfType(content, Announcers)
    const toasts = extractChildOfType(content, Toasts)

    return (
      <div className={styles.root}>
        {navbar}
        {announcers}
        <div className={styles.page}>
          {header}
          {toasts}
          <div className={styles.body}>
            <div className={styles.bodyInner}>
              {sidebar}
              <main className={styles.content}>{content}</main>
            </div>
          </div>
          {footer}
        </div>
      </div>
    )
  }
}

const extractChildOfType = (
  children: React.ReactNode[],
  type: React.VFC
): React.ReactNode | false => {
  const match = children.find(child => {
    if (React.isValidElement(child) && typeof child.type === "function") {
      return (child.type as React.FC).displayName === type.displayName
    }

    return false
  })

  if (match) {
    const index = children.indexOf(match)
    children.splice(index, 1)
  }

  return match
}

export default Layout
