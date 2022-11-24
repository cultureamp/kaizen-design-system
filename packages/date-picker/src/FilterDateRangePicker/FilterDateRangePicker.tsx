import React, { HTMLAttributes, useRef, useState } from "react"
import { FocusOn } from "react-focus-on"
import { OverrideClassName } from "@kaizen/component-base"
import { CalendarRange, CalendarRangeProps } from "../_subcomponents/Calendar"
import { FloatingCalendarWrapper } from "../_subcomponents/FloatingCalendarWrapper"
import { DateRange, DisabledDayMatchers, SupportedLocales } from "../types"
import { calculateDisabledDays } from "../utils/calculateDisabledDays"
import { getLocale } from "../utils/getLocale"
import { FilterTriggerButton } from "./components/Trigger"

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
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
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

  const handleDateRangeChange = (dateRange: DateRange | undefined): void => {
    onRangeChange(dateRange)
  }

  const handleCalendarSelectRange: CalendarRangeProps["onSelect"] = range => {
    handleDateRangeChange(range)
  }

  return (
    <>
      <FilterTriggerButton
        ref={buttonRef}
        id={id}
        label={label}
        aria-haspopup="dialog"
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        selectedValue={`${selectedRange?.from?.toDateString()} - ${selectedRange?.to?.toDateString()}`}
      />

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
    </>
  )
}

FilterDateRangePicker.displayName = "FilterDateRangePicker"
