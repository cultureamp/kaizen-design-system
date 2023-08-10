---
"@kaizen/components": minor
---

#### FilterBar

- Prevent infinite loop when calling `toggleOpenFilter` from selecting a value.
- Deprecate `toggleOpenFilter`, and replace with `setFilterOpenState` for clearer function intent.
- Add context util `openFilter` for consumers to be able to open a filter through an event from another filter.
