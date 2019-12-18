import { Icon } from "@cultureamp/kaizen-component-library"
const checkIcon = require("@cultureamp/kaizen-component-library/icons/check.icon.svg")
  .default
const minusIcon = require("@cultureamp/kaizen-component-library/icons/minus.icon.svg")
  .default
import classnames from "classnames"
import * as React from "react"

const styles = require("./styles.scss")

export type CheckedStatus = "on" | "off" | "mixed"

export type CheckboxProps = {
  id?: string
  automationId?: string
  checkedStatus?: CheckedStatus
  onCheck?: (event: React.ChangeEvent<HTMLInputElement>) => any
  disabled?: boolean
  name?: string
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
  disabled = false,
}) => (
  <div className={styles.container}>
    <input
      type="checkbox"
      id={id}
      name={name}
      data-automation-id={automationId}
      // This si only used as a handle for unit testing
      data-indeterminate={checkedStatus === "mixed"}
      // TODO - needsclick class disables fastclick on this element to prevent double tap on mobile. Remove when fastclick is removed from consuming repos
      className={classnames(styles.checkbox, "needsclick")}
      checked={getCheckedFromStatus(checkedStatus)}
      onChange={onCheck}
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
