# Contributing

## Do you need to update design tokens?

Updating design tokens isn't something we do lightly because it can have such far reaching changes.

Please start a discussion in #prod_design_systems if you see something you think should change.

All changes must be reviewed by the Front End Foundations team.

## Before you start

Make sure you have run `pnpm install` (or `pnpm i`) from the root of the kaizen-design-system repo prior to making changes.

## Making the changes

- Most tokens reference a CSS variable. The value for these come from [src/themes](./src/themes).
- You should update values the theme Typescript files.
- You then run `pnpm build` to update the [less](./less), [sass](./sass) and [json](./tokens) versions of the tokens.
- You then commit all of the changed files and open a PR.
