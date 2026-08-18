# Accessibility audit — `A11ySkillTest` fixture (run 2)

**Skill:** `intopia-web-accessibility` (Kaizen-first path)
**Target:** `packages/components/src/_docs/A11ySkillTest.stories.tsx` + `A11ySkillTest.module.css`
**Date:** 2026-08-17 · **Standard:** WCAG 2.2 Level AA · **Audit only, no files modified.**
**Fixture version:** post-TitleBlock rewrite (`renderSectionTitle` returning an `h3`).

**Result: 22 findings** — 3 Critical, 7 High, 9 Medium/Medium-High, 3 Low.
Contrast ratios are real output of the skill's `scripts/check-colour-contrast.js`
(exit 1, 6/11 checks failing).

> **Scoring caveat — this run is partly contaminated.** The audit prompt said
> _"Note especially: the story passes `renderSectionTitle` to `TitleBlock`, and
> `secondary` to `SearchField`."_ That is a hint toward two of the findings
> (2 and 9), one of which was run 1's only miss. Findings 2 and 9 are therefore
> **not clean evidence** of skill improvement. Everything else is unprompted.

## Summary table

| #   | Finding                                                                                        | WCAG SC          | Severity    | axe catches?       |
| --- | ---------------------------------------------------------------------------------------------- | ---------------- | ----------- | ------------------ |
| 1   | `aria-hidden="true"` wrapper hides the focusable Export button while leaving it tabbable       | 4.1.2, 1.3.1     | Critical    | **Yes**            |
| 2   | `renderSectionTitle` renders `h3` under TitleBlock's `h1` — `h2` skipped                       | 1.3.1            | High        | **Yes**            |
| 3   | Card titles and "Manager notes" all `h4`; outline flat, wrong parent                           | 1.3.1            | Medium      | No                 |
| 4   | Modal heading rendered as `div` (`Heading tag="div"`)                                          | 1.3.1            | High        | No                 |
| 5   | `GenericModal` without `ModalAccessibleLabel` — unnamed dialog, focus never enters             | 4.1.2, 2.4.3     | Critical    | Partial            |
| 6   | `focusLockDisabled` passed to `GenericModal`; the prop is **inverted** upstream                | 2.4.3, 2.1.2     | High        | No                 |
| 7   | `<div onClick>` as the "Edit profile" control                                                  | 2.1.1, 4.1.2     | Critical    | No                 |
| 8   | `.plainButton:focus-visible { outline: none }`                                                 | 2.4.7, 1.4.11    | High        | No                 |
| 9   | `SearchField secondary` removes visible `<Label>`, leaving `placeholder` as only visible label | 3.3.2            | Medium      | No                 |
| 10  | Trend conveyed only by an `isPresentational` icon                                              | 1.1.1, 1.4.1     | High        | No                 |
| 11  | Four contrast failures in the CSS module                                                       | 1.4.3, 1.4.11    | High        | Text yes · icon no |
| 12  | Six raw hex colours instead of Kaizen tokens                                                   | Kaizen rule      | Medium      | No                 |
| 13  | `width: 900px` + non-wrapping flex grid, `min-width: 220px` — no reflow at 320px               | 1.4.10           | High        | No                 |
| 14  | `.summary` `nowrap` + ellipsis — content unrecoverable                                         | 1.4.10, 1.4.4    | High        | No                 |
| 15  | Link text "Click here" ×3                                                                      | 2.4.4            | Medium      | No                 |
| 16  | `href="#latest-survey-results"` — **no element with that id exists**                           | 1.3.1/functional | Medium      | No                 |
| 17  | Same action is a `Button` in grid 1 and an `<a>` in grid 2                                     | 3.2.4            | Medium      | No                 |
| 18  | No landmarks — no `<main>`                                                                     | 1.3.1            | Medium-High | Partial            |
| 19  | Metric cards not a list; two grid rows unnamed and ungrouped                                   | 1.3.1            | Low-Medium  | No                 |
| 20  | `document.title = 'Culture Amp'`                                                               | 2.4.2            | Medium      | Partial            |
| 21  | Date-format hint not associated with the Notes field                                           | 1.3.1, 3.3.2     | Medium      | No                 |
| 22  | `.editAffordance` hit area likely under 24×24 CSS px                                           | 2.5.8            | Low         | No                 |

axe would surface roughly 4 of 22.

## Contrast (computed by the skill's script)

| Check                                   | Pair                | Type        | Required | Measured   | Result |
| --------------------------------------- | ------------------- | ----------- | -------- | ---------- | ------ |
| `.summary` body text                    | `#949494`/`#ffffff` | text-normal | 4.5:1    | **3.03:1** | FAIL   |
| `.mutedText` metric score               | `#949494`/`#ffffff` | text-normal | 4.5:1    | **3.03:1** | FAIL   |
| `.mutedHeading` "Manager notes"         | `#b0b0b0`/`#ffffff` | text-normal | 4.5:1    | **2.17:1** | FAIL   |
| `.mutedHeading` at large-text threshold | `#b0b0b0`/`#ffffff` | text-large  | 3:1      | **2.17:1** | FAIL   |
| `.mutedIcon` trend arrow                | `#d4d4d4`/`#ffffff` | graphic     | 3:1      | **1.48:1** | FAIL   |
| `.editAffordance` faux-link             | `#1957db`/`#ffffff` | text-normal | 4.5:1    | 6.13:1     | PASS   |
| replacement `gray-600`                  | `#524e56`/`#ffffff` | text-normal | 4.5:1    | 8.13:1     | PASS   |
| `gray-500` — **not** a valid body swap  | `#878792`/`#ffffff` | text-normal | 4.5:1    | **3.55:1** | FAIL   |
| `gray-500` as meaningful icon           | `#878792`/`#ffffff` | graphic     | 3:1      | 3.55:1     | PASS   |
| replacement `blue-500` link             | `#0168b3`/`#ffffff` | text-normal | 4.5:1    | 5.78:1     | PASS   |
| replacement `border-focus-ring`         | `#004970`/`#ffffff` | ui/focus    | 3:1      | 9.60:1     | PASS   |

Threshold note: `.mutedHeading` sits on `Heading variant="heading-4"` = `1.125rem`/18px
at weight 600 (`packages/design-tokens/tokens/typography.json:126-131`). 18px bold is
below the ≥18.5px bold large-text threshold, so 4.5:1 applies — and it fails either bar.

### Missed contrast failure

The audit did **not** find the `renderSectionTitle` heading failing at **1.49:1**
(`#2f2438` on TitleBlock's purple header `#5f3361`). It built its palette from
colour pairs declared in the CSS module, and this pair exists only in the computed
cascade — a Kaizen default `color="dark"` landing on a background TitleBlock owns.
Static file analysis cannot see it; a render can. Axe catches it.

## The TitleBlock question — answered

`references/kaizen/Kaizen - Known Gaps.md` row 4 does cover this, verbatim:

> **Not a bug — usage note.** `title` renders the page **`<h1>`**. `sectionTitle`
> renders an **`<h2>`** automatically. `renderSectionTitle` is
> **consumer-rendered** — the consumer must render an `<h2>` themselves.
>
> _Mitigation (consumer side):_ Treat TitleBlock as the page's `h1` owner: don't
> add a second `<h1>`, and start other headings (tiles, sections, guidance) at
> `h2` or below. If you pass `renderSectionTitle`, render an `<h2>` (a Kaizen
> `Heading tag="h2"` or a native `<h2>`) — nothing enforces this for you.

Composition pattern 3 concurs. Verified accurate against source
(`TitleBlock.tsx:326`, `:121-131`, `:368-385`). So the skill **had** the right
guidance for the new fixture material.

## Notable findings beyond run 1

- **16 — dangling anchor.** `latest-survey-results` appears only on the `href`;
  no element carries that id. Introduced when the standalone `h2` was replaced by
  TitleBlock. A genuine fixture bug, found by grep not by assumption.
- **17 — inconsistent identification (3.2.4).** Six visually identical cards
  offer the same affordance as two different roles with two different names.
  Not in the answer key; sharp catch.
- **3 — wrong-parent headings.** "Manager notes" is a sibling section of "Latest
  survey results" and should be `h2`, not `h4`. axe only detects downward skips,
  so this class needs a human or a skill.
- **22 — target size (2.5.8).** Reasoned from line-height to "likely" rather than
  confirmed, because the skill offers no measurement technique.

## Skill defects found by this run

1. **Component Mapping is wrong about `GenericModal`.** It credits React Aria with
   `role="dialog"`, `aria-modal`, focus trap, focus return and Escape. Verified:
   `GenericModal.tsx` uses `react-focus-on`'s `FocusOn` (`:5`, `:132`), hand-rolls
   `role="dialog"` on a div (`:157`), and **never sets `aria-modal` at all**.
   Composition pattern 2 correctly says these use `react-focus-on` — so two
   reference files contradict each other on one component. Consequence: an agent
   trusting the Mapping row assumes focus management is handled and skips finding 5.
2. **No `ModalAccessibleLabel` guidance anywhere in the skill.** It is a mandatory
   consumer step — omit it and the dialog is unnamed _and_ focus never enters
   (because `GenericModal` passes `autoFocus={false}` and relies on
   `focusOnAccessibleLabel()`). Found only by reading source.
3. **`focusLockDisabled` inversion is not in Known Gaps.**
4. **No audit workflow.** Every instruction is phrased for _generating_ code
   ("Generate the code", "Report decisions"). The only audit-shaped content is the
   6-step review order buried at the bottom of the Composition reference.
5. **No severity scale.** Composition tags patterns `axe: No · High` — a good
   two-axis idea, but undefined, fixed per pattern rather than per instance, and
   confined to one file. Severity had to be invented, so runs are not comparable.
6. **Contrast script palette has no selector or file:line field**, only free-text
   `notes` — hard to keep in sync with a codebase.
7. **Skill never suggests rendering the page.** Direct cause of the missed 1.49:1
   failure above, and of finding 22 being "likely" rather than measured.

## Unused references

None of the 20 `references/acceptance-criteria/` files were needed — they are
written for _building_ components, and every defect here is composition, CSS or
content. On the Kaizen path that directory is largely redundant.
