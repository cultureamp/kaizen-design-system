import React from "react"
import { Icon } from "@kaizen/component-library"
import classnames from "classnames"
import {
  FieldGroup,
  FieldMessage,
  FieldMessageStatus,
  Input,
  InputProps,
  Label,
} from "@kaizen/draft-form"
import { Matcher } from "react-day-picker/src/types/Matchers"
import { getDescription } from "./utils/getDescription"
import styles from "./DateInput.scss"

type OmittedInputProps =
  | "startIconAdornment"
  | "endIconAdornment"
  | "inputType"
  | "status"
  | "inputValue"
  | "reversed"
  | "type"
  | "ariaLabel"
  | "ariaDescribedBy"
  | "defaultInputValue"
  | "automationId"

export interface DateInputProps extends Omit<InputProps, OmittedInputProps> {
  buttonRef?: React.RefObject<HTMLButtonElement>
  id: string
  calendarId: string
  isCalendarOpen: boolean
  labelText: React.ReactNode
  /**
   * A description that provides context for the text field
   */
  description?: React.ReactNode
  icon: React.SVGAttributes<SVGSymbolElement>
  /**
   * Icon button onClick handler
   */
  onButtonClick: React.MouseEventHandler<HTMLButtonElement>
  isReversed?: boolean
  /**
   * Updates the styling of the validation FieldMessage
   */
  status?: FieldMessageStatus
  /**
   * A descriptive message for `status` states
   */
  validationMessage?: string | React.ReactNode
}

export const DateInput: React.VFC<DateInputProps> = ({
  inputRef,
  buttonRef,
  id,
  calendarId,
  isCalendarOpen,
  labelText,
  description,
  icon,
  onButtonClick,
  disabled,
  isReversed = false,
  status,
  validationMessage,
  value,
  ...inputProps
}) => {
  // Focus behaviour breaks when this is a function component.
  const IconButton: React.ReactNode = (
    <button
      ref={buttonRef}
      aria-disabled={disabled}
      disabled={disabled}
      onClick={onButtonClick}
      type="button"
      className={classnames([
        styles.iconButton,
        isCalendarOpen && styles.calendarActive,
        disabled && styles.disabled,
      ])}
      aria-label={value ? `Change date, ${value}` : "Choose date"}
    >
      <Icon icon={icon} role="presentation" />
    </button>
  )

  const descriptionId = `${id}-field-message`

  const shouldShowValidationMessage = !disabled && validationMessage

  return (
    <FieldGroup inline={true}>
      <Label
        htmlFor={id}
        labelText={labelText}
        reversed={isReversed}
        disabled={disabled}
      />
      <Input
        inputRef={inputRef}
        id={id}
        role="combobox"
        aria-expanded={isCalendarOpen}
        aria-haspopup="dialog"
        aria-controls={calendarId}
        aria-describedby={descriptionId}
        autoComplete="off"
        value={value}
        disabled={disabled}
        reversed={isReversed}
        endIconAdornment={IconButton}
        status={status}
        {...inputProps}
      />
      {shouldShowValidationMessage && (
        <FieldMessage
          message={validationMessage}
          status={status}
          reversed={isReversed}
        />
      )}
      <div
        className={classnames([styles.message, disabled && styles.disabled])}
      >
        <FieldMessage
          id={descriptionId}
          message={getDescription(description)}
          reversed={isReversed}
        />
      </div>
    </FieldGroup>
  )
}

DateInput.displayName = "DateInput"
