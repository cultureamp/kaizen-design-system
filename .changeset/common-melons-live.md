---
'@kaizen/components': major
---

Rollout of @kaizen/components V2

- Rename `LikerScaleLegacy` to `LikertScale`
- Rename Select (Next) to SingleSelect and move to base entry point, ie: `import { SingleSelect } from @kaizen/components`
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
- Remove future, v1, v2, v3 and utilities entry point
  - `react-aria` and `react-aria-components` have been moved from the `v3` to `libs` entry point, ie: `@kaizen/components/libs/react-aria` or `@kaizen/components/libs/react-aria-components`
  - `/utilities` entry point has been removed and the `ReversedColors` can be accessed via the base entry point, ie: `import { ReversedColors } from @kaizen/components`
- Promoted next components to main entry point and moved existing to V1
  - Button, Icon, Menu, Tooltip, Tabs components moved from `__next__` to base export
  - Previous versions moved to V1 namespace: `ButtonV1`, `IconV1`, `MenuV1`, `TabsV1` and `TooltipV1`
- Remove `hosted-assets` package
