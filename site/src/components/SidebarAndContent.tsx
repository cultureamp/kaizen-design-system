import { Icon } from "@kaizen/component-library"
import { Tag } from "@kaizen/draft-tag"
import classnames from "classnames"
import { Link } from "gatsby"
import * as React from "react"
import markdownComponents from "./markdownComponents"

import styles from "./SidebarAndContent.scss"
const markdownStyles = require("../styles/markdown.scss")
const linkIcon = require("./images/link.svg").default

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

type ItemOrArray<T> = T | Array<ItemOrArray<T>>
type Item = {
  title: string
  url: string
}
type TableOfContentsProps = {
  items: ItemOrArray<Item>
}

type ContentNeedToKnowProps = {
  listOfTips: string[]
}

type HealthItems = {
  designed: boolean
  built: boolean
  latestDesign: boolean
  allVariants: boolean
  responsive: boolean
  internationalized: boolean
  accessible: boolean
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
          styles.contentTopSection,
          markdownStyles.markdownContainer
        )}
      >
        <markdownComponents.h2>
          <span className="md-anchor-offset" id="need-to-know" />
          <a className="md-heading-link" href="#need-to-know">
            <Icon icon={linkIcon} title="Anchor" />
          </a>
          Need to know
        </markdownComponents.h2>
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

export const ContentHealth = ({
  healthItems,
}: {
  healthItems: HealthItems
}) => {
  const {
    designed,
    built,
    latestDesign,
    allVariants,
    responsive,
    internationalized,
    accessible,
  } = healthItems

  return (
    <div
      className={classnames(
        styles.contentTopSection,
        markdownStyles.markdownContainer
      )}
    >
      <markdownComponents.h2>
        <span className="md-anchor-offset" id="health" />
        <a className="md-heading-link" href="#health">
          <Icon icon={linkIcon} title="Anchor" />
        </a>
        Health
      </markdownComponents.h2>
      <div className={styles.healthContent}>
        <Tag variant={designed ? "validationPositive" : "validationNegative"}>
          {designed ? "Designed" : "Not yet designed"}
        </Tag>
        <Tag variant={built ? "validationPositive" : "validationNegative"}>
          {built ? "Built" : "Not built"}
        </Tag>
        {built && (
          <>
            <Tag
              variant={
                latestDesign ? "validationPositive" : "validationNegative"
              }
            >
              {latestDesign
                ? "Matches latest design"
                : "Doesn’t match latest design"}
            </Tag>
            <Tag
              variant={
                allVariants ? "validationPositive" : "validationNegative"
              }
            >
              {allVariants
                ? "Includes all variants"
                : "Doesn’t have all variants"}
            </Tag>
            <Tag
              variant={responsive ? "validationPositive" : "validationNegative"}
            >
              {responsive ? "Responsive" : "Not responsive"}
            </Tag>
            <Tag
              variant={
                internationalized ? "validationPositive" : "validationNegative"
              }
            >
              {internationalized
                ? "Internationalized"
                : "Not internationalized"}
            </Tag>
            <Tag
              variant={accessible ? "validationPositive" : "validationNegative"}
            >
              {accessible ? "Accessible" : "Not accessible"}
            </Tag>
          </>
        )}
      </div>
    </div>
  )
}

export const SidebarAndContent: React.SFC<SidebarAndContentProps> = ({
  children,
}) => <div className={styles.sidebarAndContent}>{children}</div>

const TableOfContentsBody = (items, depth) => {
  if (depth === 0) {
    return
  }

  return items.map(item =>
    item.url ? (
      <li key={item.url}>
        <a href={item.url}>{item.title}</a>
        {item.items ? (
          <ol>{TableOfContentsBody(item.items || [], depth - 1)}</ol>
        ) : null}
      </li>
    ) : (
      TableOfContentsBody(item.items || [], depth - 1)
    )
  )
}

export const TableOfContents: React.SFC<TableOfContentsProps> = ({ items }) =>
  items ? (
    <div
      className={styles.tableOfContents}
      role="navigation"
      aria-labelledby="table-of-contents-label"
    >
      <p id="table-of-contents-label" className={styles.tableOfContentsLabel}>
        On this page
      </p>
      <ol className={styles.tableOfContentsList}>
        {TableOfContentsBody(items, 2)}
      </ol>
    </div>
  ) : null
