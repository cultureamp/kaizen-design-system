import { LoadingPlaceholder } from "@cultureamp/kaizen-component-library/draft"
import classnames from "classnames"
import React from "react"
const styles = require("./styles.scss")

type Props = {
  group?: boolean
  separated?: boolean
  automationId?: string
}

const LoadingCollapsible = (props: Props) => {
  const { group, separated, automationId } = props

  return (
    <div
      className={classnames({
        [styles.container]: !group || separated,
        [styles.groupItem]: group && !separated,
        [styles.separated]: separated,
      })}
      data-automation-id={automationId && `${automationId}-loading`}
    >
      <div
        className={styles.buttonLoading}
        data-automation-id={automationId && `${automationId}-loading-button`}
      >
        <div
          className={styles.title}
          data-automation-id={
            automationId && `${automationId}-loading-button-title`
          }
        >
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
