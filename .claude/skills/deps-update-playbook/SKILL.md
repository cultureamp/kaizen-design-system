---
name: deps-update-playbook
description: Guides dependency updates in `kaizen-design-system`
---

## Dependency Updates Playbook

Use this skill when performing dependency updates in `kaizen-design-system`.

## TL;DR

- **Why**: Use the [prioritisation guide](#prioritisation-choosing-what-to-update) to decide which updates matter most when time is limited
- **What**: Identify whether this is patch/minor, major, or peer dependency work
- **How**: Run the [dependency workflow](#high-level-workflow) and confirm tests + Storybook + Chromatic where relevant
- **Changeset**:Add changesets for anything that ships
- **PR Notes and **: Leave clear notes in the PR about what was validated and what remains for a human to review

## Preconditions

- **Package Manager**: `pnpm`
- **Versioning**: Changesets
- **CI**: Buildkite, GitHub Actions
- Local validation script available at `.claude/skills/deps-update-playbook/scripts/validate-local.sh`
- Dashboard check script available at `.claude/skills/deps-update-playbook/scripts/check-dashboard.sh`

## Risk Posture

- This repo is widely consumed within the design system and multiple shared packages
- Prefer small, safe, reversible changes over large risky ones
- Keep changes well-documented

### Priorities and Scopes

1. Prioritise patch and minor updates first with low risk
2. Treat major updates and peer dependency changes as separate work that require:
   - Release note review
   - Local testing
   - CI Storybook and Chromatic testing on GitHub
   - Changeset with clear breaking-change notes
3. For `peerDependencies` specifically:
   - Assume they will change the API contracts between a package and consumers
   - Only update when required and always with a major release and documented migration notes

## Prioritisation: Choosing What to Update

Before diving into the workflow, decide **which** updates to tackle first. This is especially important during time-boxed sessions (a health week morning, a Friday afternoon, etc.).

### Effort Estimation Heuristics

Assign each pending update a rough effort bucket:

| Bucket                      | Typical effort                                                | Examples                                                                          |
| --------------------------- | ------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| **Quick win** (< 15 min)    | Bump version, `pnpm install`, CI green                        | Patch/minor with no API changes, lockfile-only PRs                                |
| **Moderate** (15-60 min)    | May need config tweaks, type fixes, or small code changes     | Minor bumps with deprecation warnings, devDependency majors (e.g. ESLint plugins) |
| **Substantial** (1-4 hrs)   | Breaking changes, migration steps, multi-package coordination | Major bumps of runtime deps (React, Tailwind, Storybook), peer dep changes        |
| **Project-sized** (> 4 hrs) | Cross-repo coordination, consumer migration                   | Major framework upgrades affecting downstream apps                                |

Signals that increase effort:

- Release notes mention breaking changes or migration guides
- The package is a `peerDependency` (API contract change)
- Multiple packages in the monorepo depend on it
- Previous Renovate PR failed CI

### Impact Scoring

Use the [dx-insight-usage-guardrail skill](../dx-insight-usage-guardrail/SKILL.md) to assess the downstream reach of each dependency:

1. **Consumer count**: How many repos and apps import the affected package? More consumers = higher impact.
2. **Consumer criticality**: Is the consumer a production app or an internal tool? Production apps raise the stakes.
3. **Staleness risk**: How far behind is the current version? Multiple majors behind = compounding migration debt.
4. **Security signal**: Does the update fix a known CVE or advisory? Security patches jump to the top.

### Triage Matrix

When time is limited, work through updates in this order:

| Priority            | Criteria                                                          | Action                                        |
| ------------------- | ----------------------------------------------------------------- | --------------------------------------------- |
| **P0 — Do now**     | Security advisory / CVE fix, any severity                         | Patch immediately regardless of effort        |
| **P1 — High value** | Quick-win effort + high consumer count                            | Batch and merge — best return on time         |
| **P2 — Strategic**  | Moderate effort + high consumer impact, or unblocks other updates | Tackle if time allows after P0 and P1         |
| **P3 — Backlog**    | Substantial/project-sized effort, or low consumer impact          | Document scope, create a ticket, skip for now |

### Time-Boxed Session Workflow

If you have a fixed window (e.g. one morning):

1. Run `check-dashboard.sh` to list all pending updates
2. For each pending update, estimate effort (use the heuristics above)
3. Query DX Insights for consumer counts of the affected packages (see [dx-insight-usage-guardrail](../dx-insight-usage-guardrail/SKILL.md))
4. Sort by priority using the triage matrix
5. Present the prioritised list to the human with effort estimates and impact notes
6. Work through the list in priority order, stopping when the time box ends
7. For anything not completed, leave a summary of what was done and what remains

## High-level Workflow

When acting on Renovate PRs / dashboards:

### 1. Identify target

- Look for:
  - Rollup PRs with branch name `renovate/rollup`
  - Renovate "Dependency Dashboard" [issue](https://github.com/cultureamp/kaizen-design-system/issues/2039)
- Run the dashboard check script to get a summary of pending updates:
  ```sh
  .claude/skills/deps-update-playbook/scripts/check-dashboard.sh
  ```
- Focus first on patch or minor updates that:
  - Are not marked as major
  - Have reasonable confidence scores if present

### 2. Local validation

- Check out the branch locally
- Run the local validation script:
  ```sh
  .claude/skills/deps-update-playbook/scripts/validate-local.sh
  ```
  Or manually run:
  - `pnpm install` or `pnpm install --no-frozen-lockfile` for lockfile conflicts
  - `pnpm test` and `pnpm build`
  - Storybook and Chromatic tests and any specific checks
- Fix CI issues that are mechanical (config tweaks, type fixes, etc.)

### 3. Lockfile & CI hygiene

- Resolve lockfile conflicts by re-running `pnpm install`
- Re-run tests locally after conflicts are fixed
- Push fixes for CI checks re-run

### 4. Merge strategy

- **Safe, passing patch or minor changes**: Enable auto-merge if configured or manually merge once CI is green
- **Large high-risk changes**: Keep them in separate PRs with notes about what was validated and what remains unknown

### 5. Major updates

- **Major bumps** such as React, Tailwind, Storybook, etc.
  - Close the PRs with comments if possible
  - Capture as a new ticket rather than forcing it
- **Unresolved failure packages** such as infra-level or complex test frameworks
  - Document what you tried, what failed with relevant errors or logs
  - Link relevant Slack threads or docs for additional context

### 6. Backports

- When there are conflicts with other major updates, pause the process and communicate with team members about backport fixes
- Avoid leaving consumer apps pinned to old and unmaintained versions without a plan

## Do and Don't

### Do

- Keep PRs small and well-scoped
- Add changesets for anything that ships to consumers
- Use Storybook and Chromatic to catch UI regressions where relevant
- Leave clear PR descriptions

### Don't

- Don't merge peer dependency changes as minor — treat them as major
- Don't batch unrelated major updates
- Don't hand-edit lockfiles unless you have tried suggested commands

## Agent Behaviour Guidelines

When acting in this repo, agents should:

1. **Bias toward safety and clarity**:
   - Make conservative changes
   - Prefer explicit comments and clear commit messages

2. **Respect existing workflow**:
   - Use `pnpm`, Changesets, and existing CI workflows
   - Don't introduce new tooling without human approval

3. **Surface uncertainty**:
   - If you are unsure about:
     - Risk level of a dependency update
     - How a change affects consumers
   - Then:
     - Leave a comment in the PR summarising your understanding with open questions
     - Avoid merging without human review

4. **Log decisions**:
   For any non-trivial decision (skipping an update or parking a major bump), record:
   - What you decided
   - Why
   - Links to relevant docs, tickets, or Slack threads (if available)

5. **Prioritise with data**:
   - Always run the [prioritisation guide](#prioritisation-choosing-what-to-update) before starting work
   - Use DX Insights consumer counts to justify priority ordering
   - When presenting a plan to a human, include effort estimates and impact scores

## Alignment with `ca-agent-context`

These skills may overlap with shared agent context in [`cultureamp/ca-agent-context`](https://github.com/cultureamp/ca-agent-context). When updating this skill:

- Check whether `ca-agent-context` has equivalent or complementary guidance
- Prefer referencing shared context over duplicating it
- If this skill introduces patterns that would benefit other repos, consider upstreaming them to `ca-agent-context`
