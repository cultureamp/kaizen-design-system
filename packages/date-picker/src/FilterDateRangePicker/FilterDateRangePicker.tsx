import React, { useEffect, HTMLAttributes, useRef, useState } from "react"
import classnames from "classnames"
import { FocusOn } from "react-focus-on"
import { OverrideClassName } from "@kaizen/component-base"
import { CalendarRange, CalendarRangeProps } from "../_subcomponents/Calendar"
import { FloatingCalendarWrapper } from "../_subcomponents/FloatingCalendarWrapper"
import { useDateInputHandlers } from "../hooks/useDateInputHandlers"
import {
  DataAttributes,
  DateRange,
  DisabledDayMatchers,
  SupportedLocales,
  ValidationResponse,
} from "../types"
import { calculateDisabledDays } from "../utils/calculateDisabledDays"
import { formatDateAsText } from "../utils/formatDateAsText"
import { getLocale } from "../utils/getLocale"
import { validateDate } from "../utils/validateDate"
import { DateRangeDisplayLabel } from "./components/DateRangeDisplayLabel"
import {
  DateRangeInputField,
  DateRangeInputFieldProps,
} from "./components/DateRangeInputField"
import {
  FilterTriggerButton,
  FilterTriggerButtonProps,
  RemovableFilterTriggerButton,
} from "./components/Trigger"
import { DateRangeValidationStatus } from "./types"
import { isCompleteDateRange } from "./utils/isCompleteDateRange"
import styles from "./FilterDateRangePicker.module.scss"

type InputRangeStartProps = DateRangeInputFieldProps["inputRangeStartProps"]
type InputRangeEndProps = DateRangeInputFieldProps["inputRangeEndProps"]

type FilterInputProps<InputProps> = Omit<Partial<InputProps>, "value"> &
  DataAttributes

export type FilterDateRangePickerProps = OverrideClassName<
  HTMLAttributes<HTMLDivElement>
> &
  DisabledDayMatchers &
  DateRangeValidationStatus & {
    id: string
    label: string
    locale: SupportedLocales
    /**
     * Sets first displayed month to month of provided date if there isn't a date set.
     */
    defaultMonth?: CalendarRangeProps["defaultMonth"]
    /**
     * The date range passed in from the consumer that renders in the inputs and calendar.
     */
    selectedRange: DateRange | undefined
    /**
     * Callback when date is updated either by the calendar picker or by typing and blurring.
     * Date will return as `undefined` if empty, invalid or disabled.
     */
    onRangeChange: (range: DateRange | undefined) => void
    onRemoveFilter?: () => void
    inputRangeStartProps?: FilterInputProps<InputRangeStartProps>
    inputRangeEndProps?: FilterInputProps<InputRangeEndProps>
    /**
     * Custom description to provide extra context (input format help text remains).
     */
    description?: DateRangeInputFieldProps["description"]
    /**
     * Callback when a date is selected. Utilises internal validation if not set.
     */
    onValidate?: {
      dateStart?: (validationResponse: ValidationResponse) => void
      dateEnd?: (validationResponse: ValidationResponse) => void
    }
  }

export const FilterDateRangePicker = ({
  id,
  label,
  locale: propsLocale,
  defaultMonth,
  selectedRange,
  onRangeChange,
  disabledDates,
  disabledDaysOfWeek,
  disabledRange,
  disabledBeforeAfter,
  disabledBefore,
  disabledAfter,
  onRemoveFilter,
  inputRangeStartProps,
  inputRangeEndProps,
  description,
  status,
  validationMessage,
  onValidate,
  classNameOverride,
  ...restProps
}: FilterDateRangePickerProps): JSX.Element => {
  const locale = getLocale(propsLocale)
  const disabledDays = calculateDisabledDays({
    disabledDates,
    disabledDaysOfWeek,
    disabledRange,
    disabledBeforeAfter,
    disabledBefore,
    disabledAfter,
  })
  const inputRangeStartLabel = inputRangeStartProps?.labelText || "Date from"
  const inputRangeEndLabel = inputRangeEndProps?.labelText || "Date to"

  const transformDateToInputValue = (date: Date | undefined): string =>
    date ? formatDateAsText(date, disabledDays, locale) : ""

  const rangeStart = selectedRange?.from
  const rangeEnd = selectedRange?.to
  const transformedRangeStart = transformDateToInputValue(rangeStart)
  const transformedRangeEnd = transformDateToInputValue(rangeEnd)

  const buttonRef = useRef<HTMLButtonElement>(null)
  const removableButtonRefs = useRef(
    onRemoveFilter
      ? {
          triggerButtonRef: buttonRef,
        }
      : null
  )
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [startMonth, setStartMonth] = useState<Date>(
    rangeStart || defaultMonth || new Date()
  )

  useEffect(() => {
    if (!isOpen) {
      if (rangeStart !== startMonth) {
        setStartMonth(rangeStart || defaultMonth || new Date())
      }
    }
  }, [isOpen, rangeStart])

  const [inputRangeStartValue, setInputRangeStartValue] = useState<string>(
    transformedRangeStart
  )
  const [inputRangeEndValue, setInputRangeEndValue] =
    useState<string>(transformedRangeEnd)

  useEffect(() => {
    if (!isOpen) {
      if (transformedRangeStart !== inputRangeStartValue) {
        setInputRangeStartValue(transformedRangeStart)
      }
      if (transformedRangeEnd !== inputRangeEndValue) {
        setInputRangeEndValue(transformedRangeEnd)
      }
    }
  }, [isOpen, rangeStart, rangeEnd])

  const [inbuiltStartDateStatus, setInbuiltStartDateStatus] = useState<
    ValidationResponse["status"] | undefined
  >()
  const [
    inbuiltStartDateValidationMessage,
    setInbuiltStartDateValidationMessage,
  ] = useState<string | undefined>()
  const [inbuiltEndDateStatus, setInbuiltEndDateStatus] = useState<
    ValidationResponse["status"] | undefined
  >()
  const [inbuiltEndDateValidationMessage, setInbuiltEndDateValidationMessage] =
    useState<string | undefined>()

  const onValidateDateStart = onValidate?.dateStart
  const onValidateDateEnd = onValidate?.dateEnd

  const shouldUseInbuiltStartDateValidation = onValidateDateStart === undefined
  const shouldUseInbuiltEndDateValidation = onValidateDateEnd === undefined

  const handleDateRangeChange = (dateRange: DateRange | undefined): void => {
    onRangeChange(dateRange)
  }

  const validateNewDate = (
    date: Date | undefined,
    inputValue: string,
    onValidateDate: (validationResponse: ValidationResponse) => void
  ): Date | undefined => {
    const { validationResponse, newDate } = validateDate({
      date,
      inputValue,
      disabledDays,
    })

    onValidateDate(validationResponse)

    return newDate
  }

  const handleValidateStartDate = (
    validationResponse: ValidationResponse
  ): void => {
    if (shouldUseInbuiltStartDateValidation) {
      const message = validationResponse.validationMessage
      setInbuiltStartDateStatus(validationResponse.status)
      setInbuiltStartDateValidationMessage(
        message ? `${inputRangeStartLabel}: ${message}` : undefined
      )
      return
    }

    onValidateDateStart(validationResponse)
  }

  const validateStartDate = (date: Date | undefined): Date | undefined =>
    validateNewDate(date, inputRangeStartValue, handleValidateStartDate)

  const inputRangeStartHandlers = useDateInputHandlers({
    locale,
    disabledDays,
    setInputValue: setInputRangeStartValue,
    onDateChange: date => {
      const newDate = validateStartDate(date)
      handleDateRangeChange({ from: newDate, to: rangeEnd })
      if (newDate) setStartMonth(newDate)
    },
    ...inputRangeStartProps,
  })

  const handleValidateEndDate = (
    validationResponse: ValidationResponse
  ): void => {
    if (shouldUseInbuiltEndDateValidation) {
      const message = validationResponse.validationMessage
      setInbuiltEndDateStatus(validationResponse.status)
      setInbuiltEndDateValidationMessage(
        message ? `${inputRangeEndLabel}: ${message}` : undefined
      )
      return
    }

    onValidateDateEnd(validationResponse)
  }

  const validateEndDate = (date: Date | undefined): Date | undefined =>
    validateNewDate(date, inputRangeEndValue, handleValidateEndDate)

  const inputRangeEndHandlers = useDateInputHandlers({
    locale,
    disabledDays,
    setInputValue: setInputRangeEndValue,
    onDateChange: date => {
      const newDate = validateEndDate(date)
      handleDateRangeChange({ from: rangeStart, to: newDate })
    },
    ...inputRangeEndProps,
  })

  const handleCalendarSelectRange: CalendarRangeProps["onSelect"] = range => {
    const newStartDate = validateStartDate(range?.from)
    const newEndDate = validateEndDate(range?.to)
    setInputRangeStartValue(transformDateToInputValue(newStartDate))
    setInputRangeEndValue(transformDateToInputValue(newEndDate))
    handleDateRangeChange({ from: newStartDate, to: newEndDate })
  }

  const triggerButtonProps: FilterTriggerButtonProps & DataAttributes = {
    id,
    label,
    "aria-haspopup": "dialog",
    onClick: () => setIsOpen(!isOpen),
    isOpen,
    selectedValue: isCompleteDateRange(selectedRange) ? (
      <DateRangeDisplayLabel dateRange={selectedRange} locale={locale} />
    ) : undefined,
  }

  useEffect(() => {
    const newStartDate = validateStartDate(selectedRange?.from)
    const newEndDate = validateEndDate(selectedRange?.to)
    if (isOpen) handleDateRangeChange({ from: newStartDate, to: newEndDate })
  }, [isOpen])

  return (
    <div
      className={classnames(
        styles.filterDateRangePickerContainer,
        classNameOverride
      )}
      {...restProps}
    >
      {onRemoveFilter ? (
        <RemovableFilterTriggerButton
          ref={removableButtonRefs}
          triggerButtonProps={triggerButtonProps}
          removeButtonProps={{
            onClick: onRemoveFilter,
          }}
        />
      ) : (
        <FilterTriggerButton ref={buttonRef} {...triggerButtonProps} />
      )}

      {isOpen && (
        <FocusOn
          scrollLock={false}
          onClickOutside={(): void => setIsOpen(false)}
          onEscapeKey={(): void => setIsOpen(false)}
        >
          <FloatingCalendarWrapper
            referenceElement={buttonRef.current}
            aria-label={label}
          >
            <DateRangeInputField
              id={`${id}--input`}
              legend={label}
              inputRangeStartProps={{
                labelText: inputRangeStartLabel,
                value: inputRangeStartValue,
                ...inputRangeStartProps,
                // The below props extend the values from inputRangeStartProps, therefore must be below the spread
                ...inputRangeStartHandlers,
              }}
              inputRangeEndProps={{
                labelText: inputRangeEndLabel,
                value: inputRangeEndValue,
                ...inputRangeEndProps,
                // The below props extend the values from inputRangeEndProps, therefore must be below the spread
                ...inputRangeEndHandlers,
              }}
              locale={locale}
              description={description}
              status={{
                dateStart: shouldUseInbuiltStartDateValidation
                  ? inbuiltStartDateStatus
                  : status?.dateStart,
                dateEnd: shouldUseInbuiltEndDateValidation
                  ? inbuiltEndDateStatus
                  : status?.dateEnd,
              }}
              validationMessage={{
                dateStart: shouldUseInbuiltStartDateValidation
                  ? inbuiltStartDateValidationMessage
                  : validationMessage?.dateStart,
                dateEnd: shouldUseInbuiltEndDateValidation
                  ? inbuiltEndDateValidationMessage
                  : validationMessage?.dateEnd,
              }}
              classNameOverride={styles.dateRangeInputField}
            />
            <CalendarRange
              disabled={disabledDays}
              locale={locale}
              selected={selectedRange}
              onSelect={handleCalendarSelectRange}
              month={startMonth}
              onMonthChange={setStartMonth}
            />
          </FloatingCalendarWrapper>
        </FocusOn>
      )}
    </div>
  )
}

FilterDateRangePicker.displayName = "FilterDateRangePicker"
