import {
  ButtonProps,
  DropdownProps,
  Heading,
  Icon,
} from "@kaizen/component-library"
import { Tag } from "@kaizen/draft-tag"
import classNames from "classnames"
import * as React from "react"
import NavigationTab, { NavigationTabProps } from "./NavigationTabs"
import Toolbar from "./Toolbar"
const styles = require("./TitleBlockZen.scss")
const leftArrow = require("@kaizen/component-library/icons/arrow-backward.icon.svg")
  .default
const rightArrow = require("@kaizen/component-library/icons/arrow-forward.icon.svg")
  .default
const hamburgerIcon = require("@kaizen/component-library/icons/hamburger.icon.svg")
  .default

type Props = {
  children?: React.ReactNode
  title: string
  variant?: "admin" | "education" // the default is wisteria bg (AKA "reporting")
  breadcrumb?: Breadcrumb
  avatar?: JSX.Element
  subtitle?: string
  handleHamburgerClick?: (event: React.MouseEvent) => void
  primaryActions?: Array<React.ReactElement<ButtonProps>>
  secondaryActions?: Array<
    React.ReactElement<ButtonProps> | React.ReactElement<DropdownProps>
  >
  navigationTabs?: Array<React.ReactElement<NavigationTabProps>>
  textDirection?: "ltr" | "rtl"
  surveyStatus?: SurveyStatus
  noBottomSeparator?: boolean
}

type SurveyStatus = {
  text: string
  status: "draft" | "live"
}

type Breadcrumb = {
  path: string
  text: string
  handleClick?: (event: React.MouseEvent) => void
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

const renderAvatar = image => <div className={styles.avatar}>{image}</div>

const renderSubtitle = subtitle => (
  <div className={styles.subtitle}>{subtitle}</div>
)

const renderBreadcrumb = (breadcrumb, textDirection) => {
  if (breadcrumb == undefined) return

  const icon = textDirection === "rtl" ? rightArrow : leftArrow

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

const renderNavigationTabs = navigationTabs => {
  return <div className={styles.navigationTabsContainer}>{navigationTabs}</div>
}

const renderSecondaryActions = secondaryActions => {
  return (
    <div className={styles.secondaryActionsContainer}>
      <Toolbar items={secondaryActions}></Toolbar>
    </div>
  )
}

const renderPrimaryActions = primaryActions => {
  return (
    <div className={styles.primaryActionsContainer}>
      <Toolbar items={primaryActions}></Toolbar>
    </div>
  )
}

const TitleBlockZen = ({
  children,
  title,
  variant,
  breadcrumb,
  avatar,
  subtitle,
  handleHamburgerClick,
  primaryActions,
  secondaryActions,
  navigationTabs,
  textDirection,
  surveyStatus,
  noBottomSeparator = false,
}: Props) => (
  <div
    className={classNames(styles.titleBlock, {
      [styles.hasSubtitle]: Boolean(subtitle),
    })}
  >
    <div className={styles.titleBlockInner}>
      <div
        className={classNames(styles.titleRow, {
          [styles.bottomSeparator]: !noBottomSeparator,
        })}
      >
        <div className={styles.titleAndAdjacent}>
          {breadcrumb && renderBreadcrumb(breadcrumb, textDirection)}
          <div className={styles.titleAndAdjacentNotBreadcrumb}>
            <div className={styles.hamburger} onClick={handleHamburgerClick}>
              <Icon icon={hamburgerIcon} role="img" title="Open menu" />
            </div>
            {avatar && renderAvatar(avatar)}
            <div className={styles.titleAndSubtitle}>
              <div className={styles.titleAndSubtitleInner}>
                <div className={styles.title}>
                  <Heading
                    variant="heading-1"
                    color="white"
                    classNameAndIHaveSpokenToDST={styles.titleTextOverride}
                  >
                    {title}
                  </Heading>
                </div>
                {subtitle && renderSubtitle(subtitle)}
              </div>
            </div>
            {renderTag(surveyStatus)}
          </div>
        </div>
        {primaryActions && renderPrimaryActions(primaryActions)}
      </div>
      <div className={styles.belowSeparatorRow}>
        {navigationTabs && renderNavigationTabs(navigationTabs)}
        {secondaryActions && renderSecondaryActions(secondaryActions)}
      </div>
    </div>
  </div>
)

export default TitleBlockZen
export { NavigationTab }
