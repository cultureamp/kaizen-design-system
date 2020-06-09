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
  sectionTitle?: string
  sectionTitleDescription?: string
  handleHamburgerClick?: (event: React.MouseEvent) => void
  primaryActions?: PrimaryActions
  secondaryActions?: SecondaryActions
  navigationTabs?: NavigationTabs
  textDirection?: TextDirection
  surveyStatus?: SurveyStatus
}

type PrimaryActions = Array<React.ReactElement<ButtonProps>>

type SecondaryActions = Array<
  React.ReactElement<ButtonProps> | React.ReactElement<DropdownProps>
>

type NavigationTabs = Array<React.ReactElement<NavigationTabProps>>

type TextDirection = "ltr" | "rtl"

type SurveyStatus = {
  text: string
  status: "draft" | "live"
}

type Breadcrumb = {
  path: string
  text: string
  handleClick?: (event: React.MouseEvent) => void
}

const renderTag = (surveyStatus: SurveyStatus) => {
  let variant
  if (surveyStatus.status === "draft") {
    variant = "statusDraft"
  }
  if (surveyStatus.status === "live") {
    variant = "statusLive"
  }

  return (
    <div className={styles.tag}>
      <Tag variant={variant} size="small">
        {surveyStatus.text}
      </Tag>
    </div>
  )
}

const renderAvatar = (image: JSX.Element) => (
  <div className={styles.avatar}>{image}</div>
)

const renderSubtitle = (subtitle: string) => (
  <div className={styles.subtitle}>{subtitle}</div>
)

const renderSectionTitle = (
  sectionTitle: string,
  sectionTitleDescription?: string
) => (
  <div className={styles.sectionTitleContainer}>
    <div className={styles.sectionTitleInner}>
      <div className={styles.sectionTitle}>
        <Heading
          variant="heading-2"
          classNameAndIHaveSpokenToDST={styles.sectionTitleOverride}
        >
          {sectionTitle}
        </Heading>
      </div>
      <div className={styles.sectionTitleDescription}>
        {sectionTitleDescription}
      </div>
    </div>
  </div>
)

const renderBreadcrumb = (
  breadcrumb: Breadcrumb,
  textDirection?: TextDirection
) => {
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

const renderNavigationTabs = (navigationTabs: NavigationTabs) => {
  return <div className={styles.navigationTabsContainer}>{navigationTabs}</div>
}

const renderSecondaryActions = (secondaryActions: SecondaryActions) => {
  return (
    <div className={styles.secondaryActionsContainer}>
      <Toolbar items={secondaryActions} noGap />
    </div>
  )
}

const renderPrimaryActions = (primaryActions: PrimaryActions) => {
  return (
    <div className={styles.primaryActionsContainer}>
      <Toolbar items={primaryActions} />
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
  sectionTitle,
  sectionTitleDescription,
  handleHamburgerClick,
  primaryActions,
  secondaryActions,
  navigationTabs,
  textDirection,
  surveyStatus,
}: Props) => (
  <div
    className={classNames(styles.titleBlock, {
      [styles.hasSubtitle]: Boolean(subtitle),
      [styles.educationVariant]: variant === "education",
      [styles.adminVariant]: variant === "admin",
    })}
  >
    <div className={styles.titleRow}>
      <div className={styles.titleRowInner}>
        <div className={styles.titleRowInnerContent}>
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
                      color={
                        variant === "education" || variant === "admin"
                          ? "dark"
                          : "white"
                      }
                      classNameAndIHaveSpokenToDST={styles.titleTextOverride}
                    >
                      {title}
                    </Heading>
                  </div>
                  {subtitle && renderSubtitle(subtitle)}
                </div>
              </div>
              {surveyStatus && renderTag(surveyStatus)}
            </div>
          </div>
          {primaryActions && renderPrimaryActions(primaryActions)}
        </div>
      </div>
    </div>
    <div className={styles.rowBelowSeparator}>
      <div className={styles.rowBelowSeparatorInner}>
        <div className={styles.rowBelowSeparatorInnerContent}>
          {sectionTitle &&
            renderSectionTitle(sectionTitle, sectionTitleDescription)}
          {navigationTabs && renderNavigationTabs(navigationTabs)}
          {secondaryActions && renderSecondaryActions(secondaryActions)}
        </div>
      </div>
    </div>
  </div>
)

export default TitleBlockZen
export { NavigationTab }
