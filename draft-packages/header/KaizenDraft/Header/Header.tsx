import { Heading, Icon } from "@kaizen/component-library"
import { Tag } from "@kaizen/draft-tag"
import classNames from "classnames"
import * as React from "react"
import { NoBottomSeparator } from "../../../stories/Header.stories"
const styles = require("./Header.scss")
const backIcon = require("@kaizen/component-library/icons/arrow-backward.icon.svg")
  .default
const forwardIcon = require("@kaizen/component-library/icons/arrow-forward.icon.svg")
  .default

type Props = {
  children?: React.ReactNode
  title: string
  variant?: "admin" | "education" // the default is wisteria bg (AKA "reporting")
  breadcrumb?: Breadcrumb
  toolbarItems?: React.ReactNode[]
  textDirection?: "ltr" | "rtl"
  surveyStatus?: SurveyStatus
  sticky?: boolean
  noBottomSeparator?: boolean
}

type SurveyStatus = {
  text: string
  status: "draft" | "live"
}

type Breadcrumb = {
  path: string
  text: string
}

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
    >
      <div className={styles.circle}>
        <Icon icon={icon} role="presentation" />
      </div>
      <span className={styles.breadcrumbText}>{breadcrumb.text}</span>
    </a>
  )
}

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

const Header = ({
  children,
  title,
  variant,
  breadcrumb,
  toolbarItems,
  textDirection,
  surveyStatus,
  sticky,
  noBottomSeparator = false,
}: Props) => (
  <div className={styles.header}>
    <div
      className={classNames(styles.headerInner, {
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
        {toolbarItems && (
          <>
            <Toolbar items={toolbarItems}></Toolbar>
          </>
        )}
      </div>
      <div className={styles.bottomRow}></div>

      {children}
    </div>
  </div>
)

export default Header
