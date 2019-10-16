import classnames from "classnames"
import { Link } from "gatsby"
import * as React from "react"
import markdownComponents from "./markdownComponents"

const markdownStyles = require("../styles/markdown.scss")
const styles = require("./SidebarAndContent.scss")

type SidebarAndContentProps = {
  children: React.ReactNode
}

type SidebarProps = {
  children: React.ReactNode
}

type SidebarSectionProps = {
  title?: string
  children: React.ReactNode
}

type SidebarTabProps = {
  href?: string
  active?: boolean
  children: React.ReactNode
}

type ContentNeedToKnowProps = {
  listOfTips: Array<string>
}

export const Sidebar: React.SFC<SidebarProps> = ({ children }) => (
  <div className={styles.sidebar}>{children}</div>
)

export const SidebarSection: React.SFC<SidebarSectionProps> = ({
  title,
  children,
}) => (
  <div>
    {title && <div className={styles.sidebarSectionTitle}>{title}</div>}
    <ul className={styles.tabList}>{children}</ul>
  </div>
)

export const SidebarTab: React.SFC<SidebarTabProps> = ({
  href = "#",
  children,
  active = false,
}) => (
  <li className={classnames(styles.tab, { [styles.active]: active })}>
    <Link to={href}>{children}</Link>
  </li>
)

export const Content: React.SFC = ({ children }) => (
  <div className={styles.content}>{children}</div>
)

export const ContentNeedToKnowSection: React.SFC<ContentNeedToKnowProps> = ({
  listOfTips,
}) => (
  <>
    {listOfTips && listOfTips.length > 0 && (
      <div
        className={classnames(
          styles.contentNeedToKnow,
          markdownStyles.markdownContainer
        )}
      >
        <markdownComponents.h2>Need to know</markdownComponents.h2>
        <markdownComponents.ul>
          {listOfTips.map((tip: string, i) => (
            <markdownComponents.li key={`tip-${i}`}>
              {tip}
            </markdownComponents.li>
          ))}
        </markdownComponents.ul>
      </div>
    )}
  </>
)

export const SidebarAndContent: React.SFC<SidebarAndContentProps> = ({
  children,
}) => <div className={styles.sidebarAndContent}>{children}</div>
