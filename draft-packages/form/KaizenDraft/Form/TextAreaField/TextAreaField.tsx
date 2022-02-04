import * as React from "react"
import classnames from "classnames"
import { FieldGroup, FieldMessage, Label, TextArea, TextAreaProps } from ".."
import styles from "./styles.scss"

export interface TextAreaFieldProps
  extends Omit<TextAreaProps, "automationId"> {
  labelText: string | React.ReactNode
  inline?: boolean
  validationMessage?: string | React.ReactNode
  description?: string | React.ReactNode
  variant?: "default" | "prominent"
}

export const TextAreaField: React.FunctionComponent<TextAreaFieldProps> = ({
  id,
  labelText,
  description,
  variant = "default",
  inline = false,
  reversed = false,
  status = "default",
  validationMessage,
  disabled = false,
  ...textAreaProps
}) => {
  const renderDescriptionOnTop = variant === "prominent"
  const renderDescription = (position: "top" | "bottom") => {
    if (!description) return null
    return (
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
          position={position}
        />
      </div>
    )
  }

  return (
    <FieldGroup
      id={`${id}-field-group`}
      inline={inline}
      automationId={`${id}-field-group`}
      className={disabled ? styles.disabled : undefined}
    >
      <div
        className={classnames(styles.textareaLabel, {
          [styles.textareaLabelProminent]: variant === "prominent",
        })}
      >
        <Label
          id={`${id}-field-label`}
          automationId={`${id}-field-label`}
          htmlFor={`${id}-field-textarea`}
          labelText={labelText}
          reversed={reversed}
          variant={variant}
          disabled={disabled}
        />
      </div>
      {renderDescriptionOnTop && renderDescription("top")}
      <TextArea
        id={`${id}-field-textarea`}
        automationId={`${id}-field-textarea`}
        reversed={reversed}
        status={status}
        disabled={disabled}
        {...textAreaProps}
      />
      {!disabled && validationMessage && (
        <FieldMessage
          id={`${id}-field-message`}
          automationId={`${id}-field-validation-message`}
          message={validationMessage}
          status={status}
          reversed={reversed}
        />
      )}
      {!renderDescriptionOnTop && renderDescription("bottom")}
    </FieldGroup>
  )
}

TextAreaField.displayName = "TextAreaField"
