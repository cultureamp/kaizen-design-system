---
"@kaizen/components": minor
---

Add functionality for dependent filters to `<FilterBar>`.

Consumers can now set a `isUsableWhen` attribute to their `filters`.
Filters with this attribute will be checked against the current state
and shown/hidden from the FilterBar options (both active/inactive) accordingly.
