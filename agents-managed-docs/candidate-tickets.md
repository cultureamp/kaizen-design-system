# Candidate Tickets — kaizen-design-system

Byproduct findings from the AGENTS.md research pass (June 2026). Each row is a self-contained
ticket candidate for Chris to triage. Not prioritised — triage order is Chris's call.

---

## #1 — A11y: Duplicate hardcoded IDs — `ProgressStepper` and `RichTextEditor > LinkModal`

**Type:** Bug

**Files:**

- `packages/components/src/Workflow/subcomponents/Footer/components/ProgressStepper/ProgressStepper.tsx`
  lines 59 (`id="stepper-description"`) and 106 (`aria-labelledby="stepper-description"`)
- `packages/components/src/RichTextEditor/utils/plugins/LinkManager/components/LinkModal/LinkModal.tsx:51`
  — hardcoded `id="href"` inside the link modal

**Problem:** Both components use hardcoded static IDs. When two instances are mounted on the
same page (two `Workflow` components; two `RichTextEditor` instances), the browser's
`getElementById` returns the first match — the second instance misbehaves. `ProgressStepper`
causes the second stepper to announce the step count of the first. `LinkModal`'s label
association points to the wrong input.

**Detection:** axe rule `duplicate-id` catches both when two instances are mounted.

**Fix:** Replace hardcoded IDs with `const descId = useId()` (React 18+) and thread the
generated ID to both the labelling element's `id` and the referencing element's `aria-*` attribute.

---

## #2 — Docs: `DESIGN.md` documents wrong prop names for 5 components

**Type:** Documentation fix

**Components and mismatches:**

| Component | DESIGN.md says                                                                       | Code actually has                                                                          | Source file                                    |
| --------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| `Icon`    | `isMeaningful: boolean`, `aria-label: string`                                        | `isPresentational: boolean`, `alt: string`                                                 | `packages/components/src/Icon/Icon.tsx`        |
| `Button`  | `fullWidth: boolean`                                                                 | `isFullWidth: boolean`                                                                     | `packages/components/src/Button/Button.tsx:24` |
| `Card`    | `variant: "default"\|"elevated"\|"outlined"`, `isClickable`, `isSelected`, `padding` | `isElevated: boolean`, `color: CardColors`                                                 | `packages/components/src/Card/`                |
| `Well`    | `variant: "default"\|"outlined"\|"filled"`, `isLoading: boolean`                     | `color: WellColors`, `borderStyle: WellBorderStyleType`, `isAiLoading: boolean`            | `packages/components/src/Well/`                |
| `Tooltip` | `text: string (required)`, `delay: number`, limited `placement` values               | `children: ReactNode`, full RAC placement set, `delay` on `TooltipTrigger` (not `Tooltip`) | `packages/components/src/Tooltip/Tooltip.tsx`  |

**Impact:** `DESIGN.md` is the primary AI/agent source of truth for the design system. Wrong
prop names here cause every generated code snippet for these components to fail TypeScript
compilation. Icon is used in nearly every other component — this is the highest-priority fix.

**Fix:** Correct DESIGN.md to match the TypeScript types, or regenerate it from the types.

---

## #3 — Add `@deprecated` JSDoc to `OverrideClassName` type

**Type:** Developer experience / tooling

**File:** `packages/components/src/types/OverrideClassName.ts`

**Problem:** The decision to deprecate `classNameOverride` on new RAC-based components (commit
`82f8f8e0`, Jul 2025) is documented in the decision history and in `AGENTS.md`, but the
`OverrideClassName<T>` type itself has no `@deprecated` JSDoc annotation. When an engineer
adds `classNameOverride` to a new component, their IDE gives no signal that it is discouraged.
This is called out in `AGENTS.md §3` as a known gap.

**Fix:** Add `/** @deprecated Use CSS custom properties for consumer-controlled theming instead. New RAC-based components should not accept classNameOverride. */` to the `OverrideClassName` type declaration.

---

## #4 — Test migration backlog: interaction unit tests → spec stories

**Type:** Test posture / technical debt

The following components have interaction-heavy unit tests that should be migrated to
`*.spec.stories.tsx` per the team's current testing target. Migrate incrementally as
components are touched — do not block other work.

| Component      | Unit files to migrate                                                          | Current spec stories | Approx effort            |
| -------------- | ------------------------------------------------------------------------------ | -------------------- | ------------------------ |
| Filter         | 48 interaction unit tests                                                      | 2 existing           | Large — do incrementally |
| RichTextEditor | ~8 component-level unit tests (keep utils as unit)                             | 1 existing           | Medium                   |
| MultiSelect    | 6 interaction unit tests                                                       | 0                    | Medium                   |
| Calendar       | 2 interaction unit tests (`CalendarSingle.spec.tsx`, `CalendarRange.spec.tsx`) | 0                    | Small                    |

**Note:** Keep Calendar's 10 date utility unit tests in place — they are correctly placed.

---

## #5 — Stickersheet gaps: 9 components with no Chromatic visual regression coverage

**Type:** Test posture

Components missing `*.stickersheet.stories.tsx` (and therefore missing Chromatic visual regression):

| Component                                                          | Priority   | Notes                                                           |
| ------------------------------------------------------------------ | ---------- | --------------------------------------------------------------- |
| Modal (4 variants: Confirmation, Context, InputEdit, GenericModal) | **High**   | Modal portals need `decorators` in stories to render correctly  |
| TitleBlock                                                         | **High**   | Complex responsive layout; most impactful visual regression gap |
| DateInput                                                          | **High**   | Form input with default/error/disabled states                   |
| Menu                                                               | **Medium** | Has docs.story + spec.story but no systematic variant snapshot  |
| Container                                                          | Low        | Simple layout wrapper                                           |
| Content                                                            | Low        | Simple layout wrapper                                           |
| Focusable                                                          | Low        | Focus-ring utility; Storybook pseudo-state addon is useful here |

KaizenProvider and VisuallyHidden are exempt.

---

## #6 — Docs fixes: README, design-tokens README, CONTRIBUTING.md, Confluence archive

**Type:** Documentation fixes

| Priority | Source                                                        | Issue                                                                          | Fix                                                                                                              |
| -------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| 1        | `README.md`                                                   | "Run all Jest tests" — repo uses Vitest                                        | Update to Vitest with correct link                                                                               |
| 2        | `packages/design-tokens/README.md`                            | SCSS import uses `~@kaizen/...` tilde prefix — webpack-specific, fails in Vite | Remove `~`; add note that SCSS/Less are legacy compat layers; recommend CSS variables + Tailwind as primary path |
| 3        | `CONTRIBUTING.md`                                             | Dead link `./packages/generator`                                               | Update to `./packages/design-tokens`                                                                             |
| 4        | `CONTRIBUTING.md`                                             | References "advocado" and "Design Systems" team name                           | Update to "Unified Systems"                                                                                      |
| 5        | `CONTRIBUTING.md`                                             | Browser support link — old Confluence page URL                                 | Verify link is current                                                                                           |
| 6        | Confluence `Kaizen Design System` page (Prod/pages/700646750) | 2018 page referencing `@kaizen/component-library`, Gatsby, pre-KAIO era        | Archive or redirect to current Unified Systems space                                                             |

---

## #7 — Usage dashboard: wire Metabase cards on `package_import_jsx_usage`

**Type:** Developer experience / tooling

**Problem:** The DX Insights database already contains `package_import_jsx_usage` with
56-repo, prop-level component usage data. There is no self-serve Metabase dashboard for the
kaizen team to query "how many repos use prop X on component Y?" before making breaking changes.

**Effort:** ~1 afternoon to wire Metabase cards. No new ingestion required.

**Proposed cards:**

1. Top components by repo breadth — bar chart, filter by package
2. Prop usage per component — table with `tag_name` parameter
3. Deprecated prop tracker — hardcoded list (`onClick`, `working`, `primary`, `secondary`)
4. Consumer repos per prop — drillthrough to repo list
5. Version spread across fleet — from `pnpm_direct_dependencies`

Full query set documented in `docs/proposals/usage-insights.md`.

---

## #8 — Tooling: Wire `devbox run verify` into the repo

**Type:** Developer experience / tooling

**Problem:** AGENTS.md §2 references `devbox run verify` as the headline agent verify command,
but it does not yet exist. `devbox.json` only has a `setup` script; `turbo.json` has no root
tasks for the workspace-root lint scripts; and package `test` scripts launch vitest in watch
mode (interactive), which hangs `turbo run test`.

**Fix:** Three changes:

**1. `turbo.json` — add root tasks for the three lint scripts:**

```json
"//#lint:eslint": {},
"//#lint:format": {},
"//#lint:styles": {}
```

Add these alongside the existing `tasks`. Root tasks (`//#`) run the workspace-root `package.json` scripts of the same name. No `dependsOn` — they have no build dependency and run in parallel from the start.

**2. Package `test` scripts — enforce run mode; add `test:watch`:**

In `packages/components/package.json`, `packages/design-tokens/package.json`, and `packages/tailwind/package.json`:

- Change `"test": "… vitest --config …"` → `"test": "… vitest run --config …"`
- Add `"test:watch": "… vitest --config …"` (watch mode for local development)

Also update the root `package.json` `test` script: drop the now-redundant `-- --run` flag (packages enforce run mode directly).

**3. `devbox.json` — add the `verify` script:**

```json
"scripts": {
  "setup": ["pnpm install"],
  "verify": ["pnpm turbo run build lint:ts test //#lint:eslint //#lint:format //#lint:styles"]
}
```

Turbo enforces `build → lint:ts` ordering, runs `test` and the three lint tasks in parallel, and fails if any task fails. No shell script needed.

**Effort:** Edits to `turbo.json`, three package `package.json` files, root `package.json`, and `devbox.json`. Verify with `devbox run verify` locally before merging.

Full implementation detail: `docs/proposals/agent-workflow.md` §3.
