import React, { InputHTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import styles from "./Radio.module.scss"

export interface RadioProps
  extends OverrideClassName<
    Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "checked">
  > {
  id: string
  name: string
  value: string
  selectedStatus?: boolean
  reversed?: boolean
  /**
   * **Deprecated:** Use test id compatible with your testing library (eg. `data-testid`).
   * @deprecated
   */
  automationId?: string
}

const renderSelected = (
  selectedStatus: boolean,
  reversed: boolean
): React.ReactNode => {
  if (selectedStatus) {
    return (
      <div
        className={classnames(styles.icon, {
          [styles.reversed]: reversed,
        })}
      />
    )
  }
  return
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      id,
      name,
      value,
      selectedStatus = false,
      reversed = false,
      automationId,
      onChange,
      classNameOverride,
      ...restProps
    },
    ref
  ): JSX.Element => (
    <span>
      <input
        ref={ref}
        data-automation-id={automationId}
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={selectedStatus}
        className={classnames(styles.radioInput, classNameOverride, {
          [styles.reversed]: reversed,
        })}
        onChange={onChange}
        readOnly={onChange === undefined}
        {...restProps}
      />
      <span
        className={classnames(styles.box, {
          [styles.reversed]: reversed,
        })}
      >
        {renderSelected(selectedStatus, reversed)}
      </span>
    </span>
  )
)

Radio.displayName = "Radio"
