---
"@kaizen/components": patch
---

Fix `RTE <Positioner>` to be SSR friendly.

Also fix `Popover` semantic structure where `<Text>` was used as a container but
defaulted to a `p`; changed to a `div`.
