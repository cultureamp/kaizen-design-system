---
"@kaizen/components": minor
---

Migrate InlineNotification and GlobalNotication to @kaizen/components

- Migrate `GenericNotification`, `GlobalNotification` and `InlineNotification` from Kaizen legacy repository
- Update component stories to modern patterns
- Remove long standing deprecated props:
 - `autohideDelay` `autohide`
   - Automatic hiding is an accessibility anti-pattern, violating WCAG '2.2 Enough Time' criteria. This prop will be removed in an upcoming breaking change.
 - `title` from `InlineNotification``
   - Use `headingProps` instead
 - `automationId` and `testId`
   - These are no longer patterns we use in testing library. Other selectors like `getByRole` or `getByText` should be used instead