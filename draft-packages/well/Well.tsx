import classnames from "classnames"
import * as React from "react"

import styles from "./styles.scss"

export type VariantType =
  | "positive"
  | "negative"
  | "informative"
  | "cautionary"
  | "default"

export type BorderStyleType = "solid" | "dashed" | "none"

export type WellProps = {
  id?: string
  automationId?: string
  variant?: VariantType
  borderStyle?: BorderStyleType
  noMargin?: boolean
  straightCorners?: boolean
  classNameAndIHaveSpokenToDST?: string
}

type Well = React.FunctionComponent<WellProps>

const Well: Well = ({
  id,
  automationId,
  children,
  variant = "default",
  borderStyle = "solid",
  noMargin = false,
  straightCorners = false,
  classNameAndIHaveSpokenToDST,
}) => (
  <div
    id={id}
    data-automation-id={automationId}
    className={classnames(
      styles.container,
      styles[borderStyle],
      styles[variant],
      noMargin && styles.noMargin,
      straightCorners && styles.straightCorners,
      classNameAndIHaveSpokenToDST
    )}
  >
    {children}
  </div>
)

export default Well
