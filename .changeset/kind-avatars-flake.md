---
'@kaizen/components': patch
---

Fix continued Chromatic flakiness on Avatar with long initials. The previous `data-chromatic="ignore"` fix was applied to an element whose size changes with the non-deterministic dynamic font size, and consequently has continued to trigger Chromatic diffs. This change promotes that fix to the parent `abbr`, which has a fixed size, as recommended by Chromatic support to resolve the flakiness.
