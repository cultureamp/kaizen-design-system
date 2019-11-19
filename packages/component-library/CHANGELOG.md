# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [15.2.0](https://github.com/cultureamp/kaizen-design-system/compare/@cultureamp/kaizen-component-library@15.1.3...@cultureamp/kaizen-component-library@15.2.0) (2019-11-18)


### Features

* passing optional prop to disable submit button on edit modal ([#127](https://github.com/cultureamp/kaizen-design-system/issues/127)) ([81b8e20](https://github.com/cultureamp/kaizen-design-system/commit/81b8e20))





## [15.1.3](https://github.com/cultureamp/kaizen-design-system/compare/@cultureamp/kaizen-component-library@15.1.2...@cultureamp/kaizen-component-library@15.1.3) (2019-11-17)

**Note:** Version bump only for package @cultureamp/kaizen-component-library





## [15.1.2](https://github.com/cultureamp/kaizen-design-system/compare/@cultureamp/kaizen-component-library@15.1.1...@cultureamp/kaizen-component-library@15.1.2) (2019-11-13)

**Note:** Version bump only for package @cultureamp/kaizen-component-library





## [15.1.1](https://github.com/cultureamp/kaizen-design-system/compare/@cultureamp/kaizen-component-library@15.1.0...@cultureamp/kaizen-component-library@15.1.1) (2019-11-13)


### Bug Fixes

* Fix Tag not constraining its width to its content ([#121](https://github.com/cultureamp/kaizen-design-system/issues/121)) ([bf53280](https://github.com/cultureamp/kaizen-design-system/commit/bf53280))





# [15.1.0](https://github.com/cultureamp/kaizen-design-system/compare/@cultureamp/kaizen-component-library@15.0.0...@cultureamp/kaizen-component-library@15.1.0) (2019-11-12)


### Features

* Add analytics props to component Button ([#118](https://github.com/cultureamp/kaizen-design-system/issues/118)) ([5502b26](https://github.com/cultureamp/kaizen-design-system/commit/5502b26))





# [15.0.0](https://github.com/cultureamp/kaizen-design-system/compare/@cultureamp/kaizen-component-library@14.4.5...@cultureamp/kaizen-component-library@15.0.0) (2019-11-12)


### Features

* Support all current variants in React and Elm Tag components ([#91](https://github.com/cultureamp/kaizen-design-system/issues/91)) ([4ced1ea](https://github.com/cultureamp/kaizen-design-system/commit/4ced1ea))


### BREAKING CHANGES

* React Tag:

- `color`, `withIcon` and `disableAnimation` props are removed. Use
the new variant prop to control which preset variant of Tag should be
rendered. Each preset variant controls whether it should have an
icon and/or animation.

- `text` prop is removed. Pass the text to be rendered as a child
`<Tag>Example</Tag>`

Elm Tag:

- `Tag.Cautionary` has been renamed to `Tag.ValidationCautionary`
- `Tag.Negative` has been renamed to `Tag.ValidationNegative`

TitleBlock

- `surveyStatus.color` and `surveyStatus.showIcon` props are removed.
Use `surveyStatus.status` which provides the same functionality in
one prop.





## [14.4.5](https://github.com/cultureamp/kaizen-design-system/compare/@cultureamp/kaizen-component-library@14.4.4...@cultureamp/kaizen-component-library@14.4.5) (2019-11-06)


### Bug Fixes

* Fix shifting text when expanding and collapsing table rows ([#110](https://github.com/cultureamp/kaizen-design-system/issues/110)) ([0164056](https://github.com/cultureamp/kaizen-design-system/commit/0164056))





## [14.4.4](https://github.com/cultureamp/kaizen-design-system/compare/@cultureamp/kaizen-component-library@14.4.3...@cultureamp/kaizen-component-library@14.4.4) (2019-11-03)


### Bug Fixes

* Remove mouseup selection ([#108](https://github.com/cultureamp/kaizen-design-system/issues/108)) ([c6835c0](https://github.com/cultureamp/kaizen-design-system/commit/c6835c0))





## [14.4.3](https://github.com/cultureamp/kaizen-design-system/compare/@cultureamp/kaizen-component-library@14.4.2...@cultureamp/kaizen-component-library@14.4.3) (2019-11-01)


### Bug Fixes

* Remove tsx files from published package ([#105](https://github.com/cultureamp/kaizen-design-system/issues/105)) ([f47c0c3](https://github.com/cultureamp/kaizen-design-system/commit/f47c0c3))





## [14.4.2](https://github.com/cultureamp/kaizen-design-system/compare/@cultureamp/kaizen-component-library@14.4.1...@cultureamp/kaizen-component-library@14.4.2) (2019-10-31)

**Note:** Version bump only for package @cultureamp/kaizen-component-library





## [14.4.1](https://github.com/cultureamp/kaizen-design-system/compare/@cultureamp/kaizen-component-library@14.4.0...@cultureamp/kaizen-component-library@14.4.1) (2019-10-31)


### Bug Fixes

* revert select content alignment in ie11 off ([#86](https://github.com/cultureamp/kaizen-design-system/issues/86)) ([#99](https://github.com/cultureamp/kaizen-design-system/issues/99)) ([c20d03d](https://github.com/cultureamp/kaizen-design-system/commit/c20d03d))





# [14.4.0](https://github.com/cultureamp/kaizen-design-system/compare/@cultureamp/kaizen-component-library@14.3.0...@cultureamp/kaizen-component-library@14.4.0) (2019-10-31)


### Features

* Minor enhancements to the Table component ([#74](https://github.com/cultureamp/kaizen-design-system/issues/74)) ([3069546](https://github.com/cultureamp/kaizen-design-system/commit/3069546))





# [14.3.0](https://github.com/cultureamp/kaizen-design-system/compare/@cultureamp/kaizen-component-library@14.2.0...@cultureamp/kaizen-component-library@14.3.0) (2019-10-31)


### Features

* Add restore icon ([#97](https://github.com/cultureamp/kaizen-design-system/issues/97)) ([8954c60](https://github.com/cultureamp/kaizen-design-system/commit/8954c60))





# [14.2.0](https://github.com/cultureamp/kaizen-design-system/compare/@cultureamp/kaizen-component-library@14.1.3...@cultureamp/kaizen-component-library@14.2.0) (2019-10-31)


### Features

* Create SplitButton component ([#73](https://github.com/cultureamp/kaizen-design-system/issues/73)) ([51c15b7](https://github.com/cultureamp/kaizen-design-system/commit/51c15b7))





## [14.1.3](https://github.com/cultureamp/kaizen-design-system/compare/@cultureamp/kaizen-component-library@14.1.2...@cultureamp/kaizen-component-library@14.1.3) (2019-10-30)


### Bug Fixes

* fix visibility of Elm Select's selected item text ([#95](https://github.com/cultureamp/kaizen-design-system/issues/95)) ([754c321](https://github.com/cultureamp/kaizen-design-system/commit/754c321))





## [14.1.2](https://github.com/cultureamp/kaizen-design-system/compare/@cultureamp/kaizen-component-library@14.1.1...@cultureamp/kaizen-component-library@14.1.2) (2019-10-30)


### Bug Fixes

* Secondary button hover state on ash background not obvious ([#76](https://github.com/cultureamp/kaizen-design-system/issues/76)) ([98e5d4d](https://github.com/cultureamp/kaizen-design-system/commit/98e5d4d))





## [14.1.1](https://github.com/cultureamp/kaizen-design-system/compare/@cultureamp/kaizen-component-library@14.1.0...@cultureamp/kaizen-component-library@14.1.1) (2019-10-30)


### Bug Fixes

* select content alignment in ie11 off ([#86](https://github.com/cultureamp/kaizen-design-system/issues/86)) ([4ca0463](https://github.com/cultureamp/kaizen-design-system/commit/4ca0463))





# [14.1.0](https://github.com/cultureamp/kaizen-design-system/compare/@cultureamp/kaizen-component-library@14.0.7...@cultureamp/kaizen-component-library@14.1.0) (2019-10-28)


### Features

* Add a React version of the Select component ([#85](https://github.com/cultureamp/kaizen-design-system/issues/85)) ([3df916c](https://github.com/cultureamp/kaizen-design-system/commit/3df916c))





## [14.0.7](https://github.com/cultureamp/kaizen-design-system/compare/@cultureamp/kaizen-component-library@14.0.6...@cultureamp/kaizen-component-library@14.0.7) (2019-10-28)


### Bug Fixes

* Include types referenced in declarations ([#87](https://github.com/cultureamp/kaizen-design-system/issues/87)) ([8394a01](https://github.com/cultureamp/kaizen-design-system/commit/8394a01))





## [14.0.6](https://github.com/cultureamp/kaizen-design-system/compare/@cultureamp/kaizen-component-library@14.0.5...@cultureamp/kaizen-component-library@14.0.6) (2019-10-25)

**Note:** Version bump only for package @cultureamp/kaizen-component-library





## [14.0.5](https://github.com/cultureamp/kaizen-design-system/compare/@cultureamp/kaizen-component-library@14.0.4...@cultureamp/kaizen-component-library@14.0.5) (2019-10-22)

**Note:** Version bump only for package @cultureamp/kaizen-component-library





## [14.0.4](https://github.com/cultureamp/kaizen-design-system/compare/@cultureamp/kaizen-component-library@14.0.3...@cultureamp/kaizen-component-library@14.0.4) (2019-10-21)


### Bug Fixes

* Republish after fixing release pipeline script ([222a395](https://github.com/cultureamp/kaizen-design-system/commit/222a395))





## [14.0.3](https://github.com/cultureamp/kaizen-design-system/compare/@cultureamp/kaizen-component-library@14.0.2...@cultureamp/kaizen-component-library@14.0.3) (2019-10-21)


### Bug Fixes

* Hoist gitignore and fix published file globs ([423551d](https://github.com/cultureamp/kaizen-design-system/commit/423551d))





## [14.0.2](https://github.com/cultureamp/kaizen-design-system/compare/@cultureamp/kaizen-component-library@14.0.1...@cultureamp/kaizen-component-library@14.0.2) (2019-10-21)


### Bug Fixes

* Explicitly include module indexes in published files ([7e9ab80](https://github.com/cultureamp/kaizen-design-system/commit/7e9ab80))





## [14.0.1](https://github.com/cultureamp/kaizen-design-system/compare/@cultureamp/kaizen-component-library@14.0.0...@cultureamp/kaizen-component-library@14.0.1) (2019-10-21)


### Bug Fixes

* Replace npmignore with files array ([2f4237b](https://github.com/cultureamp/kaizen-design-system/commit/2f4237b))





# 14.0.0 (2019-10-21)


### chore

* Migrate component library package ([#61](https://github.com/cultureamp/kaizen-design-system/issues/61)) ([eebe17a](https://github.com/cultureamp/kaizen-design-system/commit/eebe17a16d9c7de8d745cd5a4cdc0a9656949342))


### BREAKING CHANGES

* Upgrade to react 16.9

* Add svg mocking to jest

* Use the local component library in the site

* Add missing storybook addons

* Move storybook backgrounds out of component library

* Update gatsby filesystem paths to use local component library

* Upgrade react in the site package

* Remove (unused) module type declarations

* Fix component library build script compiler errors

* Remove storybook backgrounds config from stories

* Hoist focus-visible polyfill and apply to storybook

* Add elm-format to linters

* Run elm-format on the component library package

* Use debian jessie for build images

elm-format fails in alpine :cry:

* Let elm format the elm.json file

* Add the repository root as an elm source directory

Reportedly appeases rubymine

* Add .npmignore and remove files key from package

Defaults to "*", ignoring stories, tests, typescript source and config.

* Add focus-visible as a peer dependency

* Address comments from review

* Update package metadata





# [13.0.0](https://github.com/cultureamp/big-frontend-repo/compare/v12.6.2...v13.0.0) (2019-10-15)


### Bug Fixes

* **kaizen:** remove unused FreeHeader component from draft ([1d5cc91](https://github.com/cultureamp/big-frontend-repo/commit/1d5cc91))


### BREAKING CHANGES

* **kaizen:** FreeHeader is no longer available from Kaizen.




## [12.6.2](https://github.com/cultureamp/big-frontend-repo/compare/v12.6.1...v12.6.2) (2019-10-07)


### Bug Fixes

* **kaizen:** reduce margin between separated collapsibles ([#571](https://github.com/cultureamp/big-frontend-repo/issues/571)) ([4eefad2](https://github.com/cultureamp/big-frontend-repo/commit/4eefad2))




## [12.6.1](https://github.com/cultureamp/big-frontend-repo/compare/v12.6.0...v12.6.1) (2019-10-04)


### Bug Fixes

* **kaizen:** fix placeholder alignment for safari in textfield ([#568](https://github.com/cultureamp/big-frontend-repo/issues/568)) ([cfb8ecd](https://github.com/cultureamp/big-frontend-repo/commit/cfb8ecd))




# [12.6.0](https://github.com/cultureamp/big-frontend-repo/compare/v12.5.0...v12.6.0) (2019-10-03)


### Features

* **kaizen:** Create controlled mode on Collapsible ([#569](https://github.com/cultureamp/big-frontend-repo/issues/569)) ([ac82ef4](https://github.com/cultureamp/big-frontend-repo/commit/ac82ef4))




# [12.5.0](https://github.com/cultureamp/big-frontend-repo/compare/v12.4.0...v12.5.0) (2019-10-01)


### Features

* **kaizen:** Add onToggle prop to Collapsible ([#566](https://github.com/cultureamp/big-frontend-repo/issues/566)) ([1400d22](https://github.com/cultureamp/big-frontend-repo/commit/1400d22))




# [12.4.0](https://github.com/cultureamp/big-frontend-repo/compare/v12.3.0...v12.4.0) (2019-10-01)


### Features

* **kaizen:** add lazyLoad prop to Collapsible components ([#561](https://github.com/cultureamp/big-frontend-repo/issues/561)) ([f3f4691](https://github.com/cultureamp/big-frontend-repo/commit/f3f4691))




# [12.3.0](https://github.com/cultureamp/big-frontend-repo/compare/v12.2.1...v12.3.0) (2019-09-30)


### Features

* **kaizen:** Elm Select keyboard navigation added ([#555](https://github.com/cultureamp/big-frontend-repo/issues/555)) ([b30cd33](https://github.com/cultureamp/big-frontend-repo/commit/b30cd33))




## [12.2.1](https://github.com/cultureamp/big-frontend-repo/compare/v12.2.0...v12.2.1) (2019-09-30)


### Bug Fixes

* **kaizen:** fix input placeholder alignment ([#563](https://github.com/cultureamp/big-frontend-repo/issues/563)) ([84d80d2](https://github.com/cultureamp/big-frontend-repo/commit/84d80d2))




# [12.2.0](https://github.com/cultureamp/big-frontend-repo/compare/v12.1.0...v12.2.0) (2019-09-25)


### Features

* **kaizen:** Create draft Collapsible component ([#545](https://github.com/cultureamp/big-frontend-repo/issues/545)) ([e116a69](https://github.com/cultureamp/big-frontend-repo/commit/e116a69))




# [12.1.0](https://github.com/cultureamp/big-frontend-repo/compare/v12.0.1...v12.1.0) (2019-09-20)


### Features

* **kaizen:** add bookmark icon svgs ([#556](https://github.com/cultureamp/big-frontend-repo/issues/556)) ([8ea2e28](https://github.com/cultureamp/big-frontend-repo/commit/8ea2e28))




## [12.0.1](https://github.com/cultureamp/big-frontend-repo/compare/v12.0.0...v12.0.1) (2019-09-18)


### Bug Fixes

* **kaizen:** Update EmptyState to handle IE11 better ([#553](https://github.com/cultureamp/big-frontend-repo/issues/553)) ([088610a](https://github.com/cultureamp/big-frontend-repo/commit/088610a))




# [12.0.0](https://github.com/cultureamp/big-frontend-repo/compare/v11.17.0...v12.0.0) (2019-09-16)


### Bug Fixes

* **kaizen:** Remove flow-type definitions ([#551](https://github.com/cultureamp/big-frontend-repo/issues/551)) ([da761ea](https://github.com/cultureamp/big-frontend-repo/commit/da761ea))


### BREAKING CHANGES

* **kaizen:** Removes published flow-type definitions from this package. The definitions have been moved to `flow-typed/kaizen-component-library` in Murmur.




# [11.17.0](https://github.com/cultureamp/big-frontend-repo/compare/v11.16.1...v11.17.0) (2019-09-12)


### Features

* **kaizen:** Enable straightCorners prop for EmptyState ([#546](https://github.com/cultureamp/big-frontend-repo/issues/546)) ([d619ae6](https://github.com/cultureamp/big-frontend-repo/commit/d619ae6))




## [11.16.1](https://github.com/cultureamp/big-frontend-repo/compare/v11.16.0...v11.16.1) (2019-09-11)


### Bug Fixes

* **kaizen:** update ConfirmationModal styles to override globals ([#538](https://github.com/cultureamp/big-frontend-repo/issues/538)) ([45bdcb8](https://github.com/cultureamp/big-frontend-repo/commit/45bdcb8))




# [11.16.0](https://github.com/cultureamp/big-frontend-repo/compare/v11.15.0...v11.16.0) (2019-08-27)


### Bug Fixes

* **kaizen:** Fix hover styles of navbar menu items ([#528](https://github.com/cultureamp/big-frontend-repo/issues/528)) ([86bdca4](https://github.com/cultureamp/big-frontend-repo/commit/86bdca4))




# [11.15.0](https://github.com/cultureamp/big-frontend-repo/compare/v11.14.0...v11.15.0) (2019-08-27)


### Features

* **kaizen:** add noBottomMargin & inheritBaseline props to LoadingPlaceholder ([#526](https://github.com/cultureamp/big-frontend-repo/issues/526)) ([a7b020d](https://github.com/cultureamp/big-frontend-repo/commit/a7b020d))




# [11.14.0](https://github.com/cultureamp/big-frontend-repo/compare/v11.13.1...v11.14.0) (2019-08-23)


### Features

* **kaizen:** Add ca-type-reverse mixin, and use in NavigationBar to fix font-display ([#518](https://github.com/cultureamp/big-frontend-repo/issues/518)) ([06deacf](https://github.com/cultureamp/big-frontend-repo/commit/06deacf))




## [11.13.1](https://github.com/cultureamp/big-frontend-repo/compare/v11.13.0...v11.13.1) (2019-08-22)


### Bug Fixes

* **kaizen:** increase the contrast in the well ([#516](https://github.com/cultureamp/big-frontend-repo/issues/516)) ([43904d2](https://github.com/cultureamp/big-frontend-repo/commit/43904d2))




# [11.13.0](https://github.com/cultureamp/big-frontend-repo/compare/v11.12.1...v11.13.0) (2019-08-19)


### Features

* **kaizen:** Add span to the Kaizen text component ([#502](https://github.com/cultureamp/big-frontend-repo/issues/502)) ([f2c8243](https://github.com/cultureamp/big-frontend-repo/commit/f2c8243))




## [11.12.1](https://github.com/cultureamp/big-frontend-repo/compare/v11.12.0...v11.12.1) (2019-08-19)


### Bug Fixes

* **kaizen:** remove no aria-describedby warning ([#498](https://github.com/cultureamp/big-frontend-repo/issues/498)) ([c9aaec7](https://github.com/cultureamp/big-frontend-repo/commit/c9aaec7))




# [11.12.0](https://github.com/cultureamp/big-frontend-repo/compare/v11.11.0...v11.12.0) (2019-08-16)


### Features

* **kaizen:** Elm Select Searchable select accessibility improvements ([#495](https://github.com/cultureamp/big-frontend-repo/issues/495)) ([ea98a42](https://github.com/cultureamp/big-frontend-repo/commit/ea98a42))




# [11.11.0](https://github.com/cultureamp/big-frontend-repo/compare/v11.9.0...v11.11.0) (2019-08-15)


### Features

* **kaizen:** add react tooltip ([#493](https://github.com/cultureamp/big-frontend-repo/issues/493)) ([714f17b](https://github.com/cultureamp/big-frontend-repo/commit/714f17b))
* **kaizen:** Multiline table support ([#486](https://github.com/cultureamp/big-frontend-repo/issues/486)) ([6cb6ac5](https://github.com/cultureamp/big-frontend-repo/commit/6cb6ac5))




# [11.9.0](https://github.com/cultureamp/big-frontend-repo/compare/v11.8.1...v11.9.0) (2019-08-14)


### Bug Fixes

* **kaizen:** add the alignment fix to the elm storybook ([#491](https://github.com/cultureamp/big-frontend-repo/issues/491)) ([5be93fd](https://github.com/cultureamp/big-frontend-repo/commit/5be93fd))
* **kaizen:** undo the 100vw width for elm stories ([#490](https://github.com/cultureamp/big-frontend-repo/issues/490)) ([b0209b5](https://github.com/cultureamp/big-frontend-repo/commit/b0209b5))


### Features

* **kaizen:** Elm Select onEnter selection ([#485](https://github.com/cultureamp/big-frontend-repo/issues/485)) ([525a704](https://github.com/cultureamp/big-frontend-repo/commit/525a704))




## [11.8.1](https://github.com/cultureamp/big-frontend-repo/compare/v11.8.0...v11.8.1) (2019-08-12)


### Bug Fixes

* **kaizen:** Make background image urls relative ([#479](https://github.com/cultureamp/big-frontend-repo/issues/479)) ([c5d0371](https://github.com/cultureamp/big-frontend-repo/commit/c5d0371))




# [11.8.0](https://github.com/cultureamp/big-frontend-repo/compare/v11.7.0...v11.8.0) (2019-08-12)


### Bug Fixes

* **kaizen:** change import to require for tooltip & CSSTransition ([#472](https://github.com/cultureamp/big-frontend-repo/issues/472)) ([ae6ac63](https://github.com/cultureamp/big-frontend-repo/commit/ae6ac63))




# [11.7.0](https://github.com/cultureamp/big-frontend-repo/compare/v11.6.0...v11.7.0) (2019-08-12)


### Features

* **kaizen:** add a secondary destructive button for Elm ([#480](https://github.com/cultureamp/big-frontend-repo/issues/480)) ([15bee0d](https://github.com/cultureamp/big-frontend-repo/commit/15bee0d))




# [11.6.0](https://github.com/cultureamp/big-frontend-repo/compare/v11.5.0...v11.6.0) (2019-08-09)




# [11.5.0](https://github.com/cultureamp/big-frontend-repo/compare/v11.4.0...v11.5.0) (2019-08-09)


### Features

* **kaizen:** adding camera icon svg ([#476](https://github.com/cultureamp/big-frontend-repo/issues/476)) ([387fa2a](https://github.com/cultureamp/big-frontend-repo/commit/387fa2a))




# [11.4.0](https://github.com/cultureamp/big-frontend-repo/compare/v11.3.0...v11.4.0) (2019-08-07)


### Features

* **kaizen:** Texfield improvements and additional features ([#468](https://github.com/cultureamp/big-frontend-repo/issues/468)) ([5e6c5f8](https://github.com/cultureamp/big-frontend-repo/commit/5e6c5f8))




# [11.3.0](https://github.com/cultureamp/big-frontend-repo/compare/v11.2.1...v11.3.0) (2019-08-05)


### Features

* **kaizen:** Create Draft Table Component ([#465](https://github.com/cultureamp/big-frontend-repo/issues/465)) ([cbbb555](https://github.com/cultureamp/big-frontend-repo/commit/cbbb555))




## [11.2.1](https://github.com/cultureamp/big-frontend-repo/compare/v11.2.0...v11.2.1) (2019-08-02)


### Bug Fixes

* **kaizen:** fix ToggleTheme for flow ([#464](https://github.com/cultureamp/big-frontend-repo/issues/464)) ([b161c64](https://github.com/cultureamp/big-frontend-repo/commit/b161c64))




# [11.2.0](https://github.com/cultureamp/big-frontend-repo/compare/v11.1.0...v11.2.0) (2019-08-02)


### Features

* **kaizen:** add custom freemium theme for toggle switch field ([#462](https://github.com/cultureamp/big-frontend-repo/issues/462)) ([88a0446](https://github.com/cultureamp/big-frontend-repo/commit/88a0446))




# [11.1.0](https://github.com/cultureamp/big-frontend-repo/compare/v11.0.0...v11.1.0) (2019-07-30)


### Bug Fixes

* **kaizen:** only use svg sprite loader for `.icon.svg` files, treat other svgs as regular files ([#453](https://github.com/cultureamp/big-frontend-repo/issues/453)) ([35369c5](https://github.com/cultureamp/big-frontend-repo/commit/35369c5))


### Features

* **kaizen:** add branching and questions icons ([#459](https://github.com/cultureamp/big-frontend-repo/issues/459)) ([7b06276](https://github.com/cultureamp/big-frontend-repo/commit/7b06276))




# [11.0.0](https://github.com/cultureamp/big-frontend-repo/compare/v10.0.0...v11.0.0) (2019-07-29)


### Bug Fixes

* **kaizen:** Give all icons the `*.icon.svg` extension ([#449](https://github.com/cultureamp/big-frontend-repo/issues/449)) ([f0f01d3](https://github.com/cultureamp/big-frontend-repo/commit/f0f01d3))


### Features

* **kaizen:** update navbar kaizen theme ([#451](https://github.com/cultureamp/big-frontend-repo/issues/451)) ([50b830d](https://github.com/cultureamp/big-frontend-repo/commit/50b830d))


### BREAKING CHANGES

* **kaizen:** all icon SVG import paths will need to be updated.

* fix(kaizen): Update all SVG imports to use `.icon.svg` extension

* chore(kaizen): Release 11.0.0




# [10.0.0](https://github.com/cultureamp/big-frontend-repo/compare/v9.3.0...v10.0.0) (2019-07-25)


### Features

* **kaizen:** Improve NavigationBar API ([#411](https://github.com/cultureamp/big-frontend-repo/issues/411)) ([ef912c6](https://github.com/cultureamp/big-frontend-repo/commit/ef912c6))


### BREAKING CHANGES

* **kaizen:** this removes the old `isNew` property.

* fix(kaizen): Remove unused NavigationBar features, and change the expected props for menu items.

- Change props structure of Menu to `{label, url}` instead of `{label, link}` to match navbar-service
- Remove all code for setting new windows, modals, data attributes. These are no longer necessary in murmur. (Note: in a separate commit we'll reintroduce the ability to render MenuItems as buttons not links)
- Remove Tooltip subcomponent - it was only used for new windows, which we no longer use in the platform.

BREAKING CHANGES: this changes the API for expected props passed to NavigationBar.Menu, and removes NavigationBar.Tooltip

* feat(kaizen): Make it possible for Menu links to POST

- This is used for Sign Out and Stop Masquerading.
- In theory, clicking a link shouldn't trigger an action, and browsers may prefetch links on page, accidentally prefetching "signout".
  In reality this doesn't usually happen, but better to be safe than sorry!
- Previously this was implemented with a `data-method="DELETE"` attribute, which some mumur jQuery magic ✨ does stuff with.
- Now, we allow setting an optional `method` which causes the MenuItem to be a <form> with a <input type="hidden" name="_method" value={method} /> which works with rails and other frameworks.
- If you're working with a backend that doesn't follow this convention, "post" and "get" are the only useful values for method.

Support any method

* fix(kaizen): Update navbar stories with signout/masquerade

* chore(kaizen): Release 10.0.0

The big one zero zero zero




# [9.3.0](https://github.com/cultureamp/big-frontend-repo/compare/v9.2.0...v9.3.0) (2019-07-25)


### Features

* **kaizen:** Add Tabs component ([#431](https://github.com/cultureamp/big-frontend-repo/issues/431)) ([e279a94](https://github.com/cultureamp/big-frontend-repo/commit/e279a94))




# [9.2.0](https://github.com/cultureamp/big-frontend-repo/compare/v9.1.0...v9.2.0) (2019-07-23)


### Features

* **kaizen:** CheckboxGroup component ([#441](https://github.com/cultureamp/big-frontend-repo/issues/441)) ([1d34101](https://github.com/cultureamp/big-frontend-repo/commit/1d34101))




# [9.1.0](https://github.com/cultureamp/big-frontend-repo/compare/v9.0.2...v9.1.0) (2019-07-22)


### Features

* **kaizen:** add a popover size variant to handle long url ([#442](https://github.com/cultureamp/big-frontend-repo/issues/442)) ([ecc1b11](https://github.com/cultureamp/big-frontend-repo/commit/ecc1b11))




## [9.0.2](https://github.com/cultureamp/big-frontend-repo/compare/v9.0.1...v9.0.2) (2019-07-19)


### Bug Fixes

* **kaizen:** add name prop/attr to TextInput & Input ([#440](https://github.com/cultureamp/big-frontend-repo/issues/440)) ([a4547a5](https://github.com/cultureamp/big-frontend-repo/commit/a4547a5))




## [9.0.1](https://github.com/cultureamp/big-frontend-repo/compare/v9.0.0...v9.0.1) (2019-07-18)


### Bug Fixes

* **kaizen:** width styling ([#439](https://github.com/cultureamp/big-frontend-repo/issues/439)) ([5b90b89](https://github.com/cultureamp/big-frontend-repo/commit/5b90b89))




# [9.0.0](https://github.com/cultureamp/big-frontend-repo/compare/v8.3.2...v9.0.0) (2019-07-18)


### Bug Fixes

* **kaizen:** remove the FieldGroup from CheckboxField component ([#425](https://github.com/cultureamp/big-frontend-repo/issues/425)) ([3e22142](https://github.com/cultureamp/big-frontend-repo/commit/3e22142))


### BREAKING CHANGES

* **kaizen:** remove the inline prop from Checkbox Field

* fix(kaizen): bump version to 9.0.0




## [8.3.2](https://github.com/cultureamp/big-frontend-repo/compare/v8.3.1...v8.3.2) (2019-07-18)


### Bug Fixes

* **kaizen:** update Popover line height & padding ([#434](https://github.com/cultureamp/big-frontend-repo/issues/434)) ([e77d065](https://github.com/cultureamp/big-frontend-repo/commit/e77d065))




## [8.3.1](https://github.com/cultureamp/big-frontend-repo/compare/v8.3.0...v8.3.1) (2019-07-17)


### Bug Fixes

* **kaizen:** inheriting position ([#435](https://github.com/cultureamp/big-frontend-repo/issues/435)) ([8400971](https://github.com/cultureamp/big-frontend-repo/commit/8400971))




# [8.3.0](https://github.com/cultureamp/big-frontend-repo/compare/v8.2.0...v8.3.0) (2019-07-16)


### Features

* **kaizen:** Elm tooltip ([#432](https://github.com/cultureamp/big-frontend-repo/issues/432)) ([38e1d02](https://github.com/cultureamp/big-frontend-repo/commit/38e1d02))




# [8.2.0](https://github.com/cultureamp/big-frontend-repo/compare/v8.1.0...v8.2.0) (2019-07-15)


### Features

* **kaizen:** Truncating and cautionary tag ([#424](https://github.com/cultureamp/big-frontend-repo/issues/424)) ([5c35e9f](https://github.com/cultureamp/big-frontend-repo/commit/5c35e9f))




# [8.1.0](https://github.com/cultureamp/big-frontend-repo/compare/v8.0.1...v8.1.0) (2019-07-14)


### Features

* **kaizen:** create header for freemium edition ([#430](https://github.com/cultureamp/big-frontend-repo/issues/430)) ([e13ae54](https://github.com/cultureamp/big-frontend-repo/commit/e13ae54))




## [8.0.1](https://github.com/cultureamp/big-frontend-repo/compare/v8.0.0...v8.0.1) (2019-07-12)


### Bug Fixes

* **kaizen:** Adds missing EmptyState types for Flow ([#427](https://github.com/cultureamp/big-frontend-repo/issues/427)) ([2731174](https://github.com/cultureamp/big-frontend-repo/commit/2731174))




# [8.0.0](https://github.com/cultureamp/big-frontend-repo/compare/v7.1.0...v8.0.0) (2019-07-09)


### Bug Fixes

* **kaizen:** change Radio/RadioInput value to be not optional ([#420](https://github.com/cultureamp/big-frontend-repo/issues/420)) ([e25f7e4](https://github.com/cultureamp/big-frontend-repo/commit/e25f7e4))


### BREAKING CHANGES

* **kaizen:** the API of the Radio and RadioInput component was changed, value is non-optional prop now

* fix(kaizen): update and add tests

* chore(kaizen): bump version to 8.0.0




# [7.1.0](https://github.com/cultureamp/big-frontend-repo/compare/v7.0.1...v7.1.0) (2019-07-09)


### Features

* **kaizen:** add select types `cautionary` and `error`(elm) ([#418](https://github.com/cultureamp/big-frontend-repo/issues/418)) ([8dd3014](https://github.com/cultureamp/big-frontend-repo/commit/8dd3014))




## [7.0.1](https://github.com/cultureamp/big-frontend-repo/compare/v7.0.0...v7.0.1) (2019-07-08)


### Bug Fixes

* **kaizen:** make embedded p tag inherit font-weight for Notification ([#419](https://github.com/cultureamp/big-frontend-repo/issues/419)) ([5ca2cc9](https://github.com/cultureamp/big-frontend-repo/commit/5ca2cc9))




# [7.0.0](https://github.com/cultureamp/big-frontend-repo/compare/v6.1.0...v7.0.0) (2019-07-05)


### Bug Fixes

* **kaizen:** Move VerticalProgress components into Kaizen dir ([#395](https://github.com/cultureamp/big-frontend-repo/issues/395)) ([5192789](https://github.com/cultureamp/big-frontend-repo/commit/5192789))


### BREAKING CHANGES

* **kaizen:** This breaks the API for code that directly imports VerticalProgressIndicator and VerticalProgressStep.

* fix(kaizen): update import paths

* fix(kaizen): make steps methods of default object

* fix(kaizen): update VerticalProgress stories

* chore(kaizen): alphabetise imports for tslint

* chore(kaizen): bump version to 7.0.0




# [6.1.0](https://github.com/cultureamp/big-frontend-repo/compare/v6.0.0...v6.1.0) (2019-07-04)


### Features

* **kaizen:** add React stories for Tag ([#415](https://github.com/cultureamp/big-frontend-repo/issues/415)) ([4ea257e](https://github.com/cultureamp/big-frontend-repo/commit/4ea257e))




# [6.0.0](https://github.com/cultureamp/big-frontend-repo/compare/v5.20.6...v6.0.0) (2019-07-02)


### Features

* **kaizen:** Radio Group draft component ([#394](https://github.com/cultureamp/big-frontend-repo/issues/394)) ([3b7183b](https://github.com/cultureamp/big-frontend-repo/commit/3b7183b))


### BREAKING CHANGES

* **kaizen:** There are breaking changes to the Radio and the RadioInput components. SelectedStatus now accepts a boolean instead of a string and onCheck has been renamed to onChange.

* feat(kaizen): add tests for Radio

* feat(kaizen): add RadioGroup tests

* fix(kaizen): add noBottomMargin to the RadioGroup instead of Radio

* chore(kaizen): bump version to 6.0.0




## [5.20.6](https://github.com/cultureamp/big-frontend-repo/compare/v5.20.5...v5.20.6) (2019-06-28)


### Bug Fixes

* **kaizen:** double click in input and menu opening ([#413](https://github.com/cultureamp/big-frontend-repo/issues/413)) ([913d473](https://github.com/cultureamp/big-frontend-repo/commit/913d473))




## [5.20.5](https://github.com/cultureamp/big-frontend-repo/compare/v5.20.4...v5.20.5) (2019-06-25)


### Bug Fixes

* **kaizen:** mousedown on Tag and usage on Select ([#410](https://github.com/cultureamp/big-frontend-repo/issues/410)) ([99e918a](https://github.com/cultureamp/big-frontend-repo/commit/99e918a))




## [5.20.4](https://github.com/cultureamp/big-frontend-repo/compare/v5.20.3...v5.20.4) (2019-06-25)


### Bug Fixes

* **kaizen:** fix Tag hover/active styles ([#408](https://github.com/cultureamp/big-frontend-repo/issues/408)) ([d5bce86](https://github.com/cultureamp/big-frontend-repo/commit/d5bce86))




## [5.20.3](https://github.com/cultureamp/big-frontend-repo/compare/v5.20.2...v5.20.3) (2019-06-24)


### Bug Fixes

* **kaizen:** reduce margin if only child ([#405](https://github.com/cultureamp/big-frontend-repo/issues/405)) ([fd3eb9c](https://github.com/cultureamp/big-frontend-repo/commit/fd3eb9c))




## [5.20.2](https://github.com/cultureamp/big-frontend-repo/compare/v5.20.1...v5.20.2) (2019-06-24)


### Bug Fixes

* **kaizen:** internal fixes fo select component ([#407](https://github.com/cultureamp/big-frontend-repo/issues/407)) ([840577d](https://github.com/cultureamp/big-frontend-repo/commit/840577d))




## [5.20.1](https://github.com/cultureamp/big-frontend-repo/compare/v5.20.0...v5.20.1) (2019-06-21)


### Bug Fixes

* **kaizen:** fixed events module name ([#406](https://github.com/cultureamp/big-frontend-repo/issues/406)) ([eb6099c](https://github.com/cultureamp/big-frontend-repo/commit/eb6099c))




# [5.20.0](https://github.com/cultureamp/big-frontend-repo/compare/v5.19.0...v5.20.0) (2019-06-21)


### Features

* **kaizen:** elm select improvements and api cleanup ([#403](https://github.com/cultureamp/big-frontend-repo/issues/403)) ([a92e50a](https://github.com/cultureamp/big-frontend-repo/commit/a92e50a))




# [5.19.0](https://github.com/cultureamp/big-frontend-repo/compare/v5.18.0...v5.19.0) (2019-06-20)


### Features

* **kaizen:** dismissible default tag ([#401](https://github.com/cultureamp/big-frontend-repo/issues/401)) ([206b380](https://github.com/cultureamp/big-frontend-repo/commit/206b380))




# [5.18.0](https://github.com/cultureamp/big-frontend-repo/compare/v5.17.1...v5.18.0) (2019-06-20)


### Features

* **kaizen:** a dropdown select for elm ([#400](https://github.com/cultureamp/big-frontend-repo/issues/400)) ([2cc8e50](https://github.com/cultureamp/big-frontend-repo/commit/2cc8e50))




## [5.17.1](https://github.com/cultureamp/big-frontend-repo/compare/v5.17.0...v5.17.1) (2019-06-20)


### Bug Fixes

* **kaizen:** make style attribute elm 18 compatible ([#402](https://github.com/cultureamp/big-frontend-repo/issues/402)) ([3cda8ad](https://github.com/cultureamp/big-frontend-repo/commit/3cda8ad))




# [5.17.0](https://github.com/cultureamp/big-frontend-repo/compare/v5.16.1...v5.17.0) (2019-06-19)


### Features

* **kaizen:** add elm version of LoadingPlaceholder component ([#397](https://github.com/cultureamp/big-frontend-repo/issues/397)) ([0e7794a](https://github.com/cultureamp/big-frontend-repo/commit/0e7794a))




## [5.16.1](https://github.com/cultureamp/big-frontend-repo/compare/v5.16.0...v5.16.1) (2019-06-17)


### Bug Fixes

* **kaizen:** fix elm storybook import for Tag module ([#396](https://github.com/cultureamp/big-frontend-repo/issues/396)) ([959e15c](https://github.com/cultureamp/big-frontend-repo/commit/959e15c))




# [5.16.0](https://github.com/cultureamp/big-frontend-repo/compare/v5.15.3...v5.16.0) (2019-06-14)


### Features

* **kaizen:** Medium and small size tags for elm ([#379](https://github.com/cultureamp/big-frontend-repo/issues/379)) ([d2dd088](https://github.com/cultureamp/big-frontend-repo/commit/d2dd088))




## [5.15.3](https://github.com/cultureamp/big-frontend-repo/compare/v5.15.2...v5.15.3) (2019-06-14)


### Bug Fixes

* **kaizen:** PR title validation corrected ([#380](https://github.com/cultureamp/big-frontend-repo/issues/380)) ([0f5f7cd](https://github.com/cultureamp/big-frontend-repo/commit/0f5f7cd))
* **kaizen:** Stop using ambient SVG types, use `require()` instead ([#393](https://github.com/cultureamp/big-frontend-repo/issues/393)) ([5c407bd](https://github.com/cultureamp/big-frontend-repo/commit/5c407bd))




## [5.15.2](https://github.com/cultureamp/big-frontend-repo/compare/v5.15.1...v5.15.2) (2019-06-13)


### Bug Fixes

* **kaizen:** fix Empty State Storybook import ([#392](https://github.com/cultureamp/big-frontend-repo/issues/392)) ([29ad4c3](https://github.com/cultureamp/big-frontend-repo/commit/29ad4c3))




## [5.15.1](https://github.com/cultureamp/big-frontend-repo/compare/v5.15.0...v5.15.1) (2019-06-12)


### Bug Fixes

* **kaizen:** Add missing Flow types for Checkbox ([#388](https://github.com/cultureamp/big-frontend-repo/issues/388)) ([8435d89](https://github.com/cultureamp/big-frontend-repo/commit/8435d89))




# [5.15.0](https://github.com/cultureamp/big-frontend-repo/compare/v5.13.0...v5.15.0) (2019-06-11)


### Features

* **kaizen:** create Elm EmptyState component ([#383](https://github.com/cultureamp/big-frontend-repo/issues/383)) ([498b424](https://github.com/cultureamp/big-frontend-repo/commit/498b424))




# [5.13.0](https://github.com/cultureamp/big-frontend-repo/compare/v5.12.0...v5.13.0) (2019-06-07)


### Features

* **kaizen:** Add ToggleSwitchField component ([#377](https://github.com/cultureamp/big-frontend-repo/issues/377)) ([619334b](https://github.com/cultureamp/big-frontend-repo/commit/619334b))




# [5.12.0](https://github.com/cultureamp/big-frontend-repo/compare/v5.11.0...v5.12.0) (2019-06-07)


### Features

* **kaizen:** add Radio (radio button) component ([#364](https://github.com/cultureamp/big-frontend-repo/issues/364)) ([cc3f3cf](https://github.com/cultureamp/big-frontend-repo/commit/cc3f3cf))




# [5.11.0](https://github.com/cultureamp/big-frontend-repo/compare/v5.9.0...v5.11.0) (2019-06-06)


### Bug Fixes

* **kaizen:** fix alignment of the checkbox ([#374](https://github.com/cultureamp/big-frontend-repo/issues/374)) ([56b1339](https://github.com/cultureamp/big-frontend-repo/commit/56b1339))


### Features

* **kaizen:** Add Popover component ([#378](https://github.com/cultureamp/big-frontend-repo/issues/378)) ([9dd1fe8](https://github.com/cultureamp/big-frontend-repo/commit/9dd1fe8))




# [5.9.0](https://github.com/cultureamp/big-frontend-repo/compare/v5.8.2...v5.9.0) (2019-06-05)


### Features

* **kaizen:** create EmptyState component ([#373](https://github.com/cultureamp/big-frontend-repo/issues/373)) ([6ef6eb3](https://github.com/cultureamp/big-frontend-repo/commit/6ef6eb3))




## [5.8.2](https://github.com/cultureamp/big-frontend-repo/compare/v5.8.0...v5.8.2) (2019-05-31)


### Bug Fixes

* **kaizen:** `url()` imports in Modal `.scss` file ([#369](https://github.com/cultureamp/big-frontend-repo/issues/369)) ([eec47b3](https://github.com/cultureamp/big-frontend-repo/commit/eec47b3))
* **kaizen:** Add missing Flow types for CheckboxField ([#372](https://github.com/cultureamp/big-frontend-repo/issues/372)) ([31bc44d](https://github.com/cultureamp/big-frontend-repo/commit/31bc44d))


### Features

* **kaizen:** Elm storybook ([#318](https://github.com/cultureamp/big-frontend-repo/issues/318)) ([cff42a7](https://github.com/cultureamp/big-frontend-repo/commit/cff42a7))




# [5.8.0](https://github.com/cultureamp/big-frontend-repo/compare/v5.7.0...v5.8.0) (2019-05-30)


### Features

* **kaizen:** Add sticky variant of TitleBlock ([#367](https://github.com/cultureamp/big-frontend-repo/issues/367)) ([2b5df97](https://github.com/cultureamp/big-frontend-repo/commit/2b5df97))




# [5.7.0](https://github.com/cultureamp/big-frontend-repo/compare/v5.6.0...v5.7.0) (2019-05-24)


### Features

* **kaizen:** GenericModal and ModalFooter tweaks. ([#361](https://github.com/cultureamp/big-frontend-repo/issues/361)) ([42ee259](https://github.com/cultureamp/big-frontend-repo/commit/42ee259))




# [5.6.0](https://github.com/cultureamp/big-frontend-repo/compare/v5.5.0...v5.6.0) (2019-05-21)




# [5.5.0](https://github.com/cultureamp/big-frontend-repo/compare/v5.4.0...v5.5.0) (2019-05-20)


### Bug Fixes

* **kaizen:** Fix the out-of-date type for InlineNotification ([#350](https://github.com/cultureamp/big-frontend-repo/issues/350)) ([af5f165](https://github.com/cultureamp/big-frontend-repo/commit/af5f165))




# [5.4.0](https://github.com/cultureamp/big-frontend-repo/compare/v5.3.1...v5.4.0) (2019-05-20)


### Features

* **kaizen:** VerticalProgressStep & VerticalProgressIndicator draft components ([#311](https://github.com/cultureamp/big-frontend-repo/issues/311)) ([07988e0](https://github.com/cultureamp/big-frontend-repo/commit/07988e0))




## [5.3.1](https://github.com/cultureamp/big-frontend-repo/compare/v5.3.0...v5.3.1) (2019-05-17)


### Bug Fixes

* **kaizen:** Ensure reversed font color is always white ([#349](https://github.com/cultureamp/big-frontend-repo/issues/349)) ([361bfd3](https://github.com/cultureamp/big-frontend-repo/commit/361bfd3))




# [5.3.0](https://github.com/cultureamp/big-frontend-repo/compare/v5.2.0...v5.3.0) (2019-05-17)


### Features

* **kaizen:** adding translation icon svg ([#348](https://github.com/cultureamp/big-frontend-repo/issues/348)) ([296cc4f](https://github.com/cultureamp/big-frontend-repo/commit/296cc4f))




# [5.2.0](https://github.com/cultureamp/big-frontend-repo/compare/v5.1.0...v5.2.0) (2019-05-16)


### Features

* **kaizen:** allow autohide for InlineNotification. ([#342](https://github.com/cultureamp/big-frontend-repo/issues/342)) ([9589743](https://github.com/cultureamp/big-frontend-repo/commit/9589743))




# [5.1.0](https://github.com/cultureamp/big-frontend-repo/compare/v5.0.3...v5.1.0) (2019-05-16)


### Features

* **kaizen:** Add animation for LoadingPlaceholder ([#340](https://github.com/cultureamp/big-frontend-repo/issues/340)) ([c6e5249](https://github.com/cultureamp/big-frontend-repo/commit/c6e5249))




## [5.0.3](https://github.com/cultureamp/big-frontend-repo/compare/v5.0.2...v5.0.3) (2019-05-16)


### Bug Fixes

* **kaizen:** change kaizen version bump path ([#339](https://github.com/cultureamp/big-frontend-repo/issues/339)) ([22262dc](https://github.com/cultureamp/big-frontend-repo/commit/22262dc))
* **kaizen:** padding issue and font colors on TitleBlock ([#338](https://github.com/cultureamp/big-frontend-repo/issues/338)) ([d3f60f0](https://github.com/cultureamp/big-frontend-repo/commit/d3f60f0))




## [5.0.2](https://github.com/cultureamp/big-frontend-repo/compare/v5.0.0...v5.0.2) (2019-05-13)


### Bug Fixes

* **kaizen:** ensure TitleBlock title and subtitle are white when reversed ([#325](https://github.com/cultureamp/big-frontend-repo/issues/325)) ([319bc3f](https://github.com/cultureamp/big-frontend-repo/commit/319bc3f))




# [5.0.0](https://github.com/cultureamp/big-frontend-repo/compare/v4.4.0...v5.0.0) (2019-05-13)


### Features

* **kaizen:** Namespace draft elm modules ([#324](https://github.com/cultureamp/big-frontend-repo/issues/324)) ([ba699db](https://github.com/cultureamp/big-frontend-repo/commit/ba699db))


### BREAKING CHANGES

* **kaizen:** Add `Kaizen` top level namespace to all exported Elm modules.
* **kaizen:** Enforce that package consumers import directly from drafts module.




# [4.4.0](https://github.com/cultureamp/big-frontend-repo/compare/v4.3.1...v4.4.0) (2019-05-10)


### Features

* **kaizen:** Add reversed secondary button style ([#321](https://github.com/cultureamp/big-frontend-repo/issues/321)) ([1cc15b4](https://github.com/cultureamp/big-frontend-repo/commit/1cc15b4))




## [4.3.1](https://github.com/cultureamp/big-frontend-repo/compare/v4.3.0...v4.3.1) (2019-05-10)


### Bug Fixes

* **kaizen:** Use the version from kaizen's package.json ([#323](https://github.com/cultureamp/big-frontend-repo/issues/323)) ([06c473e](https://github.com/cultureamp/big-frontend-repo/commit/06c473e))




# [4.3.0](https://github.com/cultureamp/big-frontend-repo/compare/v4.2.0...v4.3.0) (2019-05-10)


### Features

* **kaizen:** Support disabling tab focus on Buttons ([#314](https://github.com/cultureamp/big-frontend-repo/issues/314)) ([55d593d](https://github.com/cultureamp/big-frontend-repo/commit/55d593d))




# [4.2.0](https://github.com/cultureamp/big-frontend-repo/compare/v4.1.0...v4.2.0) (2019-05-07)


### Features

* **kaizen:** Publish to NPM ([#315](https://github.com/cultureamp/big-frontend-repo/issues/315)) ([e05ac17](https://github.com/cultureamp/big-frontend-repo/commit/e05ac17))




# [4.1.0](https://github.com/cultureamp/big-frontend-repo/compare/v4.0.1...v4.1.0) (2019-05-06)


### Features

* **kaizen:** Automated npm releases ([#312](https://github.com/cultureamp/big-frontend-repo/issues/312)) ([5a4f766](https://github.com/cultureamp/big-frontend-repo/commit/5a4f766))




## [4.0.1](https://github.com/cultureamp/big-frontend-repo/compare/v4.0.0...v4.0.1) (2019-04-30)


### Bug Fixes

* **kaizen:** fix margin and center title on mobile ([#293](https://github.com/cultureamp/big-frontend-repo/issues/293)) ([aae6ec6](https://github.com/cultureamp/big-frontend-repo/commit/aae6ec6))




# [4.0.0](https://github.com/cultureamp/big-frontend-repo/compare/v3.2.1...v4.0.0) (2019-04-26)


### chore

* **kaizen:** Update Flow libdef for Murmur import switch to Kaizen ([#290](https://github.com/cultureamp/big-frontend-repo/issues/290)) ([b7f4600](https://github.com/cultureamp/big-frontend-repo/commit/b7f4600))


### BREAKING CHANGES

* **kaizen:** A handful of Flow types have been changed, which may affect consumers in Murmur.

* chore(kaizen): Bump version of flow libdef

* chore(kaizen): Make Prettier ignore publishing scripts

* chore(kaizen): Run Prettier on new Flow libdef

* chore(kaizen): Bump version to 4.0.0




## [3.2.1](https://github.com/cultureamp/big-frontend-repo/compare/v3.1.1...v3.2.1) (2019-04-24)


### Features

* **kaizen:** Add missing icons ([#286](https://github.com/cultureamp/big-frontend-repo/issues/286)) ([a7320be](https://github.com/cultureamp/big-frontend-repo/commit/a7320be))




## [3.1.1](https://github.com/cultureamp/big-frontend-repo/compare/v3.1.0...v3.1.1) (2019-04-18)


### Bug Fixes

* **kaizen:** Fix to missed named version ([#281](https://github.com/cultureamp/big-frontend-repo/issues/281)) ([6835f72](https://github.com/cultureamp/big-frontend-repo/commit/6835f72))




# [3.1.0](https://github.com/cultureamp/big-frontend-repo/compare/v3.0.0...v3.1.0) (2019-04-15)


### Features

* **kaizen:** Validates Kaizen versions ([#272](https://github.com/cultureamp/big-frontend-repo/issues/272)) ([c9438b1](https://github.com/cultureamp/big-frontend-repo/commit/c9438b1))




# [3.0.0](https://github.com/cultureamp/big-frontend-repo/compare/v2.0.0...v3.0.0) (2019-04-12)


### Bug Fixes

* **kaizen:** Add isNew to flow type definitions for NavigationBar.Link ([#251](https://github.com/cultureamp/big-frontend-repo/issues/251)) ([e81c79a](https://github.com/cultureamp/big-frontend-repo/commit/e81c79a))


### Features

* **kaizen:** add elm TitleBlock and update react version ([#250](https://github.com/cultureamp/big-frontend-repo/issues/250)) ([0905cfe](https://github.com/cultureamp/big-frontend-repo/commit/0905cfe)), closes [#260](https://github.com/cultureamp/big-frontend-repo/issues/260)




# [2.0.0](https://github.com/cultureamp/big-frontend-repo/compare/v1.1.0...v2.0.0) (2019-04-05)


### Bug Fixes

* **kaizen:** fix guidance icon export ([#245](https://github.com/cultureamp/big-frontend-repo/issues/245)) ([2e108f9](https://github.com/cultureamp/big-frontend-repo/commit/2e108f9))
* **kaizen:** update flow type definition paths ([#252](https://github.com/cultureamp/big-frontend-repo/issues/252)) ([dc16027](https://github.com/cultureamp/big-frontend-repo/commit/dc16027))


### Features

* **kaizen:** add html type option to label component ([#248](https://github.com/cultureamp/big-frontend-repo/issues/248)) ([0cde76e](https://github.com/cultureamp/big-frontend-repo/commit/0cde76e))
* **kaizen:** Add option to customise notification autohide timer ([#241](https://github.com/cultureamp/big-frontend-repo/issues/241)) ([b051cc7](https://github.com/cultureamp/big-frontend-repo/commit/b051cc7))
* **kaizen:** add Well component ([#249](https://github.com/cultureamp/big-frontend-repo/issues/249)) ([ea81872](https://github.com/cultureamp/big-frontend-repo/commit/ea81872))


### BREAKING CHANGES

* **kaizen:** changed prop type definition for `labelText`




# [1.1.0](https://github.com/cultureamp/big-frontend-repo/compare/v1.0.0...v1.1.0) (2019-04-03)


### Features

* **kaizen:** Add isNew prop to NavigationBar Links to support new Performance module ([#240](https://github.com/cultureamp/big-frontend-repo/issues/240)) ([cf10223](https://github.com/cultureamp/big-frontend-repo/commit/cf10223))




# [1.0.0](https://github.com/cultureamp/big-frontend-repo/compare/v0.5.1...v1.0.0) (2019-04-02)


### Features

* **kaizen:** rename global navigation and layout ([#229](https://github.com/cultureamp/big-frontend-repo/issues/229)) ([36709bb](https://github.com/cultureamp/big-frontend-repo/commit/36709bb)), closes [cultureamp/cultureamp-style-guide#216](https://github.com/cultureamp/cultureamp-style-guide/issues/216)




## [0.5.1](https://github.com/cultureamp/big-frontend-repo/compare/v0.5.0...v0.5.1) (2019-03-22)


### Bug Fixes

* **kaizen:** add synthetic event to Flow type definitions for MenuItem ([#224](https://github.com/cultureamp/big-frontend-repo/issues/224)) ([ba79c97](https://github.com/cultureamp/big-frontend-repo/commit/ba79c97))




# [0.5.0](https://github.com/cultureamp/big-frontend-repo/compare/v0.4.0...v0.5.0) (2019-03-19)


### Features

* **kaizen:** add elm CheckboxField component ([#215](https://github.com/cultureamp/big-frontend-repo/issues/215)) ([6f2af37](https://github.com/cultureamp/big-frontend-repo/commit/6f2af37))
* **kaizen:** add react CheckboxField component ([#216](https://github.com/cultureamp/big-frontend-repo/issues/216)) ([5f9042c](https://github.com/cultureamp/big-frontend-repo/commit/5f9042c))




# [0.4.0](https://github.com/cultureamp/big-frontend-repo/compare/v0.3.0...v0.4.0) (2019-03-17)


### Features

* **button:** add type="button" attribute for buttons ([#209](https://github.com/cultureamp/big-frontend-repo/issues/209)) ([5082ccf](https://github.com/cultureamp/big-frontend-repo/commit/5082ccf))
* **kaizen:** add guidance.svg to icon library ([#208](https://github.com/cultureamp/big-frontend-repo/issues/208)) ([1a31f5b](https://github.com/cultureamp/big-frontend-repo/commit/1a31f5b))




# [0.3.0](https://github.com/cultureamp/big-frontend-repo/compare/v0.2.0...v0.3.0) (2019-03-12)


### Bug Fixes

* **button:** centre full width button content ([#193](https://github.com/cultureamp/big-frontend-repo/issues/193)) ([fd29bcd](https://github.com/cultureamp/big-frontend-repo/commit/fd29bcd))
* **kaizen:** rename InputField to be TextField ([#176](https://github.com/cultureamp/big-frontend-repo/issues/176)) ([db38a45](https://github.com/cultureamp/big-frontend-repo/commit/db38a45))


### Features

* **kaizen:** add inline prop option to Text component ([#177](https://github.com/cultureamp/big-frontend-repo/issues/177)) ([9075b72](https://github.com/cultureamp/big-frontend-repo/commit/9075b72))
* **kaizen:** add target prop to Button component ([#203](https://github.com/cultureamp/big-frontend-repo/issues/203)) ([e9827f1](https://github.com/cultureamp/big-frontend-repo/commit/e9827f1))




# [0.2.0](https://github.com/cultureamp/big-frontend-repo/compare/v0.1.1...v0.2.0) (2019-02-22)


### Bug Fixes

* **kaizen:** add esmoduleInterop flag to tsconfig ([#134](https://github.com/cultureamp/big-frontend-repo/issues/134)) ([8d197f0](https://github.com/cultureamp/big-frontend-repo/commit/8d197f0))
* **kaizen:** remove animation from start icon adornment ([#154](https://github.com/cultureamp/big-frontend-repo/issues/154)) ([5069db0](https://github.com/cultureamp/big-frontend-repo/commit/5069db0))
* **layout:** Remove max width on layout ([#137](https://github.com/cultureamp/big-frontend-repo/issues/137)) ([8eb86c6](https://github.com/cultureamp/big-frontend-repo/commit/8eb86c6))


### Features

* **kaizen:** add InputField component ([#145](https://github.com/cultureamp/big-frontend-repo/issues/145)) ([8eacbeb](https://github.com/cultureamp/big-frontend-repo/commit/8eacbeb))
* **TitleBlock:** Add draft TitleBlock component ([#136](https://github.com/cultureamp/big-frontend-repo/issues/136)) ([19a707a](https://github.com/cultureamp/big-frontend-repo/commit/19a707a))




## [0.1.1](https://github.com/cultureamp/big-frontend-repo/compare/v0.1.0...v0.1.1) (2019-02-05)


### Bug Fixes

* **kaizen:** fix react media import for layout and navigation bar components ([#126](https://github.com/cultureamp/big-frontend-repo/issues/126)) ([924e545](https://github.com/cultureamp/big-frontend-repo/commit/924e545))




# [0.1.0](https://github.com/cultureamp/big-frontend-repo/compare/a09b528...v0.1.0) (2019-02-04)


### Bug Fixes

* **release:** change lerna versioning to independent ([#118](https://github.com/cultureamp/big-frontend-repo/issues/118)) ([a09b528](https://github.com/cultureamp/big-frontend-repo/commit/a09b528))
