import classnames from "classnames"
import * as React from "react"
import { Collapsible } from "./"

const styles = require("./styles.scss")

type Props =
  | {
      loading: true
      collapsibles: number
      separated?: boolean
    }
  | {
      loading?: false
      separated?: boolean
      sticky?: Sticky
      noSectionPadding?: boolean
      automationId?: string
      lazyLoad?: boolean
      onToggle?: (open: boolean, id: string) => void
      children: React.ReactElement<any>[]
    }

export type Sticky = {
  top: string
}

const CollapsibleGroup: React.FunctionComponent<Props> = props => {
  if (props.loading) {
    const { collapsibles, separated } = props
    return (
      <div className={classnames({ [styles.container]: !separated })}>
        {Array.from(Array(collapsibles), (notUsed, index) => (
          <Collapsible
            key={index}
            loading={true}
            group={true}
            separated={separated}
          />
        ))}
      </div>
    )
  }

  const {
    children,
    separated,
    sticky,
    noSectionPadding,
    automationId,
    lazyLoad,
    onToggle,
  } = props

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
