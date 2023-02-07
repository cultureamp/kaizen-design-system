import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import styles from "./Body.scss"

export interface BodyProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children: React.ReactNode
  hasFormControls?: boolean
}

export const Body: React.FC<BodyProps> = ({
  children,
  hasFormControls = false,
  classNameOverride,
}): JSX.Element => (
  <div
    className={classnames(
      styles.body,
      hasFormControls && styles.formBody,
      classNameOverride
    )}
  >
    {children}
  </div>
)

Body.displayName = "Body"
