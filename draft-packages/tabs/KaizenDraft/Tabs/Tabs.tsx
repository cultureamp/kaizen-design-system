import classnames from "classnames"
import * as React from "react"

const styles = require("./styles.scss")

interface Tab {
  readonly label: string
  readonly active?: boolean
  readonly disabled?: boolean
  readonly onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => any
  readonly href?: string
}

interface Props {
  /**
   * Support for languages that read right to left. This will flip margins and paddings on the x-axis.
   * @default "false"
   */
  readonly textDirection?: "ltr" | "rtl"
  readonly tabs: Tab[]
  readonly orientation?: "row" | "column"
  readonly renderTab?: (renderProps: {
    readonly tab: Tab
    readonly tabClassName: string
    readonly activeTabClassName: string
    readonly disabledTabClassName: string
  }) => React.ReactNode
}

const Tabs = ({
  orientation = "row",
  textDirection = "ltr",
  tabs,
  renderTab,
}: Props) => {
  if (orientation === "row") {
    return (
      <RowTab textDirection={textDirection} tabs={tabs} renderTab={renderTab} />
    )
  }

  return (
    <ColumnTab
      textDirection={textDirection}
      tabs={tabs}
      renderTab={renderTab}
    />
  )
}

const RowTab = ({ tabs, renderTab, textDirection }) => (
  <div className={styles.container} dir={textDirection}>
    {tabs.map(t =>
      renderTab ? (
        renderTab({
          tab: t,
          tabClassName: styles.rowTab,
          activeTabClassName: styles.rowTabActive,
          disabledTabClassName: styles.rowTabDisabled,
        })
      ) : (
        <a
          key={t.label}
          onClick={t.onClick}
          href={!t.disabled ? t.href : null}
          className={classnames({
            [styles.rowTab]: !t.active && !t.disabled,
            [styles.rowTabActive]: t.active,
            [styles.rowTabDisabled]: t.disabled,
          })}
        >
          {t.label}
        </a>
      )
    )}
  </div>
)

const ColumnTab = ({ tabs, renderTab, textDirection }) => (
  <div dir={textDirection}>
    {tabs.map(t =>
      renderTab ? (
        renderTab({
          tab: t,
          tabClassName: styles.columnTab,
          activeTabClassName: styles.columnTabActive,
          disabledTabClassName: styles.columnTabDisabled,
        })
      ) : (
        <a
          key={t.label}
          onClick={t.onClick}
          href={!t.disabled ? t.href : null}
          className={classnames({
            [styles.columnTab]: !t.active && !t.disabled,
            [styles.columnTabActive]: t.active,
            [styles.columnTabDisabled]: t.disabled,
          })}
        >
          {t.label}
        </a>
      )
    )}
  </div>
)

export default Tabs
