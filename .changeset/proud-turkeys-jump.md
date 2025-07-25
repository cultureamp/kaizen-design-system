---
'@kaizen/components': patch
---

Refactor FilterMultiSelect to allow for the custom rendering of the MenuPopup

- add customMenuPopup prop that accepts at React Component with MenuPopup render props
- add ResponsiveMenuPopup component that uses the floating-ui lib and Popover Web API

This was a backported fix from 46c3364. When upgrading you will need to move to kaizen/components@1.80.0
