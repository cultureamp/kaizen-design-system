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
  isOpen: boolean
  /**
   * Event for the onClick of the icon button
   */
  onButtonClick: () => void
  isReversed?: boolean
  /**
   * The input value as a Date
   */
  value: string | undefined
  /**
   * The callback for then onBlur is triggered on the input
   */
  // onBlur: (date: Date | undefined, inputValue: string) => void
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
  id,
  disabled = false,
  inputRef,
  buttonRef,
  labelText,
  description,
  isReversed = false,
  icon,
  onButtonClick,
  calendarId,
  isOpen,
  value,
  onBlur,
  onFocus,
  onChange,
  disabledDays,
  validationMessage,
  status,
  ...inputProps
}) => {
  const getDescription = (): React.ReactNode => {
    switch (typeof description) {
      case "string":
        return description + " (Format: mm/dd/yyyy)"
      case "object":
        return <>{description} (Format: mm/dd/yyyy)</>
      default:
        return "Format: mm/dd/yyyy"
    }
  }

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
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-controls={calendarId}
        aria-describedby={description ? `${id}-field-message` : undefined}
        autoComplete="off"
        value={value}
        disabled={disabled}
        reversed={isReversed}
        endIconAdornment={
          <button
            ref={buttonRef}
            aria-disabled={disabled ? true : undefined}
            disabled={disabled}
            onClick={onButtonClick}
            type="button"
            className={classnames(styles.iconButton, {
              [styles.calendarActive]: isOpen,
            })}
            aria-label={value ? `Change date, ${value}` : "Choose date"}
          >
            <div
              className={classnames({
                [styles.disabled]: disabled,
              })}
            >
              <Icon icon={icon} role="presentation" />
            </div>
          </button>
        }
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
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
        className={classnames(styles.message, {
          [styles.disabled]: disabled,
        })}
      >
        <FieldMessage
          id={`${id}-field-message`}
          message={getDescription()}
          reversed={isReversed}
        />
      </div>
    </FieldGroup>
  )
}

DateInput.displayName = "DateInput"
