# Kaizen Design System

[![Build status](https://badge.buildkite.com/880e8b196b369c19ffcbef08a81d364059e0d6fb77e9d35563.svg?branch=main)](https://buildkite.com/culture-amp/kaizen-design-system)

Kaizen is Culture Amp's public design system. It accelerates Culture Amp's designers and engineers as they collaborate on creating world-class products. Visit [cultureamp.design](https://cultureamp.design) to learn more.

This repository is the source of truth for Culture Amp's Tier 1 and Tier 2 design systems and hosts packages such as [Kaizen Components](./packages/components), affectionately known as KAIO (Kaizen All In One), which are used across Culture Amp's products. For a more detailed overview of the system, see our [internal overview](https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3565290003/Introducing+Kaizen+Design+System).

This document serves to orient you within the repository — to get you set up and acquainted, and then send you off in the right direction. For more information on any specific package, please refer to its README.

## Quick links

- [Components README](./packages/components/README.md)
- [Design Tokens README](./packages/design-tokens/README.md)
- [Tailwind Preset README](./packages/design-tokens/README.md)

## Getting started

### Setup
Set up access to private Culture Amp packages on your laptop. You will need to update `~/.npmrc` with a Github token linked to your account. Refer to the [instructions here](https://cultureamp.atlassian.net/wiki/spaces/TV/pages/2776629375/Working+with+our+private+GitHub+package+registry).

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

While the main site is located at <https://cultureamp.design>, all branches in this repository are uploaded to Chromatic. Your branch will be updated with a comment containing a link when the upload has completed.

## Package scripts

It's dangerous to go alone! Take these:

Command | Summary
:- | :-
`pnpm storybook` | Develop components locally using Storybook
`STORIES=path/to/package pnpm storybook` | Develop just one package at a time using Storybook (builds faster!)
`pnpm compile` | Run all typechecks
`pnpm lint` | Run all linters
`pnpm lint:fix` | Run all linters, fixing violations
`pnpm plop` | Add a new component/subcomponent
`pnpm test` | Run all [Jest](https://jestjs.io/) tests
`pnpm test:storybook` | Run tests on all Storybook stories
`pnpm test:treeshake` | Build the packages and test if they are tree-shakeable
`pnpm reset` | Reinstall all dependencies

## Bugs and discussions

Please open a new [GitHub Issue](https://github.com/cultureamp/kaizen-design-system/issues/new) to report bugs or suggest changes.

## Learn more

Culture Amp employees can reach out to the Design Systems crew on Slack.
