---
name: ca-web-accessibility
description: Audit or build accessible web UIs against Culture Amp's 12-point accessibility standard (WCAG 2.2 AA basis), Kaizen-first. Use to review a page, component or repo for accessibility issues and produce a local HTML report, to fix what it finds, or when generating or modifying HTML, CSS, JSX, TSX, React, Vue or Svelte. In Culture Amp / Kaizen projects (@kaizen/components), prefer Kaizen components and design tokens over hand-rolled markup.
compatibility: Designed for Claude Code. Static source analysis only — no browser or test runner required. Kaizen references activate when @kaizen/components is present.
metadata:
  author: culture-amp
  version: "0.1"
---

# Culture Amp web accessibility

## 1. Pick a mode

| Mode | When | What it does | Touches source? |
|---|---|---|---|
| **Audit** | "review/audit/check this page, component or repo for accessibility" | Static sweep of all 12 standards; produces a local HTML report | No — read-only |
| **Fix** | "fix the issues", "remediate the report", user points at an existing `accessibility-audit.html` | Works findings from an existing report, highest severity first | Yes — edits code |
| **Generate** | Writing or modifying HTML/CSS/JSX/TSX/React/Vue/Svelte for any other reason | Apply the rules in §5–6 inline while writing — no separate report | Yes — this is normal feature work |

If intent is ambiguous but a target is named ("check the SignupForm"), default to **Audit**. Default to **Generate** whenever you're touching UI code for a reason unrelated to an accessibility request — these rules apply regardless of why the file is open. Never start **Fix** without a report to work from (§4) — run Audit first if one doesn't exist.

## 2. Detect Kaizen

Before anything else, check the target's `package.json` for `@kaizen/components` (and `@kaizen/tailwind`). Record the version if present. Detection gates:

- the Kaizen-first component and token preferences (§6),
- the Composition and Known-Gaps checks,
- the palette used for contrast checking (§9).

If absent, apply only the universal rules (§5) — don't suggest Kaizen components into a non-Kaizen repo.

## 3. Audit procedure

`references/audit/Audit - Workflow.md` has the full phase model, finding schema, and confidence definitions. This section is the short, executable checklist — Audit is that file's Phase 1: **read-only**, produces a report, never edits source.

1. **Scope the target.** The user names a file, component, page, folder, or the whole repo. If unstated, ask — don't guess. Record the exact files/dirs in scope.
2. **Detect Kaizen** (§2).
3. **Enumerate the surface.** List every component, page, form, overlay, image, and colour actually present in scope. Anything genuinely absent gets `na` — not a skipped row.
4. **Sweep all 12 standards — mandatory, every run, in order.** Open `references/audit/The 12 Standards.md` and work through it top to bottom. Decide a verdict for **each** of the 12 before moving to the next; do not stop early because nothing obvious jumped out. A standard with zero findings still gets a recorded verdict (`pass`, `na`, or `review`) and a one-line reason — an audit that quietly skips a standard is a failed audit even if every recorded row is correct. Coverage gaps between runs, not wrong verdicts, are the main way this skill has failed before.
5. **Apply the Kaizen layer**, when detected, to every component/pattern found in scope:
   - `references/kaizen/Kaizen - Component Mapping.md` — what the component already handles vs. what you still owe it.
   - `references/kaizen/Kaizen - Composition Accessibility.md` — whenever two or more components combine on one screen.
   - `references/kaizen/Kaizen - Known Gaps.md` — check every affected component against this list before clearing it.
6. **Check colour.** Collect every foreground/background pair in scope — text, borders, focus rings, icons, state colours — resolving any `rgba()`/opacity against its real backdrop first. Contrast checking is currently manual (§9); fold any failure into standard 10.
7. **Record findings.** One object per issue, in the shape defined in §8. Assign severity and the standard number it fails.
8. **Score all 12 standards.** Set each `result` to `pass` / `fail` / `na` / `review`. Any standard with an open finding is `fail`. Every `review` row must carry a `manualCheck` string (§7, §8).
9. **Write the report.** Copy `assets/audit-report-template.html` into the target repo (default `./accessibility-audit.html`) and populate only the `<script id="audit-data">` JSON block — the template renders itself from that block; never hand-write the surrounding HTML. If a prior report exists for the same target, suffix the new one with the date instead of overwriting silently.
10. **Hand off.** State the report path, the score, and the top findings. Offer Fix mode. Do not start fixing in this pass.

## 4. Fix procedure

Precondition: a report from §3 exists. If not, run Audit first.

1. Parse `<script id="audit-data">` from the report. Work `open` findings, highest severity first (critical → high → medium → low).
2. Fix Kaizen-first — reuse the mapped component/token/class (`references/kaizen/Kaizen - Component Mapping.md`) instead of hand-rolled markup.
3. Verify each fix before marking it done: typecheck/build for code, re-run the contrast check for colour.
4. Update the report: set each finding's `status` to `fixed`, `wontfix` (with a reason in `recommendation`/`issue`), or leave `open` (with a reason). Re-score any standard whose findings are now all resolved.
5. Report back: what changed, what's still open, the new score, and the files touched.

Stay in scope — only touch what a finding calls for. A fix that needs a design decision, copy you don't have, or an upstream Kaizen change stays `open` with a clear note rather than a guess.

## 5. Universal rules

Apply these regardless of whether Kaizen is present. Organised by the standard(s) they serve — numbers reference `references/audit/The 12 Standards.md`, which stays the single source for the full standards table; nothing here restates it.

### Semantic HTML and landmarks (std 6, 9, 12)
- Use the element that already has the right semantics — `button`, `a[href]`, `ul`/`ol`, `table` — before reaching for a generic `div`/`span` plus ARIA.
- Every page has exactly one `<main>`. Add real `<header>`, `<nav>`, `<footer>`, `<aside>` for their actual regions instead of leaving everything an unnamed `div`.
- Give repeated landmarks of the same type distinct accessible names (`aria-label`) so they're distinguishable in a landmarks list.

### Headings — one h1, no skips (std 6)
- Exactly one `<h1>` per page.
- No skipped levels — never jump `h2` straight to `h4`. Nest by document structure, not by the visual size you want.
- Choose heading level by outline position; choose visual size separately. Don't let a component's default visual styling dictate the semantic level.

### Accessible names and visible labels (std 3, 8, 9)
- Every interactive control needs a programmatic accessible name — but a correct accessible name alone is not sufficient.
- **A visible label is required for inputs.** A hidden label plus a technically-correct `aria-label` still fails: the label must be visible on screen and positioned near the field. Visually-hidden labels, `aria-label`-only fields, and blank label text all fail this even though the field is "named".
- **Never rely on a placeholder as the only label.** Placeholders disappear on input, are frequently low-contrast, and aren't reliably announced by assistive tech. Pair every placeholder with a real visible label.
- Carve-out: a search field may use a placeholder or icon as its visible cue, provided it also carries a real accessible name.
- Buttons/links whose visible text repeats elsewhere on the page (three "Edit" buttons) need context added via visually-hidden text. If `aria-label` is used instead, it must start with the visible label text — don't replace the visible words with unrelated text.
- Use `<button>` for actions and `<a href>` for navigation, not the other way round.

### Alt text and image decisions (std 4)
- A meaningful image or icon needs alt text (or `aria-label` on `role="img"`) that conveys what it communicates, not a literal description of pixels.
- A decorative image or illustration must be hidden from assistive tech: `alt=""`, `aria-hidden="true"`, or `role="presentation"`. Never omit `alt` outright, and never write alt text for pure decoration.
- When an icon is a control's only visible content, put the accessible name on the control itself, not only on the icon.

### Keyboard operability (std 1)
- Every mouse-operable action must also be keyboard-operable. Use a real `<button>`/`<a href>`; a clickable `<div>`/`<span>` with a click handler and no role or key handling fails this outright.
- Don't set `tabindex` above `0`. Use `0` or `-1` only, and only for a real reason (roving tabindex, a programmatic focus target).
- Hidden or disabled content stays out of the tab order until shown or enabled.
- One user action gets one tab stop — don't create two controls back-to-back that do the same thing.

### Focus visibility and focus management (std 2, 7)
- Never remove the focus outline (`outline: none`) without an equally visible replacement at ≥3:1 contrast against its background.
- A focused element must never be fully obscured by a sticky header, launcher widget, or overlay — check this whenever sticky/fixed positioning sits near interactive content.
- Move focus deliberately: into a dialog on open, back to the trigger on close; to the removed element's logical successor when something is deleted or disabled; to the first invalid field, or an error summary, on a failed submit.
- Toasts and other transient status messages use a live region — don't move focus to them.

### Contrast thresholds (std 10)
- Normal text: **≥4.5:1** against its background.
- Large text: **≥3:1**. "Large" means rendered **≥24px**, or **≥18.66px and bold** — a small `h5`/`h6` is not automatically exempt; check the rendered size, not the tag name.
- Meaningful icons and non-text UI that carries information (state borders, focus rings): **≥3:1**.
- Never convey meaning — error, success, status — by colour alone; pair it with text, an icon, or a pattern.
- This is a static proxy check on source colour values; rendered, themed, or composited colour needs runtime confirmation (§7, §9).

### 320px reflow and 24×24 target size (std 11)
- No two-dimensional scrolling and no lost content or function at **320px** viewport width.
- Interactive targets: **≥24×24 CSS px**, measured as the full padded hit box, not the visible glyph. The usual failure points are icon-only buttons, pagination controls, a tag's remove (`×`) button, steppers, and calendar cells.
- Don't crowd small adjacent targets with no spacing between them.

### List markup for related items (std 12)
- Mark up any group of related items as a real list: `<ul>`/`<ol>` + `<li>`, or `<dl>`/`<dt>`/`<dd>` for label–value pairs.
- Exceptions: nested interactive/complex items (use headings instead), collapsible sections, form fields (use `fieldset`), and tables.

### Live regions (composition-level)
- Keep it to one live region announcing per user action. Don't fire a toast, a pending-button announcement, and a loading spinner status for the same action at once — the overlap reads as noise to screen-reader users.
- Use `role="status"` for polite, non-urgent updates; reserve assertive announcements for genuinely urgent state changes.

## 6. Kaizen-first rules

Apply these whenever `@kaizen/components` is detected (§2).

1. **Prefer the Kaizen component over hand-rolled markup.** Check `references/kaizen/Kaizen - Component Mapping.md` for the pattern you need before building a custom listbox, tab strip, tooltip, or dialog — most of Kaizen wraps React Aria Components and already owns roles, keyboard behaviour, and focus.
2. **Colour always comes from tokens, never a raw hex value.** In a Tailwind app use the `@kaizen/tailwind` classes (`bg-blue-400`, `text-gray-600`, `border-focus-ring`, …); otherwise use the `@kaizen/design-tokens` CSS custom properties. An inline `style={{ color: '#...' }}` or a literal hex in a Kaizen-project file is a finding. Detail: `references/kaizen/Kaizen - Design Tokens.md`.
3. **Don't trust the mapping table blind — verify against the component's actual source before clearing it.** The mapping has been wrong before in ways that matter to a finding: `GenericModal`'s `focusLockDisabled` prop is inverted from what its name implies (`={true}` keeps the focus trap **on**), and `<ModalAccessibleLabel>` reads as optional in the mapping but is a mandatory child — omit it and the dialog is both unnamed and never receives focus. Read `references/kaizen/Kaizen - Known Gaps.md` for every affected component before scoring it `pass`, and check the component's own source whenever a finding hinges on exactly how it behaves.
4. **Check composition, not just single components.** Kaizen's own single-component testing (Storybook axe) does not catch what breaks when components combine — nested focus traps, heading collisions, duplicate landmarks, competing live regions. Whenever two or more Kaizen components combine on one screen, run the checklist in `references/kaizen/Kaizen - Composition Accessibility.md`.
5. **`Heading`'s `variant` (visual size) and `tag` (semantic element) are independent props.** Don't assume the visual size dictates the heading level — set `tag` explicitly whenever the desired look and the correct outline position disagree.

## 7. Static-analysis honesty

This skill's audit is a **static source sweep**. It reads code; it does not run the app, a browser, Storybook, or axe, and it does not measure anything rendered. Say this plainly in every report.

**Standards 2, 5, 7, 10, and 11 cannot be scored `pass` from source alone** — visible/unobscured focus, dynamic page titles, whether focus actually moves, rendered or composited contrast, and rendered reflow/target size all need a browser or a human to confirm. Score these `review` by default; only move one off `review` when the source genuinely settles it on its own (e.g. a static, unconditional `<title>`). That leaves **7 of 12 standards statically decidable** in a typical run — treat a run that lands on a clean 12/12 as a sign the sweep was too shallow, not as a good result. A run that is honest usually produces several `review` rows.

Every `review` verdict **must** carry a `manualCheck` string: one or two imperative sentences naming the exact action to take and what a pass looks like. Keep reasoning in `note`; keep `manualCheck` short and actionable on its own.

- Good: `"Tab through every control and confirm a visible focus ring appears in Safari and Firefox. Passes if the ring is clearly visible against the background in all of them."`
- Bad: `"Focus visibility can't be confirmed statically."` — tells the reader nothing to do.

**CI gate framing:** a gate built on this report's output keys off **no `fail` rows** and treats `review` as **non-blocking**. `review` is not a pass, but it's not a merge-blocker either — it's a flagged follow-up for a human or an assistive-technology pass.

## 8. Output contract

### Finding object — one per issue, in `findings[]`

| Field | Meaning |
|---|---|
| `id` | Sequential, stable across re-runs where possible (`A11Y-003`) |
| `standard` | `1`–`12` — the standard it fails |
| `wcag` | Success criterion, e.g. `1.3.1` |
| `severity` | `critical` \| `high` \| `medium` \| `low` |
| `component` | Primary locator — survives file edits |
| `prop` | The prop/attribute at fault, if any |
| `file`, `line` | `line` is a hint only; `component` + `prop` is the real identifier |
| `title` | Short one-line label |
| `issue` | What's wrong and why it fails, plainly |
| `evidence` | The offending snippet — short, not a whole file |
| `recommendation` | Concrete, Kaizen-first fix — name the component/prop/token/class |
| `axe` | `yes` \| `partial` \| `no` — would the automated axe addon catch it |
| `confidence` | `verified` (read the component source) \| `inferred` (from usage only) \| `needs-runtime` (only runtime/AT can decide) |
| `status` | `open` \| `fixed` \| `wontfix` |

### Standard verdict object — one per standard, in `standards[]`

| Field | Meaning |
|---|---|
| `n` | `1`–`12` |
| `name`, `wcag` | From `references/audit/The 12 Standards.md` |
| `result` | `pass` \| `fail` \| `na` \| `review` |
| `note` | Reasoning — free text |
| `manualCheck` | **Required when `result` is `review`.** Imperative instruction plus pass condition (§7) |

### Severity and axe-detectability

Severity comes from **standard tier + user impact**; the WCAG success criterion is a citation, not the ranking source.

| Severity | When |
|---|---|
| Critical | A control or content is completely unavailable to a class of users, or actively traps or misleads them |
| High | Any breach of a **Minimum**-tier standard that doesn't rise to Critical |
| Medium | The task stays completable, or the issue is subsumed by another finding |
| Low | Cosmetic or edge-case; doesn't block task completion |

`axe` records whether the automated Storybook axe addon would catch the issue at all, independent of severity. Most composition-level and many Minimum-tier breaches are `no` or `partial` — don't read "axe is green" as "accessible."

### Report file

Populate only the `<script type="application/json" id="audit-data">` block inside a copy of `assets/audit-report-template.html` (default destination `./accessibility-audit.html` in the target repo) with `target`, `date`, `scope`, `auditor`, `kaizen`, `standards[]`, and `findings[]`. The template's own script renders the scorecard, findings list, and score projection from that JSON — never hand-edit the surrounding HTML/JS. If a prior report exists for the same target, suffix the new filename with the date rather than overwriting it silently.

## 9. Contrast checking — currently manual

There is no contrast-measurement script in this skill yet. Until one exists, check contrast **inline, by hand**:

1. Collect every foreground/background pair in scope — text, icons, borders, focus rings, state colours. Resolve any `rgba()`/opacity against its actual backdrop before comparing.
2. Compare against the thresholds in §5 (4.5:1 body text, 3:1 large text/meaningful UI).
3. In a Kaizen project, cross-check the pair against `assets/kaizen-palette.json` and `references/kaizen/Kaizen - Design Tokens.md` — known-risky combinations (e.g. `gray-500` body text on white, data-viz fills used as text colour) are already documented there.
4. Anything you can't settle from static values alone — a themed background, a composited overlay, a colour set at runtime — gets `review` with a `manualCheck` instruction to measure it rendered (e.g. with a browser's contrast picker).

## 10. Progressive disclosure — what to load and when

Don't load every reference file up front; load by need.

| Load this | When |
|---|---|
| `references/audit/The 12 Standards.md` | Always, during the sweep (§3 step 4) — the single source for the 12 standards, their tiers, and pass/fail criteria |
| `references/audit/Audit - Workflow.md` | Before running Audit or Fix for the first time in a session, or whenever the finding schema or confidence definitions need re-checking |
| `references/kaizen/Kaizen - Component Mapping.md` | Whenever scope includes a Kaizen component whose owned-vs-owed behaviour you need to check |
| `references/kaizen/Kaizen - Composition Accessibility.md` | Whenever two or more Kaizen components combine on one screen |
| `references/kaizen/Kaizen - Known Gaps.md` | Before clearing any Kaizen component as accessible — confirm it isn't on this list |
| `references/kaizen/Kaizen - Design Tokens.md` | Whenever scope includes colour in a Kaizen project, or you're building a contrast comparison |
| `assets/audit-report-template.html` | When writing the report (§3 step 9) — copy it, fill only the JSON block |
| `assets/kaizen-palette.json` | Alongside Design Tokens, when contrast-checking a Kaizen project (§9) |

There are no `references/topic/*` files yet — the universal rules that would eventually live there are inline in §5 above. Don't invent or link a reference path that doesn't exist on disk.

---

Culture Amp's own skill. Intopia's public accessibility skill was an influence on approach; none of its text or code is included.
