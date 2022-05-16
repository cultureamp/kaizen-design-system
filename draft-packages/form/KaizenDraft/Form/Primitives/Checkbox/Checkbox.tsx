import React, { InputHTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { Icon } from "@kaizen/component-library"
import checkIcon from "@kaizen/component-library/icons/check.icon.svg"
import minusIcon from "@kaizen/component-library/icons/minus.icon.svg"
import styles from "./styles.scss"

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
  if (status === "on") {
    return (
      <span
        className={classnames(styles.icon, {
          [styles.reversed]: reversed,
        })}
      >
        <Icon icon={checkIcon} role="presentation" inheritSize />
      </span>
    )
  } else if (status === "mixed") {
    return (
      <span
        className={classnames(styles.icon, {
          [styles.reversed]: reversed,
        })}
      >
        <Icon icon={minusIcon} role="presentation" inheritSize />
      </span>
    )
  }
  return
}

const getCheckedFromStatus = (checkedStatus: CheckedStatus): boolean =>
  checkedStatus === "on"

export const Checkbox: React.VFC<CheckboxProps> = ({
  checkedStatus = "off",
  onCheck,
  reversed = false,
  value,
  automationId,
  classNameOverride,
  ...restProps
}) => (
  <span className={styles.container}>
    <input
      ref={node => {
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
