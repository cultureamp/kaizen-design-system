---
"@kaizen/components": minor
---

Added the following foundational styles to dist/styles.css:

- Reset: initially to provide the border properties that support Tailwind's border default settings.
- Fonts: with font-face definitions for Inter, Tiempos and IBM Mono
- Normalize: A standard Normalize already present across CultureAmp
- Layers: A set of CSS layers to help control the specificity of these 3 CSS stylesheets and our component's CSS.

**Important: Remove any other normalize or reset stylesheets in your application repo**
