import classnames from "classnames"
import * as React from "react"

import { Label } from "@cultureamp/kaizen-component-library/draft"
import { hot } from "react-hot-loader"

const styles = require("./styles.scss")

export type RadioGroupProps = {
  automationId?: string
  labelText: string | React.ReactNode
  noBottomMargin?: boolean
}

type RadioGroup = React.FunctionComponent<RadioGroupProps>

const RadioGroup: RadioGroup = ({
  automationId = "",
  children,
  labelText = "",
  noBottomMargin = false,
}) => (
  <div
    data-automation-id={automationId}
    className={classnames(styles.radioGroupContainer, {
      [styles.noBottomMargin]: noBottomMargin,
    })}
  >
    <div className={styles.radioGroupLabel}>
      <Label
        automationId={`${automationId}-field-label`}
        labelText={labelText}
        labelType="text"
      />
    </div>
    {children}
  </div>
)

export default hot(module)(RadioGroup)
