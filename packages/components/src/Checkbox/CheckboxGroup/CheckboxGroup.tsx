import React, { HTMLAttributes, useId } from "react"
import classnames from "classnames"
import { Label } from "~components/Label"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./CheckboxGroup.module.scss"

export type CheckboxGroupProps = {
  children?: React.ReactNode
  labelText: string | React.ReactNode
  labelId?: string
  noBottomMargin?: boolean
  reversed?: boolean
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082094522/Checkbox+Group Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-checkbox-controls-checkbox-group--docs Storybook}
 */
export const CheckboxGroup = ({
  children,
  labelText,
  labelId: propsLabelId,
  noBottomMargin = false,
  reversed = false,
  classNameOverride,
  ...restProps
}: CheckboxGroupProps): JSX.Element => {
  const labelId = propsLabelId ?? useId()

  return (
    <div
      className={classnames(
        styles.checkboxGroupContainer,
        classNameOverride,
        noBottomMargin && styles.noBottomMargin,
        reversed && styles.reversed
      )}
      role="group"
      aria-labelledby={labelId}
      {...restProps}
    >
      <div className={styles.checkboxGroupLabel}>
        <Label
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
