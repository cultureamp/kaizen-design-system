import React, { InputHTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import styles from "./Radio.module.scss"

export interface RadioProps
  extends OverrideClassName<
    Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "checked">
  > {
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
      <div className={classnames(styles.icon, reversed && styles.reversed)} />
    )
  }
  return
}

export const Radio = ({
  name,
  value,
  selectedStatus = false,
  reversed = false,
  automationId,
  onChange,
  classNameOverride,
  ...restProps
}: RadioProps): JSX.Element => (
  <span>
    <input
      data-automation-id={automationId}
      data-testid={automationId}
      type="radio"
      name={name}
      value={value}
      checked={selectedStatus}
      className={classnames(
        styles.radioInput,
        classNameOverride,
        reversed && styles.reversed
      )}
      onChange={onChange}
      readOnly={onChange === undefined}
      {...restProps}
    />
    <span className={classnames(styles.box, reversed && styles.reversed)}>
      {renderSelected(selectedStatus, reversed)}
    </span>
  </span>
)

Radio.displayName = "Radio"
