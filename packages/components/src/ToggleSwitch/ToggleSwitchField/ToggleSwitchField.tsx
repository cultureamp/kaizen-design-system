import React, { useId } from "react"
import classnames from "classnames"
import { FieldGroup } from "~components/FieldGroup"
import { Label } from "~components/Label"
import {
  ToggledStatus,
  ToggleSwitch,
  ToggleSwitchProps,
} from "../ToggleSwitch/ToggleSwitch"
import styles from "./ToggleSwitchField.module.scss"

export type ToggleSwitchFieldProps = {
  labelText: React.ReactNode
  labelPosition?: "start" | "end"
  toggledStatus?: ToggledStatus
  disabled?: boolean
  reversed?: boolean
  inline?: boolean
  fullWidth?: boolean
} & ToggleSwitchProps

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3075638160/Toggle+Switch Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-toggleswitch-ield--docs Storybook}
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
  const reactId = useId()
  const id = propsId || reactId

  return (
    <FieldGroup
      id={`${id}-field-group`}
      inline={inline}
      classNameOverride={classnames(
        styles.container,
        fullWidth && styles.fullWidth,
        toggledStatus === "on" && styles.on
      )}
    >
      <div className={styles.inner}>
        <Label
          id={`${id}-field-label`}
          htmlFor={`${id}-field-toggle`}
          labelText={labelText}
          labelType="toggle"
          labelPosition={labelPosition}
          disabled={disabled}
          reversed={reversed}
        >
          <ToggleSwitch
            id={`${id}-field-toggle`}
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
