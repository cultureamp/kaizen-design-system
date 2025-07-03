---
'@kaizen/components': patch
---

Backported fixes for pre-1.79.0 release: Removes aria-haspopup from v1 Menu. This was a partial implementation of the menu aria pattern and does not have the corresponding arrow controls functionality so was confusing to SR users.
