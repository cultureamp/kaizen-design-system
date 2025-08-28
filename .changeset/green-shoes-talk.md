---
'@kaizen/components': patch
'@docs/storybook': patch
---

Add /libs entry point with react-aria and react-aria-component re-exports prior to v2 release.

- concurrently export react-aria and react-aria-components to `/libs` and `v3` to allow for shared libraries to migrate to the new entry point.
