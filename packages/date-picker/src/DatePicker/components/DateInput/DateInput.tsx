import React, { useEffect, useState } from "react"
import { Icon } from "@kaizen/component-library"
import classnames from "classnames"
import {
  FieldGroup,
  FieldMessage,
  Input,
  InputProps,
  Label,
} from "@kaizen/draft-form"

import { format, parse } from "date-fns"
import { Modifier } from "react-day-picker"
import { DateFormat, DatePickerValidation } from "../../DatePicker"
import { isInvalidDate } from "../../../utils/isInvalidDate"
import { isDisabledDate } from "../../../utils/isDisabledDate"
import styles from "./DateInput.scss"

type OmittedInputProps =
  | "startIconAdornment"
  | "endIconAdornment"
  | "inputType"
  | "inputValue"
  | "reversed"
  | "onBlur"
  | "value"

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
  onButtonClick: () => void
  isReversed?: boolean
  valueDate: Date | undefined
  onBlur: (date: Date | undefined) => void
  disabledDays?: Modifier | Modifier[]
  /**
   * A descriptive message for `error` states
   */
  validationMessage?: string | React.ReactNode
  status?: "default" | "error"
  onValidation: (validationObj: DatePickerValidation) => void
}

const formatDateAsText = (
  date: Date,
  disabledDays: Modifier | Modifier[],
  onValidDate: (newFormattedDate: string) => void
): void => {
  if (!isInvalidDate(date) && !isDisabledDate(date, disabledDays)) {
    onValidDate(format(date, DateFormat.Text))
  }
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
  onValidation,
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
      formatDateAsText(parsedDate, disabledDays, setValueString)
      return onBlur(parsedDate)
    } else {
      onBlur(undefined)
    }
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
      {status !== "default" && (
        <div
          className={classnames(styles.message, {
            [styles.disabled]: disabled,
          })}
        >
          <FieldMessage
            id={`${id}-field-message`}
            automationId={`${id}-field-validation-message`}
            message={validationMessage}
            status={status}
            reversed={isReversed}
          />
        </div>
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
