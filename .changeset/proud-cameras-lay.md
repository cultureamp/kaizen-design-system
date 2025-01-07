---
'@kaizen/components': patch
---

Support having multiple KaizenProvider on the same page.

This is helpful when publishing a package which relies toast notification - setting up its own KaizenProvider (which also set up ToastNofitification) will ensure that we won't run into `useToastNotificationContext must be used within the ToastNotificationContext.Provider` as this relies on the consumers' applications having the exact `@kaizen/components` version and depends on how package manager resolves peer deps. Especially for [pnpm](https://pnpm.io/how-peers-are-resolved), it might end up with 2 copies of the exact same version of kaizen/components therefore won't be able to find the `ToastNotificationContext.Provider` set up by the application.
