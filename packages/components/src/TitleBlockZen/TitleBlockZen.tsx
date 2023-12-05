import React from "react"
import classnames from "classnames"
import { Avatar } from "~components/Avatar"
import { IconButton } from "~components/Button"
import { Heading } from "~components/Heading"
import { ArrowLeftIcon, ArrowRightIcon, HamburgerIcon } from "~components/Icon"
import { Select } from "~components/Select"
import { Tag } from "~components/Tag"
import { useMediaQueries } from "~utils/useMediaQueries"
import { MainActions } from "./subcomponents/MainActions"
import { MobileActions } from "./subcomponents/MobileActions"
import { SecondaryActions } from "./subcomponents/SecondaryActions"
import {
  TitleBlockBreadcrumbProps,
  NavigationTabs,
  SurveyStatus,
  TitleBlockAvatarProps,
  TitleBlockProps,
  TitleBlockVariant,
} from "./types"
import { createTabletOverflowMenuItems, isReversed } from "./utils"
import styles from "./TitleBlockZen.module.scss"

const renderTag = (surveyStatus: SurveyStatus): JSX.Element | void => {
  let tagVariant: React.ComponentPropsWithoutRef<typeof Tag>["variant"]

  if (tagVariant === "profile") {
    return
  }

  if (surveyStatus.status === "draft") {
    tagVariant = "statusDraft"
  }

  /*
    scheduled is actually a draft survey status that has a launch job scheduled
    still, we want to differentiate on the UI and render a specific tag
    the styles must be identical to the draft style

    we have similar behaviour on programs index page's table
  */
  if (surveyStatus.status === "scheduled") {
    tagVariant = "statusClosed"
  }

  if (surveyStatus.status === "live") {
    tagVariant = "statusLive"
  }

  if (surveyStatus.status === "closed") {
    tagVariant = "statusClosed"
  }

  if (surveyStatus.status === "sentimentPositive") {
    tagVariant = "sentimentPositive"
  }

  if (surveyStatus.status === "default") {
    tagVariant = "default"
  }

  return (
    <div
      data-automation-id="survey-status-tag"
      data-testid="survey-status-tag"
      className={styles.tag}
    >
      <Tag variant={tagVariant} size="small">
        {surveyStatus.text}
      </Tag>
    </div>
  )
}

const isJSXElement = (
  imageElementOrAvatarProps: JSX.Element | TitleBlockAvatarProps
): imageElementOrAvatarProps is JSX.Element =>
  "props" in imageElementOrAvatarProps

const renderAvatar = (
  imageElementOrAvatarProps: JSX.Element | TitleBlockAvatarProps,
  avatarAutomationId: string
): JSX.Element =>
  isJSXElement(imageElementOrAvatarProps) ? (
    <div
      data-automation-id={avatarAutomationId}
      data-testid={avatarAutomationId}
      className={classnames(styles.avatar, styles.withBorder)}
    >
      {imageElementOrAvatarProps}
    </div>
  ) : (
    <div
      data-automation-id={avatarAutomationId}
      data-testid={avatarAutomationId}
      className={styles.avatar}
    >
      <Avatar {...imageElementOrAvatarProps} size="medium" />
    </div>
  )

const renderSubtitle = (
  subtitle: React.ReactNode,
  subtitleAutomationId: string
): JSX.Element => (
  <div className={styles.subtitle}>
    <span
      data-automation-id={subtitleAutomationId}
      data-testid={subtitleAutomationId}
      className={styles.subtitleText}
    >
      {subtitle}
    </span>
  </div>
)

const defaultRenderSectionTitle = (
  sectionTitle?: string,
  sectionTitleDescription?: string,
  variant?: TitleBlockVariant,
  sectionTitleAutomationId?: string,
  sectionTitleDescriptionAutomationId?: string
): JSX.Element => (
  <>
    {sectionTitle && (
      <div className={styles.sectionTitle}>
        <Heading
          variant="heading-2"
          color={isReversed(variant) ? "white" : "dark"}
          classNameOverride={styles.sectionTitleOverride}
          data-automation-id={sectionTitleAutomationId}
          data-testid={sectionTitleAutomationId}
        >
          {sectionTitle}
        </Heading>
      </div>
    )}
    {sectionTitleDescription && (
      <div
        data-automation-id={sectionTitleDescriptionAutomationId}
        data-testid={sectionTitleDescriptionAutomationId}
        className={classnames(
          styles.sectionTitleDescription,
          !isReversed(variant) && styles.dark
        )}
      >
        {sectionTitleDescription}
      </div>
    )}
  </>
)

const Breadcrumb = ({
  breadcrumb,
  automationId,
  textAutomationId,
  textDirection,
}: TitleBlockBreadcrumbProps): JSX.Element => {
  const { path, handleClick, text, render } = breadcrumb
  const icon =
    textDirection === "rtl" ? (
      <ArrowRightIcon role="presentation" />
    ) : (
      <ArrowLeftIcon role="presentation" />
    )
  const InnerContents = (): JSX.Element => (
    <>
      <div className={styles.circle}>{icon}</div>
      <span
        className={styles.breadcrumbTextLink}
        data-automation-id={textAutomationId}
        data-testid={textAutomationId}
      >
        <span className={styles.breadcrumbText}>{text}</span>
      </span>
    </>
  )

  if (render) {
    const CustomRender = render
    return (
      <CustomRender
        breadcrumb={breadcrumb}
        className={styles.breadcrumb}
        automationId={automationId}
        textAutomationId={textAutomationId}
        textDirection={textDirection}
      >
        <InnerContents />
      </CustomRender>
    )
  }

  const TagName = path ? "a" : "button"

  return (
    <TagName
      {...(path && { href: path })}
      className={styles.breadcrumb}
      data-automation-id={automationId}
      data-testid={automationId}
      onClick={handleClick}
    >
      <InnerContents />
    </TagName>
  )
}

// We want to accept undefined here because the NavigationTabs container is
// important for the flex-based layout (it pushes Secondary Actions over to the right)
const renderNavigationTabs = (
  navigationTabs: NavigationTabs | undefined,
  collapse: boolean,
  ariaLabel: string
): JSX.Element => (
  <div className={styles.navigationTabScrollerContainer}>
    <div
      className={classnames(
        styles.navigationTabsContainer,
        collapse && styles.navigationTabsContainerCollapsed
      )}
    >
      {!collapse && navigationTabs !== undefined && (
        <>
          <span className={styles.navigationTabEdgeShadowLeft} />
          <nav className={styles.navigationTabsNav} aria-label={ariaLabel}>
            <ul className={styles.navigationTabsList}>
              {navigationTabs.map((navigationTab, index) => (
                <li key={index}>{navigationTab}</li>
              ))}
            </ul>
          </nav>
          <span className={styles.navigationTabEdgeShadowRight} />
        </>
      )}
    </div>
  </div>
)

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3075605782/Title+Block Guidance} |
 * {@link https://cultureamp.design/?path=/story/components-titleblock--docs Storybook}
 */
export const TitleBlockZen = ({
  title,
  variant,
  breadcrumb,
  avatar,
  subtitle,
  sectionTitle,
  sectionTitleDescription,
  renderSectionTitle,
  pageSwitcherSelect,
  handleHamburgerClick,
  primaryAction,
  defaultAction,
  secondaryActions,
  secondaryOverflowMenuItems,
  navigationTabs,
  collapseNavigationAreaWhenPossible = false,
  textDirection,
  surveyStatus,
  titleAutomationId = "TitleBlock__Title",
  avatarAutomationId = "TitleBlock__Avatar",
  subtitleAutomationId = "TitleBlock__Subtitle",
  sectionTitleAutomationId = "TitleBlock__SectionTitle",
  sectionTitleDescriptionAutomationId = "TitleBlock__SectionTitleDescription",
  breadcrumbAutomationId = "TitleBlock__Breadcrumb",
  breadcrumbTextAutomationId = "TitleBlock__BreadcrumbText",
}: TitleBlockProps): JSX.Element => {
  const hasNavigationTabs = navigationTabs && navigationTabs.length > 0
  const collapseNavigationArea =
    collapseNavigationAreaWhenPossible &&
    !hasNavigationTabs &&
    secondaryActions === undefined

  const {
    queries: { isSmall, isMedium },
  } = useMediaQueries()
  const isSmallOrMediumViewport = isMedium || isSmall
  return (
    <>
      <div
        className={classnames(
          styles.titleBlock,
          styles[`${variant}Variant`],
          Boolean(subtitle) && styles.hasSubtitle,
          Boolean(pageSwitcherSelect) && styles.hasPageSwitcherSelect,
          collapseNavigationArea &&
            !(sectionTitle || sectionTitleDescription || renderSectionTitle) &&
            styles.collapseNavigationArea,
          title && title.length >= 30 && styles.hasLongTitle,
          subtitle &&
            typeof subtitle === "string" &&
            subtitle.length >= 18 &&
            styles.hasLongSubtitle,
          hasNavigationTabs && styles.hasNavigationTabs
        )}
      >
        <div className={styles.titleRow}>
          <div className={styles.titleRowInner}>
            <div className={styles.titleRowInnerContent}>
              <div className={styles.titleAndAdjacent}>
                {breadcrumb && (
                  <Breadcrumb
                    breadcrumb={breadcrumb}
                    automationId={breadcrumbAutomationId}
                    textAutomationId={breadcrumbTextAutomationId}
                    textDirection={textDirection}
                  />
                )}
                <div className={styles.titleAndAdjacentNotBreadcrumb}>
                  <>
                    {handleHamburgerClick && (
                      <div className={styles.hamburger}>
                        <IconButton
                          onClick={handleHamburgerClick}
                          icon={<HamburgerIcon role="presentation" />}
                          label="Open menu"
                          reversed={isReversed(variant)}
                        />
                      </div>
                    )}
                    {avatar && renderAvatar(avatar, avatarAutomationId)}
                    <div className={styles.titleAndSubtitle}>
                      <div className={styles.titleAndSubtitleInner}>
                        <div className={styles.title}>
                          <Heading
                            variant="heading-1"
                            color={isReversed(variant) ? "white" : "dark"}
                            classNameOverride={styles.titleTextOverride}
                            data-automation-id={titleAutomationId}
                            data-testid={titleAutomationId}
                          >
                            {title}
                          </Heading>
                        </div>
                        {isSmallOrMediumViewport && pageSwitcherSelect && (
                          <div
                            className={styles.pageSwitcherSelectUnderneathTitle}
                          >
                            <Select
                              {...pageSwitcherSelect}
                              variant="secondary-small"
                              reversed
                            />
                          </div>
                        )}
                        {subtitle &&
                          renderSubtitle(subtitle, subtitleAutomationId)}
                      </div>
                    </div>
                    {surveyStatus && renderTag(surveyStatus)}
                    {!isSmallOrMediumViewport && pageSwitcherSelect && (
                      <div className={styles.pageSwitcherSelectNextToTitle}>
                        <Select
                          {...pageSwitcherSelect}
                          variant="secondary"
                          reversed
                          fullWidth
                        />
                      </div>
                    )}
                  </>
                </div>
              </div>
              {(primaryAction ||
                defaultAction ||
                secondaryActions ||
                secondaryOverflowMenuItems) && (
                <MainActions
                  primaryAction={primaryAction}
                  defaultAction={defaultAction}
                  reversed={isReversed(variant)}
                  overflowMenuItems={createTabletOverflowMenuItems(
                    secondaryActions,
                    secondaryOverflowMenuItems
                  )}
                  showOverflowMenu={isSmallOrMediumViewport}
                />
              )}
            </div>
          </div>
        </div>
        <div className={styles.rowBelowSeparator}>
          <div className={styles.rowBelowSeparatorInner}>
            <div className={styles.rowBelowSeparatorInnerContent}>
              {(sectionTitle ||
                sectionTitleDescription ||
                renderSectionTitle) && (
                <div className={styles.sectionTitleContainer}>
                  <div className={styles.sectionTitleInner}>
                    {!!renderSectionTitle
                      ? renderSectionTitle({
                          sectionTitle,
                          sectionTitleAutomationId,
                          sectionTitleDescription,
                          sectionTitleDescriptionAutomationId,
                        })
                      : defaultRenderSectionTitle(
                          sectionTitle,
                          sectionTitleDescription,
                          variant,
                          sectionTitleAutomationId,
                          sectionTitleDescriptionAutomationId
                        )}
                  </div>
                </div>
              )}
              {renderNavigationTabs(
                navigationTabs,
                collapseNavigationArea,
                title
              )}
              {(secondaryActions || secondaryOverflowMenuItems) && (
                <SecondaryActions
                  secondaryActions={secondaryActions}
                  secondaryOverflowMenuItems={secondaryOverflowMenuItems}
                  reversed={isReversed(variant)}
                />
              )}
            </div>
          </div>
        </div>
        <MobileActions
          primaryAction={primaryAction}
          defaultAction={defaultAction}
          secondaryActions={secondaryActions}
          secondaryOverflowMenuItems={secondaryOverflowMenuItems}
          drawerHandleLabelIconPosition={
            primaryAction && "iconPosition" in primaryAction
              ? primaryAction.iconPosition
              : undefined
          }
        />
      </div>
    </>
  )
}

TitleBlockZen.displayName = "TitleBlockZen"
