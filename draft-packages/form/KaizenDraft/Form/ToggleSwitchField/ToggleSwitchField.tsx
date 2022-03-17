import classnames from "classnames"
import * as React from "react"

import { FieldGroup, Label, ToggledStatus, ToggleSwitch } from ".."

import styles from "./styles.scss"

export interface ToggleSwitchFieldProps {
  id?: string
  name?: string
  labelText: string | React.ReactNode
  labelPosition?: "start" | "end"
  toggledStatus?: ToggledStatus
  onToggle?: (event: React.ChangeEvent<HTMLInputElement>) => any
  disabled?: boolean
  reversed?: boolean
  inline?: boolean
  fullWidth?: boolean
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  ref?: React.RefObject<HTMLInputElement>
}

type ToggleSwitchField = React.FunctionComponent<ToggleSwitchFieldProps>

const ToggleSwitchField: ToggleSwitchField = ({
  id = "",
  name = "",
  labelText,
  labelPosition = "start",
  toggledStatus,
  onToggle,
  disabled,
  reversed,
  inline,
  fullWidth,
  onFocus,
  onBlur,
  ref,
}) => (
  <FieldGroup
    id={`${id}-field-group`}
    inline={inline}
    automationId={`${id}-field-group`}
    className={classnames(styles.container, {
      [styles.fullWidth]: fullWidth,
      [styles.on]: toggledStatus === ToggledStatus.ON,
    })}
  >
    <div className={styles.inner}>
      <Label
        id={`${id}-field-label`}
        htmlFor={`${id}-field-toggle`}
        automationId={`${id}-field-label`}
        labelText={labelText}
        labelType="toggle"
        labelPosition={labelPosition}
        disabled={disabled}
        reversed={reversed}
      >
        <ToggleSwitch
          id={`${id}-field-toggle`}
          automationId={`${id}-field-toggle`}
          disabled={disabled}
          reversed={reversed}
          toggledStatus={toggledStatus}
          name={name}
          onToggle={onToggle}
          onFocus={onFocus}
          onBlur={onBlur}
          ref={ref}
        />
      </Label>
    </div>
  </FieldGroup>
)

export default ToggleSwitchField
