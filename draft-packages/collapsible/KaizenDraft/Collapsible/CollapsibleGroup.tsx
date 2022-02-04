import React from "react"
import classnames from "classnames"
import { CollapsibleProps } from "./Collapsible"
import styles from "./styles.scss"

export type Sticky = {
  top: string
}

type CollapsibleGroupProps = {
  children: Array<React.ReactElement<CollapsibleProps>>
  separated?: boolean
  sticky?: Sticky
  noSectionPadding?: boolean
  automationId?: string
  lazyLoad?: boolean
  onToggle?: (open: boolean, id: string) => void
}

export const CollapsibleGroup: React.VFC<CollapsibleGroupProps> = ({
  children,
  separated,
  sticky,
  noSectionPadding,
  automationId,
  lazyLoad,
  onToggle,
}) => (
  <div
    className={classnames({
      [styles.container]: !separated,
    })}
    data-automation-id={automationId}
  >
    {React.Children.map(children, collapsible =>
      React.cloneElement(collapsible, {
        group: true,
        separated,
        sticky,
        noSectionPadding,
        lazyLoad,
        onToggle,
      })
    )}
  </div>
)
