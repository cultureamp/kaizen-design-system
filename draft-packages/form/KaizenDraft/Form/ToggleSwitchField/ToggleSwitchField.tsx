import React from "react"
import classnames from "classnames"
import {
  FieldGroup,
  Label,
  ToggledStatus,
  ToggleSwitch,
  ToggleSwitchProps,
} from "../Primitives"
import styles from "./styles.scss"

export interface ToggleSwitchFieldProps extends ToggleSwitchProps {
  id?: string
  labelText: string | React.ReactNode
  labelPosition?: "start" | "end"
  toggledStatus?: ToggledStatus
  disabled?: boolean
  reversed?: boolean
  inline?: boolean
  fullWidth?: boolean
}

/**
 * {@link https://cultureamp.design/components/toggle-switch-field/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-form-toggle-switch-field--default Storybook}
 */
export const ToggleSwitchField: React.VFC<ToggleSwitchFieldProps> = ({
  id = "",
  labelText,
  labelPosition = "start",
  toggledStatus,
  disabled,
  reversed,
  inline,
  fullWidth,
  ...restProps
}) => (
  <FieldGroup
    id={`${id}-field-group`}
    inline={inline}
    automationId={`${id}-field-group`}
    classNameOverride={classnames(styles.container, {
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
          {...restProps}
        />
      </Label>
    </div>
  </FieldGroup>
)

ToggleSwitchField.displayName = "ToggleSwitchField"
