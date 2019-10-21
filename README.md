# Kaizen Design System

[![Build status](https://badge.buildkite.com/880e8b196b369c19ffcbef08a81d364059e0d6fb77e9d35563.svg?branch=master)](https://buildkite.com/culture-amp/kaizen-design-system)

Kaizen is Culture Amp's design system. It accelerates Culture Amp's designers and engineers as they collaborate on creating world-class products. Visit [cultureamp.design](https://cultureamp.design) to learn more.

This repository represents the source of truth for Culture Amp's design system documentation, as well as a number of public front-end packages, such as the [Kaizen Component Library](./packages/component-library) used in Culture Amp's products. It is structured as a multi-package workspace, with a number of independently released and versioned projects sharing common tools, workflows and vision.

This document serves to orient you within the repository — to get you set up and acquainted, and then send you off in the right direction. For more information on any specific package, please refer to its respective README.

## Quick links

- [Kaizen Component Library](./packages/component-library/README.md)
- [Kaizen Site](./site/README.md) (and [cultureamp.design](https://cultureamp.design))
- [Contributing guidelines](./CONTRIBUTING.md)

## Getting started

To begin developing the design system locally, run the following from the repository root:

```
yarn install
```

We use [Storybook](https://github.com/storybooks/storybook) to provide a local development environment for [React](https://reactjs.org/) and [Elm](https://elm-lang.org/) components. All Kaizen Design System components have accompanying stories in Storybook.

To run Storybook locally, run the following from the repository root:

```
yarn storybook
```

To develop the site locally, please refer to the documentation in [the site package](./site/README.md).

## Package scripts

It's dangerous to go alone! Take these:

Command | Summary
:- | :-
`yarn storybook` | Develop components locally
`yarn compile` | Run all typechecks
`yarn lint` | Run all linters
`yarn lint:fix` | Run all linters, fixing violations
`yarn test` | Run all tests (using [Jest](https://jestjs.io/))
`yarn reset` | Reinstall all dependencies

## Branch previews

While the main site is located at [cultureamp.design](https://cultureamp.design), all branches in this repository are automatically deployed to a public URL at [dev.cultureamp.design](https://dev.cultureamp.design)/(branch name).

For example, pushing the branch `louis/more-glitter` would make its documentation and Storybook build available at `dev.cultureamp.design/louis/more-glitter`.

## Discussion, bugs and issues

Please open a new [GitHub Issue](https://github.com/cultureamp/kaizen-design-system/issues/new) to report bugs or suggest changes.

## Maintainers

This repository is maintained (with :heart:) by Culture Amp's [Design Systems Team](https://github.com/orgs/cultureamp/teams/design-systems), with tooling and operations support from [Delivery Engineering](https://github.com/orgs/cultureamp/teams/delivery-engineering). :rocket:

## Learn more

Culture Amp employees can reach out to the Design Systems Team on Slack in the `#team_design_systems` channel.

<br/><h3 align="center">:seedling:</h3>
