# `migratePrimitivesToSemanticTokens`

Migrates hard-coded **primitive colors** to the new **semantic colour tokens**
across all four semantic groups — **background**, **text**, **foreground**
(icons / glyphs), and **border** — in CSS, SCSS, and Tailwind. It is the
deterministic first stage of the semantic-colour migration; the companion
[`/semantic-colours-migration`](../../../../.claude/skills/semantic-colours-migration/SKILL.md)
skill runs this codemod and then guides a manual fallback for anything it
deliberately skips.

> **Borders are included here.** This codemod handles the `border-*` group
> itself, alongside `bg-*`, `text-*`, and `fg-*` — there is no need to also run
> the older border-only
> [`migrateBorderColorsToSemanticTokens`](../migrateBorderColorsToSemanticTokens/README.md)
> codemod. That codemod is **prior art / reference only**: its architecture and
> border mappings are the basis this one was built on and fully supersedes.

## Prerequisites

- Install `@kaizen/components` (the `kaizen-codemod` bin ships with the package).

## Usage

```
pnpm kaizen-codemod {DIR} migratePrimitivesToSemanticTokens
```

- `{DIR}` — directory to scan (e.g. `src`, or a single component folder to scope
  to one component). `node_modules` is excluded.
- After it runs, **run prettier/lint** to tidy any rewritten lines.
- Review the printed **`SKIPPED`** report and resolve the remaining cases with
  the `/semantic-colours-migration` skill (stage 2).

### Tailwind prefix

If your repo sets a Tailwind `prefix`, tell the codemod so prefixed utilities
are matched and the prefix is **preserved** on rewrite. The codemod resolves the
prefix from (in order): a `--prefix=` arg, the `KAIZEN_TW_PREFIX` env var, or a
`tailwind.config.*` in the current directory.

```
# utility prefix (Tailwind `prefix: 'goals-'`)
KAIZEN_TW_PREFIX=goals- pnpm kaizen-codemod src migratePrimitivesToSemanticTokens
#   goals-bg-blue-500  →  goals-bg-brand-solid

# colon namespace prefix (e.g. Employee Profile)
KAIZEN_TW_PREFIX=EP: pnpm kaizen-codemod src migratePrimitivesToSemanticTokens
#   EP:bg-blue-500     →  EP:bg-brand-solid
```

Stacked variants (`hover:`, `md:`) are always preserved automatically.

## How it works

The codemod walks `{DIR}` (excluding `node_modules`) and dispatches each file to
one of three transformers by extension. They share the confident mapping,
group-context detection, and skip/report rules, but each handles the reference
styles native to its language:

| Files           | Transformer                          | Reference styles handled                                                |
| --------------- | ------------------------------------ | ----------------------------------------------------------------------- |
| `.css`          | `transformCssSemanticColors`         | CSS custom property `var(--color-*)`                                    |
| `.scss`         | `transformScssSemanticColors`        | SCSS variable `$color-*` **and** CSS custom property `var(--color-*)`   |
| `.tsx/.jsx/.ts` | `transformTailwindSemanticClasses`   | Tailwind color utilities in `className`/`class` and `clsx`-style calls  |

CSS/SCSS use a `postcss` AST (`postcss-scss` for `.scss`); Tailwind uses the
TypeScript compiler API. Only files with at least one conversion are written.

### The group is chosen by context

The same primitive maps to a **different** semantic token depending on the
surface it paints. The codemod picks the group from the CSS property or the
Tailwind utility root, then applies that group's map:

| Group        | CSS/SCSS property                                             | Tailwind root       | Semantic prefix |
| ------------ | ------------------------------------------------------------ | ------------------- | --------------- |
| `background` | `background`, `background-color`, `--*background*` / `--*bg*` | `bg-`               | `bg-*`          |
| `text`       | `color`, `--*text*`                                           | `text-`             | `text-*`        |
| `foreground` | `fill`, `stroke`, `--*icon*` / `--*fill*` / `--*stroke*`      | `fill-`, `stroke-`  | `fg-*`          |
| `border`     | `border` / per-side / logical / `*-color`, `--*border*`       | `border-`           | `border-*`      |

So `var(--color-blue-500)` becomes `var(--bg-brand-solid)` on `background`,
`var(--text-brand-primary)` on `color`, `var(--fg-brand-primary)` on `fill`, and
`var(--border-brand)` on a border. Tailwind `fill-`/`stroke-` primitives map to
the `fg-*` utility (the foreground token name is the utility).

Colour references in properties with **no confident group** (`box-shadow`,
`outline-color`, …) are left untouched and **not** reported — they are out of
scope.

## What it converts

Only **confident 1:1 mappings within a group** are rewritten. A primitive is
confident only if it backs exactly **one** semantic token in that group.

The maps are derived by inverting the four groups in
[`semanticColorTokens.ts`](../../../design-tokens/src/js/semanticColorTokens.ts)
and **dropping collisions** — see [`semanticTokenMap.ts`](./semanticTokenMap.ts).
`semanticTokenMap.spec.ts` asserts the mirror never drifts from that source.

Selected confident mappings (see the source for the full set):

| Group        | Primitive    | Semantic token        |
| ------------ | ------------ | --------------------- |
| `background` | `gray-300`   | `bg-tertiary`         |
| `background` | `blue-500`   | `bg-brand-solid`      |
| `background` | `red-400`    | `bg-error-solid`      |
| `text`       | `purple-800` | `text-primary`        |
| `text`       | `gray-700`   | `text-secondary`      |
| `text`       | `blue-500`   | `text-brand-primary`  |
| `foreground` | `gray-500`   | `fg-tertiary`         |
| `foreground` | `blue-500`   | `fg-brand-primary`    |
| `foreground` | `red-500`    | `fg-error-primary`    |
| `border`     | `gray-600`   | `border-primary`      |
| `border`     | `blue-500`   | `border-brand`        |

### SCSS specifics

- Consumer SCSS usually references Kaizen colors as **SCSS variables**
  (`$color-gray-500`, imported from `@kaizen/design-tokens/sass/color`), so those
  are matched in addition to raw `var(--color-*)`. Solid `$color-*` colours are
  rewritten to the semantic SCSS variable (`$text-secondary`, `$bg-brand-solid`, …).
- Because the semantic `$*` variables are defined in
  `@kaizen/design-tokens/sass/semantic-color`, the codemod **adds that import**
  when it introduces a semantic variable and the file doesn't already import it —
  cloning the style (`~` prefix / quotes) of an existing kaizen sass import.
- **Namespaced** refs (`@use` → `color.$color-*`) are left for stage 2 rather
  than rewritten with an assumed namespace.

### What is skipped (reported, never guessed)

- **Colliding primitives** — a primitive that backs more than one token in a
  group (e.g. `gray-200` → `bg-secondary` *and* `bg-secondary_hover`; `white` →
  `bg-primary` *and* `bg-overlay`; `purple-800` → four `fg-*` tokens). No
  confident 1:1 mapping.
- Primitives with **no mapping** in the group (e.g. an `orange-*` text colour).
- **`null` (unmapped) semantic tokens** — never a target; the primitive is only
  reported if used in-group.
- **Alpha / `rgb()` / `rgba()` usages** (e.g. `rgba($color-gray-600-rgb, 0.1)`) —
  the semantic tokens are solid colors, so these need a design decision.
- Dynamic/computed Tailwind class names (template literals, variables).

## Examples

**CSS**

```css
/* before */
.card {
  background-color: var(--color-blue-500);
  color: var(--color-gray-700);
  border: 1px solid var(--color-gray-500);
}
/* after */
.card {
  background-color: var(--bg-brand-solid);
  color: var(--text-secondary);
  border: 1px solid var(--border-secondary);
}
```

**SCSS** (note the injected semantic import)

```scss
/* before */
@import '~@kaizen/design-tokens/sass/color';
.card {
  color: $color-gray-700;
}
/* after */
@import '~@kaizen/design-tokens/sass/color';
@import '~@kaizen/design-tokens/sass/semantic-color';
.card {
  color: $text-secondary;
}
```

**Tailwind**

```tsx
// before
<div className="bg-blue-500 text-gray-700 hover:border-gray-500 fill-red-500" />
// after
<div className="bg-brand-solid text-secondary hover:border-secondary fg-error-primary" />
```

## Source of truth

Mappings mirror the four groups in
[`packages/design-tokens/src/js/semanticColorTokens.ts`](../../../design-tokens/src/js/semanticColorTokens.ts)
and are derived (inverted, collisions dropped) in
[`semanticTokenMap.ts`](./semanticTokenMap.ts). The CSS and SCSS transformers
share the postcss engine in [`semanticColorPostcss.ts`](./semanticColorPostcss.ts).

See [`TODO.md`](./TODO.md) for known follow-ups and outliers still to review.
