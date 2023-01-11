import React, { HTMLAttributes, useRef, useState } from "react"
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
} from "../types"
import { calculateDisabledDays } from "../utils/calculateDisabledDays"
import { formatDateAsText } from "../utils/formatDateAsText"
import { getLocale } from "../utils/getLocale"
import {
  DateRangeInputField,
  DateRangeInputFieldProps,
} from "./components/DateRangeInputField"
import {
  FilterTriggerButton,
  FilterTriggerButtonProps,
  RemovableFilterTriggerButton,
} from "./components/Trigger"
import { formatDateRange } from "./utils/formatDateRange"
import styles from "./FilterDateRangePicker.module.scss"

type InputRangeStartProps = DateRangeInputFieldProps["inputRangeStartProps"]
type InputRangeEndProps = DateRangeInputFieldProps["inputRangeEndProps"]

type FilterInputProps<InputProps> = Omit<Partial<InputProps>, "value"> &
  DataAttributes

export interface FilterDateRangePickerProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>>,
    DisabledDayMatchers {
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
  classNameOverride,
  ...restProps
}: FilterDateRangePickerProps): JSX.Element => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const removableButtonRefs = useRef(
    onRemoveFilter
      ? {
          triggerButtonRef: buttonRef,
        }
      : null
  )
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const locale = getLocale(propsLocale)
  const disabledDays = calculateDisabledDays({
    disabledDates,
    disabledDaysOfWeek,
    disabledRange,
    disabledBeforeAfter,
    disabledBefore,
    disabledAfter,
  })

  const transformDateToInputValue = (date: Date | undefined): string =>
    date ? formatDateAsText(date, disabledDays, locale) : ""

  const [inputRangeStartValue, setInputRangeStartValue] = useState<
    InputRangeStartProps["value"]
  >(transformDateToInputValue(selectedRange?.from))
  const [inputRangeEndValue, setInputRangeEndValue] = useState<
    InputRangeEndProps["value"]
  >(transformDateToInputValue(selectedRange?.to))

  const handleDateRangeChange = (dateRange: DateRange | undefined): void => {
    onRangeChange(dateRange)
  }

  const inputRangeStartHandlers = useDateInputHandlers({
    locale,
    disabledDays,
    setInputValue: setInputRangeStartValue,
    onDateChange: date =>
      handleDateRangeChange({ from: date, to: selectedRange?.to }),
    ...inputRangeStartProps,
  })

  const inputRangeEndHandlers = useDateInputHandlers({
    locale,
    disabledDays,
    setInputValue: setInputRangeEndValue,
    onDateChange: date =>
      handleDateRangeChange({ from: selectedRange?.from, to: date }),
    ...inputRangeEndProps,
  })

  const handleCalendarSelectRange: CalendarRangeProps["onSelect"] = range => {
    setInputRangeStartValue(transformDateToInputValue(range?.from))
    setInputRangeEndValue(transformDateToInputValue(range?.to))
    handleDateRangeChange(range)
  }

  const triggerButtonProps: FilterTriggerButtonProps & DataAttributes = {
    id,
    label,
    "aria-haspopup": "dialog",
    onClick: () => setIsOpen(!isOpen),
    isOpen,
    selectedValue: formatDateRange(selectedRange, locale),
  }

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
            onClick: () => undefined,
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
                labelText: "Date from",
                value: inputRangeStartValue,
                ...inputRangeStartProps,
                // The below props extend the values from inputRangeStartProps, therefore must be below the spread
                ...inputRangeStartHandlers,
              }}
              inputRangeEndProps={{
                labelText: "Date to",
                value: inputRangeEndValue,
                ...inputRangeEndProps,
                // The below props extend the values from inputRangeEndProps, therefore must be below the spread
                ...inputRangeEndHandlers,
              }}
              locale={locale}
            />
            <CalendarRange
              defaultMonth={defaultMonth}
              disabled={disabledDays}
              locale={locale}
              selected={selectedRange}
              onSelect={handleCalendarSelectRange}
            />
          </FloatingCalendarWrapper>
        </FocusOn>
      )}
    </div>
  )
}

FilterDateRangePicker.displayName = "FilterDateRangePicker"
