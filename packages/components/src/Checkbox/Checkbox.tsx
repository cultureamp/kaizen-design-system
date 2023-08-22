import React, { InputHTMLAttributes } from "react"
import classnames from "classnames"
import { CheckIcon } from "~icons/CheckIcon"
import { MinusIcon } from "~icons/MinusIcon"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./Checkbox.module.scss"

export type CheckedStatus = "on" | "off" | "mixed"

export interface CheckboxProps
  extends OverrideClassName<
    Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "checked">
  > {
  checkedStatus?: CheckedStatus
  reversed?: boolean
  value?: string
}

const renderCheckOrMixedIcon = (
  status: CheckedStatus,
  reversed: boolean
): React.ReactNode => {
  if (status === "off") return
  const Icon = status === "on" ? CheckIcon : MinusIcon
  return (
    <span className={classnames(styles.icon, reversed && styles.reversed)}>
      <Icon role="presentation" />
    </span>
  )
}

const getCheckedFromStatus = (checkedStatus: CheckedStatus): boolean =>
  checkedStatus === "on"

export const Checkbox = ({
  checkedStatus = "off",
  onChange,
  reversed = false,
  value,
  classNameOverride,
  ...restProps
}: CheckboxProps): JSX.Element => (
  <span className={styles.container}>
    <input
      type="checkbox"
      className={classnames(
        styles.checkbox,
        classNameOverride,
        reversed && styles.reversed
      )}
      checked={getCheckedFromStatus(checkedStatus)}
      onChange={onChange}
      value={value || checkedStatus}
      readOnly={onChange === undefined}
      {...restProps}
    />
    <span className={classnames(styles.box, reversed && styles.reversed)}>
      {renderCheckOrMixedIcon(checkedStatus, reversed)}
    </span>
  </span>
)

Checkbox.displayName = "Checkbox"
