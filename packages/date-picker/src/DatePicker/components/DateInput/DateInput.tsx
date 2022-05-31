import React, { useEffect, useState } from "react"
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
import { format, parse } from "date-fns"
import { Modifier } from "react-day-picker"
import { DateFormat } from "../../enums"
import { isInvalidDate } from "../../../utils/isInvalidDate"
import { isDisabledDate } from "../../../utils/isDisabledDate"
import styles from "./DateInput.scss"

type OmittedInputProps =
  | "startIconAdornment"
  | "endIconAdornment"
  | "inputType"
  | "status"
  | "inputValue"
  | "reversed"
  | "onBlur"
  | "value"
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
  valueDate: Date | undefined
  /**
   * The callback for then onBlur is triggered on the input
   */
  onBlur: (date: Date | undefined, inputValue: string) => void
  disabledDays?: Modifier | Modifier[]
  /**
   * A descriptive message for `status` states
   */
  validationMessage?: string | React.ReactNode
  /**
   * Updates the styling of the validation FieldMessage
   */
  status?: FieldMessageStatus
}

const formatDateAsText = (
  date: Date,
  disabledDays: Modifier | Modifier[],
  onFormat: (newFormattedDate: string) => void
): void => {
  if (isDisabledDate(date, disabledDays)) {
    return onFormat(format(date, DateFormat.Numeral))
  }
  if (isInvalidDate(date)) {
    return onFormat("Invalid Date")
  }
  onFormat(format(date, DateFormat.Text))
}

export const DateInput: React.VFC<DateInputProps> = ({
  id,
  disabled = false,
  buttonRef,
  labelText,
  description,
  isReversed = false,
  icon,
  onButtonClick,
  calendarId,
  isOpen,
  valueDate,
  onBlur,
  disabledDays,
  validationMessage,
  status,
  ...inputProps
}) => {
  const [valueString, setValueString] = useState<string>("")

  useEffect(() => {
    valueDate && formatDateAsText(valueDate, disabledDays, setValueString)
  }, [valueDate])

  const handleBlur: React.FocusEventHandler<HTMLInputElement> = (): void => {
    if (valueString !== "") {
      const parsedDate = parse(valueString, DateFormat.Numeral, new Date())
      if (isInvalidDate(parsedDate)) {
        return onBlur(parsedDate, valueString)
      }

      formatDateAsText(parsedDate, disabledDays, setValueString)
      return onBlur(parsedDate, valueString)
    }
    onBlur(undefined, valueString)
  }
  const handleFocus = (): void => {
    valueDate && setValueString(format(valueDate, DateFormat.Numeral))
  }

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }): void => setValueString(target.value)

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
        id={id}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-controls={calendarId}
        aria-describedby={description ? `${id}-field-message` : undefined}
        autoComplete="off"
        value={valueString}
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
            aria-label={
              valueString ? `Change date, ${valueString}` : "Choose date"
            }
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
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
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
