# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.2.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.2.0...@kaizen/notification@0.2.1) (2021-09-23)

**Note:** Version bump only for package @kaizen/notification





# [0.2.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.1.1...@kaizen/notification@0.2.0) (2021-09-22)


### Features

* Remove all usages of var() in scss to provide Zen fallbacks ([#1960](https://github.com/cultureamp/kaizen-design-system/issues/1960)) ([49fcf67](https://github.com/cultureamp/kaizen-design-system/commit/49fcf67d58ea700c8b9b483a2b02b0a0777a3a1a))





## [0.1.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.1.0...@kaizen/notification@0.1.1) (2021-08-31)

**Note:** Version bump only for package @kaizen/notification





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
