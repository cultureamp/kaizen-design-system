import { Icon } from "@kaizen/component-library"
import checkIcon from "@kaizen/component-library/icons/check.icon.svg"
import minusIcon from "@kaizen/component-library/icons/minus.icon.svg"
import classnames from "classnames"
import * as React from "react"

import styles from "./styles.scss"

export type CheckedStatus = "on" | "off" | "mixed"

export type CheckboxProps = {
  id?: string
  automationId?: string
  checkedStatus?: CheckedStatus
  onCheck?: (event: React.ChangeEvent<HTMLInputElement>) => any
  disabled?: boolean
  reversed?: boolean
  name?: string
  tabIndex?: number
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  value?: string
}

type Input = React.FunctionComponent<CheckboxProps>

const renderCheckOrMixedIcon = (status: CheckedStatus, reversed) => {
  if (status === "on") {
    return (
      <div
        className={classnames(styles.icon, {
          [styles.reversed]: reversed,
        })}
      >
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
  reversed = false,
  tabIndex,
  value,
}) => (
  <span className={styles.container}>
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
      className={classnames(styles.checkbox, "needsclick", {
        [styles.reversed]: reversed,
      })}
      checked={getCheckedFromStatus(checkedStatus)}
      onChange={onCheck}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
      value={value || checkedStatus}
      ref={node => {
        if (node) {
          node.indeterminate = checkedStatus === "mixed"
        }
      }}
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

export default Input
