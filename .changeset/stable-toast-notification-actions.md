---
'@kaizen/components': patch
---

fix(ToastNotification): keep `useToastNotification` actions stable and fix `updateToastNotification`

- `addToastNotification`, `updateToastNotification`, `removeToastNotification` and `clearToastNotifications` now keep the same identity for the provider's lifetime, so they are safe to list in `useCallback`/`useEffect` dependency arrays.
- `updateToastNotification` no longer removes other toasts that were added after your component got the function from `useToastNotification`, such as a toast added earlier in the same event handler or while an async callback was waiting. If no toast has the given id, it now does nothing, instead of replacing the most recent toast.
- `addToastNotification` now generates an id when it is passed `id: undefined`.
