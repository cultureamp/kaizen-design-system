import { LoadingPlaceholder } from "@cultureamp/kaizen-component-library/draft"
import classnames from "classnames"
import React from "react"
const styles = require("./styles.scss")

type Props = {
  group?: boolean
  separated?: boolean
}

const LoadingCollapsible = (props: Props) => {
  const { group, separated } = props

  return (
    <div
      className={classnames({
        [styles.container]: !group || separated,
        [styles.groupItem]: group && !separated,
        [styles.separated]: separated,
      })}
    >
      <div className={styles.buttonLoading}>
        <div className={styles.title}>
          <LoadingPlaceholder width={50} noBottomMargin inheritBaseline />
        </div>
        <div className={styles.chevronLoading}>
          <LoadingPlaceholder noBottomMargin inheritBaseline />
        </div>
      </div>
    </div>
  )
}

export default LoadingCollapsible
