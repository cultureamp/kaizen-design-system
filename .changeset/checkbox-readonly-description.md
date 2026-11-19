---
'@kaizen/components': patch
---

fix(checkbox): prevent read-only checkboxes changing state and announce read-only to screen readers

**Bug fix:** a `Checkbox` without `onCheck` was never meant to be interactive, but clicking it or pressing Space could still change its state, for example clearing a `mixed` checkbox. Clicks and Space are now cancelled when there is no `onCheck` (and the checkbox is not `disabled`). A consumer `onClick` is still called.

A `Checkbox` or `CheckboxField` without `onCheck` (and not `disabled`) now has a translated "Read only" accessible description. The accessible name is unchanged, and any `aria-describedby` passed in is kept.

This also changes the look of every `Checkbox`, `CheckboxField` and checkable `TableHeaderRowCell` without `onCheck`: the box gets a muted gray fill and border. Pass `onCheck` to keep a checkbox interactive.

`Checkbox` now calls `useIntl`, so `Checkbox`, `CheckboxField` and components that use them (such as `Table`) must render inside an intl provider, for example `KaizenProvider`. This already applies to other Kaizen components that translate text.
