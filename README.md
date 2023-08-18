# Kaizen Design System

[![Build status](https://badge.buildkite.com/880e8b196b369c19ffcbef08a81d364059e0d6fb77e9d35563.svg?branch=main)](https://buildkite.com/culture-amp/kaizen-design-system)

Kaizen is Culture Amp's public design system. It accelerates Culture Amp's designers and engineers as they collaborate on creating world-class products. Visit [cultureamp.design](https://cultureamp.design) to learn more.

This repository is the source of truth for Culture Amp's design system documentation and hosts packages such as [Kaizen Component Library](./packages/component-library), which are used across Culture Amp's products. It is structured as a multi-package repository, with a number of independently versioned projects sharing common tools, workflows and vision.

This document serves to orient you within the repository — to get you set up and acquainted, and then send you off in the right direction. For more information on any specific package, please refer to its README.

## Quick links

- [Kaizen Issues](https://github.com/cultureamp/kaizen-discourse/issues)
- [Kaizen Design Tokens README](./packages/design-tokens/README.md)
- [Kaizen Component Library README](./packages/component-library/README.md)
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

### Setup
Set up access to private Culture Amp packages on your laptop. You will need to update `~.npmrc` with a Github token linked to your account. Refer to the [instructions here](https://github.com/cultureamp/node-packages/blob/master/how-to-setup-a-project-to-use-private-cultureamp-packages.md).

### Installation
To begin developing the design system locally, run the following from the repository root:

```
pnpm install
```

We use [Storybook](https://github.com/storybooks/storybook) to provide a local development environment for [React](https://reactjs.org/) components. All Kaizen Design System components have accompanying stories in Storybook.

To run Storybook locally, run the following from the repository root:

```
pnpm storybook
```

(Having trouble running Storybook? Try running `pnpm reset`, which includes `pnpm clean` and `pnpm install --force`!)

## Branch previews

While the main site is located at <https://cultureamp.design>, all branches in this repository are automatically deployed to a public URL at <https://dev.cultureamp.design/>(branch-name). This deployment is a Storybook build for that branch.

For example, pushing the branch `louis/more-glitter` would make its documentation and Storybook build available at `dev.cultureamp.design/louis/more-glitter`.

## Package scripts

It's dangerous to go alone! Take these:

Command | Summary
:- | :-
`pnpm storybook` | Develop components locally using Storybook
`STORIES=path/to/package pnpm storybook` | Develop just one package at a time using Storybook (builds faster!)
`pnpm commit` | Use commitizen to help you write your conventional commits
`pnpm compile` | Run all typechecks
`pnpm lint` | Run all linters
`pnpm lint:fix` | Run all linters, fixing violations
`pnpm plop` | Add a new component/subcomponent
`pnpm test:storybook` | Run tests on all Storybook stories
`pnpm test` | Run all [Jest](https://jestjs.io/) tests
`pnpm reset` | Reinstall all dependencies

## Bugs and discussions

Please open a new [GitHub Issue](https://github.com/cultureamp/kaizen-design-system/issues/new) to report bugs or suggest changes.

## Learn more

Culture Amp employees can reach out to the Design Systems crew on Slack.
