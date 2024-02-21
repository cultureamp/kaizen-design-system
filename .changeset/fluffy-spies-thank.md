---
"@kaizen/components": patch
---

Bug fix for modals: ensure clean up runs when the modal is unmounted.

This bug created unscrollable pages if the modal was removed from the DOM before its `onAfterLeave` callback was able to run.
