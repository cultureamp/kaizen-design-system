---
"@kaizen/date-picker": patch
---

* Deprecate `FilterDateRangePicker`
* Fix `isSelectingDayInCalendar` util (classList may be undefined)
* Add `DisabledDays` type
  * Uses type from `react-day-picker`
  * Update hooks/utils to use `DisabledDays` instead of `Matcher[]`
* Improve tests for `useDateInputHandlers`
