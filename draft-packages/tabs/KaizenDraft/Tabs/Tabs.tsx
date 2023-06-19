import React from "react"
import classnames from "classnames"
import styles from "./Tabs.module.scss"

interface Tab {
  readonly label: string
  readonly active?: boolean
  readonly disabled?: boolean
  readonly onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => any
  readonly href?: string
  readonly automationId?: string
}

export interface TabsProps {
  /**
   * Support for languages that read right to left. This will flip margins and paddings on the x-axis.
   * @default "false"
   */
  readonly textDirection?: "ltr" | "rtl"
  readonly tabs: Tab[]
  readonly orientation?: "horizontal" | "vertical"
  readonly renderTab?: (renderProps: {
    readonly tab: Tab
    readonly tabClassName: string
    readonly activeTabClassName: string
    readonly disabledTabClassName: string
  }) => React.ReactNode
}

/**
 * @deprecated
 * If you were using this for page navigation, that design pattern is something we want to move away from. Reach out to the Kaizen team if you want to discuss further.
 * Otherwise use @kaizen/tabs for the tabs pattern as defined by W3C WAI ARIA (switchable content areas rather than page navigation). See https://w3c.github.io/aria-practices/#tabpanel
 */
const Tabs = ({
  orientation = "horizontal",
  textDirection = "ltr",
  tabs,
  renderTab,
}: TabsProps): JSX.Element => {
  if (orientation === "horizontal") {
    return (
      <RowTab textDirection={textDirection} tabs={tabs} renderTab={renderTab} />
    )
  }

  return (
    <VerticalTab
      textDirection={textDirection}
      tabs={tabs}
      renderTab={renderTab}
    />
  )
}

const RowTab = ({
  tabs,
  renderTab,
  textDirection,
}: Omit<TabsProps, "orientation">): JSX.Element => (
  <div className={styles.container} dir={textDirection}>
    {tabs.map(t =>
      renderTab ? (
        renderTab({
          tab: t,
          tabClassName: styles.horizontalTab,
          activeTabClassName: styles.horizontalTabActive,
          disabledTabClassName: styles.horizontalTabDisabled,
        })
      ) : (
        // Disabling instead of addressing because this component is deprecated
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a
          data-automation-id={t.automationId}
          key={t.label}
          onClick={t.onClick}
          href={!t.disabled ? t.href : undefined}
          className={classnames(
            !t.active && !t.disabled && styles.horizontalTab,
            t.active && styles.horizontalTabActive,
            t.disabled && styles.horizontalTabDisabled
          )}
          aria-current={t.active ? "page" : undefined}
        >
          {t.label}
        </a>
      )
    )}
  </div>
)

const VerticalTab = ({
  tabs,
  renderTab,
  textDirection,
}: Omit<TabsProps, "orientation">): JSX.Element => (
  <div dir={textDirection}>
    {tabs.map(t =>
      renderTab ? (
        renderTab({
          tab: t,
          tabClassName: styles.verticalTab,
          activeTabClassName: styles.verticalTabActive,
          disabledTabClassName: styles.verticalTabDisabled,
        })
      ) : (
        // Disabling instead of addressing because this component is deprecated
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a
          data-automation-id={t.automationId}
          key={t.label}
          onClick={t.onClick}
          href={!t.disabled ? t.href : undefined}
          className={classnames(
            !t.active && !t.disabled && styles.verticalTab,
            t.active && styles.verticalTabActive,
            t.disabled && styles.verticalTabDisabled
          )}
        >
          {t.label}
        </a>
      )
    )}
  </div>
)

export default Tabs
