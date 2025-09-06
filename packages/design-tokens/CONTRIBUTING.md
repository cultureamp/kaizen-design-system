# Contributing

## Do you need to update design tokens?

Updating design tokens isn't something we do lightly because it can have such far reaching changes.

Please start a discussion in #help_design_systems if you see something you think should change.

All changes must be reviewed by the Unified Systems team.

## Before you start

Make sure you have run `pnpm install` (or `pnpm i`) from the root of the kaizen-design-system repo prior to making changes.

## Making the changes

- Most tokens reference a CSS variable. The values are defined in [src/js/tokens.ts](./src/js/tokens.ts).
- To update or add a new token, you will need to update `tokens` object.
  - Refer to the `TokenStructure` type for guidance on the object's shape.
- After `token` has been updated, run `pnpm build` to update the [less](./less), [sass](./sass) and [json](./tokens) versions of the tokens.
  - Do not update files directly in these folders. These will be rebuilt and changes will be lost.
- Following a successful build, commit all of the changed files and open a PR with a changeset
  - Note that removing or changing the value a token would likely be considered a breaking change - ensure that the changeset reflects the scope of impact and teams are notified about critical updates.
