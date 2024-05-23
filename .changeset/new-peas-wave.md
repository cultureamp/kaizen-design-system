---
"@kaizen/package-bundler": patch
"@kaizen/components": patch
---

Fix style injection by removing PURE comment.

Builds in Storybook and Next fail when the comment exists.
