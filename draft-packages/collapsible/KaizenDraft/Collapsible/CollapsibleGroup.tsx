import classnames from "classnames"
import * as React from "react"

import styles from "./styles.scss"

type Props = {
  separated?: boolean
  sticky?: Sticky
  noSectionPadding?: boolean
  automationId?: string
  lazyLoad?: boolean
  onToggle?: (open: boolean, id: string) => void
  children: Array<React.ReactElement<any>>
}

export type Sticky = {
  top: string
}

export const CollapsibleGroup: React.FunctionComponent<Props> = ({
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
      [styles.stickyContainer]: !separated && sticky,
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

export default CollapsibleGroup
