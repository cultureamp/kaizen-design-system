---
'@kaizen/components': minor
---

Refactor FilterMultiSelect to allow for the custom rendering of the MenuPopup

- add customMenuPopup prop that accepts at React Component with MenuPopup render props
- add ResponsiveMenuPopup component that uses the floating-ui lib and Popover Web API
