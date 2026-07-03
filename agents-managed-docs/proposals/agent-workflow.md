# Agent Workflow Proposal — kaizen-design-system

> **Status: PROPOSAL — gated.** This document captures the intended agent workflow once
> ratified. The gate list in §4 is already enforced by branch protection and should be
> considered authoritative. The human-to-agent mapping in §5 is a recommendation, not
> enforced policy.
>
> First-draft owner: Chris. Architectural polish: Ryan (when back).

---

## 1. Current Human Workflow: Ticket → PR

### Branching

- Branch off `main`, prefix with initials/purpose (e.g. `di/update-typography-guidelines`)
- Default: one package per PR. Coordinated cross-package changes are the documented exception.

### Changeset

- Run `pnpm changeset` interactively, or write `.changeset/<slug>.md` directly (agent-friendly):

```md
---
'@kaizen/components': patch
---

fix: address accessibility issue in Button component
```

- Convention (not a GitHub gate): create when PR modifies `packages/**`; skip for docs/tooling-only.

### Storybook

- Stories live under `docs/` (`@docs/storybook` package)
- Local: `pnpm storybook` (`pnpm turbo dev`)
- CI builds two variants: `build:chromatic` (visual snapshots + branch preview) and `build:test`
  (headless Playwright run)

### PR Creation & Review

- PR description: "Why" + "What" sections (from `.github/pull_request_template.md`)
- Notify `#help_design_system` on Slack — GitHub notifications are not monitored
- Code review from `@cultureamp/kaizen-design-system` team member (CODEOWNERS-enforced)

---

## 2. CI Gates

| Workflow                   | Command                                                             | Notes                                      |
| -------------------------- | ------------------------------------------------------------------- | ------------------------------------------ |
| TypeScript                 | `pnpm lint:ts` (via `pnpm turbo lint:ts`)                           | Requires `build` first                     |
| ESLint                     | `pnpm lint:eslint`                                                  |                                            |
| Prettier                   | `pnpm lint:format`                                                  |                                            |
| Stylelint                  | `pnpm lint:styles`                                                  |                                            |
| Unit tests (3 shards)      | `pnpm test -- --shard=N/3`                                          | Agents run unsharded: `pnpm test -- --run` |
| Build verify               | `pnpm build`                                                        |                                            |
| Storybook tests (3 shards) | `pnpm turbo test:storybook --filter=@docs/storybook -- --shard N/3` | CI-only                                    |
| Chromatic (PR)             | `chromaui/action`                                                   | Human approves visual diff before merge    |

Post-merge on `main`: Buildkite publishes Storybook; `changeset.yaml` auto-creates a "Version
Packages" PR; when merged, publishes to npm.

---

## 3. Agent Inner Loop

### Fast local verify command

```sh
devbox run verify
```

**How it works:**

A single `pnpm turbo run` call across all required local gates:

```sh
pnpm turbo run build lint:ts test //#lint:eslint //#lint:format //#lint:styles
```

- Turbo enforces `build → lint:ts` ordering via the existing `dependsOn: ["^build"]` in `turbo.json` — no change needed there.
- `test`, `//#lint:eslint`, `//#lint:format`, `//#lint:styles` all run in parallel once their dependencies are satisfied.
- Turbo aggregates exit codes — any failing task fails the whole run.
- Results are cached (except `test`, which is `cache: false`).
- No shell script, no manual PID tracking.

**Storybook interaction tests (`test-storybook`) are CI-only.** Agents do NOT run
`pnpm turbo test:storybook` locally — too slow, requires Playwright + a running Storybook server.

**Estimated runtime:** ~3–5 minutes warm cache, 8–12 min cold.

### Concrete repo changes (implemented in PR #6847)

**1. `turbo.json` — add three root tasks:**

```json
{
  "tasks": {
    "build": { "dependsOn": ["^build"], "outputs": ["dist/**"] },
    "dev": { "dependsOn": ["^build"] },
    "lint:ts": { "dependsOn": ["^build"] },
    "test": { "inputs": ["packages/**"], "cache": false },
    "clean": { "cache": false },
    "//#lint:eslint": {},
    "//#lint:format": {},
    "//#lint:styles": {}
  }
}
```

Root tasks (`//#`) run the workspace-root `pnpm lint:eslint` / `pnpm lint:format` / `pnpm lint:styles` scripts. No `dependsOn` — they have no build dependency and can run in parallel from the start.

**2. Package `test` scripts — add `run` mode flag and `test:watch`:**

In each of `packages/components`, `packages/design-tokens`, `packages/tailwind`:

| Script       | Before              | After                   |
| ------------ | ------------------- | ----------------------- |
| `test`       | `vitest --config …` | `vitest run --config …` |
| `test:watch` | _(absent)_          | `vitest --config …`     |

This makes `pnpm turbo run test` non-interactive by default. The existing root `pnpm test` script (`pnpm turbo test -- --run`) also drops the `-- --run` flag since it is now redundant — the packages enforce it directly.

**3. `devbox.json` — add the `verify` script:**

```json
"scripts": {
  "setup": ["pnpm install"],
  "verify": ["pnpm turbo run build lint:ts test //#lint:eslint //#lint:format //#lint:styles"]
}
```

> **Note:** Wired into the real repo in PR #6847 (`devbox run verify`).

### What agents CAN verify locally

| Gate            | Command                         |
| --------------- | ------------------------------- |
| TypeScript      | included in `devbox run verify` |
| ESLint          | included in `devbox run verify` |
| Prettier        | included in `devbox run verify` |
| Stylelint       | included in `devbox run verify` |
| Unit tests      | included in `devbox run verify` |
| Build artefacts | included in `devbox run verify` |

### What is CI-only

| Gate                    | Reason                                                              |
| ----------------------- | ------------------------------------------------------------------- |
| `test-storybook`        | Playwright 3-shard run; too heavy for agent inner loop              |
| Chromatic visual review | Requires human approval in Chromatic UI                             |
| npm publish             | Requires `NPM_TOKEN` secret; handled post-merge by changeset action |

---

## 4. AGENTS.md Gate List (enforced by branch protection)

All items below are technically enforced by GitHub branch protection on `main`.

**Required status checks (all 8 must be green):**

1. `eslint` — `pnpm lint:eslint`
2. `stylelint` — `pnpm lint:styles`
3. `prettier` — `pnpm lint:format`
4. `typescript` — `pnpm turbo build && pnpm lint:ts`
5. `verify-build` — `pnpm build`
6. `vitest` — `pnpm test -- --run`
7. `test-storybook` — CI-only (Playwright, 3 shards); agents do not run this locally
8. `chromatic` — CI publishes; **human must approve visual diff in Chromatic UI before merge**

**Review gates:** 9. One approval from `@cultureamp/kaizen-design-system` (CODEOWNERS-enforced) 10. **Do not push after human approval** — `dismiss_stale_reviews: true` resets the approval
on any new push

**Conventions (not gated):**

- Create `.changeset/<slug>.md` when PR modifies `packages/**`; skip for docs/tooling-only PRs
- Default to one package per PR; coordinated cross-package changes are the documented exception
- Flag to team-lead to send `#help_design_system` Slack ping — agents do not post directly

---

## 5. Human Step → Agent Equivalent

| #   | Human step                     | Agent equivalent                                     | Notes                                                                      |
| --- | ------------------------------ | ---------------------------------------------------- | -------------------------------------------------------------------------- |
| 1   | Branch off `main`              | `git checkout -b <branch>`                           |                                                                            |
| 2   | Implement change               | Write/edit TypeScript + CSS files                    |                                                                            |
| 3   | Write/update Storybook stories | Write `.stories.tsx` following existing patterns     | Stories that pass TS/lint may still have visual issues caught by Chromatic |
| 4   | Create changeset               | Write `.changeset/<slug>.md` directly                | When `packages/**` changed                                                 |
| 5   | Run lint locally               | `pnpm lint`                                          |                                                                            |
| 6   | Run tests locally              | `pnpm test -- --run`                                 |                                                                            |
| 7   | Run build check                | `pnpm turbo build`                                   |                                                                            |
| 8   | Open PR                        | `gh pr create --title "..." --body "..."`            |                                                                            |
| 9   | Notify `#help_design_system`   | **Flag to team-lead** — social gate only             | Agents do not post                                                         |
| 10  | Request CODEOWNERS review      | Add reviewer from `@cultureamp/kaizen-design-system` |                                                                            |
| 11  | Chromatic visual approval      | **Human only** — enforced gate                       | Blocks merge                                                               |
| 12  | Designer sign-off              | **Social-only** per CONTRIBUTING.md                  | Not GitHub-gated                                                           |
| 13  | Merge PR (squash)              | `gh pr merge --squash` after all checks pass         |                                                                            |

---

## 6. Social-Only Process Expectations

These are process expectations per CONTRIBUTING.md, not GitHub branch protection gates.
They live here and not in AGENTS.md deliberately:

- **Designer sign-off** — required for component changes; not a GitHub block.
- **Advocado preference** — any `@cultureamp/kaizen-design-system` member satisfies the review
  gate; an advocado is preferred.
- **Conventional commit PR title** — affects CHANGELOG quality; no status check enforces it.
- **`#help_design_system` Slack notification** — GitHub notifications are not monitored;
  without the ping, reviewers may never see the PR.
