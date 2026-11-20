---
'@kaizen/components': major
---

Default the document body background to gray-100.

Apps importing `@kaizen/components/dist/styles.css` that relied on a transparent body now need to set `background-color: transparent` on `body` in an unlayered rule or a layer ordered after Kaizen's `reset` layer.
