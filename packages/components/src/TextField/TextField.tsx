import React, { useId } from "react"
import classnames from "classnames"
import { FieldGroup } from "~components/FieldGroup"
import { FieldMessage } from "~components/FieldMessage"
import { SuccessIcon } from "~components/Icon"
import { Input, InputProps } from "~components/Input"
import { Label } from "~components/Label"
import styles from "./TextField.module.scss"

type OmittedInputProps =
  | "startIconAdornment"
  | "endIconAdornment"
  | "ariaDescribedBy"
  | "ariaLabel"

export type TextFieldProps = {
  /**
   * A short example of input text. For context or additional information use the `description` prop
   */
  labelText: React.ReactNode
  inline?: boolean
  icon?: JSX.Element
  /**
   * A descriptive message for `error` or `caution` states
   */
  validationMessage?: string | React.ReactNode
  /**
   * A description that provides context for the text field
   */
  description?: string | React.ReactNode
} & Omit<InputProps, OmittedInputProps>

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3081928705/Text+Field Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-text-field--docs Storybook}
 */
export const TextField = ({
  id: propsId,
  labelText,
  inline = false,
  icon,
  validationMessage,
  description,
  status,
  reversed = false,
  disabled,
  ...restProps
}: TextFieldProps): JSX.Element => {
  const id = propsId ?? useId()
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
      data-testid={`${id}-field-group`}
      inline={inline}
      classNameOverride={classnames(
        styles.withLabel,
        disabled && styles.withDisabled
      )}
    >
      <Label
        id={`${id}-field-label`}
        data-testid={`${id}-field-label`}
        htmlFor={`${id}-field-input`}
        labelText={labelText}
        reversed={reversed}
        disabled={disabled}
      />
      <Input
        id={`${id}-field-input`}
        data-testid={`${id}-field-input`}
        aria-describedby={ariaDescribedBy}
        classNameOverride={styles.input}
        disabled={disabled}
        reversed={reversed}
        status={status}
        startIconAdornment={icon}
        endIconAdornment={
          status === "success" && (
            <div
              className={classnames(
                styles.success,
                disabled && styles.disabled
              )}
            >
              <SuccessIcon role="presentation" />
            </div>
          )
        }
        {...restProps}
      />

      {validationMessage && (
        <div
          className={classnames(styles.message, disabled && styles.disabled)}
        >
          <FieldMessage
            id={validationMessageAria}
            message={validationMessage}
            status={status}
            reversed={reversed}
          />
        </div>
      )}

      {description && (
        <div
          className={classnames(styles.message, disabled && styles.disabled)}
        >
          <FieldMessage
            id={descriptionAria}
            message={description}
            reversed={reversed}
          />
        </div>
      )}
    </FieldGroup>
  )
}

TextField.displayName = "TextField"
