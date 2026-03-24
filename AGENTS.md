<!-- kaizen-design-system/deps-update-playbook -->

# Dependency updates playbook

Use this section when performing dependency update

## TL;DR

Use this when starting a tech-health dependency update task in this repo:

- Identify where this is patch/minor, major or peer dependency work
- Run the [dependency workflow](#high-level-workflow) and confirm tests + Storybook + Chromatic where relevant
- Add changesets for anything that ships
- Leave clear notes in the PR about what was validated and what remains for a human to review

## Repo Context and Toolings For Depedencies Update

- **Package Manager**: `pnpm`
- **Versioning**: Changesets
- **CI**: Buildkite, GitHub Actions

## Risks Posture

- This repo is widely consume within design system and multiple shared packages
- Preferred small, safe, reservable changes over large risky ones
- Keep changes well-documented

### Priorities and Scopes

1. Prioritise patch and minor updates first with low risk
2. Treat major updates and peer dependencies changes as separate work that require:

- Release note review
- Local testing
- CI Storybook and Chromatic testing on GitHub
- Changeset with clear breaking-changes notes

3. For `peerDependecies` specifically:

- Assume they will change the APi contracts between a package and consumers
- Only update when required and always with a major release and documented migration notes

### High-level Workflow

When acting on Renovate PRs / dashboards:

1. Identify target:

- Look for:
  - Rollup PRs with branch name `renovate/rollup`
  - Renovate "Dependency Dashboard" [issue](https://github.com/cultureamp/kaizen-design-system/issues/2039)
- Focus first on patch or minor updates that:
  - Not marked as major
  - Have reasonable confidence scores if present

2. Local validation:

- Check out the branch locally
- Run:
  - `pnpm install` or `pnpm install --no-frozen-lockfile` for lockfile conflicts
  - `pnpm test` and `pnpm build`
  - Storybook and Chromatic test and any speicifc checks
- Fix CI isses that are mechanical (confid tweaks, type fixes, etc )

3. Lockfile & CI hygiene:

- Resolve lockfile conflicts by re-running `pnpm install`
- Re-run test s locally after conflicts are fixed
- Push fixes for CI checks re-run

4. Merge strategy:

- **Safe, passing patch or minor changes**: Enable auto-merge if configured or manually merge once CI is green
- **Large high-risk changes**: Keep them in separate PRs with notes about what was validated and what remains unknown

5. Major updates:

- **Major bumps** such as React, Tailwind, Storybook, etc.
  - Close the PRs with comments if possible
  - Capture as a new ticket rather than forcing it
- **Unresolved failures packages** such as infra-level or complex test frameworks
  - Document what you tried, what failed with relevant errors or logs
  - Link relevant Slack threads or docs for additional context

6. Backports:

- When there is conflicts with other major updates, pause the process and communicate with team members about backport fixes
- Avoid leaving consumer apps pinned to old and unmaintained versions without a plan

### Do and Don't

#### Do

- Keep PRs small and well-scoped
- Add changesets for anything that ship to consumers
- Use Storybook and Chromatic to catch UI regressions where relevant
- Leave clear PR description if manually add one

#### Don't

- Don't merge peer dependency, treat them as major
- Don't batch unrelated major updates
- Don't hand-edit lockfiles unless you have tried suggested commands

## How agents should behave in this repo

When acting in this repo, agents would:

1. Bias toward safety and clarify:
   - Make conservative changes
   - Prefer explicit comments and clear commit messages

2. Respect existing workflow:
   - Use `pnpm`, Changesets and existing CI workflows
   - Don't introduce new tolling without human approval

3. Surface uncerstainty:
   - If you are unsure about:
     - Risk level of a dependency update
     - How a change affects consumers
   - Then:
     - Leave a comment in the PR summarising your understanding with open questions
     - Avoid merging without human review

4. Log decisions:
   For any non-trivial decision (skipping an update or parking a major bump), record:
   - What you decided
   - Why
   - Links to relevant docs, tickets or Slack threads (if available)

<!-- end kaizen-design-system/deps-update-playbook -->
