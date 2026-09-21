---
'@kaizen/components': patch
---

fix: remove stale axe a11y rule disables on TitleBlock and Filter stickersheet stories

Both were confirmed via manual re-testing to no longer reproduce — `color-contrast`/`landmark-unique` on `TitleBlock.stickersheet.stories.tsx`, and `aria-dialog-name` on `Filter.stickersheet.stories.tsx`. No component code changed, only story-level test config.
