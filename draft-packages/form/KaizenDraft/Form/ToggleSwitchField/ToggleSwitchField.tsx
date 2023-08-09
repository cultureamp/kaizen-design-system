import React, { useState } from "react"
import classnames from "classnames"
import { v4 } from "uuid"
import {
  FieldGroup,
  Label,
  ToggledStatus,
  ToggleSwitch,
  ToggleSwitchProps,
} from "../Primitives"
import styles from "./ToggleSwitchField.module.scss"

export interface ToggleSwitchFieldProps extends ToggleSwitchProps {
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
export const ToggleSwitchField = ({
  id: propsId,
  labelText,
  labelPosition = "start",
  toggledStatus,
  disabled,
  reversed,
  inline,
  fullWidth,
  ...restProps
}: ToggleSwitchFieldProps): JSX.Element => {
  const [id] = useState<string>(propsId || v4())
  return (
    <FieldGroup
      id={`${id}-field-group`}
      inline={inline}
      automationId={`${id}-field-group`}
      classNameOverride={classnames(
        styles.container,
        fullWidth && styles.fullWidth,
        toggledStatus === ToggledStatus.ON && styles.on
      )}
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
}

ToggleSwitchField.displayName = "ToggleSwitchField"
