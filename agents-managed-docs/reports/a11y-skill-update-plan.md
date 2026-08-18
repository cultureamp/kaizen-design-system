# Plan — updating the `intopia-web-accessibility` skill

**Status:** reconciled against the live skill on 2026-08-10. Much of this plan has
already landed — see "Reconciliation" below for what shipped and what is still open.
Rendering is deferred by decision (static sweep first).
**Skill location:** `~/.claude/skills/intopia-web-accessibility/` — edits happen in a
separate repo, so this document is portable and self-contained.
**Evidence base:** two scored runs against a fixture that breaks all 12 Culture Amp
accessibility must-haves. See `a11y-skill-test-answer-key.md`,
`a11y-skill-test-findings/` (run 1), `a11y-skill-test-findings-run2/` (run 2).

## Context

The skill already has good recall — run 1 found 20 of 21 planted breaches, run 2
found 22 defects, against an axe baseline of 3 rules / 8 nodes. **Coverage is not
the problem.** The problems are that its findings are not comparable between runs,
one of its reference files is factually wrong in a way that suppresses a Critical
finding, and it has a structural blind spot it cannot see past without rendering.

So this is not a "teach it more rules" update. It is a correctness, calibration and
process update.

## Baseline — established

**Run 3 is the baseline: 19 findings, 16/21 planted breaches, 10/12 standards
touched.** Neutral prompt, 18-call cap, 12 calls used, ~3 minutes. Full scoring in
`a11y-skill-test-answer-key.md`.

Caveat to carry forward: run 3 changed two variables at once versus run 1 (neutral
prompt _and_ a tight budget), so its lower recall is partly a budget artifact. Every
future comparison run must use the **same prompt and the same budget** as run 3, or
the number means nothing.

## What run 3 changed in this plan

**It falsified item 3's central claim.** The plan assumed run 1's standard-3 miss came
from asserting prop behaviour without reading the source, so "read the component
source first" would fix it. Run 3 _did_ read `SearchField.tsx`, described the
mechanism correctly, and still concluded there was no defect:

> `secondary` hides only the _visual_ label and applies `aria-label={labelText}`. The
> field is correctly named; the duplicated placeholder is redundant but not a WCAG
> failure.

It had the facts and lacked the **criterion**. Nothing in the skill states that a
visible label is required, or that placeholder-as-only-visible-label fails. On
WCAG-only grounds its conclusion is defensible; on Culture Amp grounds it is simply
wrong — standard 3 requires a visible label and standard 8 forbids placeholders.

Run 3 rejected standard 8 in the same sentence, exactly as run 1 did. **Two of three
runs conclude the placeholder pattern is not a defect.** That is a systematic
criteria gap, not run-to-run noise.

**Consequences:**

- **Item 5 (wire in the 12 standards) is promoted to joint-first with item 1.** It is
  the only change that fixes the standard-3 and standard-8 misses.
- **Item 3 is rewritten** — keep the audit workflow, drop "read the source" as the
  remedy for the miss (retain it as general hygiene, since it is what let run 3 find
  the `focusLockDisabled` inversion unaided).
- **Item 4 is confirmed.** Run 3 missed the 1.49:1 heading-on-purple failure too. Two
  independent runs, same blind spot, same cause: no render.
- **New evidence for item 3's real value — sweep consistency.** Run 3 produced _no_
  list-semantics finding (standard 12), which runs 1 and 2 both found, and missed the
  three identical `View` buttons that both earlier runs caught. Coverage is
  inconsistent between runs because there is no prescribed sweep order.

## Reconciliation against the live skill

Checked 2026-08-10, while the skill was actively being edited (`SKILL.md` grew 64 → 90
lines mid-check). Treat as a snapshot.

### Landed

- **Audit mode**, as the default when pointed at existing code, read-only, with a
  5-step entry sequence (`SKILL.md:16-24`, `:35-45`) and a full process in
  `references/audit/Audit - Workflow.md`.
- **Mandatory sweep checklist**, explicitly "a mandatory checklist, not a menu"
  (`SKILL.md:40`) with a prescribed 6-step composition review order (`:41`). This
  addresses the run-to-run coverage variance directly.
- **The 12 standards as a first-class reference** — `references/audit/The 12 Standards.md`,
  with tiers, per-standard axe-detectability and static confidence, and the instruction
  to "**Grade against these, not against raw WCAG**".
- **The visible-label criterion** — `Topic - Forms.md:14` now states that a correct
  accessible name alone is not enough, that Kaizen's `secondary` variant fails standard
  3, and that a field leaning on placeholder text also fails standard 8. The
  search-input carve-out is scoped to search inputs only (`:16`). **This closes the gap
  that caused the standard-3 and standard-8 misses in runs 1 and 3.**
- **Static honesty** — `SKILL.md:37` says the audit is static, does not render, and
  must mark runtime-only checks `review`; `Audit - Workflow.md:13` adds "never mark a
  standard `pass` for something only runtime can confirm". This is exactly the
  right posture for the static-first decision.
- **A finding schema and HTML report** — `assets/audit-report-template.html`,
  self-rendering from an embedded JSON block. Fields carry `standard` (1–12), `wcag`,
  `severity`, `file`, `line`, `evidence`, `recommendation`, `axe`, `verify`, `status`.
  Confidence is expressed as `verify: "manual"` rather than a dedicated field, which
  is a reasonable substitute.

### Still open — in priority order

**1. ~~Two incompatible severity scales~~ — RESOLVED, verified 2026-08-12.**

The scales now agree on `critical | high | medium | low`, lowercase, in all four
places: `Audit - Workflow.md:65` (Phase 2 ordering) and `:91` (schema), and
`assets/audit-report-template.html:166` (`SEV_ORDER`), `:197` (counts), `:242`
(filters). Run 4 emitted lowercase `critical/high/medium/low` and the report sorted,
counted, badged and filtered all 19 findings correctly.

Residual nit: the inline tags in `Kaizen - Composition Accessibility.md` still use
`Maybe` for axe-detectability, where the schema wants `yes | partial | no`.

**New, from run 4 — five schema/criteria edges worth closing:**

- **The standard-3/8 search carve-out has no bright line.** `The 12 Standards.md` §3
  permits a search field to use a placeholder as its visible label and names Kaizen
  `SearchField` as the example — while the same section warns that clearing a
  hidden-label-plus-placeholder field was the classic earlier miss. The fixture sits
  exactly in that gap. Suggest: the carve-out applies only when the field is a
  page/dataset search **and** the placeholder is not a copy of `labelText`.
- **"Any open finding makes the standard `fail`" fights the severity scale.** Standard
  7 shows `fail` partly on the strength of A11Y-018, a `low` finding about a
  misleading-but-inert prop. Suggest qualifying as "any open finding of medium or
  above".
- **Landmarks have nowhere to live in the schema.** A missing `<main>` is required by
  Composition pattern 4 and by the audit sweep order, but no numbered standard covers
  it and `standard` is a required 1–12 integer. Run 4 filed it under standard 6 and
  flagged the mismatch. Needs either a 13th scorecard row or an optional
  `standard: "composition"`.
- **Standard 11 bundles two checks with one verdict.** Reflow is statically provable;
  target size (2.5.8) is render-only. Run 4 graded `fail` on the reflow half and noted
  the other as unverified. State which half governs the verdict.
- **The contrast script can't be used read-only.** `Audit - Workflow.md` step 5
  requires writing a palette JSON before running `check-colour-contrast.js`, which a
  read-only audit cannot do. Run 4 computed ratios inline instead. Add an argv/stdin
  form.

**2. `Kaizen - Component Mapping.md:21` is still factually wrong.** Untouched by this
round. It still credits React Aria with `GenericModal`'s `aria-modal`, focus trap,
focus return and Escape. Verified false — see item 1 of the original work list below.
An agent trusting it still skips a Critical finding.

**3. `ModalAccessibleLabel` appears nowhere in the shipped skill.** Zero hits outside
the plan file. The mandatory consumer step — omit it and the dialog is unnamed _and_
focus never enters — is undocumented in any file the skill loads.
`Kaizen - Known Gaps.md:16` records only the hardcoded `h2`, no gap for the missing
accessible name or the inverted prop. `focusLockDisabled` is named once
(`SKILL.md:45`) as an example of an inverted prop, without explaining the inversion.

**4. The 12 standards are duplicated.** `Audit - Workflow.md:86-101` still carries its
own full copy, already differing in wording from `The 12 Standards.md` and missing the
tier column. Delete one and cross-reference.

**5. No Confluence URL anywhere in the skill.** Zero hits for
`cultureamp.atlassian.net`; the source is cited only as a prose string. Given the
standards were edited recently, an unverifiable citation will drift. Add the URL.

**6. `INDEX.md:5` and `README.md:11`/`:36` are stale** — they point only at
`Audit - Workflow.md` and never mention `The 12 Standards.md`, which `SKILL.md:33`
calls "the criteria spine".

**7. This plan file is shipping inside the skill directory** (249 lines at
`~/.claude/skills/intopia-web-accessibility/a11y-skill-update-plan.md`). It is
meta-commentary about fixing the skill, it is larger than most reference files, it will
be picked up by anything globbing the skill dir, and it **contradicts shipped content**
— it asserts the GenericModal row is wrong while the shipped row still says otherwise.
Move it out.

## Decision taken — static code sweep first, rendering deferred

**Item 4 (render step) is deferred.** The skill ships as a pure static source sweep
first. This is a reasonable sequencing call: static analysis needs no Storybook, no
browser, no dev server, so it runs in CI and in an editor, and it covers most of the
12 standards.

**What deferring rendering knowingly gives up.** Recording this explicitly so it is a
scope decision, not a silent gap:

| Not statically decidable                                                                                                                                                         | Standard | Detected instead by |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------- |
| Contrast where the pair exists only in the computed cascade — a component-default colour landing on a background another component owns (the fixture's 1.49:1 heading-on-purple) | 10       | axe at render time  |
| Target size / hit area (2.5.8) — needs a measured box, not a CSS guess                                                                                                           | —        | axe or manual       |
| Focus-indicator _visibility_ as opposed to `outline: none` being present in source                                                                                               | 2        | Chromatic / manual  |

Everything else in the 12 is reachable statically, including the parts that look
render-shaped: `outline: none` (standard 2), `width: 900px` and `nowrap` (standard 11),
and declared colour pairs in a CSS module (most of standard 10). So the deferred
surface is genuinely small — one contrast sub-class plus target size.

**Consequence for scoring.** The fixture's 1.49:1 heading-on-purple breach is now
**out of scope by design** for the skill. It must not be counted as a skill miss in
future runs, or the baseline is unfair and the numbers drift. It remains a valid axe
finding and stays in the fixture. Effective static-scope denominator: **20 of 21**
planted breaches.

**Complementarity to state in `SKILL.md`:** the skill is the static half; axe in
Storybook and Chromatic are the render half. Neither replaces the other. Run 3's own
numbers make the case — 19 findings from source versus 3 rules from axe, with a small
overlap.

## Blocking decision — gate or advisor?

This determines the shape of items 2–4 and should be settled first.

|                 | **Gate** (blocks a PR)                               | **Advisor** (informs a human)     |
| --------------- | ---------------------------------------------------- | --------------------------------- |
| Output          | Structured, machine-readable, per-standard pass/fail | Prose report, grouped by theme    |
| False positives | Expensive — must be near zero                        | Tolerable if flagged as uncertain |
| Uncertainty     | Suppress or fail closed                              | Surface with a confidence marker  |
| Severity scale  | Must map to a merge/no-merge line                    | Can be advisory ranking           |

The two are not mutually exclusive — a defensible end state is a structured record
plus a human report rendered from it — but the severity scale differs, so pick before
writing it.

## The work, in priority order

### 1. Correct the `GenericModal` documentation error — highest value, cheapest

`references/kaizen/Kaizen - Component Mapping.md` credits React Aria with
`GenericModal`'s `role="dialog"`, `aria-modal`, focus trap, focus return and Escape.

**Verified false** against `packages/components/src/Modal/GenericModal/GenericModal.tsx`:
`FocusOn` from `react-focus-on` (`:5`, `:132`), hand-rolled `role="dialog"` on a div
(`:157`), `aria-labelledby` from a generated id (`:159`), and **no `aria-modal`
anywhere in the file**. The skill's own Composition pattern 2 correctly says these
components use `react-focus-on` — so two reference files contradict each other.

Why this ranks first: an agent that trusts the Mapping row concludes focus management
is handled and skips the unnamed-dialog / focus-never-enters finding entirely, which
both runs rated **Critical**. A wrong reference is worse than a missing one.

Same pass, add to `Kaizen - Known Gaps.md`:

- **`ModalAccessibleLabel` is a mandatory consumer step.** Omit it and
  `aria-labelledby` points at a non-existent id (dialog unnamed) _and_ focus never
  enters, because `GenericModal` passes `autoFocus={false}` and relies on
  `focusOnAccessibleLabel()`. Documented nowhere in the skill today.
- **`focusLockDisabled` is inverted.** `GenericModal.tsx:133` forwards
  `focusLock={focusLockDisabled}` unnegated; `react-focus-on@3.10.2` defaults
  `focusLock` to `true`. So the prop keeps the trap ON, and only `={false}` disables
  it. See the separate Kaizen ticket below — the skill should document the trap
  regardless of whether Kaizen fixes it.

### 2. Define the severity scale once, in `SKILL.md`

Today severity exists only as `axe: No · High` tags on the 12 Composition patterns —
a good two-axis idea, but undefined (no scale is documented; "Critical" and "Low"
appear nowhere), fixed per pattern rather than per instance, and confined to one file.

Consequence: run 1 and run 2 invented different scales, so **the two runs are not
comparable**. For a skill you intend to measure and improve, that is the core defect.

Write into `SKILL.md`:

- A named scale with definitions. Run 2's invented one is a reasonable starting
  point: **Critical** = a control or content is completely unavailable to a class of
  users, or actively traps/misleads. **High** = an AA failure that blocks a task or
  loses information with no reasonable workaround. **Medium** = degrades or breaks
  convention but the task stays completable. **Low** = borderline, or subsumed by
  another fix.
- The **axe-detectability axis** alongside it (`Yes` / `Partial` / `No`). Both runs
  independently produced this column and it is the most decision-useful thing in
  either report — it separates what CI can defend from what needs a human, and it is
  the argument for the skill's existence (22 findings vs axe's 3).
- Add both as columns to `Kaizen - Known Gaps.md` and the Composition patterns.

### 3. Add an audit mode

Every instruction in `SKILL.md` is phrased for generating code — "Generate the code",
"Report decisions". There is no audit workflow, no sweep order, no output contract.
Both runs had to invent one, which accounts for most of the variance between them.

- Promote the "How to review a composition" 6-step order out of the bottom of
  `Kaizen - Composition Accessibility.md` into `SKILL.md` as the audit entry point.
  Both runs independently called it the most useful content in the skill.
- **Add a mandatory sweep checklist** so coverage stops varying between runs. This is
  the concrete evidence: run 3 found no list-semantics defect (standard 12) that runs
  1 and 2 both found, and missed the three identical `View` buttons both earlier runs
  caught. Nothing told it to check those categories, so whether they get checked
  depends on what the agent happens to notice. The 12 standards are the natural
  checklist — which is another reason item 5 comes first.
- State the output contract explicitly (see item 5).
- Keep "verify prop behaviour against component source before asserting it" as
  general hygiene — it is what let run 3 find the `focusLockDisabled` inversion with
  no prompting. But **do not expect it to fix the standard-3 miss**: run 3 read the
  source, got the mechanism right, and still cleared the component. That miss is a
  missing criterion, addressed by item 5.
- Note that `references/acceptance-criteria/` is for building, not auditing. No run
  needed any of its 20 files; skipping it saves substantial budget.

### 4. Add a render step

The skill never suggests rendering the page. That is a structural blind spot, not an
oversight in coverage.

Concrete evidence: the fixture's section-title heading fails contrast at **1.49:1**
(a Kaizen default `color="dark"` landing on TitleBlock's own purple header). Run 2
missed it because it built its palette from colour pairs _declared in the CSS module_,
and this pair exists only in the computed cascade. **Axe catches it in one call.**

- Add an optional render-and-scan step: run the component in Storybook, then
  `axe.run()` against it, and reconcile those results with the source review.
- This also converts target-size (2.5.8) findings from "likely" to measured — run 2
  had to reason from `line-height` and could only report "likely".
- Note the local gotcha: `docs/utils/global-a11y-rules.ts` disables `heading-order`
  globally in this repo, so an audit must re-enable it per story or the single
  fully-axe-detectable standard silently does not fire.

### 5. Wire the 12 Culture Amp standards in as the criteria and severity source — JOINT FIRST PRIORITY

> Promoted from last to joint-first by run 3. This is the only item that fixes the
> standard-3 and standard-8 misses, and it supplies the sweep checklist item 3 needs.
> Do this alongside item 1.

The skill grades against WCAG 2.2 AA and does not reference the 12-point checklist at
all. Consequence in run 1: standard 8 (placeholder text isn't used) was reported as
_"best practice, not a violation"_ and standard 12 (list semantics) as _"Low"_ — both
are named minimum standards, not optional.

- Add the 12 standards as a reference file, each with its WCAG mapping, its
  detectability, and its **priority tier** (note 11 and 12 were
  "Guideline for all / Minimum standard for new-or-rebuild", not flat minimum).
- Make severity derive from the checklist tier, with WCAG SC as a _citation_ rather
  than the ranking source.
- Require per-standard **pass/fail**, not just a findings list. Nothing in either run
  forced the question "does this meet minimum standard 8?", which is exactly how a
  must-have got downgraded.
- **Depends on the recent edits to the standards** — reconcile against the current
  Confluence pages before encoding. Values most likely to drift, and therefore best
  referenced rather than hardcoded: the 4.5:1 / 3:1 split, the 320px width, the
  `- Culture Amp` title suffix, and the search-input placeholder carve-out that
  standards 3 and 8 both depend on.

## Output format recommendation

Independent of gate-vs-advisor, three properties both runs argue for:

1. **Locations as `component + prop`, not line numbers.** Line references went stale
   the moment the fixture was edited; the component/prop signature survived. Keep line
   numbers as a hint, not the identifier.
2. **A confidence field.** Run 1's only miss was unearned certainty, not missing
   knowledge — it asserted a component was "labelled correctly" without reading it.
   Separate _verified against source_ from _inferred from usage_.
3. **Two artifacts, one source of truth.** A structured record (standard, location,
   severity, axe-detectability, confidence, evidence) plus a human report rendered
   from it. Run 1's 270-line prose report served an audit reader well and a developer
   or a CI gate not at all.

## Separate track — a Kaizen ticket, not a skill change

`GenericModal`'s `focusLockDisabled` is inverted (evidence in item 1). This is a
fleet-wide footgun independent of the skill: anyone "fixing" a modal by writing
`focusLockDisabled={false}` silently disables the focus trap, and the name implies the
opposite. Fix is either a rename to `focusLock` or a negation
(`focusLock={!focusLockDisabled}`); the latter is a behaviour change for any consumer
currently passing the prop, so measure usage first (§12 of the repo `CLAUDE.md`).

## How to verify each change

Re-run the audit against the fixture after each numbered item and compare to the run 3
baseline. Use a **neutral prompt every time** — naming a component or prop in the
prompt contaminates the result, which is what happened to run 2.

Specific expected movements:

- After item 1: the unnamed-dialog / focus-never-enters finding should appear without
  the agent needing to read `GenericModal.tsx` itself.
- After item 2: severity labels should be identical in shape across two consecutive
  runs. That is the actual test — reproducibility, not count.
- After item 4: the 1.49:1 section-title contrast failure should be found.
- After item 5: standards 8 and 12 should be reported at must-have severity, and the
  output should carry a per-standard verdict.

## Fixture housekeeping

- Run 2 found a genuine unplanned bug: `href="#latest-survey-results"` has no target
  element, because TitleBlock replaced the standalone `h2` that would have carried the
  id. Either give it a target or record it in the answer key as an intentional breach.
- The fixture's `focusLockDisabled` breach is **inert** (see the inversion). To make
  the planted defect real it needs `focusLockDisabled={false}`.
- Fixture lives on branch `a11y-skill-test-fixture`, no changeset, not for merge.
  `eslint` fails on it by design.
