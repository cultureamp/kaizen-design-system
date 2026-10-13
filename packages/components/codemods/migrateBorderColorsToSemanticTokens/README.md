# `migrateBorderColorsToSemanticTokens`

Migrates hard-coded **primitive border colors** to the new **semantic border
tokens** across CSS, SCSS, and Tailwind. It is the deterministic first stage of
the border migration; the companion [`/semantic-border-migration`](../../../../.claude/skills/semantic-border-migration/SKILL.md)
skill runs this codemod and then guides a manual fallback for anything it
deliberately skips.

## Prerequisites

- Install `@kaizen/components` (the `kaizen-codemod` bin ships with the package).

## Usage

```
pnpm kaizen-codemod {DIR} migrateBorderColorsToSemanticTokens
```

- `{DIR}` — directory to scan (e.g. `src`, or a single component folder to scope
  to one component). `node_modules` is excluded.
- After it runs, **run prettier/lint** to tidy any rewritten lines.
- Review the printed **`SKIPPED`** report and resolve the remaining cases with
  the `/semantic-border-migration` skill (stage 2).

### Tailwind prefix

If your repo sets a Tailwind `prefix`, tell the codemod so prefixed border
utilities are matched and the prefix is **preserved** on rewrite. The codemod
resolves the prefix from (in order): a `--prefix=` arg, the `KAIZEN_TW_PREFIX`
env var, or a `tailwind.config.*` in the current directory.

```
# utility prefix (Tailwind `prefix: 'goals-'`)
KAIZEN_TW_PREFIX=goals- pnpm kaizen-codemod src migrateBorderColorsToSemanticTokens
#   goals-border-gray-500  →  goals-border-secondary

# colon namespace prefix (e.g. Employee Profile)
KAIZEN_TW_PREFIX=EP: pnpm kaizen-codemod src migrateBorderColorsToSemanticTokens
#   EP:border-gray-500     →  EP:border-secondary
```

Stacked variants (`hover:`, `md:`) are always preserved automatically.

## How it works

The codemod walks `{DIR}` (excluding `node_modules`) and dispatches each file to
one of three transformers by extension. They share the confident mapping and
skip/report rules, but each handles the reference styles native to its language:

| Files           | Transformer                      | Reference styles handled                                                |
| --------------- | -------------------------------- | ----------------------------------------------------------------------- |
| `.css`          | `transformCssBorderColors`       | CSS custom property `var(--color-*)`                                    |
| `.scss`         | `transformScssBorderColors`      | SCSS variable `$color-*` **and** CSS custom property `var(--color-*)`   |
| `.tsx/.jsx/.ts` | `transformTailwindBorderClasses` | Tailwind border utilities in `className`/`class` and `clsx`-style calls |

CSS/SCSS use a `postcss` AST (`postcss-scss` for `.scss`); Tailwind uses the
TypeScript compiler API. Only file writes happen for files with at least one
conversion.

## What it converts

Only **confident 1:1 mappings in a border context** are rewritten. Anything
else is left untouched and reported for stage 2.

| Primitive  | Semantic token         | CSS / SCSS `var(--color-*)`                         | SCSS `$color-*`                         | Tailwind `border-*`                    |
| ---------- | ---------------------- | --------------------------------------------------- | --------------------------------------- | -------------------------------------- |
| `gray-600` | `border-primary`       | `var(--color-gray-600)` → `var(--border-primary)`   | `$color-gray-600` → `$border-primary`   | `border-gray-600` → `border-primary`   |
| `gray-500` | `border-secondary`     | `var(--color-gray-500)` → `var(--border-secondary)` | `$color-gray-500` → `$border-secondary` | `border-gray-500` → `border-secondary` |
| `gray-200` | `border-secondary_alt` | …                                                   | …                                       | …                                      |
| `gray-300` | `border-tertiary`      | …                                                   | …                                       | …                                      |
| `blue-500` | `border-brand`         | …                                                   | …                                       | …                                      |
| `blue-300` | `border-brand_alt`     | …                                                   | …                                       | …                                      |
| `red-500`  | `border-error`         | …                                                   | …                                       | …                                      |
| `red-300`  | `border-error_subtle`  | …                                                   | …                                       | …                                      |

**Border context** = the `border` shorthand, per-side/logical shorthands
(`border-top`, `border-inline-start`, …), the `*-color` longhands, or a custom
property whose name contains `border` (e.g. `--border-color`). Non-border uses
of the same primitive (e.g. `background: var(--color-gray-500)` or
`background: $color-gray-500`) are never touched.

### SCSS specifics

- Consumer SCSS usually references Kaizen colors as **SCSS variables**
  (`$color-gray-500`, imported from `@kaizen/design-tokens/sass/color`), so those
  are matched in addition to raw `var(--color-*)`. Solid `$color-*` borders are
  rewritten to the semantic SCSS variable (`$border-secondary`, …).
- Because `$border-*` is defined in `@kaizen/design-tokens/sass/semantic`, the
  codemod **adds that import** when it introduces a `$border-*` variable and the
  file doesn't already import it — cloning the style (`~` prefix / quotes) of an
  existing kaizen sass import so the addition matches your convention.
- **Namespaced** refs (`@use` → `color.$color-*`) are left for stage 2 rather
  than rewritten with an assumed namespace.

### What is skipped (reported, never guessed)

- Colors with no confident semantic border equivalent (`white`, `yellow`,
  `orange`, `green`, `purple`, `blue-400`, `gray-400`, raw hex …).
- **Alpha / `rgb()` / `rgba()` usages**, e.g. `rgba($color-gray-600-rgb, 0.1)` or
  the `$color-*-rgb` helpers — the semantic tokens are solid colors, so these
  need a design decision.
- Dynamic/computed Tailwind class names (template literals, variables).

## Examples

**CSS**

```css
/* before */
.card {
  border: var(--border-width-1) solid var(--color-gray-500);
}
.error {
  --border-color: var(--color-red-500);
}
/* after */
.card {
  border: var(--border-width-1) solid var(--border-secondary);
}
.error {
  --border-color: var(--border-error);
}
```

**SCSS** (note the injected semantic import and the skipped alpha border)

```scss
/* before */
@import '~@kaizen/design-tokens/sass/color';
.card {
  border: 1px solid $color-gray-500;
}
.footer {
  border-top: 1px solid rgba($color-gray-600-rgb, 0.1); /* skipped — design decision */
}
/* after */
@import '~@kaizen/design-tokens/sass/color';
@import '~@kaizen/design-tokens/sass/semantic';
.card {
  border: 1px solid $border-secondary;
}
.footer {
  border-top: 1px solid rgba($color-gray-600-rgb, 0.1); /* left for stage 2 */
}
```

**Tailwind**

```tsx
// before
<div className="border border-gray-500 hover:border-blue-500" />
// after
<div className="border border-secondary hover:border-brand" />
```

## Source of truth

Mappings mirror the `border` group in
[`packages/design-tokens/src/js/semanticColorTokens.ts`](../../../design-tokens/src/js/semanticColorTokens.ts)
and live in [`borderTokenMap.ts`](./borderTokenMap.ts). The CSS and SCSS
transformers share the postcss engine in
[`borderColorPostcss.ts`](./borderColorPostcss.ts).
