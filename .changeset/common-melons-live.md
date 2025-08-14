---
'@kaizen/components': major
---

Rollout of @kaizen/components V2

- Rename Select (Next) to SingleSelect and move to base entry point
- Remove Skirt, SkirtCard and SplitButton
- Rename TitleBlockZen to TitleBlock
- Removed retired props
  - Prop migrations:
    - `mood` to `variant`
    - `automationId` to `data-testid`
    - Card `variant` to `color`
    - ProgessBar `mood` to `color`
    - Well `variant` to `color`
  - Prop removals:
    - Select/next `trigger.ref` and `disabledValues`
    - EmptyState `layoutContext` and `illustrationType`
    - FilterBarContext `toggleOpenFilter`
    - Popover `customIcon`, remove `variant`
