---
"@kaizen/select": minor
---

* Upgrade `react-aria`, `shared-types`, `react-stately`
  * Fix type errors where value can now be `null`
* Add type `MultiSelectItem` and replaced usage of `Node<T>`
* Fix broken selector in Playwright causing false negatives