---
name: semantic-colours-migration
description: Migrate a component's colours (background, text, foreground/icon, and border) to the new semantic colour tokens. Runs the migratePrimitivesToSemanticTokens codemod first (deterministic), then falls back to a guided manual migration only after the user confirms the codemod was incomplete. Use when asked to migrate colours to semantic tokens, apply semantic colour tokens, or run the semantic colour token migration for a component.
---

## Semantic Colours Migration

Use this skill to migrate a component's colours from hard-coded **primitives** —
CSS `var(--color-blue-500)`, SCSS `$color-blue-500`, or Tailwind `bg-blue-500` —
to the new **semantic colour tokens** across all four groups:

- **background** → `--bg-*` (e.g. `bg-brand-solid`, `bg-tertiary`)
- **text** → `--text-*` (e.g. `text-primary`, `text-secondary`)
- **foreground** (icons / glyphs) → `--fg-*` (e.g. `fg-tertiary`, `fg-brand-primary`)
- **border** → `--border-*` (e.g. `border-secondary`, `border-brand`)

This runs in **two stages with a hard gate between them**. Stage 1 is the
deterministic codemod. Stage 2 is a guided manual migration that you only enter
**after the user has verified Stage 1 failed or is incomplete**. Never jump
straight to Stage 2, and never run Stage 2 automatically off the back of Stage 1.

> **Borders are handled here.** This skill and its codemod fully cover the
> `border-*` group alongside background/text/foreground — do **not** hand off to
> the separate `/semantic-border-migration` skill or run the
> `migrateBorderColorsToSemanticTokens` codemod. Those were the reference/basis
> this skill and codemod were built from; treat them as prior art only.

## Preconditions

- Package manager: `pnpm`. Repo uses Changesets + Buildkite/GitHub Actions CI.
- `@kaizen/components` is installed (ships the `kaizen-codemod` bin).
- Know the **target component / directory** to migrate.
- If the consumer repo sets a Tailwind `prefix`, know its value (e.g. `goals-`
  or `EP:`) so the codemod preserves it.

## Reference

- Codemod: [`migratePrimitivesToSemanticTokens`](../../../packages/components/codemods/migratePrimitivesToSemanticTokens/README.md) — the single source of truth for the confident mapping, group-context rules, and CLI usage.
- Semantic token definitions: [`semanticColorTokens.ts`](../../../packages/design-tokens/src/js/semanticColorTokens.ts) (the `background`, `text`, `foreground`, `border` groups).
- Known follow-ups / outliers: [`TODO.md`](../../../packages/components/codemods/migratePrimitivesToSemanticTokens/TODO.md).
- Prior art (reference only — **not** to be run from this skill): the border-only [`/semantic-border-migration`](../semantic-border-migration/SKILL.md) skill and [`migrateBorderColorsToSemanticTokens`](../../../packages/components/codemods/migrateBorderColorsToSemanticTokens/README.md) codemod, whose two-stage design and border mappings this skill/codemod are built on and fully supersede.

---

## Stage 1 — Attempt the codemod (deterministic)

Stage 1 is **deterministic**: it only applies confident 1:1 primitive→semantic
mappings and reports everything else. Do not hand-edit colours in this stage.

1. **Confirm the target** directory/component with the user, and the Tailwind
   prefix if any.
2. **Run the codemod:**
   ```sh
   pnpm kaizen-codemod <dir> migratePrimitivesToSemanticTokens
   ```
   If there is a Tailwind prefix, pass it via the env var:
   ```sh
   KAIZEN_TW_PREFIX=goals- pnpm kaizen-codemod <dir> migratePrimitivesToSemanticTokens
   ```
3. **Tidy rewrites:** run prettier/lint over the changed files (e.g.
   `pnpm prettier --write <dir>`), since AST/text rewrites may need reformatting.
4. **Surface the report.** The codemod prints a **`✅ Converted N`** count and,
   crucially, a **`⚠️ SKIPPED`** list of colours it could not confidently map
   (`file:line — detail`). Show this to the user, along with the diff.
5. **STOP and ask the user to verify.** Explicitly ask:

   > Did Stage 1 fully migrate this component's colours, or are there skipped /
   > incomplete / ambiguous cases still to resolve?

   Do **not** proceed. Only continue to Stage 2 if the user confirms Stage 1 is
   incomplete or failed. If the user says it's complete, verify (below) and stop.

---

## Stage 2 — Guided manual fallback (only after user verification)

Enter this stage **only** when the user has confirmed Stage 1 left work behind.
Work through the codemod's `SKIPPED` report plus anything the user flagged, and
**report each missed instance back to the user** with the decision you propose.

1. **Resolve each skipped colour.** For each entry, decide the correct semantic
   token using the intent of the surface (background / text / icon / border) and
   the mappings in
   [`semanticColorTokens.ts`](../../../packages/design-tokens/src/js/semanticColorTokens.ts).
   Apply the change by hand (CSS `var(--color-*)` → `var(--<token>)`; SCSS
   `$color-*` → `$<token>`, importing `@kaizen/design-tokens/sass/semantic-color`
   if the semantic var isn't already available; Tailwind primitive utility → the
   semantic utility, preserving any prefix/variant).
2. **Handle what the codemod can't (report, don't guess):**
   - **Colliding primitives** — one primitive backing several tokens in a group
     (e.g. `gray-200` → `bg-secondary` *or* `bg-secondary_hover`). Pick the token
     that matches the **intent** (resting vs hover/`_alt` state) and note why.
   - **No direct equivalent** (colours with no mapping, alpha / `rgb()` usages,
     raw hex, `null` tokens not yet signed off). These often need a **design
     decision** — propose the closest semantic token and flag it for
     designer/user sign-off rather than forcing a mapping.
   - **Dynamic / computed class names** (template literals, variables) the codemod
     skipped.
   - **Out-of-scope properties** (`box-shadow`, `outline-color`, gradients) the
     codemod does not touch.
3. **Report the missed instances back.** Summarise every skipped case as
   `file:line — original → proposed (rationale / needs sign-off)` so the user and
   reviewers can check each decision.

---

## Verification (either stage)

- **Tests:** `pnpm --filter @kaizen/components test` (or scope to the component).
- **Build:** `pnpm build`.
- **Visual:** Storybook + Chromatic to confirm no colour regressions on the
  migrated component (check background, text, icon, and border surfaces, and
  hover/focus states).
- **Summarise** what was auto-migrated (Stage 1), what was hand-migrated
  (Stage 2), and anything deferred for design sign-off.

## Do / Don't

- **Do** keep the change scoped to one component/directory and add a changeset if
  it ships to consumers.
- **Do** preserve Tailwind prefixes and variant chains exactly.
- **Do** report every skipped instance in Stage 2 with a proposed mapping.
- **Don't** enter Stage 2 without explicit user verification that Stage 1 is
  incomplete.
- **Don't** guess a semantic token for a colliding or unmapped colour — surface
  it for a design decision.
