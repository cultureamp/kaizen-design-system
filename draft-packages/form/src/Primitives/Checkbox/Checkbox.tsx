import { Icon } from "@kaizen/component-library"
import checkIcon from "@kaizen/component-library/icons/check.icon.svg"
import minusIcon from "@kaizen/component-library/icons/minus.icon.svg"
import classnames from "classnames"
import * as React from "react"

import styles from "../../../styles/Checkbox.module.scss"

export type CheckedStatus = "on" | "off" | "mixed"

export type CheckboxProps = {
  id?: string
  automationId?: string
  checkedStatus?: CheckedStatus
  onCheck?: (event: React.ChangeEvent<HTMLInputElement>) => any
  disabled?: boolean
  name?: string
  tabIndex?: number
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

type Input = React.FunctionComponent<CheckboxProps>

const renderCheckOrMixedIcon = (status: CheckedStatus) => {
  if (status === "on") {
    return (
      <div className={styles.icon}>
        <Icon icon={checkIcon} role="presentation" inheritSize />
      </div>
    )
  } else if (status === "mixed") {
    return (
      <div className={styles.icon}>
        <Icon icon={minusIcon} role="presentation" inheritSize />
      </div>
    )
  }
  return
}

const getCheckedFromStatus = (checkedStatus: CheckedStatus) =>
  checkedStatus === "on" ? true : false

const Input: Input = ({
  id,
  automationId,
  name,
  checkedStatus = "off" as CheckedStatus,
  onCheck,
  onFocus,
  onBlur,
  disabled = false,
  tabIndex,
}) => (
  <div className={styles.container}>
    <input
      type="checkbox"
      id={id}
      name={name}
      tabIndex={tabIndex}
      data-automation-id={automationId}
      // This si only used as a handle for unit testing
      data-indeterminate={checkedStatus === "mixed"}
      // TODO - needsclick class disables fastclick on this element to prevent double tap on mobile.
      // Remove when fastclick is removed from consuming repos
      className={classnames(styles.checkbox, "needsclick")}
      checked={getCheckedFromStatus(checkedStatus)}
      onChange={onCheck}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
      ref={node => {
        if (node && checkedStatus === "mixed") {
          node.indeterminate = true
        }
      }}
    />
    <div className={styles.box}>{renderCheckOrMixedIcon(checkedStatus)}</div>
  </div>
)

export default Input
