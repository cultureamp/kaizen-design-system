import React, { useState } from "react"
import classnames from "classnames"
import { v4 } from "uuid"
import { Icon } from "@kaizen/component-library/components/Icon"
import successIcon from "@kaizen/component-library/icons/success.icon.svg"
import {
  FieldGroup,
  FieldMessage,
  Input,
  InputProps,
  Label,
} from "../Primitives"
import styles from "./TextField.module.scss"

type OmittedInputProps =
  | "startIconAdornment"
  | "endIconAdornment"
  | "ariaDescribedBy"
  | "ariaLabel"
  | "automationId"

export interface TextFieldProps extends Omit<InputProps, OmittedInputProps> {
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

/**
 * {@link https://cultureamp.design/components/text-field/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-form-text-field--default-story Storybook}
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
  const [id] = useState<string>(propsId || v4())
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
      classNameOverride={classnames(
        styles.withLabel,
        disabled && styles.withDisabled
      )}
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
              className={classnames(
                styles.success,
                disabled && styles.disabled
              )}
            >
              <Icon icon={successIcon} role="presentation" />
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
            automationId={validationMessageAria}
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
            automationId={descriptionAria}
            message={description}
            reversed={reversed}
          />
        </div>
      )}
    </FieldGroup>
  )
}

TextField.displayName = "TextField"
