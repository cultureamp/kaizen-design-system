---
"@kaizen/components": patch
---

- Prevent infinite loop when calling `toggleOpenFilter` from selecting a value.
- Deprecate `toggleOpenFilter`, and replace with `setFilterOpenState` for clearer function intent.
