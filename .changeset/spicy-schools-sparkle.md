---
"@kaizen/components": major
---

Changes the props API on KAIO icon components to better ensure accessibility:
- `role` is now a required prop, prompting engineers to consciously choose between meaningful (`role="img"`) or decorative (`role="presentation"`) on each usage. Previous default was `role="img"`.
- The `title` prop has been renamed to `aria-label` so that there's less confusion with the native `title` HTML attribute, and to be in line with how this is implemented.
- `aria-label` is now required when the icon is meaningful (`role="img"`). Previously this would result in a console warning.
- Removes the ability to provide a `desc`. We can't see any reasons why we'd need to provide a description for an icon, and browser/screen reader support may be patchy anyway. If you run into any usages of `desc`, check if there's anything useful in there that's not already in the `aria-label`. If so, just copy it into the `aria-label`.