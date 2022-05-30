import React from "react"
import classnames from "classnames"
import {
  FieldGroup,
  FieldMessage,
  Label,
  TextArea,
  TextAreaProps,
} from "../Primitives"
import styles from "./styles.scss"

export interface TextAreaFieldProps
  extends Omit<TextAreaProps, "automationId"> {
  labelText: string | React.ReactNode
  inline?: boolean
  validationMessage?: string | React.ReactNode
  description?: string | React.ReactNode
  variant?: "default" | "prominent"
}

/**
 * {@link https://cultureamp.design/components/text-area-field/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-form-text-area-field--default-story Storybook}
 */
export const TextAreaField: React.VFC<TextAreaFieldProps> = ({
  labelText,
  inline = false,
  validationMessage,
  description,
  variant = "default",
  id,
  reversed = false,
  status = "default",
  disabled,
  ...restProps
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
      classNameOverride={disabled ? styles.disabled : undefined}
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
        {...restProps}
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
