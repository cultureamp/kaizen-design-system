# AGENTS.md — kaizen-design-system

> **Read this first if you are an AI agent.** kaizen-design-system is the shared platform
> for every Culture Amp frontend. A careless change here ships to the whole fleet. When in
> doubt, prefer the smaller change, and never alter a design-token value or a public type
> without surfacing it.

> **Doc map.** The companion docs referenced below live in [`agents-managed-docs/`](agents-managed-docs/) — ADRs, proposals, the accessibility catalogue, and reference guides. The repo-root `CLAUDE.md` is a symlink to this file, so Claude Code and every other agent read the same instructions.

---

## 1. What this system is

kaizen-design-system (KAIO) produces three things consumed across the org:

- **Components** — `packages/components` — the React component library.
- **Design tokens** — `packages/design-tokens` — primitive + semantic tokens compiled to SASS/CSS/JS.
- **Tailwind preset** — `packages/tailwind` — the Tailwind config/preset consumers extend.

Consumers are every Next.js / React frontend in the fleet (~56 repos, 5,400+ files). Treat
changes as fleet-wide by default. Before removing or renaming a prop, measure blast radius
first — see §12.

---

## 2. Build & run

**Agent verify command** (covers all locally-verifiable required gates):

```sh
devbox run verify
```

A single `turbo run` invocation: turbo enforces `build → lint:ts` ordering (existing `^build` dependency), runs `test` and the three root lint tasks in parallel, fails if any task fails, and caches results. No shell script.
Estimated: ~3–5 min warm cache, 8–12 min cold.

CI-only checks (`test-storybook`, `chromatic`) are excluded — see §13.

**Don't read the full output** — a cold run is thousands of lines and will blow
your context. Run `verify` in the background so output is captured to a file, then
read only the summary and the failing task — never `cat` the whole log:

```sh
# 1. Pass/fail = exit code + the summary block at the END of the log:
tail -n 15 <output-file>
#   "Tasks: N successful, N total"  → all gates passed; stop here.
#   "Failed: <pkg>#<task>"          → names the failed task(s).

# 2. Show ONLY that task's lines. turbo prefixes streamed output "<pkg>:<task>:"
#    (the summary uses '#', the streamed lines use ':'), so for a failure of
#    "@kaizen/components#test":
grep -E '^@kaizen/components:test:' <output-file>

# Or auto-extract the failed task and show just its output:
fail=$(grep -oE 'Failed:[[:space:]]+\S+' <output-file> | awk '{print $2}' | tr '#' ':')
grep -E "^${fail}:" <output-file>
```

The summary line plus the one failing task's output is all you need to diagnose.

**Storybook locally:** `pnpm storybook` — use `STORIES=<glob>` to filter to one component.
Storybook interaction tests (`test-storybook`) are CI-only; do not run them in the agent loop.

---

## 3. Component conventions

**Folder anatomy:** `ComponentName/` with `ComponentName.tsx`, `_docs/`, `index.ts`,
co-located stories and styles.

**Styling — CSS Modules only for new work.**

- New components MUST use `.module.css` (plain CSS). No new `.scss`.
- Existing SCSS (`.module.scss`) is legacy and being migrated out — do not add to it.
- Use CSS custom properties for variables; SCSS variables are compiled away and cannot be
  used for runtime theming.

**Deprecated APIs — do not use in new or changed code:**

- `reversed` / `isReversed` prop — removed in v3 (Mar 2026). Use `<ReversedColors isReversed>`
  context provider to theme a subtree. See [ADR 0002](agents-managed-docs/adr/0002-reversed-to-reversedcolors-provider.md).

**Class-name overrides — prefer `className` on new components.** `classNameOverride` is _not_
deprecated on components that already expose it. The forward-looking preference is that new
RAC-based components take the standard `className` prop (combined via `mergeClassNames`) rather
than adding `classNameOverride`. There is **no `@deprecated` JSDoc on the `OverrideClassName`
type today**, so this preference is not yet signalled at call sites (tracked in KZN-4103).

**Internationalisation:** All user-facing text must be translated. Never hardcode a visible string.

**Changeset:** Any change that ships to `packages/**` needs a `.changeset/<slug>.md`. Skip for
docs or tooling-only PRs that touch no published package. Write the file directly:

```md
---
'@kaizen/components': patch
---

fix: address accessibility issue in Button component
```

---

## 4. Component foundations — React Aria Components (RAC)

Kaizen components are built on React Aria Components (RAC). Accessibility, focus management,
and keyboard behaviour come from the foundation, not from kaizen code.

Short summary of what this means in practice:

- **Buttons expose `onPress` (PressEvents), not bare `onClick`.**
- **Refs forward to the DOM node** — `Button` ref types to `HTMLButtonElement`, etc.
- **DOM props pass through `...restProps`** to the RAC primitive — `aria-*`, event handlers
  and other HTML attributes reach the DOM without extra wiring.
- **`mergeClassNames(...classNames)`** is the helper for combining a RAC `className` function
  with extra classes — always use it, never concatenate strings directly.

Full layering model, integration styles, controlled/uncontrolled
patterns, render props, slots, and worked examples (Button / Menu / Tabs):
→ [agents-managed-docs/reference/rac-foundations.md](agents-managed-docs/reference/rac-foundations.md)

---

## 5. Versioning & breaking changes

Components coexist at multiple maturity levels:

| Label                                    | Meaning                                         | Safe for production? |
| ---------------------------------------- | ----------------------------------------------- | -------------------- |
| `__next__` / `@kaizen/components/next`   | Stable replacement, landing in the next major   | Yes                  |
| `__alpha__` / `@kaizen/components/alpha` | In active development, **not production-ready** | **No**               |
| `V1` (e.g. `ButtonV1`)                   | Deprecated; present for transition window       | No — migrate off     |

**`alpha` is a hard gate.** `@kaizen/components/alpha` is NOT re-exported from `src/index.ts`.
Do not build production features on alpha components unless explicitly instructed.

**Use the stable `SingleSelect` (`src/SingleSelect/`) for all production select work.** The
`__alpha__/SingleSelect/` is direction-of-travel only.

**Breaking changes run on a ~6-monthly cadence.** Major changes are batched — v2 (Sep 2025),
v3 (Mar 2026). Consumers across the fleet absorb them between releases. The pattern:
deprecate at major, delete at the following major once usage is confirmed zero.

Full decision history and rationale: → [agents-managed-docs/adr/](agents-managed-docs/adr/README.md)

---

## 6. Design tokens

`packages/design-tokens` — primitive tokens → semantic tokens (primary / success / warning /
danger / neutral) → compiled SASS/CSS/JS outputs.

**Token values are fleet-wide.** Changing a value in `tokens/*.json` propagates to every
consumer in the fleet — this is the highest-blast-radius change in the repo. Surface before
changing.

CSS variables via `@kaizen/components/dist/styles.css` + Tailwind is the recommended
consumer path. SCSS/Less assets still ship but are legacy compatibility layers only.

---

## 7. Styling, Tailwind & RTL

**RTL:** Use CSS logical utilities (`padding-inline-start`, `margin-inline-end`, etc.) or
Tailwind's logical class variants. Never use physical `left`/`right` for direction-aware spacing.

**Container queries:** prefer over viewport breakpoints for component-internal responsiveness.

**Tailwind layer order (for consumers).** Kaizen's `@layer` declaration sets cascade precedence — earlier layers are overridden by later ones. Consumers declare layers in this order so kaizen sits lowest and the app's own utilities win last:

```css
@layer tokens, normalize, reset, properties, theme, base, kz-components, components, competencies-drawer, prc-shared-ui, utilities;
```

Tiers, lowest precedence → highest:

- **Tier 1 — Kaizen foundation:** `tokens, normalize, reset, properties, theme, base, kz-components, components` — declared first; the design system is the baseline.
- **Tier 2 — shared UI packages:** e.g. `competencies-drawer`, `prc-shared-ui` — downstream shared libraries layer on top of kaizen.
- **Tier 3 — the consuming app's own utilities:** `utilities` last, so an app can always override.

(Package names above are an example — consumers slot their own shared-UI layers between kaizen and `utilities`.)

---

## 8. Testing posture

**The target** (direction the codebase is moving toward):

| Priority | File type                    | When to write                                                                |
| -------- | ---------------------------- | ---------------------------------------------------------------------------- |
| 1        | `*.stickersheet.stories.tsx` | Every component — renders all visual variants/states for Chromatic           |
| 2        | `*.spec.stories.tsx`         | Any component with user interaction — Storybook `play()` + `@storybook/test` |
| 3        | `*.spec.ts/tsx` vitest unit  | ONLY for pure non-visual logic: utils, hooks with no DOM, state machines     |

**Do not write a unit test for "does the component render X when prop Y is set."** That is a
stickersheet or spec story job.

**The codebase is mid-migration** — stickersheet coverage is good but most interaction tests
were historically written as unit tests. KaizenProvider and VisuallyHidden are exempt from
the stickersheet requirement.

Full gap inventory and migration backlog: → [agents-managed-docs/reports/test-posture-snapshot.md](agents-managed-docs/reports/test-posture-snapshot.md)

---

## 9. Accessibility

Single-component a11y is covered by the Storybook axe addon — keep those green.

**Composition a11y** — emergent issues when components are combined — is the harder class of
problem. 12 patterns with risk, detection steps, and correct composition guidance:
→ [agents-managed-docs/a11y/composition-catalogue.md](agents-managed-docs/a11y/composition-catalogue.md)

---

## 10. Tooling for agents — LSP vs grep

LSP is available **to the top-level agent only** — spawned sub-agents do NOT inherit it.
Call `ToolSearch` for `hover` or `goToDefinition` to confirm availability before relying on LSP.

**Use LSP when:**

- Getting prop shape / API surface of one component — `hover` or `documentSymbol` returns
  the full resolved signature without reading the implementation. **5–10× cheaper than Read.**
- Comparing 3+ component APIs — `documentSymbol` on each file vs reading full implementations.
- Tracing cross-package type inheritance — `goToDefinition` navigates pnpm hashed paths
  precisely; grep over mangled `.pnpm/` dirs is fragile and expensive.
- Finding whether a symbol is `@deprecated` — LSP surfaces this automatically.

**Grep is fine when:**

- You have the file path and want a specific string (CSS class, `data-automation-id`, etc.).
- The question is about runtime behaviour — the implementation body matters.
- The component is tiny (< ~80 lines, no deep inheritance).

---

## 11. What NOT to touch without care

Fleet-wide blast radius — surface before changing any of these:

- `packages/design-tokens/tokens/*.json` **values** — propagate to every consumer.
- `packages/components/src/index.ts` — the public barrel export.
- Public component **type exports** — breaking a type breaks consumers' builds.
- `docs/.storybook/preview.tsx` — global Storybook config.
- `.buildkite/pipeline.yaml` — CI for the whole repo.
- `packages/tailwind` — consumers extend this config.
- Root pnpm peer/override settings.

---

## 12. Measuring usage before breaking changes

Before making a breaking change for a component or prop, prompt the user to ask if they want to conduct a blast radius search in DX Insights via
`package_import_jsx_usage` (56 consuming repos, prop-level granularity). The table is
queryable today — no new ingestion needed.

Quick check (replace `:component` / `:prop`):

```sql
SELECT prop_name, COUNT(*) AS usage_count, COUNT(DISTINCT repo_full_name) AS repo_count
FROM package_import_jsx_usage
WHERE package_name = '@kaizen/components'
  AND tag_name = ':component'
  AND prop_name = ':prop'
GROUP BY prop_name;
```

If `repo_count` > 10 → coordinated migration; contact team owners. If < 5 on first-party
repos → low risk.

Full query set (blast radius, repo list, version spread, filtering test/story noise) and
dashboard proposal: → [agents-managed-docs/proposals/usage-insights.md](agents-managed-docs/proposals/usage-insights.md)

---

## 13. PR gates — what's enforced vs. what's convention

**All 8 required status checks must be green before merge:**

1. `eslint` — `pnpm lint:eslint`
2. `stylelint` — `pnpm lint:styles`
3. `prettier` — `pnpm lint:format`
4. `typescript` — `pnpm turbo build && pnpm lint:ts`
5. `verify-build` — `pnpm build`
6. `vitest` — `pnpm test` (run unsharded locally; CI shards `@kaizen/components` 3 ways)
7. `test-storybook` — **CI-only** (Playwright, 3 shards); do not run locally
8. `chromatic` — CI publishes; **a human must approve the visual diff in Chromatic UI** before
   merge — agents cannot bypass this gate

Run gates 1–6 locally with `devbox run verify` (§2). Gates 7–8 are CI-only.

**Review gates (GitHub-enforced):** 9. One approval from a member of `@cultureamp/kaizen-design-system` (CODEOWNERS) 10. **Do not push to the branch after a human has approved** — `dismiss_stale_reviews: true`
resets the approval on any new push

**Conventions (not GitHub-gated):**

- Create `.changeset/<slug>.md` when the PR modifies `packages/**`; skip for docs/tooling-only
- Default to one package per PR; coordinated cross-package changes are the documented exception
- Flag to team-lead to send `#help_design_system` Slack notification — agents do not post directly

Full enforced-vs-social split and agent-equivalent steps for each human workflow stage:
→ [agents-managed-docs/proposals/agent-workflow.md](agents-managed-docs/proposals/agent-workflow.md)

---

## 14. Decision ledger & ADRs

Durable architectural decisions with rationale and git provenance:
→ [agents-managed-docs/adr/](agents-managed-docs/adr/README.md)

---

### Out of scope (this pass)

- Custom/non-standard usages of components and tokens by consumers — separate session.
