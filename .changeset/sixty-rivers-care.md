---
"@kaizen/draft-modal": patch
---

GenericModal uses client-only APIs which causes issues in frameworks like Next.js that hydrate React components. This change adds a wrapper around the component to render it once mounted.
