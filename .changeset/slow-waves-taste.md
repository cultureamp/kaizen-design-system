---
"@kaizen/components": patch
---

Menu component now has built in focus lock. Most notably this has added:

- Esc press to close the menu
- Focus will now go back to the menu button when the menu closes. This works even if the menu action opens a modal first, as long as the modal is mounted to the DOM before the action is pressed.

Any instances where focus is manually being put back onto the menu after a modal close or similar can now be removed (unless you're conditionally rendering the modal as mentioned above).
