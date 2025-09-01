---
'@kaizen/components': patch
---

Refactor GenericModal to reduce risk of race conditions

- Replace FocusLock component with FocusOn
- Remove manual implementation of Escape and keyup event listeners and move the handlers to the FocusOn component
  - Remove PreventBodyScroll
- Update scrollLayer and modalLayer state elements to use refs to avoid unnecessary rerenders
- Remove use of beforeEnterHandler as this was redundant after changes
