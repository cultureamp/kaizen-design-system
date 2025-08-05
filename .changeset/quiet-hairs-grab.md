---
'@kaizen/components': patch
---

Add codemod for KAIOv2 import path migration to current

Migrates Menu, Tabs, and Tooltip

- `Menu` from `/v3/actions` and `/next` to current
- `Tabs` from `/future` and `/next` to current
- `Tooltip` from `/v3/overlays`, `/future` and `/next` to current

This also captures `MenuItem`, `MenuHeader`, `MenuPopover`, `MenuSection`, `MenuTrugger`, `Tab`, `TabList`, `TabPanel` and `TooltipTrigger`.
