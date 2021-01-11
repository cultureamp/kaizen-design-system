import classnames from "classnames"
import * as React from "react"

import { FieldGroup, Label, ToggledStatus, ToggleSwitch, ToggleTheme } from ".."

import styles from "./styles.scss"

export interface ToggleSwitchFieldProps {
  id?: string
  name?: string
  labelText: string | React.ReactNode
  labelPosition?: "start" | "end"
  toggledStatus?: ToggledStatus
  onToggle?: (event: React.ChangeEvent<HTMLInputElement>) => any
  disabled?: boolean
  inline?: boolean
  fullWidth?: boolean
  theme?: ToggleTheme
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

type ToggleSwitchField = React.FunctionComponent<ToggleSwitchFieldProps>

const ToggleSwitchField: ToggleSwitchField = ({
  id = "",
  name = "",
  labelText,
  labelPosition = "start",
  toggledStatus,
  onToggle,
  disabled = false,
  inline = false,
  fullWidth = false,
  theme = ToggleTheme.DEFAULT,
  onFocus,
  onBlur,
}) => (
  <FieldGroup
    id={`${id}-field-group`}
    inline={inline}
    automationId={`${id}-field-group`}
    className={classnames(styles.container, {
      [styles.disabled]: disabled,
      [styles.fullWidth]: fullWidth,
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
      >
        <ToggleSwitch
          id={`${id}-field-toggle`}
          automationId={`${id}-field-toggle`}
          disabled={disabled}
          toggledStatus={toggledStatus}
          name={name}
          onToggle={onToggle}
          onFocus={onFocus}
          onBlur={onBlur}
          theme={theme}
        />
      </Label>
    </div>
  </FieldGroup>
)

export default ToggleSwitchField
