---
"@kaizen/date-picker": patch
---

* Deprecate `FilterDateRangePicker` (replaced by `FilterDateRangePicker` in `@kaizen/components`)
  * Changes seen in the new component:
    * Use `Filter` structure where open state and Filter Button are passed in by consumer
    * Validation structure changed from `status: FieldMessageStatus` & `validationMessage: string` to `validationMessage: { status: FieldMessageStatus; message: string }`
    * Rename `inputRangeStartProps` to `inputStartDateProps`
    * Rename `inputRangeEndProps` to `inputEndDateProps`
    * Prop `disabledDays` replaces the multiple disabled props to closer match the `react-day-picker` api
* Fix `isSelectingDayInCalendar` util (classList may be undefined)
* Add `DisabledDays` type
  * Uses type from `react-day-picker`
  * Update hooks/utils to use `DisabledDays` instead of `Matcher[]`
* Improve tests for `useDateInputHandlers`
