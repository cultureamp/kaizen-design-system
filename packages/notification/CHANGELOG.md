# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 0.1.0 (2021-08-30)


### Features

* Move notification components out of component-library ([#1901](https://github.com/cultureamp/kaizen-design-system/issues/1901)) ([849a5f9](https://github.com/cultureamp/kaizen-design-system/commit/849a5f910988c8dd7f55364d0edc1f97bdab8ce1))


### BREAKING CHANGES

* You will need update imports of the following components from @kaizen/component-library to @kaizen/notification:
- InlineNotification
- GlobalNotification
- ToastNotification
- addToastNotification/clearToastNotifications/removeToastNotification

Elm imports will need to change from `import Notification.Notification` to `import Kaizen.Notification`
