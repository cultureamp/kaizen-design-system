import { Icon } from "@cultureamp/kaizen-component-library/components/Icon"
import { FieldGroup } from "@cultureamp/kaizen-component-library/draft"
import { FieldMessage } from "@cultureamp/kaizen-component-library/draft"
import {
  Input,
  InputStatus,
  InputType,
} from "@cultureamp/kaizen-component-library/draft"
import { Label } from "@cultureamp/kaizen-component-library/draft"
const exclamationIcon = require("@cultureamp/kaizen-component-library/icons/exclamation.icon.svg")
  .default
const successIcon = require("@cultureamp/kaizen-component-library/icons/success.icon.svg")
  .default
import classnames from "classnames"
import * as React from "react"

const styles = require("./styles.scss")

type TextField = React.FunctionComponent<{
  id: string
  inputType?: InputType
  required?: boolean
  placeholder?: string
  labelText: string | React.ReactNode
  disabled?: boolean
  inputValue: string
  reversed?: boolean
  inline?: boolean
  icon?: React.SVGAttributes<SVGSymbolElement>
  status?: InputStatus
  validationMessage?: string
  description?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => any
  name?: string
}>

const TextField: TextField = ({
  id,
  inputType,
  disabled = false,
  placeholder,
  labelText,
  inputValue = "",
  validationMessage,
  description,
  reversed = false,
  inline = false,
  status,
  icon,
  onChange,
  name,
}) => {
  const validationMessageAria = validationMessage
    ? `${id}-field-validation-message`
    : ""
  const descriptionAria = description ? `${id}-field-description` : ""

  const ariaDescribedBy = [validationMessageAria, descriptionAria].reduce(
    (prev, curr) => (curr ? [curr, prev].join(" ") : prev),
    ""
  )

  return (
    <FieldGroup
      id={`${id}-field-group`}
      automationId={`${id}-field-group`}
      inline={inline}
      className={classnames(styles.withLabel, {
        [styles.withDisabled]: disabled,
        [styles.withReversed]: reversed,
        [styles.withError]: status === "error",
      })}
    >
      <Label
        id={`${id}-field-label`}
        automationId={`${id}-field-label`}
        htmlFor={`${id}-field-input`}
        labelText={labelText}
        reversed={reversed}
      />

      <Input
        id={`${id}-field-input`}
        name={name}
        automationId={`${id}-field-input`}
        ariaDescribedBy={ariaDescribedBy}
        inputType={inputType}
        inputValue={inputValue}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        reversed={reversed}
        status={status}
        startIconAdornment={
          icon && (
            <div className={styles.icon}>
              <Icon icon={icon} role="presentation" />
            </div>
          )
        }
        endIconAdornment={
          (status === "success" && (
            <div className={styles.success}>
              <Icon icon={successIcon} role="presentation" />
            </div>
          )) ||
          (status === "error" && (
            <div className={styles.error}>
              <Icon icon={exclamationIcon} role="presentation" />
            </div>
          ))
        }
      />

      {validationMessage && (
        <div className={styles.message}>
          <FieldMessage
            id={`${id}-field-message`}
            automationId={`${id}-field-validation-message`}
            message={validationMessage}
            status={status}
            reversed={reversed}
          />
        </div>
      )}

      {description && (
        <div className={styles.message}>
          <FieldMessage
            id={`${id}-field-message`}
            automationId={`${id}-field-description`}
            message={description}
            reversed={reversed}
          />
        </div>
      )}
    </FieldGroup>
  )
}

export default TextField
