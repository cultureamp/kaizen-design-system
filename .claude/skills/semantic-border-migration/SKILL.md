---
name: semantic-border-migration
description: Migrate a component's border styles to the new semantic border tokens. Runs the migrateBorderColorsToSemanticTokens codemod first, then falls back to a guided manual migration only after the user confirms the codemod was incomplete. Use when asked to migrate borders to semantic tokens, apply border semantic tokens, or run the border token migration for a component.
---

## Semantic Border Migration

Use this skill to migrate a component's borders from hard-coded **primitive**
colors — CSS `var(--color-gray-500)`, SCSS `$color-gray-500`, or Tailwind
`border-gray-500` — to the new **semantic
border tokens** (`--border-primary`, `--border-secondary`, `--border-secondary_alt`,
`--border-tertiary`, `--border-brand`, `--border-brand_alt`, `--border-error`,
`--border-error_subtle`).

This runs in **two stages with a hard gate between them**. Stage 1 is the
deterministic codemod. Stage 2 is a guided manual migration that you only enter
**after the user has verified Stage 1 failed or is incomplete**. Never jump
straight to Stage 2, and never run Stage 2 automatically off the back of Stage 1.

## Preconditions

- Package manager: `pnpm`. Repo uses Changesets + Buildkite/GitHub Actions CI.
- `@kaizen/components` is installed (ships the `kaizen-codemod` bin).
- Know the **target component / directory** to migrate.
- If the consumer repo sets a Tailwind `prefix`, know its value (e.g. `goals-`
  or `EP:`) so the codemod preserves it.

## Reference

- Codemod: [`migrateBorderColorsToSemanticTokens`](../../../packages/components/codemods/migrateBorderColorsToSemanticTokens/README.md) — the single source of truth for the confident mapping table and CLI usage.
- Semantic token definitions: [`semanticColorTokens.ts`](../../../packages/design-tokens/src/js/semanticColorTokens.ts) (the `border` group).

---

## Stage 1 — Attempt the codemod (deterministic)

1. **Confirm the target** directory/component with the user, and the Tailwind
   prefix if any.
2. **Run the codemod:**
   ```sh
   pnpm kaizen-codemod <dir> migrateBorderColorsToSemanticTokens
   ```
   If there is a Tailwind prefix, pass it via the env var:
   ```sh
   KAIZEN_TW_PREFIX=goals- pnpm kaizen-codemod <dir> migrateBorderColorsToSemanticTokens
   ```
3. **Tidy rewrites:** run prettier/lint over the changed files (e.g.
   `pnpm prettier --write <dir>`), since AST/text rewrites may need reformatting.
4. **Surface the report.** The codemod prints a **`✅ Converted N`** count and,
   crucially, a **`⚠️ SKIPPED`** list of border colors it could not confidently
   map (`file:line — detail`). Show this to the user, along with the diff.
5. **STOP and ask the user to verify.** Explicitly ask:

   > Did Stage 1 fully migrate this component's borders, or are there skipped /
   > incomplete / ambiguous cases still to resolve?

   Do **not** proceed. Only continue to Stage 2 if the user confirms Stage 1 is
   incomplete or failed. If the user says it's complete, verify (below) and stop.

---

## Stage 2 — Guided manual fallback (only after user verification)

Enter this stage **only** when the user has confirmed Stage 1 left work behind.
Work through the codemod's `SKIPPED` report plus anything the user flagged.

1. **Resolve each skipped border color.** For each entry, decide the correct
   semantic border token using the intent of the border and the mappings in
   [`semanticColorTokens.ts`](../../../packages/design-tokens/src/js/semanticColorTokens.ts).
   Apply the change by hand (CSS `var(--color-*)` → `var(--border-*)`; SCSS
   `$color-*` → `$border-*`, importing `@kaizen/design-tokens/sass/semantic` if
   the `$border-*` var isn't already available; Tailwind `border-*` → the
   semantic utility, preserving any prefix/variant).
2. **Handle what the codemod can't:**
   - **No direct equivalent** (yellow / orange / green / purple borders, alpha /
     `rgb()` usages, raw hex). These often need a **design decision** — do not
     force a mapping. Propose the closest semantic token and flag it for
     designer/user sign-off rather than guessing silently.
   - **Dynamic / computed class names** (template literals, variables) the
     codemod skipped.
   - **Unusual selectors or non-standard files** not covered by the walk.
3. **Record decisions** for ambiguous cases (what you chose and why) so reviewers
   can check them.

---

## Verification (either stage)

- **Tests:** `pnpm --filter @kaizen/components test` (or scope to the component).
- **Build:** `pnpm build`.
- **Visual:** Storybook + Chromatic to confirm no border regressions on the
  migrated component.
- **Summarise** what was auto-migrated (Stage 1), what was hand-migrated
  (Stage 2), and anything deferred for design sign-off.

## Do / Don't

- **Do** keep the change scoped to one component/directory and add a changeset if
  it ships to consumers.
- **Do** preserve Tailwind prefixes and variant chains exactly.
- **Don't** enter Stage 2 without explicit user verification that Stage 1 is
  incomplete.
- **Don't** guess a semantic token for a color with no confident mapping — surface
  it for a design decision.
