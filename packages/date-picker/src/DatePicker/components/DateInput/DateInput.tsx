import React, { Ref } from "react"
import { Icon } from "@kaizen/component-library/components/Icon"
import successIcon from "@kaizen/component-library/icons/success.icon.svg"
import classnames from "classnames"
import {
  FieldGroup,
  FieldMessage,
  Input,
  InputProps,
  InputStatus,
  Label,
} from "@kaizen/draft-form/KaizenDraft/Form"
import { renderValidationMessage } from "../../../utils/renderValidationMessage"

import styles from "./styles.scss"

type OmittedInputProps =
  | "startIconAdornment"
  | "endIconAdornment"
  | "ariaDescribedBy"
  | "ariaLabel"
  | "automationId"
  | "inputType"

export interface validationMessagesProps {
  success?: string | React.ReactNode
  caution?: string | React.ReactNode
  error?: string | React.ReactNode
}

export interface DateInputProps extends Omit<InputProps, OmittedInputProps> {
  id: string
  /**
   * A short example of input text. For context or additional information use the `description` prop
   */
  buttonRef?: React.RefObject<HTMLButtonElement>
  labelText: string | React.ReactNode
  inline?: boolean
  icon: React.SVGAttributes<SVGSymbolElement>
  /**
   * A descriptive message for `error` or `caution` states
   */
  validationMessages: validationMessagesProps
  /**
   * A description that provides context for the text field
   */
  description?: string | React.ReactNode
  onButtonClick: () => void
}

export const DateInput: React.VFC<DateInputProps> = ({
  id,
  disabled = false,
  buttonRef,
  labelText,
  inputValue,
  defaultInputValue,
  inputRef,
  validationMessages,
  description,
  reversed = false,
  inline = false,
  status,
  icon,
  onButtonClick,
  ...inputProps
}) => {
  // TODO - handle different validationMessages and their respective aria labels.
  const validationMessageAria = validationMessages?.success
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
        inputType="text"
        automationId={`${id}-field-input`}
        ariaDescribedBy={ariaDescribedBy}
        inputValue={inputValue}
        defaultInputValue={defaultInputValue}
        inputRef={inputRef}
        disabled={disabled}
        reversed={reversed}
        status={status}
        endIconAdornment={
          <button
            // buttonRef={buttonRef}
            onClick={onButtonClick}
            type="button"
            aria-label=""
            className={styles.iconButton}
          >
            <Icon icon={icon} role="presentation" />
          </button>
        }
        {...inputProps}
      />

      {status && (
        <div
          className={classnames(styles.message, {
            [styles.disabled]: disabled,
          })}
        >
          <FieldMessage
            id={`${id}-field-message`}
            automationId={`${id}-field-validation-message`}
            message={renderValidationMessage(status, validationMessages)}
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
