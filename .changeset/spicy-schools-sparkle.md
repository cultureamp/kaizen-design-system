---
"@kaizen/components": minor
---

TS guarding on icon components to better ensure accessibility. `role` is a required prop, prompting engineers to consciously choose between meaningful (`role="img"`) or decorative (`role="presentation"`) on each usage. The `aria-label` prop is required when the icon is meaningful.