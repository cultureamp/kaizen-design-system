---
"@kaizen/components": minor
---

Inject styles per component in dist.

Consumers will no longer need to inject the full set of components styles from `@kaizen/components/dist/styles.css`, as they will now inject themselves when required.

`@kaizen/components/dist/styles.css` now contains only the global styles (CSS variables, normalize/reset, assets).
