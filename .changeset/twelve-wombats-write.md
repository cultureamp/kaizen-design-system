---
'@kaizen/components': patch
---

Update `RichTextContent` styles for Tailwind 4 compatibility

With Tailwind 4 we will need to load Kaizen into a CSS Cascade Layer, which
will prevent its styles from overriding the default styles injected into the
page by ProseMirror/TipTap at runtime. Where we want to override these, Kaizen
must therefore now declare these styles as `!important`.
