# REVIEW.md — kaizen-design-system PR Review Playbook

Durable checklist for reviewing a kaizen PR — human or agent reviewer.

---

## Before approving — gates

- [ ] All 8 required CI checks are green. See [AGENTS.md §13](AGENTS.md#13-pr-gates--whats-enforced-vs-whats-convention) for the full list.
- [ ] **Chromatic visual diff must be approved in the Chromatic UI** before merge. Never approve a PR with an unreviewed diff — agents cannot do this step.
- [ ] If `packages/**` changed, a `.changeset/<slug>.md` is present.
- [ ] **Do not push to a branch after a human has approved.** `dismiss_stale_reviews: true` resets both the CODEOWNERS approval and the Chromatic review status. If a post-approval fix is required, coordinate with the reviewer to re-approve after the final push.

---

## Test posture to enforce

### Rules

- New or changed visual components must have or extend a `*.stickersheet.stories.tsx` covering
  the variants touched by the PR.
- Interaction behaviour → a `*.spec.stories.tsx` play function (`userEvent`, `expect`, `within`),
  not a unit test.
- Unit tests (`*.spec.ts/tsx`) only for pure non-visual logic: utilities, hooks with no DOM
  dependency, state machines.
- **Reject** "does the component render X when prop Y is set" as a unit test — that is a
  stickersheet or spec story job.

### Exemptions

- `KaizenProvider` — pure context provider; unit tests for SSR/context behaviour are correct posture.
- `VisuallyHidden` — intentionally invisible; unit test checking DOM presence is correct.

### Gold-standard components (reference when writing new tests)

- **`Button`** — stickersheet + spec story + docs story, zero unit tests.
- **`Tooltip`** — same.
- **`Tile`** — stickersheet + spec story.
- **`LinkButton`** — stickersheet + spec story.
- **`Tabs`** — stickersheet + spec story.

### Current coverage state

Point-in-time snapshot (June 2026), stickersheet gaps, and migration backlog:
→ [docs/reports/test-posture-snapshot.md](agents-managed-docs/reports/test-posture-snapshot.md)

Actionable tickets: [KZN-4104](https://cultureamp.atlassian.net/browse/KZN-4104) (migration backlog) and [KZN-4105](https://cultureamp.atlassian.net/browse/KZN-4105) (stickersheet gaps).

---

## Conventions to enforce

- **No new `.scss`** — CSS Modules only (`.module.css`). Existing `.module.scss` is legacy; do not add to it.
- **No `reversed`/`isReversed` prop** on new components — removed in v3. New code uses `<ReversedColors isReversed>`.
- **Prefer `className` over `classNameOverride`** on new RAC-based components — take the standard `className` prop (merged via `mergeClassNames`), not `classNameOverride`. Components that already expose `classNameOverride` keep it; it is not deprecated there.
- **RTL:** logical CSS utilities only (`padding-inline-start`, `margin-inline-end`). Reject physical `left`/`right` for direction-aware spacing.
- **No hardcoded user-facing strings** — all visible text must be internationalised.
- **One package per PR.** Coordinated cross-package changes are the documented exception — flag and confirm scope is intentional.

---

## Accessibility

- Axe stories must stay green (single-component a11y is covered by the Storybook axe addon).
- When the PR combines components (e.g. a Dialog containing a Form), check the patterns in
  [docs/a11y/composition-catalogue.md](agents-managed-docs/a11y/composition-catalogue.md) for emergent issues.

---

## Visual regression

- Chromatic auto-snapshots every story file picked up by `docs/.storybook/main.ts` — no per-story configuration needed.
- Do not add `chromatic: { disableSnapshot: true }` without documented justification in the PR.
- No stickersheets = no Chromatic coverage for that component's visual states. Flag if a changed component lacks a stickersheet.
