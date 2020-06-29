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
  readonly rtl?: boolean
  readonly tabs: Tab[]
  readonly orientation?: "row" | "column"
  readonly renderTab?: (renderProps: {
    readonly tab: Tab
    readonly tabClassName: string
    readonly activeTabClassName: string
    readonly disabledTabClassName: string
  }) => React.ReactNode
}

const Tabs = ({ orientation = "row", rtl = false, tabs, renderTab }: Props) => {
  if (orientation === "row") {
    return <RowTab rtl={rtl} tabs={tabs} renderTab={renderTab} />
  }

  return <ColumnTab rtl={rtl} tabs={tabs} renderTab={renderTab} />
}

const RowTab = ({ tabs, renderTab, rtl }) => (
  <div className={styles.container}>
    {tabs.map(t =>
      renderTab ? (
        renderTab({
          tab: t,
          tabClassName: styles.row,
          activeTabClassName: styles.activeTabRow,
          disabledTabClassName: styles.disabledTabRow,
        })
      ) : (
        <a
          key={t.label}
          onClick={t.onClick}
          href={!t.disabled ? t.href : null}
          className={classnames({
            [styles.row]: !t.active && !t.disabled,
            [styles.rtl]: rtl,
            [styles.activeTabRow]: t.active,
            [styles.disabledTabRow]: t.disabled,
          })}
        >
          {t.label}
        </a>
      )
    )}
  </div>
)

const ColumnTab = ({ tabs, renderTab, rtl }) => (
  <div>
    {tabs.map(t =>
      renderTab ? (
        renderTab({
          tab: t,
          tabClassName: styles.column,
          activeTabClassName: styles.activeTabColumn,
          disabledTabClassName: styles.disabledTabColumn,
        })
      ) : (
        <a
          key={t.label}
          onClick={t.onClick}
          href={!t.disabled ? t.href : null}
          className={classnames({
            [styles.column]: !t.active && !t.disabled,
            [styles.rtl]: rtl,
            [styles.activeTabColumn]: t.active,
            [styles.disabledTabColumn]: t.disabled,
          })}
        >
          {t.label}
        </a>
      )
    )}
  </div>
)

export default Tabs
