import classnames from "classnames"
import * as React from "react"

const styles = require("./styles.scss")

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
}) => {
  return (
    <div
      className={classnames({ [styles.container]: !separated })}
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
}

export default CollapsibleGroup
