# KZN-4108 delivery plan — agent-friendly accessibility guidelines

Ticket: [KZN-4108](https://cultureamp.atlassian.net/browse/KZN-4108) (In Progress, epic KZN-4183 A11y Q3 2026)

DOD: create a set of a11y rules → test at kaizen level → add to `ca-agent-context`.

Status against DOD: rules written and scored (run 4: 20/20 planted breaches, 12/12 standards).
Kaizen-level testing done via Storybook fixtures. `ca-agent-context` step not started.

## Decisions locked

| Decision     | Choice                                                                              |
| ------------ | ----------------------------------------------------------------------------------- |
| Provenance   | Culture Amp's own skill, influenced by Intopia's. No Intopia expression ships       |
| Skill home   | Standalone global skill first, then promote to `cultureamp/ca-agent-context`        |
| v1 scope     | Static code sweep only — 7/12 standards statically passable, 5 reported as `review` |
| Skill shape  | One skill; universal rules always apply, Kaizen references load conditionally       |
| Merge target | `cultureamp/ca-agent-context` → `skills/ca-web-accessibility/`                      |

Kitty has `push: true` on `ca-agent-context`; `main` is protected, no CODEOWNERS. Submission
path is `hotel skills contribute`. No accessibility skill exists there today.

## Provenance position

Copyright covers expression, not ideas, method or structure. Being influenced by Intopia's
approach carries no obligation. The obligation attaches only to files that still carry their
prose or code — so the work is to ship none.

Intopia's repo is CC BY-NC-SA 4.0. Carrying their files into a Culture Amp skill would trigger
NonCommercial (which tests purpose, not distribution scope, so "internal only" does not cure it)
and ShareAlike (which would encumber Culture Amp's own additions). Shipping zero Intopia
expression avoids both questions rather than answering them.

Evidence the audit and Kaizen layers are Culture Amp's own work, should anyone ask:

- All 40 upstream reference files carry `metadata: author: Intopia` in front-matter. **None of
  the 9 Culture Amp files do.** All 5 commits in the upstream repo are Intopia authors.
- Intopia's skill has **no audit concept at all** — no scorecard, no severity model, no
  axe-detectability axis. `Tier`, `axe` and `Static confidence` columns, `pass/fail/na/review`
  verdicts, the `manualCheck` requirement and the finding JSON schema are all Culture Amp inventions.
- `The 12 Standards.md:3` names its source as Culture Amp's Confluence "Accessibility standards
  checklist" and instructs "grade against these, not against raw WCAG" — the inverse of Intopia's
  per-component WCAG-SC structure.
- Culture Amp specifics with no upstream source: `- Culture Amp` title suffix and `usePageTitle()`,
  `TitleBlock` rendering the page `h1`, Kaizen `secondary` hiding the visible label, `VisuallyHidden`,
  and the `global-a11y-rules` `heading-order` footnote.

Keep this triage on record. Retain the Intopia clone untouched as the reference that shows what
was _not_ carried.

## Phase 1 — separate the skill

Current state: `~/.claude/skills/intopia-web-accessibility` is a **symlink** to
`~/Documents/git/intopia-web-accessibility-skill`, a clone of Intopia's repo on `main`, with all
Culture Amp work **uncommitted** — 8 modified tracked files, 9 untracked. One `git checkout .`
destroys 1,251 lines.

1. Snapshot the working tree before touching anything — copy the whole clone to
   `~/.claude/docs/kzn-4108-skill-snapshot-2026-08-18/`. Only copy that exists.
2. Create `~/Documents/git/ca-web-accessibility-skill` as its own repo.
3. Move the 9 CA-ORIGINAL files in and commit. Rename the skill off `intopia-web-accessibility` —
   the string is embedded in `SKILL.md` front-matter, `Audit - Workflow.md:127`, and two places in
   `audit-report-template.html`.
4. **Do not carry `LICENSE`.** Shipping Intopia's CC BY-NC-SA grant would put Culture Amp's own
   work under NonCommercial-ShareAlike. Add a Culture Amp licence in its place. An "influenced by"
   acknowledgement in `README.md` is optional and carries no obligation, provided no prose is carried.
5. Repoint the global symlink to `~/.claude/skills/ca-web-accessibility` and remove the
   `intopia-web-accessibility` symlink, so runs cannot silently score the wrong copy.
6. Delete `a11y-skill-update-plan.md` from the skill directory — it ships inside the skill, is
   larger than most reference files, and contradicts shipped content. Current reconciled copy lives
   at `agents-managed-docs/reports/a11y-skill-update-plan.md`.

### Keep — CA-ORIGINAL, 9 files, 1,067 lines

| File                                                      | Lines                                                       |
| --------------------------------------------------------- | ----------------------------------------------------------- |
| `references/audit/The 12 Standards.md`                    | 58                                                          |
| `references/audit/Audit - Workflow.md`                    | 130                                                         |
| `references/kaizen/Kaizen - Component Mapping.md`         | 82                                                          |
| `references/kaizen/Kaizen - Composition Accessibility.md` | 41                                                          |
| `references/kaizen/Kaizen - Design Tokens.md`             | 60                                                          |
| `references/kaizen/Kaizen - Known Gaps.md`                | 27                                                          |
| `assets/audit-report-template.html`                       | 352                                                         |
| `assets/kaizen-palette.json`                              | 68                                                          |
| `a11y-skill-update-plan.md`                               | 249 (dev artifact — keep in the Kaizen repo, not the skill) |

Two residual overlaps to clear even in these:

- The standard-3/8 search carve-out paraphrases Intopia's `Topic - Forms.md` sentence. Reword from
  WCAG 3.3.2 directly.
- `kaizen-palette.json` reuses Intopia's `checks[]` field names (`id`, `foreground`, `background`,
  `type`, `state`, `notes`). Low risk, but redesign the schema when the contrast script is rewritten.

### Rewrite — CA-REWRITE-NEEDED, 12 files, 1,159 lines

Capability Culture Amp needs; current file is Intopia's prose. Structure is reusable, every
sentence must be new. Write from `agents-managed-docs/a11y/composition-catalogue.md` and the
Confluence checklist.

| File                                                      | Lines | Must cover                                                                                                      |
| --------------------------------------------------------- | ----- | --------------------------------------------------------------------------------------------------------------- |
| `SKILL.md`                                                | 90    | ~20 residual lines (Overview paragraph, most Universal Rules bullets) + front-matter rename. ~85% is already CA |
| `INDEX.md`                                                | 60    | The 8-row Topic Index table body is untouched Intopia prose                                                     |
| `README.md`                                               | 135   | Fresh — Experimental Status, Why Use This Skill, install, Contributing are all theirs                           |
| `references/colour-contrast/Colour Contrast Reference.md` | 177   | Standard 10 — thresholds, compositing. CA added only 11 lines of Kaizen tokens                                  |
| `scripts/check-colour-contrast.js`                        | 311   | Standard 10 measurement. WCAG formulae are spec-derived and free to reimplement                                 |
| `scripts/composite-colour.js`                             | 89    | Alpha compositing. Headed `* Intopia Accessibility — Colour Contrast Workflow`                                  |
| `references/topic/Topic - Structure and Semantics.md`     | 103   | Standards 6, 9, 12 — landmarks, headings, lists                                                                 |
| `references/topic/Topic - Forms.md`                       | 57    | Standards 3, 8 — visible labels, placeholder rule                                                               |
| `references/topic/Topic - Keyboard and Focus.md`          | 43    | Standards 1, 2, 7 — operability, focus indicators, focus management, 2.4.11                                     |
| `references/topic/Topic - Responsive and Reflow.md`       | 33    | Standard 11 — 320px reflow, 24×24 targets                                                                       |
| `references/topic/Topic - Live Regions and Status.md`     | 33    | Composition live-region check                                                                                   |
| `references/topic/Topic - Images and Charts.md`           | 28    | Standard 4 — alt text, charts                                                                                   |

Effort splits in two: ~760 lines of docs (the 6 topic files are the real work), and ~400 lines of
scripts that are mechanical once written clean-room from the WCAG definitions.

### Drop — 36 files, 2,974 lines

| Group                                                              | Files / Lines | Reason                                                                                               |
| ------------------------------------------------------------------ | ------------- | ---------------------------------------------------------------------------------------------------- |
| `references/acceptance-criteria/`                                  | 20 / 2,211    | Intopia prose, and `SKILL.md` already says to skip this directory when auditing — it is for building |
| `references/code-example/`                                         | 12 / 631      | Pass/fail snippets for hand-rolled markup; superseded by the Kaizen component mapping                |
| `references/topic/Topic - Drag and Drop.md`                        | 1 / 42        | Maps to none of the 12 standards                                                                     |
| `assets/colour-contrast-template.json`, `assets/tabs-palette.json` | 2 / 87        | `kaizen-palette.json` replaces both                                                                  |
| `LICENSE`                                                          | 1 / 3         | Must not ship — see Phase 1 step 4                                                                   |

## Phase 2 — close the open defects

From the reconciled update plan. Ordered by value. Independent of Phase 1 — needed either way.

### 2a. Factual corrections (highest value — these cause missed Critical findings)

1. `references/kaizen/Kaizen - Component Mapping.md:21` — falsely credits React Aria with
   `GenericModal`'s `role="dialog"`, `aria-modal`, focus trap, focus return and Escape. Verified
   false: `GenericModal.tsx` uses `FocusOn` from `react-focus-on` (`:5`, `:132`), hand-rolls
   `role="dialog"` on a div (`:157`), takes `aria-labelledby` from a generated id (`:159`), and sets
   no `aria-modal` anywhere. Agents trusting this row skip real findings.
2. `references/kaizen/Kaizen - Known Gaps.md` — add two entries:
   - `ModalAccessibleLabel` is a mandatory consumer step. Omit it and the dialog is unnamed _and_
     focus never enters (entry relies on `focusOnAccessibleLabel()`). Documented nowhere today.
   - `focusLockDisabled` is inverted — `GenericModal.tsx:133` forwards `focusLock={focusLockDisabled}`
     unnegated and `react-focus-on@3.10.2` defaults `focusLock` true, so the prop keeps the trap on.
     Document regardless of whether Kaizen fixes the bug.

### 2b. Single-source and citation

3. `references/audit/Audit - Workflow.md:86-101` — delete the duplicated 12 standards. The copy
   already differs in wording from `The 12 Standards.md` and drops the tier column.
4. Add the Confluence source URL — currently zero hits for `cultureamp.atlassian.net` anywhere in
   the skill, so the citation is prose only and will drift:
   `https://cultureamp.atlassian.net/wiki/spaces/PA/pages/2818998773/Accessibility+standards+checklist`
   plus its 12 child pages.
5. `INDEX.md:5` and `README.md:11,36` are stale — they point only at `Audit - Workflow.md` and never
   mention `The 12 Standards.md`, while `SKILL.md:33` calls the standards "the criteria spine".
   Folds into the Phase 1 rewrite of both files.
6. `references/kaizen/Kaizen - Composition Accessibility.md` — uses `Maybe` where the schema says
   `yes | partial | no`.

### 2c. Five schema and criteria edges surfaced by run 4

7. Standard 3/8 search carve-out is ambiguous at `The 12 Standards.md:3`. State the condition:
   applies when the field is page/dataset search **and** the placeholder differs from `labelText`.
   Same edit clears the Intopia paraphrase.
8. "Any open finding = standard fail" contradicts the severity scale. Qualify as **medium or above**.
9. Landmarks have no slot in the schema — a missing `<main>` is required by Composition pattern 4
   but no standard 1–12 covers it. Add standard 13, or an optional `standard: "composition"`.
10. Standard 11 bundles two checks with different detectability — reflow is static, target size is
    render-only. State which governs the verdict.
11. The contrast script requires write access (`Audit - Workflow.md` step 5 writes a palette JSON).
    A read-only audit cannot run it. Add a stdin/argv form — fold into the script rewrite.

### 2d. Fixture housekeeping

12. Run 2 found an unplanned bug — `href="#latest-survey-results"` has no target since TitleBlock
    replaced the standalone `h2`. Give it a target or record it as an intentional breach.
13. The fixture's `focusLockDisabled` breach is **inert** because the prop is inverted. Make it real:
    `focusLockDisabled={false}`.

## Phase 3 — re-score, then package

1. `git pull` in `kaizen-design-system` first — local `main` is 4 commits behind `origin/main`, and a
   comparison run against stale component source is not comparable.
2. Run 6 against the broken fixture. **Reuse run 4's neutral prompt and 20-call budget verbatim** —
   any deviation makes the run incomparable, which is what invalidated run 2.
   Gate: 20/20 planted breaches, 12/12 standards touched.
3. Run 7 against `A11yPassingTest.stories.tsx` for precision. Gate: zero false positives.
4. Because Phase 1 rewrote the topic files, run 6 is a genuine regression risk, not a formality —
   the run-3 lesson was that a missing _criterion_ causes misses even when the process is sound.
   Rewritten prose must retain every criterion.
5. Package for `ca-agent-context`:
   - Folder `skills/ca-web-accessibility/` — `ca-` prefix, kebab-case, or the validator rejects it.
   - `SKILL.md` front-matter `name` must match the folder name exactly.
   - Validate locally: `.github/scripts/validate-skills.sh` (needs `yq` and `jq`).
   - Add a catalog entry to `skills/metadata.json`. **There is no Accessibility category** — existing
     ones are Frontend, Migrations & Upgrades, Renovate, Security, CI/CD, Code Review & Docs,
     Solution to Code, Productivity. Add Accessibility rather than filing under Frontend.
   - Follow `skills/ca-write-a-skill/SKILL.md`; split reference files past ~350 lines.
6. Submit with `hotel skills contribute`. Unconfirmed whether it opens a PR or pushes to `main` —
   `main` is protected and PR validation workflows exist, so a PR is likely. Confirm with `--debug`
   on a throwaway skill first.
7. PR passes `pipeline.yml` and `review-guard.yml`. Merge rebuilds the published catalog.
8. Close KZN-4108 against the three DOD lines.

## Follow-up tickets to file under KZN-4183

| Work                                         | Why separate                                                                                                                                                                                                                                        |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Render step / dev-farm audit                 | Clears the 7/12 static ceiling — standards 2, 5, 7, 10, 11 can never `pass` from source. A dev farm also auto-clears 5, 7, 10, 11 and uniquely tests app-chrome checks (2.4.11 obscured focus, real reflow, real page titles) that Storybook cannot |
| `GenericModal` `focusLockDisabled` inversion | Real Kaizen bug, not a skill bug. `GenericModal.tsx:133`                                                                                                                                                                                            |
| Confluence promotion of audit output         | 2026-08-12 ticket comment. Report template needs to publish into the PA accessibility space                                                                                                                                                         |
| Gate semantics for CI                        | A gate must key off "no `fail` rows" and treat `review` as non-blocking, or static analysis can never report green                                                                                                                                  |

## Open question

Does `hotel skills contribute` open a PR or push to `main`?
