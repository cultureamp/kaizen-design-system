import React, { useState, HTMLAttributes } from "react"
import classnames from "classnames"
import { v4 } from "uuid"
import { OverrideClassName } from "@kaizen/component-base"
import { Label } from "../Primitives"
import styles from "./CheckboxGroup.module.scss"

export interface CheckboxGroupProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children?: React.ReactNode
  labelText: string | React.ReactNode
  labelId?: string
  noBottomMargin?: boolean
  reversed?: boolean
  /**
   * **Deprecated:** Use test id compatible with your testing library (eg. `data-testid`).
   * @deprecated
   */
  automationId?: string
}

/**
 * {@link https://cultureamp.design/components/checkbox-group/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-form-checkbox-group--interactive-kaizen-site-demo Storybook}
 */
export const CheckboxGroup = ({
  children,
  labelText,
  labelId: propsLabelId,
  noBottomMargin = false,
  reversed = false,
  automationId,
  classNameOverride,
  ...restProps
}: CheckboxGroupProps): JSX.Element => {
  const [labelId] = useState<string>(propsLabelId || v4())
  return (
    <div
      data-automation-id={
        automationId && `${automationId}-field-checkbox-group`
      }
      className={classnames(styles.checkboxGroupContainer, classNameOverride, {
        [styles.noBottomMargin]: noBottomMargin,
        [styles.reversed]: reversed,
      })}
      role="group"
      aria-labelledby={labelId}
      {...restProps}
    >
      <div className={styles.checkboxGroupLabel}>
        <Label
          automationId={automationId && `${automationId}-field-label`}
          id={labelId}
          labelText={labelText}
          labelType="text"
          reversed={reversed}
        />
      </div>
      {children}
    </div>
  )
}

CheckboxGroup.displayName = "CheckboxGroup"
