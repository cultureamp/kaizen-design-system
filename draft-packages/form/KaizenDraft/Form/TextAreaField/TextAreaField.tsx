import React from "react"
import classnames from "classnames"
import {
  FieldGroup,
  FieldMessage,
  Label,
  TextArea,
  TextAreaProps,
} from "../Primitives"
import styles from "./TextAreaField.module.scss"

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
export const TextAreaField = ({
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
}: TextAreaFieldProps): JSX.Element => {
  const validationMessageAria = validationMessage
    ? `${id}-field-validation-message`
    : ""
  const descriptionAria = description ? `${id}-field-message` : ""
  const ariaDescribedBy = [validationMessageAria, descriptionAria].reduce(
    (prev, curr) => (curr ? [curr, prev].join(" ") : prev),
    ""
  )

  const renderDescriptionOnTop = variant === "prominent"
  const renderDescription = (
    position: "top" | "bottom"
  ): JSX.Element | null => {
    if (!description) return null
    return (
      <div className={classnames(styles.message, disabled && styles.disabled)}>
        <FieldMessage
          id={descriptionAria}
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
        className={classnames(
          styles.textareaLabel,
          variant === "prominent" && styles.textareaLabelProminent
        )}
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
        aria-describedby={ariaDescribedBy}
        {...restProps}
      />
      {!disabled && validationMessage && (
        <FieldMessage
          id={validationMessageAria}
          automationId={validationMessageAria}
          message={validationMessage}
          status={status}
          reversed={reversed}
        />
      )}
      {!renderDescriptionOnTop && renderDescription("bottom")}
    </FieldGroup>
  )
}
