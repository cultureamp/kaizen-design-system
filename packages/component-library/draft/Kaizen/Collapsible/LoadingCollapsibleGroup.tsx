import { LoadingCollapsible } from "@cultureamp/kaizen-component-library/draft"
import classnames from "classnames"
import React from "react"
const styles = require("./styles.scss")

type Props = {
  collapsibles: number
  separated?: boolean
}

const LoadingCollapsibleGroup = (props: Props) => {
  const { collapsibles, separated } = props
  return (
    <div className={classnames({ [styles.container]: !separated })}>
      {Array.from(Array(collapsibles), (notUsed, index) => (
        <LoadingCollapsible key={index} group={true} separated={separated} />
      ))}
    </div>
  )
}

export default LoadingCollapsibleGroup
