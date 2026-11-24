---
'@kaizen/components': minor
---

feat(checkbox): add read-only styles, prevent state changes, and announce read-only to screen readers

A `Checkbox` without `onCheck` or with `readOnly` set and not `disabled` is now treated as read-only: clicks and Space are cancelled so its state cannot be changed, including `mixed` checkboxes. A consumer `onClick` is still called.

Read-only `Checkbox` and `CheckboxField` instances now include a translated "Read only" accessible description. The accessible name is unchanged, and any `aria-describedby` passed in is kept.

This also changes the look of every `Checkbox`, `CheckboxField` and checkable `TableHeaderRowCell` without `onCheck` or with `readOnly`: the box gets a muted gray fill and border. Pass `onCheck` to keep a checkbox interactive.

Read-only `Checkbox`es now render `<FormattedMessage>`, so read-only `Checkbox`, `CheckboxField` and components that use them such as `Table` must render inside an intl provider like `KaizenProvider`. Interactive checkboxes with `onCheck` are unaffected.
