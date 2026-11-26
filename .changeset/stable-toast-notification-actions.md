---
'@kaizen/components': patch
---

fix(ToastNotification): keep `useToastNotification` actions stable and fix `updateToastNotification`

- `addToastNotification`, `updateToastNotification`, `removeToastNotification` and `clearToastNotifications` now keep the same identity for the provider's lifetime, so they are safe to list in `useCallback`/`useEffect` dependency arrays.
- `updateToastNotification` now updates the latest list: it no longer drops toasts added after it was captured, and does nothing if the id isn't found (previously it replaced the last toast).
- `addToastNotification` now generates an id when it is passed `id: undefined`.
