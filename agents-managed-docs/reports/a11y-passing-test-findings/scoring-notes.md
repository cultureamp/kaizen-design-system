# Passing fixture — the negative control

The broken fixture measures **recall**. This one measures **precision**: how many
findings the skill invents against code that is actually correct.

- Fixture: [packages/components/src/\_docs/A11yPassingTest.stories.tsx](../../../packages/components/src/_docs/A11yPassingTest.stories.tsx) + `.module.css`
- Skill output: [accessibility-audit.html](accessibility-audit.html) (run 5, 2026-08-12)
- Same page and content as `A11ySkillTest`, with all 21 planted breaches fixed.

Run 5 used the same neutral prompt shape and 20-call budget as run 4, and was **not**
told the fixture was expected to pass — otherwise the false-positive count would be
worthless.

## Independent verification, before the skill saw it

| Check                               | Result                           |
| ----------------------------------- | -------------------------------- |
| `axe.run` (with `heading-order` on) | **0 violations, 0 incomplete**   |
| Heading outline                     | `h1 → h2 → h3×6 → h2` — no skips |
| Landmarks / list items              | 1 `<main>`, 6 `<li>`             |
| `tsc`, stylelint, prettier, eslint  | pass                             |

## Result: 1 finding, and it was a true positive

**Zero false positives.** The single finding — A11Y-001, "Edit profile" button opens
the "Add a note" dialog — was a real defect, introduced when the hand-rolled
`<div onClick>` was converted to a `Button` and carried its handler across. The label
did not describe the action, so the announced dialog name contradicted the activated
control. Fixed by giving the button its own no-op handler, matching the other stubs.

Precision on this control: **1/1 findings genuine.** Notably, axe found nothing here —
this is a defect class only source reading catches.

The skill also correctly identified the three things earlier runs habitually miss, and
credited them as done right rather than flagging them:

- `renderSectionTitle` rendering its own `h2`
- `ModalAccessibleLabel` present
- `focusLockDisabled` **omitted** rather than set to `false` — it explicitly noted that
  `={false}` is the value that actually disables the trap

## The important product finding: static analysis cannot score a green pass

Scorecard came out **6 pass / 1 fail / 5 review**. With A11Y-001 fixed it becomes
**7 pass / 5 review** — the report still reads "7/12 standards passing" for a page
with zero known defects.

The five permanent `review` rows, and why each is honest:

| Std | Why it can never be `pass` statically                                     |
| --- | ------------------------------------------------------------------------- |
| 2   | Focus-indicator visibility and 3:1 contrast are rendered-only             |
| 5   | `document.title` set at runtime; the real title can't be read from source |
| 7   | Whether focus enters on open and returns on close is runtime behaviour    |
| 10  | Composited/rendered colour needs a render; token values are a proxy       |
| 11  | Real reflow and padded 24×24 hit boxes need a browser                     |

This is the static-honesty rule working as designed (`Audit - Workflow.md:13` — never
mark a standard `pass` for something only runtime can confirm). But it has a direct
consequence for the gate-vs-advisor decision:

> **A gate that requires 12/12 `pass` will never go green under static-only analysis.**
> The ceiling is 7/12. A gate must therefore key off "no `fail` rows" and treat
> `review` as non-blocking — or the render step has to land first.

This is the strongest argument yet that the skill is an **advisor** in its current
static-only form, with the render step (deferred) being what would make a gate viable.

## Two latent issues the skill raised as notes rather than findings

Both are correct calls — real fragility, not current defects:

1. **`color="white"` on the section title is only safe because no `variant` is passed.**
   `TitleBlock.module.scss` sets the title row to white under `lightVariant` and
   `adminVariant`, where a white heading would vanish. Robust code would derive the
   colour from the variant, as `defaultRenderSectionTitle` does.
2. **The `document.title` `useEffect` has no cleanup**, so the title persists after
   unmount in an SPA. The string itself is correct and correctly suffixed.

It also declined to file the `GenericModal` missing-`aria-modal` gap as a finding,
reasoning that it maps to none of the 12 standards, has no consumer-side fix, and
filing it would flip standard 7 to `fail` for something the author did correctly. That
judgement is sound and is a good argument for the "landmarks/composition have no home
in the schema" gap noted in the update plan.

## Fixture housekeeping

Deliberate call: the metric list uses `list-style: none` plus `role="list"`, with a
scoped `jsx-a11y/no-redundant-roles` disable and a rationale comment. The lint rule
calls the role redundant; WebKit drops list semantics when markers are removed, so the
role is correct. The skill agreed — standard 12's note calls it "the correct call, not
redundant ARIA".

Also worth recording for the verification setup: ad-hoc stylelint runs in this repo
need `--config .stylelintrc-css.mjs` (there is no auto-discovered config for `.css` at
the root), and CI runs eslint with `--max-warnings=0`.
