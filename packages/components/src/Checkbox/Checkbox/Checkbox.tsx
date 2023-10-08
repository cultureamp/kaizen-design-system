import React, { InputHTMLAttributes } from "react"
import classnames from "classnames"
import { CheckIcon, MinusIcon } from "~components/Icons"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./Checkbox.module.scss"

export type CheckedStatus = "on" | "off" | "mixed"

export type CheckboxProps = {
  checkedStatus?: CheckedStatus
  onCheck?: (event: React.ChangeEvent<HTMLInputElement>) => any
  reversed?: boolean
  value?: string
} & OverrideClassName<
  Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange" | "checked">
>

const renderCheckOrMixedIcon = (
  status: CheckedStatus,
  reversed: boolean
): React.ReactNode => {
  if (status === "off") return

  return (
    <span className={classnames(styles.icon, reversed && styles.reversed)}>
      {status === "on" ? (
        <CheckIcon role="presentation" inheritSize />
      ) : (
        <MinusIcon role="presentation" inheritSize />
      )}
    </span>
  )
}

const getCheckedFromStatus = (checkedStatus: CheckedStatus): boolean =>
  checkedStatus === "on"

export const Checkbox = ({
  checkedStatus = "off",
  onCheck,
  reversed = false,
  value,
  classNameOverride,
  ...restProps
}: CheckboxProps): JSX.Element => (
  <span className={styles.container}>
    <input
      ref={(node): void => {
        if (node) {
          node.indeterminate = checkedStatus === "mixed"
        }
      }}
      // This is only used as a handle for unit testing
      data-indeterminate={checkedStatus === "mixed"}
      type="checkbox"
      className={classnames(
        styles.checkbox,
        classNameOverride,
        reversed && styles.reversed
      )}
      checked={getCheckedFromStatus(checkedStatus)}
      onChange={onCheck}
      value={value || checkedStatus}
      readOnly={onCheck === undefined}
      {...restProps}
    />
    <span className={classnames(styles.box, reversed && styles.reversed)}>
      {renderCheckOrMixedIcon(checkedStatus, reversed)}
    </span>
  </span>
)

Checkbox.displayName = "Checkbox"
