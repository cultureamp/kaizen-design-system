# `migratePrimitivesToSemanticTokens` — follow-ups

Known gaps and things to revisit. This codemod only applies **confident 1:1**
mappings today; the items below are deliberately deferred.

- [ ] **Update once `null` semantic tokens are defined.** Many semantic tokens
      are still `null` in
      [`semanticColorTokens.ts`](../../../design-tokens/src/js/semanticColorTokens.ts)
      (e.g. `bg-primary_alt`, `text-secondary_hover`, `fg-brand-secondary`).
      They are intentionally excluded from the maps. When a designer signs off a
      value, the mirror in [`semanticTokenMap.ts`](./semanticTokenMap.ts) must be
      updated (the drift test in `semanticTokenMap.spec.ts` will flag it) and any
      new collisions re-checked.

- [ ] **Make the codemod runnable across package managers (pnpm / yarn / devbox).**
      Usage is currently documented as `pnpm kaizen-codemod …`, and the
      `kaizen-codemod` bin shells out via `npx tsx@latest`. Confirm and document
      equivalents for `yarn kaizen-codemod …` / `yarn dlx`, and `devbox run …`,
      and make sure the `bin/codemod.sh` path resolution and Tailwind-prefix
      detection work under each (not just pnpm workspaces).

- [ ] **Review the Divider component outlier.** Divider uses a hard-coded
      primitive in a way that may not fit the `border-*` / `bg-*` group heuristic
      cleanly. Confirm what surface its line paints and whether the codemod maps
      it correctly (or should skip it).

- [ ] **Review interaction states (hover / focus / `_alt`).** State-specific
      semantic tokens (`bg-secondary_hover`, `text-brand-secondary_hover`,
      `bg-brand-solid_hover`, the `_alt` variants) are only auto-applied where
      the primitive is unambiguous. Several state pairs collide (e.g. `gray-200`
      backs both `bg-secondary` and `bg-secondary_hover`) and are skipped —
      confirm the codemod isn't mapping a resting colour where a hover colour was
      intended, and vice versa.

- [ ] **Fix SCSS stripping comments.** Confirm and fix cases where the
      `postcss-scss` round-trip drops or mangles comments (inline `//` and block
      `/* */`) in rewritten `.scss` files. Rewrites should preserve surrounding
      comments verbatim; investigate `toString()` output and add a regression
      test in `transformScssSemanticColors.spec.ts`.

- [ ] **Decide Tailwind foreground scope (`fill-*`/`stroke-*` → `fg-*`).** The
      codemod currently maps Tailwind `fill-*` and `stroke-*` primitives to the
      `fg-*` semantic utility, and deliberately leaves `text-*` for the text
      group (so icon colour expressed via `text-*` on `currentColor` is treated
      as text, not foreground). Confirm this matches how consumers actually paint
      icons in Tailwind — if icon colour commonly comes through `text-*`, the
      foreground group may need a different (or additional) Tailwind path.

- [ ] **Review behaviour across different JS applications.** Verify parity when
      the same styles arrive via different pipelines — e.g. SCSS parsed/inlined
      inside JS (CSS-in-JS, `.module.scss` imports) versus plain Tailwind classes
      in `.tsx`. The Tailwind transformer only inspects `className`/`class`
      attributes and `clsx`-style calls; styles reaching JS by other means may
      need a dedicated path.
