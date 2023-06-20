---
"@kaizen/components": patch
---

**FilterDatePicker, FilterDateRangePicker**
Fixed issue where selecting the dates from the date pickers would return a validation object containing an the previously picked date rather than the current one in the `inputValue` key. Only really affects those who use the custom validation functionality, relying on the input value returned.
