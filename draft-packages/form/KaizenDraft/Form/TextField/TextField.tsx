import React, { InputHTMLAttributes } from "react"
import { Icon } from "@kaizen/component-library/components/Icon"
import successIcon from "@kaizen/component-library/icons/success.icon.svg"
import classnames from "classnames"

import { FieldGroup, FieldMessage, Input, InputProps, Label } from ".."

import styles from "./styles.scss"

export interface TextFieldProps extends InputProps {
  id: string
  /**
   * A short example of input text. For context or additional information use the `description` prop
   */
  labelText: string | React.ReactNode
  inline?: boolean
  icon?: React.SVGAttributes<SVGSymbolElement>
  /**
   * A descriptive message for `error` or `caution` states
   */
  validationMessage?: string | React.ReactNode
  /**
   * A description that provides context for the text field
   */
  description?: string | React.ReactNode
}

type TextField = React.FunctionComponent<TextFieldProps>

export const TextField: TextField = ({
  id,
  inputType,
  disabled = false,
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
  ...inputProps
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
      })}
    >
      <Label
        id={`${id}-field-label`}
        automationId={`${id}-field-label`}
        htmlFor={`${id}-field-input`}
        labelText={labelText}
        reversed={reversed}
        disabled={disabled}
      />
      <Input
        id={`${id}-field-input`}
        automationId={`${id}-field-input`}
        ariaDescribedBy={ariaDescribedBy}
        inputType={inputType}
        inputValue={inputValue}
        defaultInputValue={defaultInputValue}
        inputRef={inputRef}
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
          status === "success" && (
            <div
              className={classnames(styles.success, {
                [styles.disabled]: disabled,
              })}
            >
              <Icon icon={successIcon} role="presentation" />
            </div>
          )
        }
        {...inputProps}
      />

      {validationMessage && (
        <div
          className={classnames(styles.message, {
            [styles.disabled]: disabled,
          })}
        >
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
        <div
          className={classnames(styles.message, {
            [styles.disabled]: disabled,
          })}
        >
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
