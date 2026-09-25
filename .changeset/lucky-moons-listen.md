---
'@kaizen/components': minor
---

feat(RichTextEditor): allow schema controls without toolbar buttons via `showInToolbar`

Controls can stay in the ProseMirror schema (paste, keyboard shortcuts, and
defaultValue) while being omitted from the toolbar UI. Also even out the field
border when the toolbar wrapper has no rendered controls.
