---
"@kaizen/reset.css": major
---

Initialising this package with a reset to the border properties to support Tailwind's border default settings.

- Allows for simpler use of border util classes, ie: border-l
- This will also remove all non-explicit borders, ie: inheritance from native browser styles
- Check your chromatic snapshots and add sensible defaults where required
