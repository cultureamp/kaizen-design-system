# Accessibility audit — `A11ySkillTest.stories.tsx`

**Skill:** `intopia-web-accessibility` (Kaizen-first path)
**Target:** `packages/components/src/_docs/A11ySkillTest.stories.tsx` + `A11ySkillTest.module.css`
**Repo:** kaizen-design-system · branch `a11y-skill-test-fixture`
**Date:** 2026-07-31
**Standard:** WCAG 2.2 Level AA

**Result: 17 distinct defects.** Colour-contrast script: 5 failures / 10 checks.

Companion files in this folder:

- `palette.json` — contrast palette (current values + proposed Kaizen token replacements)
- `contrast-results.txt` — raw output of `scripts/check-colour-contrast.js`

---

## Summary by severity

| # | Finding | WCAG SC | Severity | axe catches? |
|---|---|---|---|---|
| 1 | No `h1` — `heading-1` rendered as `tag="div"` | 1.3.1, 2.4.6 | High | Partial |
| 2 | Heading order skips h3 (h2 → h4) | 1.3.1 | High | Yes (`heading-order` enabled in story params) |
| 3 | No landmarks — no `<main>`, `<header>`, `<nav>` | 1.3.1, 2.4.1 | High | Partial |
| 4 | Page title not page-specific (`'Culture Amp'`) | 2.4.2 | Medium | No |
| 5 | Metric cards are `div` soup, no list semantics | 1.3.1 | Low | No |
| 6 | `aria-hidden="true"` wrapping a focusable Button | 4.1.2 | High | Yes (`aria-hidden-focus`) |
| 7 | Fake button — `<div onClick>` with no role/tabIndex/keys | 2.1.1, 4.1.2 | High | Partial (eslint jsx-a11y flags it) |
| 8 | Focus indicator removed (`outline: none` on `:focus-visible`) | 2.4.7 | High | No |
| 9 | Modal `focusLockDisabled` passed | 2.4.3, 2.1.2 | High | No |
| 10 | Modal has no accessible name and no initial focus | 4.1.2, 2.4.3 | High | No |
| 11 | Link text "Click here" ×3 to same target | 2.4.4 | Medium | No |
| 12 | Trend conveyed only by a hidden decorative icon | 1.3.1, 1.4.1 | High | No |
| 13 | Format hint not associated with its TextField | 1.3.1, 3.3.2 | Medium | No |
| 14 | Three identical "View" button names, no context | 2.4.4, 2.4.6 | Low | No |
| 15 | SearchField placeholder duplicates `labelText` | — (best practice) | Low | No |
| 16 | Fixed `width: 900px`; grid cannot wrap | 1.4.10 | High | No |
| 17 | Summary text truncated with `nowrap` + ellipsis | 1.4.4, 1.4.10 | Medium | No |

Plus a cross-cutting Kaizen-rule violation: **all colour is raw hex, not design tokens** (7 values in the CSS module).

---

## 1. Colour contrast

Palette built from every colour pair in `A11ySkillTest.module.css` and run through the skill's script.

| Check | Foreground | Ratio | Required | Verdict |
|---|---|---|---|---|
| `.summary` — body text on page | `#949494` on `#ffffff` | 3.03:1 | 4.5:1 | **FAIL** |
| `.mutedText` — metric score in Card | `#949494` on `#ffffff` | 3.03:1 | 4.5:1 | **FAIL** |
| `.mutedHeading` — "Manager notes" h4 | `#b0b0b0` on `#ffffff` | 2.17:1 | 4.5:1 | **FAIL** |
| `.mutedHeading` at large-text threshold | `#b0b0b0` on `#ffffff` | 2.17:1 | 3:1 | **FAIL** (fails even the lenient threshold) |
| `.mutedIcon` — trend icon | `#d4d4d4` on `#ffffff` | 1.48:1 | 3:1 | **FAIL** |
| `.editAffordance` — "Edit profile" | `#1957db` on `#ffffff` | 6.13:1 | 4.5:1 | pass (but not a Kaizen token) |

Verified replacements (all pass):

| Token | Hex | Ratio | Use for |
|---|---|---|---|
| `gray-600` | `#524e56` | 8.13:1 | `.summary`, `.mutedText`, `.mutedHeading` body/heading text |
| `gray-500` | `#878792` | 3.55:1 | trend icon (graphic, 3:1 threshold) — **UI/graphic only, fails as normal text** |
| `blue-500` | `#0168b3` | 5.78:1 | link / "Edit profile" text |
| `blue-600` / `border-focus-ring` | `#004970` | 9.60:1 | restored focus ring |

**Kaizen rule breach.** `#949494`, `#b0b0b0`, `#1957db`, `#d4d4d4`, `#fff` are all hand-picked hex. In a Kaizen project every colour must come from `@kaizen/tailwind` classes or `@kaizen/design-tokens` custom properties. Note `gray-400 #cdcdd0` (the nearest token to `#d4d4d4`) would still fail 3:1 — the icon needs `gray-500` or darker.

---

## 2. Structure and semantics

**Finding 1 — no `h1`.** `A11ySkillTest.stories.tsx:39`

```tsx
<Heading variant="heading-1" tag="div">Priya Raman</Heading>
```

`tag="div"` gives heading-1 *styling* with no heading role. The page has no `h1` at all, so screen-reader users get no top-level entry point. Same defect on the modal heading at line 137 (`heading-3` as `tag="div"`).
Fix: `tag="h1"`. WCAG 1.3.1, 2.4.6.

**Finding 2 — heading order skips h3.** `A11ySkillTest.stories.tsx:65` → `:74` / `:100`

`h2` "Latest survey results" is followed directly by `h4` card titles. The story explicitly enables the axe `heading-order` rule in `parameters`, so this fails the Storybook a11y addon.
Fix: card titles become `h3`. Then "Manager notes" (line 121) is a sibling section of "Latest survey results" and should be `h2`, not `h4`.
Composition catalogue pattern 3 (heading-order collisions). WCAG 1.3.1.

**Finding 3 — no landmarks.** Whole page is `<div>`s. No `<main>`, no `<header>`, no `<nav>`. Keyboard and screen-reader users have no landmark navigation and no way to skip to content.
Fix: wrap content in `<main>`; make `.header` a `<header>`; give the `.toolbar` a labelled `role="search"` / `<section aria-label>` if kept as a group.
Composition catalogue pattern 4 — Kaizen does not emit page-level landmarks; this is consumer responsibility. WCAG 1.3.1, 2.4.1.

**Finding 4 — page title.** `A11ySkillTest.stories.tsx:33`

```tsx
document.title = 'Culture Amp'
```

Not unique, not page-specific, site name first. WCAG 2.4.2 plus the AC's best-practice items.
Fix: `'Priya Raman — Employee profile | Culture Amp'`.

**Finding 5 — metrics not a list.** `A11ySkillTest.stories.tsx:69-119`

Six metrics rendered as nested `div`s, arbitrarily split across two `.grid` containers so even visual grouping is inconsistent. No count or set relationship is conveyed.
Fix: one `<ul>` of `<li>` items (Kaizen has no List component — semantic HTML per the generic reference). WCAG 1.3.1.

---

## 3. Keyboard and focus

**Finding 6 — `aria-hidden` around a focusable control.** `A11ySkillTest.stories.tsx:42-46`

```tsx
<div aria-hidden="true">
  <Button variant="secondary" onPress={...}>Export</Button>
</div>
```

The button stays in the tab order but is removed from the accessibility tree, so keyboard screen-reader users land on a control with no name, role, or state. This is the axe `aria-hidden-focus` violation.
Fix: remove `aria-hidden`. If the intent is to disable the action, use the Button's disabled state; if the intent is to remove it, don't render it. WCAG 4.1.2.

**Finding 7 — fake button.** `A11ySkillTest.stories.tsx:54-57`

```tsx
<div className={styles.editAffordance} onClick={() => setIsNoteModalOpen(true)}>
  <Icon name="edit" isPresentational />
  Edit profile
</div>
```

A `div` with a click handler: not focusable, no `button` role, no Enter/Space handling, no focus style. Mouse-only. It also *looks* like a link (blue + underline) while behaving as a button.
Fix: Kaizen `Button` with `onPress` and the `edit` icon — React Aria then owns role, focus, and key handling. Do not hand-roll `role="button"` + `tabIndex` + `onKeyDown`. WCAG 2.1.1, 4.1.2.

**Finding 8 — focus indicator removed.** `A11ySkillTest.module.css:66-68`

```css
.plainButton:focus-visible {
  outline: none;
}
```

Applied to the "Reset" Button (line 51), stripping the React Aria focus ring Kaizen provides.
Fix: delete the rule. If a custom ring is genuinely needed, use `border-focus-ring` (`blue-600 #004970`, verified 9.60:1). WCAG 2.4.7, 1.4.11.

**Finding 9 — modal focus trap disabled.** `A11ySkillTest.stories.tsx:133`

```tsx
<GenericModal isOpen={isNoteModalOpen} focusLockDisabled onEscapeKeyup={...}>
```

Consumer intent is to remove the modal focus trap, which would let focus escape to inert background content (WCAG 2.4.3, 2.1.2).

**Upstream note — the prop name is inverted.** `GenericModal.tsx:133` passes the value straight through as `focusLock={focusLockDisabled}`, and `react-focus-on` defaults `focusLock` to `true` (`dist/es2015/UI.js:10`). So:

- prop omitted → `focusLock` undefined → trap **on** (correct default)
- `focusLockDisabled` (i.e. `true`) → `focusLock={true}` → trap **still on**
- `focusLockDisabled={false}` → `focusLock={false}` → trap **off**

The prop does the opposite of its name. Worth a Kaizen ticket; not in the Known Gaps table.
Consumer fix either way: delete the prop.

**Finding 10 — modal has no accessible name and no initial focus.** `A11ySkillTest.stories.tsx:131-148`

`GenericModal` sets `aria-labelledby={labelledByID}` and expects a `ModalAccessibleLabel` to own that id (`GenericModal.tsx:59-87`). The story never renders one, so:

- `aria-labelledby` points at a nonexistent element → the dialog has no accessible name (WCAG 4.1.2)
- `a11yWarn()` fires a console warning
- `focusOnAccessibleLabel()` finds nothing → no focus is moved into the modal on open (WCAG 2.4.3)

The heading is also `tag="div"` (line 137), so the modal contributes no heading to the outline either.
Fix: wrap the modal heading in `ModalAccessibleLabel` and give it a real heading tag. Known Gaps #10: Kaizen modal headings are `h2`-level by convention — confirm that level is correct where the modal sits.

---

## 4. Content and labelling

**Finding 11 — "Click here" ×3.** `A11ySkillTest.stories.tsx:113`

```tsx
<a href="#latest-survey-results">Click here</a>
```

Non-descriptive out of context, repeated three times pointing at the same anchor, and it's a raw `<a>` rather than the Kaizen `Link` component.
Fix: Kaizen `Link` with text naming the destination, e.g. `View {metric.name} results`. WCAG 2.4.4.

**Finding 12 — trend is invisible to assistive tech and near-invisible visually.** `A11ySkillTest.stories.tsx:78-83`

```tsx
<span className={styles.mutedIcon}>
  <Icon name={metric.trend === 'up' ? 'trending_up' : 'trending_down'} isPresentational />
</span>
```

`isPresentational` hides the icon from the accessibility tree, and the icon is the *only* carrier of the trend value — the `trend` field never appears as text. So screen-reader users get no trend at all, and sighted users get it at 1.48:1 contrast. Meaning conveyed by graphic/direction alone.
Fix: render the trend as text, or keep the icon decorative and add `VisuallyHidden` text ("Trending up"). Recolour to `gray-500` or darker. WCAG 1.3.1, 1.4.1, 1.4.11.

**Finding 13 — orphaned format hint.** `A11ySkillTest.stories.tsx:124-125`

```tsx
<TextField labelText="Notes" />
<Text variant="small">Use the format YYYY-MM-DD when referencing a review date.</Text>
```

The hint is a sibling element with no `aria-describedby` link, so it is never announced with the field.
Fix: pass it through the TextField's description / `FieldMessage` so association is programmatic. Composition catalogue pattern 7. WCAG 1.3.1, 3.3.2.

**Finding 14 — three identical "View" buttons.** `A11ySkillTest.stories.tsx:85-87`

Same accessible name three times with no distinguishing context in the a11y tree.
Fix: `aria-label`/visually-hidden suffix naming the metric, or rely on a properly-associated list/heading structure. WCAG 2.4.4, 2.4.6.

**Finding 15 — redundant placeholder.** `A11ySkillTest.stories.tsx:50`

`labelText="Filter metrics"` and `placeholder="Filter metrics"` are identical; the placeholder adds nothing and vanishes on input. Best practice, not a violation.

---

## 5. Reflow and resize

**Finding 16 — fixed page width.** `A11ySkillTest.module.css:1-4`, `:36-45`

```css
.page { width: 900px; padding: 24px; }
.grid { display: flex; gap: 16px; }
.gridItem { flex: 1 1 0; min-width: 220px; }
```

`width: 900px` forces horizontal scrolling at a 320px viewport. `.grid` has no `flex-wrap`, and `min-width: 220px` on three items means the row cannot compress or stack.
Fix: `max-width` instead of `width`; `flex-wrap: wrap` (or a grid with `auto-fit`/`minmax`); prefer container queries per the repo's styling guidance. WCAG 1.4.10.

**Finding 17 — truncated summary.** `A11ySkillTest.module.css:21-26`

```css
.summary { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
```

Applied to a paragraph of real content (role, location, start date, manager, last review). Content is lost at narrow widths, at 200% zoom, and under increased text spacing, with no way to reveal it.
Fix: allow wrapping. WCAG 1.4.4, 1.4.10, 1.4.12.

---

## Kaizen components — reuse assessment

Where the story already reuses Kaizen correctly, React Aria owns the behaviour and no consumer wiring is needed:

- `Button` (lines 43, 51, 85, 128, 142, 143) — `onPress`, role, keyboard, focus ring all handled. The defects around it are consumer-side: `aria-hidden` wrapper (6) and the `outline: none` override (8).
- `TextField` (lines 124, 140) — label association handled; the gap is the unassociated hint (13).
- `SearchField` (line 50) — labelled correctly; only the redundant placeholder (15).
- `GenericModal` (line 131) — focus trap, return focus, Escape, backdrop inertness handled. Consumer must supply `ModalAccessibleLabel` (10) and must not disable the trap (9).
- `Card`, `Text`, `Icon`, `Heading` — fine as components; the defects are the `tag="div"` heading choices (1, 2), decorative-only icon (12), and hex colours.

Patterns that should be Kaizen components but are not:

- `.editAffordance` `<div onClick>` → `Button` (7)
- raw `<a>` → `Link` (11)

Patterns Kaizen has no component for — build with semantic HTML:

- landmarks (3), list of metrics (5)

---

## Suggested fix order

1. Contrast + tokens — replace all hex with Kaizen tokens; re-run `check-colour-contrast.js` until clean.
2. Focus: delete `outline: none`, delete `focusLockDisabled`, add `ModalAccessibleLabel`.
3. Keyboard: replace fake-button `div` with `Button`; drop the `aria-hidden` wrapper.
4. Outline: real `h1` → `h2` → `h3` ladder; add `<main>` / `<header>`.
5. Content: descriptive link text, `VisuallyHidden` trend text, associate the format hint, disambiguate "View".
6. Layout: `max-width` + `flex-wrap`; remove `nowrap`/ellipsis truncation.
7. Page title.

Steps 1-3 and 6 touch `A11ySkillTest.module.css`; the rest touch `A11ySkillTest.stories.tsx`.
