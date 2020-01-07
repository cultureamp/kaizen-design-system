# Kaizen Design System

[![Build status](https://badge.buildkite.com/880e8b196b369c19ffcbef08a81d364059e0d6fb77e9d35563.svg?branch=master)](https://buildkite.com/culture-amp/kaizen-design-system)

Kaizen is Culture Amp's public design system. It accelerates Culture Amp's designers and engineers as they collaborate on creating world-class products. Visit [cultureamp.design](https://cultureamp.design) to learn more.

This repository is the source of truth for Culture Amp's design system documentation and hosts packages such as [Kaizen Component Library](./packages/component-library), which are used across Culture Amp's products. It is structured as a multi-package repository, with a number of independently versioned projects sharing common tools, workflows and vision.

This document serves to orient you within the repository — to get you set up and acquainted, and then send you off in the right direction. For more information on any specific package, please refer to its README.

## Quick links

- [Kaizen Component Library README](./packages/component-library/README.md)
- [Kaizen Site README](./site/README.md) (and <https://cultureamp.design>)
- [Contributing guidelines](./CONTRIBUTING.md)

## Designers

### Issues

You can explore or create [Issues](https://github.com/cultureamp/kaizen-design-system/issues/) to track ideas, enhancements, or bugs. Use issues to track:

- Changes to design documentation
- Missing documentation

To learn more, see the designer section of the [Contributing guidelines](./CONTRIBUTING.md).

### Editing design documentation

You can edit Kaizen Site documentation using GitHub's interface.

To learn more, see the designer section of the [Contributing guidelines](./CONTRIBUTING.md).



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

## Branch previews

While the main site is located at <https://cultureamp.design>, all branches in this repository are automatically deployed to a public URL at <https://dev.cultureamp.design/>(branch-name). This deployment includes the Storybook build for that branch, along with any changes to documentation or the site.

For example, pushing the branch `louis/more-glitter` would make its documentation and Storybook build available at `dev.cultureamp.design/louis/more-glitter`.

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

## Bugs and discussions

Please open a new [GitHub Issue](https://github.com/cultureamp/kaizen-design-system/issues/new) to report bugs or suggest changes.

## Maintainers

The design system is maintained by Culture Amp's [Design Systems Team](https://github.com/orgs/cultureamp/teams/design-systems), with tooling and operations support from [Delivery Engineering](https://github.com/orgs/cultureamp/teams/delivery-engineering). :rocket:

## Learn more

Culture Amp employees can reach out to the Design Systems Team on Slack in the `#team_design_systems` channel.
