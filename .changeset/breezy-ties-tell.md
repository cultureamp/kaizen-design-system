---
"@kaizen/components": patch
---

Fix FilterSelect to find the matching item using the `selectedKey` prop when the item value is a number, as the useSelectState hook transforms the number to a string.
