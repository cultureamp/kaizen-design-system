---
'@kaizen/components': patch
---

`NotificationVariant` is now exported from the package root. Previously it was declared in `Notification/types.ts` but not re-exported by the `Notification` index, so consumers could not import it directly and had to derive it via `ComponentProps`. This brings it in line with `ToastNotification` and other components that re-export their shared `types` module.
