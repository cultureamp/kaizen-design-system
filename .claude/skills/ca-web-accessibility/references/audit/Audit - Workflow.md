# Audit & Fix Workflow

This skill runs in two deliberate phases. **Advisor first** (read-only, produces a report), **Fix second** (a separate, explicit step that edits code). Never fix during the audit — the user reviews the report and decides.

---

## This is static analysis — scope and honesty

The audit reads **source code**. It does **not** run the app, Storybook, or a browser; it does **not** inspect the rendered accessibility tree, run axe, or measure rendered contrast/layout. Findings are **inferences from code**, and the report must say so.

Rules to stay honest:

- **Never mark a standard `pass` for something only runtime can confirm.** If the code doesn't clearly fail but you can't verify it statically, score it `review` and note "needs runtime / assistive-technology verification".
- Only score `pass` when the source is genuinely sufficient evidence (e.g. an `<img>` has a meaningful `alt`, a group is real `<ul>`/`<li>`).
- Only score `fail` when the code clearly fails (e.g. two `h1`s in source, `placeholder` used as the only label, arbitrary hex where a token is required, a clickable `<div>` with no role/tabindex).
- For a finding that needs a human/AT to confirm, set its `verify` field to `"manual"` — the report badges it so nobody treats it as verified.

**Static confidence per standard** (how far code alone gets you):

| Std | Confidence from code | What still needs runtime/AT |
|---|---|---|
| 1 Keyboard | Partial — can catch clickable `<div>`/`<span>`, `tabindex>0`, missing handlers | Real tab order, actual operability of custom widgets |
| 2 Focus indicators | Low — can catch `outline:none` with no replacement | Whether focus is visible, ≥3:1, and never obscured (rendered) → usually `review` |
| 3 Input labels | High — JSX shows label/`aria-*` wiring | Computed accessible name |
| 4 Images | High — props/`alt`/`role` visible | — |
| 5 Page title | High for static titles | Runtime-set/dynamic titles |
| 6 Heading structure | High in source; caveat on composition | Final DOM heading order after components assemble |
| 7 Focus managed | Partial — presence/absence of focus code | Whether focus actually moves/returns → often `review` |
| 8 No placeholder | High — `placeholder` usage is visible | — |
| 9 Labels in isolation | Partial — repeated labels visible | Needs whole-page context |
| 10 Contrast | Partial — script on token/hex values is a proxy | Rendered/theme/composited colour → verify the proxy |
| 11 320px + target size | Low–partial — fixed widths, tiny icon buttons visible | Rendered reflow and real target boxes → usually `review` |
| 12 Lists | High — list markup visible | — |

A run that is honest will typically produce several `review` rows, not a clean 12/12. That's correct — say plainly in the hand-off that `review` items need manual or AT testing this static pass can't do.

---

## Phase 1 — Advisor (audit)

**Goal:** scan the target and produce a local HTML report. **Do not modify any source files in this phase.**

1. **Confirm scope.** The target is what the user named: a single component/file, a page/route, a folder, or the whole repo. If unstated, ask. Record the exact files/dirs in scope.
2. **Detect the design system.** Check `package.json` / imports for `@kaizen/components` (and `@kaizen/tailwind`). Record version. This sets the Kaizen-first lens.
3. **Enumerate the surface.** List the components, pages, forms, overlays, colours, and images actually present in scope. Don't audit what isn't there — mark absent standards `na`.
4. **Check against the references.** For each component/pattern found, apply:
   - the matching `references/acceptance-criteria/` file and `references/topic/` files,
   - `references/kaizen/Kaizen - Composition Accessibility.md` for any multi-component composition,
   - `references/kaizen/Kaizen - Known Gaps.md` for affected components,
   - the **12 standards** in `references/audit/The 12 Standards.md` as the scorecard spine (mandatory checklist — sweep all 12).
5. **Check colour.** Collect every colour pair in scope (text, borders, focus rings, icons, states; composite any rgba/opacity first). Build a palette JSON and run `node <skill>/scripts/check-colour-contrast.js <palette>.json`. Fold failures into findings under standard 10. (See the note on script path below.)
6. **Record findings.** One finding per issue, with the schema below. Assign severity and the standard it fails.
7. **Score the 12 standards.** For each standard set `result` to `pass` / `fail` / `na` (not present in scope) / `review` (needs manual/AT testing this skill can't perform statically). A standard with any open finding is `fail`.

   **Every `review` row MUST carry a `manualCheck` string: one or two sentences, imperative, naming the exact thing to do and what a pass looks like.** This is the instruction a human follows to tick the row off in the report, so it must be actionable on its own — not a restatement of why the check is needed. Keep reasoning in `note`; keep `manualCheck` short.

   Good — `"Tab through every control and confirm a visible focus ring appears in Safari and Firefox. Passes if the ring is clearly visible against the background on all of them."`

   Bad — `"Focus indicator visibility is rendered-only and cannot be confirmed statically, so manual verification is required."` (tells the reader nothing to do)

   The report renders `manualCheck` beside Passes / Fails / Reset buttons. A recorded verdict overrides `review`, updates the headline score, and persists locally. The header shows both the source-confirmed score and what it becomes if every outstanding manual check passes.
8. **Write the report.** Copy `assets/audit-report-template.html` to the target repo (default `./accessibility-audit.html`), and fill **only** the `<script id="audit-data">` JSON block — meta, `standards`, `findings`. The template renders itself; do not hand-write HTML.
9. **Hand off.** Tell the user the report path, the score (X/12), and the top findings. Offer Phase 2. Do not start fixing.

**Report location:** default `./accessibility-audit.html` in the target repo root. If auditing repeatedly, suffix with the date (`accessibility-audit-YYYY-MM-DD.html`) so runs are comparable. Never overwrite a prior report without saying so.

---

## Phase 2 — Fix (remediate)

**Precondition:** an `accessibility-audit.html` (or the report the user points to) exists. If not, run Phase 1 first.

1. **Load findings.** Parse the `<script id="audit-data">` JSON from the report. Work `open` findings, highest severity first (critical → high → medium → low).
2. **Fix Kaizen-first.** Apply the finding's recommended fix using the reuse-over-rebuild rule (`references/kaizen/Kaizen - Component Mapping.md`). Prefer the Kaizen component / token / class over hand-rolled markup.
3. **Verify each fix.** Re-run the contrast script for colour fixes; typecheck/build for code fixes. Don't mark a finding fixed you haven't verified.
4. **Update the report.** Set each finding's `status` to `fixed` (done + verified), `wontfix` (with a note in `issue`/`recommendation` why), or leave `open` (couldn't fix — say why). Re-score any standard whose findings are now all resolved to `pass`.
5. **Report back.** Summarise what changed, what's left open, and the new score. List files edited.

**Scope discipline:** only touch what a finding calls for. If a fix needs a decision (visible copy, a design change, a Kaizen upstream gap with no consumer fix), leave it `open` with a clear note rather than guessing.

---

## Severity and the 12 standards

Both live in canonical files — do not restate them here (they drift):

- **Severity scale** (Critical / High / Medium / Low) and the **axe-detectability** axis: `SKILL.md` → "Severity and axe-detectability". Severity derives from the standard tier + user impact.
- **The 12 standards** — statements, WCAG mapping, detectability, priority tier, and the pass/fail criteria (including the standard-3 visible-label rule and the standard-8 placeholder carve-out): `references/audit/The 12 Standards.md`. Use its `n` values (1–12) in each finding's `standard` field, and produce a per-standard verdict for the scorecard.

---

## Finding schema (one object per issue in `findings`)

```json
{
  "id": "A11Y-003",                     // sequential, stable across re-runs where possible
  "standard": 6,                         // 1–12, the standard it fails
  "wcag": "1.3.1",                       // success criterion / criteria
  "severity": "high",                    // critical | high | medium | low (see SKILL.md)
  "component": "SingleSelect",           // PRIMARY locator — the component (survives edits)
  "prop": "secondary",                   // the prop/attribute at fault, if any
  "file": "src/RetentionInsights/Row.tsx",
  "line": 56,                            // hint only; component+prop is the real identifier
  "title": "Short one-line label",
  "issue": "What is wrong and why it fails, plainly.",
  "evidence": "<the offending code snippet>",
  "recommendation": "Kaizen-first fix, concrete enough to action.",
  "axe": "no",                           // yes | partial | no — would automated axe catch it
  "confidence": "verified",              // verified (checked against component source) | inferred (from usage) | needs-runtime (only runtime/AT can confirm)
  "status": "open"                       // open | fixed | wontfix
}
```

**Locator:** `component` + `prop` is the identifier — line numbers go stale the moment the file is edited; keep `line` as a hint only.

**Confidence** is a first-class field (the only miss in the best test run was unearned certainty): `verified` = read the component source and confirmed; `inferred` = deduced from usage without confirming the source; `needs-runtime` = static analysis cannot decide (rendered contrast, real focus order, target size) — the report badges these so they are never mistaken for proven defects.

Keep `evidence` short (the relevant lines, not whole files). Make `recommendation` specific — name the Kaizen component/prop/token/class to use.

---

## Script path note

When auditing a **different** repo, the working directory is the target repo, so `scripts/...` won't resolve. Invoke the contrast script by its path inside this skill, e.g.:

```
node <path-to-skill>/ca-web-accessibility/scripts/check-colour-contrast.js <palette>.json
```

The script has no dependencies and runs from any cwd.
