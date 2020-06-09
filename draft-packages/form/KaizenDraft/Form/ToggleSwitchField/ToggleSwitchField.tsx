import classnames from "classnames"
import * as React from "react"

import {
  FieldGroup,
  Label,
  ToggledStatus,
  ToggleSwitch,
  ToggleTheme,
} from "@kaizen/draft-form"

const styles = require("./styles.scss")

interface Props {
  id?: string
  name?: string
  labelText: string | React.ReactNode
  toggledStatus?: ToggledStatus
  onToggle?: (event: React.ChangeEvent<HTMLInputElement>) => any
  disabled?: boolean
  inline?: boolean
  fullWidth?: boolean
  theme?: ToggleTheme
}

type ToggleSwitchField = React.FunctionComponent<Props>

const ToggleSwitchField: ToggleSwitchField = ({
  id = "",
  name = "",
  labelText,
  toggledStatus,
  onToggle,
  disabled = false,
  inline = false,
  fullWidth = false,
  theme = ToggleTheme.DEFAULT,
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
      >
        <ToggleSwitch
          id={`${id}-field-toggle`}
          automationId={`${id}-field-toggle`}
          disabled={disabled}
          toggledStatus={toggledStatus}
          name={name}
          onToggle={onToggle}
          theme={theme}
        />
      </Label>
    </div>
  </FieldGroup>
)

export default ToggleSwitchField
