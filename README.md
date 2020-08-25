# Kaizen Design System

[![Build status](https://badge.buildkite.com/880e8b196b369c19ffcbef08a81d364059e0d6fb77e9d35563.svg?branch=master)](https://buildkite.com/culture-amp/kaizen-design-system)

Kaizen is Culture Amp's public design system. It accelerates Culture Amp's designers and engineers as they collaborate on creating world-class products. Visit [cultureamp.design](https://cultureamp.design) to learn more.

This repository is the source of truth for Culture Amp's design system documentation and hosts packages such as [Kaizen Component Library](./packages/component-library), which are used across Culture Amp's products. It is structured as a multi-package repository, with a number of independently versioned projects sharing common tools, workflows and vision.

This document serves to orient you within the repository — to get you set up and acquainted, and then send you off in the right direction. For more information on any specific package, please refer to its README.

## Quick links

- [Kaizen Design Tokens README](./packages/design-tokens/README.md)
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

(Having trouble running Storybook? Try running `yarn reset`, which includes `yarn clean` and `yarn install --force`!)

To develop the site locally, please refer to the documentation in [the site package](./site/README.md).

## Branch previews

While the main site is located at <https://cultureamp.design>, all branches in this repository are automatically deployed to a public URL at <https://dev.cultureamp.design/>(branch-name). This deployment includes the Storybook build for that branch, along with any changes to documentation or the site.

For example, pushing the branch `louis/more-glitter` would make its documentation and Storybook build available at `dev.cultureamp.design/louis/more-glitter`.

## Canary Releases 
Canary releases are a great way to reduce the risk of your changes. Use canary releases when you're working on a significant refactor, experimenting with new technology, or making other large scale changes. 

Canary branches are protected, and can only be created by the admins of this repo. Once you have a canary branch set up, any subsequent PR + merge into that branch will release a package. As an example, a repo admin 
might set up `canary/pink-button` for your experimental visual changes. When you're happy with the state of your current branch, say `ally/even-more-glitter`, you would open a PR from `ally/even-more-glitter` into 
`canary/pink-button`, receive the expected amount of reviews, then merge your changes into `canary/pink-button`. This will trigger the canary release pipeline and release `<new_version>-canary-pink-button.<hash>`.

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

## Learn more

Culture Amp employees can reach out to the Design Systems crew on Slack.
