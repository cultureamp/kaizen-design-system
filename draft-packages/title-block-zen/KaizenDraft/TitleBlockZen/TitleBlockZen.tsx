import { Heading, Icon } from "@kaizen/component-library"
import { Tag } from "@kaizen/draft-tag"
import classNames from "classnames"
import * as React from "react"
const styles = require("./TitleBlockZen.scss")
const backIcon = require("@kaizen/component-library/icons/arrow-backward.icon.svg")
  .default
const forwardIcon = require("@kaizen/component-library/icons/arrow-forward.icon.svg")
  .default

type Props = {
  children?: React.ReactNode
  title: string
  variant?: "admin" | "education" // the default is wisteria bg (AKA "reporting")
  breadcrumb?: Breadcrumb
  primaryActions?: React.ReactNode[]
  secondaryActions?: React.ReactNode[]
  navigationTabs?: React.ReactNode[]
  textDirection?: "ltr" | "rtl"
  surveyStatus?: SurveyStatus
  sticky?: boolean
  noBottomSeparator?: boolean
}
// NavTabs are links with optional click events you can hijack
// look at Kaizen Tab component in Perform
// Hamburger needs to trigger an event
// use classnameAndIHaveSpokenToDST for responsive headings
// rename branch to include ticket number
// create a "Create Header component" in Jira (task, not story)
// only show skirt when needed (if there is stuff on that row)

type SurveyStatus = {
  text: string
  status: "draft" | "live"
}

type Breadcrumb = {
  path: string
  text: string
  handleClick?: (event: React.MouseEvent) => void
}

// This belongs to Toolbar, which should eventually be
// broken out into its own component
type ToolbarProps = {
  items?: React.ReactNode[]
}

const renderTag = surveyStatus => {
  if (surveyStatus == undefined) return

  let variant
  if (surveyStatus.status === "draft") {
    variant = "statusDraft"
  }
  if (surveyStatus.status === "live") {
    variant = "statusLive"
  }

  return (
    <div className={styles.tag}>
      <Tag variant={variant}>{surveyStatus.text}</Tag>
    </div>
  )
}

const renderBreadcrumb = (breadcrumb, textDirection) => {
  if (breadcrumb == undefined) return

  const icon = textDirection === "rtl" ? forwardIcon : backIcon

  return (
    <a
      href={breadcrumb.path}
      className={styles.breadcrumb}
      data-automation-id="TitleBlock__Breadcrumb"
      onClick={breadcrumb.handleClick}
    >
      <div className={styles.circle}>
        <Icon icon={icon} role="presentation" />
      </div>
      <span className={styles.breadcrumbText}>{breadcrumb.text}</span>
    </a>
  )
}

// Toolbar is intended to be broken out
// into its own component
const Toolbar = ({ items }: ToolbarProps) => {
  return (
    <div className={styles.toolbar}>
      {items!.map((item, i) => (
        <div className={styles.toolbarItem} key={`toolbar-item-${i}`}>
          {item}
        </div>
      ))}
    </div>
  )
}

const TitleBlockZen = ({
  children,
  title,
  variant,
  breadcrumb,
  primaryActions,
  textDirection,
  surveyStatus,
  sticky,
  noBottomSeparator = false,
}: Props) => (
  <div className={styles.titleBlock}>
    <div
      className={classNames(styles.titleBlockInner, {
        [styles.bottomSeparator]: !noBottomSeparator,
      })}
    >
      <div className={styles.titleRow}>
        {breadcrumb && renderBreadcrumb(breadcrumb, textDirection)}
        <div className={styles.titleAndAdjacent}>
          <Heading variant="heading-1" color="white">
            {title}
          </Heading>
          {renderTag(surveyStatus)}
        </div>
        {primaryActions && (
          <>
            <Toolbar items={primaryActions}></Toolbar>
          </>
        )}
      </div>
      <div className={styles.bottomRow}></div>

      {children}
    </div>
  </div>
)

export default TitleBlockZen
