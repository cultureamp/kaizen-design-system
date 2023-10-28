import React, { HTMLAttributes, useId } from "react"
import classnames from "classnames"
import { Label } from "~components/Label"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./RadioGroup.module.scss"

export type RadioGroupProps = OverrideClassName<
  HTMLAttributes<HTMLDivElement>
> & {
  children?: React.ReactNode
  labelText: string | React.ReactNode
  labelId?: string
  noBottomMargin?: boolean
  reversed?: boolean
  "data-testid"?: string
}

export const RadioGroup = ({
  children,
  labelId: propsLabelId,
  labelText,
  noBottomMargin = false,
  reversed = false,
  classNameOverride,
  "data-testid": dataTestId,
  ...restProps
}: RadioGroupProps): JSX.Element => {
  const labelId = propsLabelId ?? useId()

  return (
    <div
      data-testid={dataTestId}
      className={classnames(
        styles.radioGroupContainer,
        classNameOverride,
        noBottomMargin && styles.noBottomMargin,
        reversed && styles.reversed
      )}
      role="radiogroup"
      aria-labelledby={labelId}
      {...restProps}
    >
      <div className={styles.radioGroupLabel}>
        <Label
          id={labelId}
          data-testid={dataTestId && `${dataTestId}-field-label`}
          labelText={labelText}
          labelType="text"
          reversed={reversed}
        />
      </div>
      {children}
    </div>
  )
}

RadioGroup.displayName = "RadioGroup"
