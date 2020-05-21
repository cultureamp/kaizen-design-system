import { Icon } from "@kaizen/component-library/components/Icon"
import {
  FieldGroup,
  FieldMessage,
  Input,
  InputStatus,
  InputType,
  Label,
} from "@kaizen/draft-form"
const exclamationIcon = require("@kaizen/component-library/icons/exclamation.icon.svg")
  .default
const successIcon = require("@kaizen/component-library/icons/success.icon.svg")
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
  inputValue?: string
  defaultInputValue?: string
  inputRef?: React.RefObject<HTMLInputElement>
  reversed?: boolean
  inline?: boolean
  icon?: React.SVGAttributes<SVGSymbolElement>
  status?: InputStatus
  validationMessage?: string
  description?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => any
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => any
  name?: string
}>

const TextField: TextField = ({
  id,
  inputType,
  disabled = false,
  placeholder,
  labelText,
  inputValue,
  defaultInputValue,
  inputRef,
  validationMessage,
  description,
  reversed = false,
  inline = false,
  status,
  icon,
  onChange,
  onBlur,
  onFocus,
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
        defaultInputValue={defaultInputValue}
        inputRef={inputRef}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
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
