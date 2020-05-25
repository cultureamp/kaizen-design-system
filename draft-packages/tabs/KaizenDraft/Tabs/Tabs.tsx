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
  readonly renderTab?: (renderProps: {
    readonly tab: Tab
    readonly tabClassName: string
    readonly activeTabClassName: string
    readonly disabledTabClassName: string
  }) => React.ReactNode
}

const Tabs = (props: Props) => {
  const { tabs, renderTab } = props

  return (
    <div className={styles.container}>
      {tabs.map(t => {
        return renderTab ? (
          renderTab({
            tab: t,
            tabClassName: styles.tab,
            activeTabClassName: styles.activeTab,
            disabledTabClassName: styles.disabledTab,
          })
        ) : (
          <a
            key={t.label}
            onClick={t.onClick}
            href={t.href}
            className={classnames({
              [styles.tab]: !t.active && !t.disabled,
              [styles.activeTab]: t.active,
              [styles.disabledTab]: t.disabled,
            })}
          >
            {t.label}
          </a>
        )
      })}
    </div>
  )
}

export default Tabs
