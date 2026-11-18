---
'@kaizen/components': patch
---

fix(checkbox): announce read-only state to screen readers

A `Checkbox` or `CheckboxField` without `onCheck` (and not `disabled`) now has a translated "Read only" accessible description. The accessible name is unchanged, and any `aria-describedby` passed in is kept.

`Checkbox` now calls `useIntl`, so `Checkbox`, `CheckboxField` and components that use them (such as `Table`) must render inside an intl provider, for example `KaizenProvider`. This already applies to other Kaizen components that translate text.
