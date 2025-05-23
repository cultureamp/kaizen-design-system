---
'@kaizen/design-tokens': minor
'@kaizen/components': minor
'@kaizen/tailwind': minor
'@docs/storybook': minor
---

Upgrade packages to support React 19

- Update all peer dependencies to support 18-19 range
- Update react-day-picker to v9
  - this changes some UX (for the better) when using active ranges
  - the dom structure has changed and may require test and css updates
- Some dependencies have their peerDeps altered to allow 19, these will eventually be removed

_Note_ updating to this version of kaizen will not force you onto react 19 it'll continue to use 18 until you upgrade the consuming app
