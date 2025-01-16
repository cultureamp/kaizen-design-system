---
'@kaizen/components': patch
---

Fix circular dependencies in types for Brand, TitleBlockZen, RC Button and Calendars

This aims to address sporadic hang time during CI build as Vite - see https://provash.dev/blog/avoid-circular-dependency-in-vite/
