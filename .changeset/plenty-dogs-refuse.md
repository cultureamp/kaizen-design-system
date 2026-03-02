---
'@kaizen/components': major
---

Rollout of @kaizen/components V3

- Remove deprecated props and utilities marked for removal since v1/v2
  - GuidanceBlock: Remove `actions`, `secondaryDismiss`, `withActionButtonArrow` props (use `actionsSlot` instead)
  - Form inputs: Remove `placeholder` prop from Input, TextArea, TextField, TextAreaField, SingleSelect, SelectToggle, DatePicker, and Select (use `labelText` and `description` for a11y compliance)
  - Button and LinkButton: Remove `isReversed` prop (use ReversedColors Provider instead)
  - ModalFooter: Remove `appearance` prop (pass `primary` or `destructive` directly in action props)
  - Calendar: Remove deprecated React Day Picker props (fromDate, fromMonth, fromYear, toDate, toMonth, toYear, initialFocus, onDayKeyUp, onDayKeyPress, onDayPointerEnter, onDayPointerLeave, onDayTouchCancel, onDayTouchEnd, onDayTouchMove, onDayTouchStart, onWeekNumberClick)
  - Remove Modal `warn` utility (GenericModal now uses native console.warn)
  - Remove `useResizeObserver` hook (use native ResizeObserver DOM API)
  - Remove SingleSelect legacy exports `TriggerButton` and `ListBox`
- Refactor TimeField internal validation state handling (non-breaking)
