import React, { InputHTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { Icon } from "@components/Icon"
import checkIcon from "@icons/check.icon.svg"
import minusIcon from "@icons/minus.icon.svg"
import styles from "./Checkbox.module.scss"

export type CheckedStatus = "on" | "off" | "mixed"

export interface CheckboxProps
  extends OverrideClassName<
    Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange" | "checked">
  > {
  checkedStatus?: CheckedStatus
  onCheck?: (event: React.ChangeEvent<HTMLInputElement>) => any
  reversed?: boolean
  value?: string
  /**
   * **Deprecated:** Use test id compatible with your testing library (eg. `data-testid`).
   * @deprecated
   */
  automationId?: string
}

const renderCheckOrMixedIcon = (
  status: CheckedStatus,
  reversed: boolean
): React.ReactNode => {
  if (status === "off") return
  const icon = status === "on" ? checkIcon : minusIcon
  return (
    <span
      className={classnames(styles.icon, {
        [styles.reversed]: reversed,
      })}
    >
      <Icon icon={icon} role="presentation" inheritSize />
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
  automationId,
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
      data-automation-id={automationId}
      // This is only used as a handle for unit testing
      data-indeterminate={checkedStatus === "mixed"}
      type="checkbox"
      className={classnames(styles.checkbox, classNameOverride, {
        [styles.reversed]: reversed,
      })}
      checked={getCheckedFromStatus(checkedStatus)}
      onChange={onCheck}
      value={value || checkedStatus}
      readOnly={onCheck === undefined}
      {...restProps}
    />
    <span
      className={classnames(styles.box, {
        [styles.reversed]: reversed,
      })}
    >
      {renderCheckOrMixedIcon(checkedStatus, reversed)}
    </span>
  </span>
)

Checkbox.displayName = "Checkbox"
