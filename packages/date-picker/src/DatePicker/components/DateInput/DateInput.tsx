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
  id: string
  calendarId: string
  buttonRef?: React.RefObject<HTMLButtonElement>
  labelText: React.ReactNode
  icon: React.SVGAttributes<SVGSymbolElement>
  /**
   * A description that provides context for the text field
   */
  description?: React.ReactNode
  isCalendarOpen: boolean
  /**
   * Event for the onClick of the icon button
   */
  onButtonClick: React.MouseEventHandler<HTMLButtonElement>
  isReversed?: boolean
  /**
   * The input value as a Date
   */
  value: string | undefined
  /**
   * The callback for then onBlur is triggered on the input
   */
  disabledDays?: Matcher[] | undefined
  /**
   * A descriptive message for `status` states
   */
  validationMessage?: string | React.ReactNode
  /**
   * Updates the styling of the validation FieldMessage
   */
  status?: FieldMessageStatus
}

export const DateInput: React.VFC<DateInputProps> = ({
  inputRef,
  buttonRef,
  id,
  calendarId,
  labelText,
  description,
  icon,
  onButtonClick,
  isCalendarOpen,
  disabled,
  isReversed = false,
  value,
  disabledDays,
  validationMessage,
  status,
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
        aria-describedby={description ? `${id}-field-message` : undefined}
        autoComplete="off"
        value={value}
        disabled={disabled}
        reversed={isReversed}
        endIconAdornment={IconButton}
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
          id={`${id}-field-message`}
          message={getDescription(description)}
          reversed={isReversed}
        />
      </div>
    </FieldGroup>
  )
}

DateInput.displayName = "DateInput"
