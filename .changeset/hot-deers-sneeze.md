---
"@kaizen/components": patch
---

Add a deprecated isReversed prop to Button v3 to allow for safe migration path to the ReversedColors Provider.

* `isReversed` to allow users to toggle the reversed variants with a `boolean`.
* Adds `@deprecated` flag to prompt user to use the `ReverseColors` Provider instead.
