---
'@kaizen/package-bundler': patch
'@kaizen/design-tokens': patch
'@kaizen/components': patch
'@kaizen/tailwind': patch
'@docs/storybook': patch
---

Deps updates and type component fixes for RC MenuItem and Tab

- Update deps
- Update RC MenuItem and Tab child render to fix types issues after upgrade to typescript 5.7.3 upgrade
- Update test-runner to use imported Page type from Playwright to reflect updated dep
- Update Badge duplicate color declaration
