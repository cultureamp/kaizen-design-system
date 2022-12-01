import React, { HTMLAttributes, useRef, useState } from "react"
import classnames from "classnames"
import { FocusOn } from "react-focus-on"
import { OverrideClassName } from "@kaizen/component-base"
import { CalendarRange, CalendarRangeProps } from "../_subcomponents/Calendar"
import { FloatingCalendarWrapper } from "../_subcomponents/FloatingCalendarWrapper"
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
import { handleDateRangeInputChange } from "./handlers/handleDateRangeInputChange"
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

export const FilterDateRangePicker: React.VFC<FilterDateRangePickerProps> = ({
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
}) => {
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

  const [inputRangeStartValue, setInputRangeStartValue] = useState<
    InputRangeStartProps["value"]
  >(
    selectedRange?.from
      ? formatDateAsText(selectedRange.from, disabledDays, locale)
      : ""
  )
  const [inputRangeEndValue, setInputRangeEndValue] = useState<
    InputRangeEndProps["value"]
  >(
    selectedRange?.to
      ? formatDateAsText(selectedRange.to, disabledDays, locale)
      : ""
  )

  const handleDateRangeChange = (dateRange: DateRange | undefined): void => {
    onRangeChange(dateRange)
  }

  const handleCalendarSelectRange: CalendarRangeProps["onSelect"] = range => {
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

  const handleInputRangeStartChange: InputRangeStartProps["onChange"] = e => {
    handleDateRangeInputChange({
      onNewInputValue: setInputRangeStartValue,
      newValue: e.currentTarget.value,
    })
    inputRangeStartProps?.onChange?.(e)
  }

  const handleInputRangeEndChange: InputRangeEndProps["onChange"] = e => {
    handleDateRangeInputChange({
      onNewInputValue: setInputRangeEndValue,
      newValue: e.currentTarget.value,
    })
    inputRangeEndProps?.onChange?.(e)
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
          onClickOutside={() => setIsOpen(false)}
          onEscapeKey={() => setIsOpen(false)}
        >
          <FloatingCalendarWrapper
            referenceElement={buttonRef.current}
            aria-label={label}
          >
            <DateRangeInputField
              id={`${id}--input`}
              inputRangeStartProps={{
                labelText: "Date from",
                value: inputRangeStartValue,
                ...inputRangeStartProps,
                // The below props extend the values from inputRangeStartProps, therefore must be below the spread
                onChange: handleInputRangeStartChange,
              }}
              inputRangeEndProps={{
                labelText: "Date to",
                value: inputRangeEndValue,
                ...inputRangeEndProps,
                // The below props extend the values from inputRangeEndProps, therefore must be below the spread
                onChange: handleInputRangeEndChange,
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
