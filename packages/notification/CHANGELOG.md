# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.2.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.2.6...@kaizen/notification@0.2.7) (2021-10-15)

**Note:** Version bump only for package @kaizen/notification





## [0.2.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.2.5...@kaizen/notification@0.2.6) (2021-10-14)

**Note:** Version bump only for package @kaizen/notification





## [0.2.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.2.4...@kaizen/notification@0.2.5) (2021-10-12)

**Note:** Version bump only for package @kaizen/notification





## [0.2.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.2.3...@kaizen/notification@0.2.4) (2021-10-07)

**Note:** Version bump only for package @kaizen/notification





## [0.2.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.2.2...@kaizen/notification@0.2.3) (2021-09-28)


### Bug Fixes

* a11Y change for aria label on hidden for undefined ([#1976](https://github.com/cultureamp/kaizen-design-system/issues/1976)) ([02ddae0](https://github.com/cultureamp/kaizen-design-system/commit/02ddae0645e87e544be366bc64c18ceec3b1f94a))





## [0.2.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.2.1...@kaizen/notification@0.2.2) (2021-09-28)

**Note:** Version bump only for package @kaizen/notification





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
