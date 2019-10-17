# Kaizen Design System

[![Build status](https://badge.buildkite.com/880e8b196b369c19ffcbef08a81d364059e0d6fb77e9d35563.svg?branch=master)](https://buildkite.com/culture-amp/kaizen-design-system)

Kaizen is Culture Amp's design system to accelerate designers and engineers creating Culture Amp's products. Visit the [Kaizen Site](https://cultureamp.design) to learn more.

This repository includes the Kaizen Site and the Kaizen Component Library that we use internally.

## Setup

To develop Kaizen Component Library or Kaizen Site locally, run the following command to get started:

```
yarn install
```

## Development

We use [Storybook](https://github.com/storybooks/storybook) to develop React and Elm components locally. All Kaizen Design System components have accompanying stories in Storybook.

To develop Kaizen components, use storybook:

`yarn storybook`

## Domains

- [cultureamp.design](https://cultureamp.design)
- [dev.cultureamp.design](https://dev.cultureamp.design)/branch-name

## What's in this repo

### Kaizen Site

See the [Kaizen Site README](./site/README.md).

### Kaizen Component Library

See the [Kaizen Component Library README](./packages/component-library/README.md).

### Contributing

See the [contributing guidelines](CONTRIBUTING.md).

## Scripts

Command | Summary
:- | :-
`yarn setup` | Install dependencies
`yarn reset` | Clean and reinstall dependencies
`yarn compile` | Run typechecks
`yarn lint` | Run linters
`yarn lint:fix` | Run linters, auto-fixing violations
`yarn test` | Run unit tests

## Tools

Command | Summary
:- | :-
`yarn tsc` | Run the typescript compiler
`yarn tslint` | Run tslint
`yarn prettier` | Run prettier
`yarn gatsby` | Run gatsby in the `site` package

## Feedback, bugs, and issues

Please open a new [GitHub Issue](https://github.com/cultureamp/kaizen-design-system/issues/new) for bugs or reach out to Design Systems Team to discuss on #team_design_systems.

## Maintainers

The Culture Amp Design Systems Team maintains this repo.

## Learn more

Culture Amp employees can reach out to the Design Systems Team on Slack to learn more: #team_design_systems.

