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
  readonly tabs: Tab[]
  readonly orientation?: "row" | "column"
  readonly renderTab?: (renderProps: {
    readonly tab: Tab
    readonly tabClassName: string
    readonly activeTabClassName: string
    readonly disabledTabClassName: string
  }) => React.ReactNode
}

const Tabs = ({ orientation = "row", tabs, renderTab }: Props) => {
  if (orientation === "row") {
    return <RowTab tabs={tabs} renderTab={renderTab} />
  }

  return <ColumnTab tabs={tabs} renderTab={renderTab} />
}

const RowTab = ({ tabs, renderTab }) => (
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
          href={t.href}
          className={classnames({
            [styles.row]: !t.active && !t.disabled,
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

const ColumnTab = ({ tabs, renderTab }) => (
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
          href={t.href}
          className={classnames({
            [styles.column]: !t.active && !t.disabled,
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
