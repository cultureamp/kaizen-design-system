import React from "react"
import { Icon } from "@kaizen/component-library/components/Icon"
import classnames from "classnames"
import {
  FieldGroup,
  FieldMessage,
  Input,
  InputProps,
  Label,
} from "@kaizen/draft-form/KaizenDraft/Form"
import { renderValidationMessage } from "../../../utils/renderValidationMessage"

import styles from "./styles.scss"

type OmittedInputProps = "startIconAdornment" | "endIconAdornment" | "inputType"

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
  calendarId?: string
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
  calendarId,
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
        role="combobox"
        // aria-expanded={}
        aria-haspopup="dialog"
        aria-controls={calendarId}
        ariaDescribedBy={id}
        inputValue={inputValue}
        defaultInputValue={defaultInputValue}
        inputRef={inputRef}
        disabled={disabled}
        reversed={reversed}
        status={status}
        endIconAdornment={
          <button
            // buttonRef={buttonRef}
            // aria-disabled={disabled || working ? true : undefined}
            disabled={disabled}
            onClick={onButtonClick}
            // onFocus={onFocus}
            // onBlur={onBlur}
            type="button"
            className={styles.iconButton}
            aria-label={
              inputValue ? `Change Date, ${inputValue}` : "Choose Date"
            }
          >
            <div
              className={classnames({
                [styles.disabled]: disabled,
              })}
            >
              <Icon icon={icon} role="presentation" />{" "}
            </div>
          </button>
        }
        isDatePicker
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
