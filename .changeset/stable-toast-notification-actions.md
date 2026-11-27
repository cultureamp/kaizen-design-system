---
'@kaizen/components': patch
---

fix(ToastNotification): keep `useToastNotification` actions stable and fix `updateToastNotification`

- `addToastNotification`, `updateToastNotification`, `removeToastNotification` and `clearToastNotifications` now keep the same identity for the provider's lifetime, so they are safe to list in `useCallback`/`useEffect` dependency arrays.
- Fix: `updateToastNotification` removed other toasts that were added after your component got the function from `useToastNotification`, such as a toast added earlier in the same event handler or while an async callback was waiting.
- Fix: `updateToastNotification` replaced the most recent toast when no toast had the given id. It now does nothing in that case.
- Fix: `addToastNotification` added the toast with no id when it was passed `id: undefined`, so the toast couldn't be updated or removed by id. It now generates an id in that case.
