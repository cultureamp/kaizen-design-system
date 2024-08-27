---
"@kaizen/components": minor
---

Create v3 Workflow component, changing footer to a white background

Two adjustments will need to be made on the implementation side when upgrading from v2 to v3:

- All footer buttons should have the `reversed` prop removed
- Next button in the footer should have `primary` prop added (not just the finish button as previously)
