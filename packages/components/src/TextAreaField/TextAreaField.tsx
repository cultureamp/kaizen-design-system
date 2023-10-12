import React, { useId } from "react"
import classnames from "classnames"
import { FieldGroup } from "~components/FieldGroup"
import { FieldMessage } from "~components/FieldMessage"
import { Label } from "~components/Label"
import { TextArea, TextAreaProps } from "~components/TextArea"
import styles from "./TextAreaField.module.scss"

export type TextAreaFieldProps = {
  labelText: string | React.ReactNode
  inline?: boolean
  validationMessage?: string | React.ReactNode
  description?: string | React.ReactNode
  variant?: "default" | "prominent"
} & TextAreaProps

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3081895966/Text+Area+Field Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-text-area-field--docs Storybook}
 */
export const TextAreaField = ({
  labelText,
  inline = false,
  validationMessage,
  description,
  variant = "default",
  id: propsId,
  reversed = false,
  status = "default",
  disabled,
  ...restProps
}: TextAreaFieldProps): JSX.Element => {
  const id = propsId ?? useId()

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
          data-testid={`${id}-field-description`}
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
      data-testid={`${id}-field-group`}
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
          data-testid={`${id}-field-label`}
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
        data-testid={`${id}-field-textarea`}
        reversed={reversed}
        status={status}
        disabled={disabled}
        aria-describedby={ariaDescribedBy}
        {...restProps}
      />
      {!disabled && validationMessage && (
        <FieldMessage
          id={validationMessageAria}
          data-testid={validationMessageAria}
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
