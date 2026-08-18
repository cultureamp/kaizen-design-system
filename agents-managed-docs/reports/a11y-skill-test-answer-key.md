# A11y skill test — answer key

Scoring key for the deliberately-broken fixture at
[packages/components/src/\_docs/A11ySkillTest.stories.tsx](../../packages/components/src/_docs/A11ySkillTest.stories.tsx).

**Do not put any of this content into the story file.** The story carries no
comments naming standards or WCAG criteria — if it did, a skill could grep the
answer instead of analysing the code, and the test would be worthless.

Standards source: [Accessibility standards checklist](https://cultureamp.atlassian.net/wiki/spaces/PA/pages/2818998773/Accessibility+standards+checklist)
(12 child pages).

## Scoring table

| #   | Standard                                               | WCAG               | Where                                                                                  | Breach                                                                                                                                                                                                                                                                                                                | Axe       |
| --- | ------------------------------------------------------ | ------------------ | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| 1   | All functionality is operable with a keyboard          | 2.1.1 (A)          | story L69-75 (`div.editAffordance`), L52-56 (`aria-hidden` wrapper)                    | `<div onClick>` with no `tabIndex`/`role`/key handler; separately, a real `Button` nested inside `aria-hidden="true"` — focusable but hidden from AT                                                                                                                                                                  | Partially |
| 2   | Interactive items have clear focus indicators          | 2.4.7 (AA)         | story L63 + css `.plainButton`                                                         | `Reset` button given `className={styles.plainButton}` → `:focus-visible { outline: none }`; unlayered story CSS beats Kaizen's layered focus ring                                                                                                                                                                     | No        |
| 3   | Input fields have a visible associated label           | 3.3.2, 4.1.2 (A)   | story L60, L135-136                                                                    | `SearchField secondary` suppresses the visible `<Label>` and demotes `labelText` to `aria-label`; separately the `Notes` `TextField` format hint is a loose sibling `<Text>` instead of the `description` prop                                                                                                        | Partially |
| 4   | Images have alt text or are hidden from assistive tech | 1.1.1 (A)          | story L88-92, L114-118                                                                 | Meaningful trend `Icon`s (`trending_up`/`trending_down` — the only carrier of the up/down meaning) marked `isPresentational` → `aria-hidden`, meaning lost                                                                                                                                                            | Partially |
| 5   | Page title describes the page                          | 2.4 (A)            | story L33-35                                                                           | `document.title = 'Culture Amp'` — bare product name, no page description, no `- Culture Amp` suffix pattern                                                                                                                                                                                                          | No        |
| 6   | Heading structure is logical                           | 1.3.1 (A)          | story `TitleBlock renderSectionTitle`, modal heading                                   | `TitleBlock` emits the `h1` from `title`, but `renderSectionTitle` **replaces** TitleBlock's default `h2` with a consumer `Heading tag="h3"` → outline goes `h1` → `h3`, skipping `h2`; modal title still `tag="div"` so contributes no heading at all                                                                | **Yes**   |
| 7   | Focus is managed                                       | 2.4.3 (A)          | story L146-150                                                                         | `GenericModal` with `focusLockDisabled` — focus never moves into the dialog, and on close focus is not returned to the triggering button. `GenericModal` also has no accessible-name prop at all                                                                                                                      | No        |
| 8   | Placeholder text isn't used                            | 3.3.2, 4.1.2       | story L60                                                                              | `SearchField placeholder="Filter metrics"` duplicating the (hidden) label — placeholder is the only visible labelling. Note: `TextField` cannot reproduce this; `placeholder` is `Omit`ted from its props                                                                                                             | No        |
| 9   | Button and link labels make sense in isolation         | 1.3.1, 2.4.4 (A)   | story L95-97 (×3 via map), L121                                                        | Three buttons all labelled `View` with no metric context; a link labelled `Click here` (×3 via map)                                                                                                                                                                                                                   | No        |
| 10  | Contrast requirements met                              | 1.4.3, 1.4.11 (AA) | `renderSectionTitle` `h3`; css `.summary`, `.mutedText`, `.mutedHeading`, `.mutedIcon` | The `renderSectionTitle` heading inherits Kaizen's default `color="dark"` (`#2f2438`) on TitleBlock's purple header (`#5f3361`) = **1.49:1**; body text `#949494` on white = 3.03:1 (needs 4.5:1) on the summary line and three metric scores; heading `#b0b0b0` = 2.16:1; trend icons `#d4d4d4` = 1.48:1 (needs 3:1) | Partially |
| 11  | All content and functionality available at 320px width | 1.4.10 (AA)        | css `.page` (`width: 900px`), `.summary`                                               | Fixed 900px page width → full-page horizontal scroll at 320px; `.summary` uses `white-space: nowrap` + `text-overflow: ellipsis`, truncating rather than wrapping                                                                                                                                                     | No        |
| 12  | Related items are marked up in a list                  | 1.3.1 (A)          | story L84-104, L110-127                                                                | Six related metric cards rendered as bare sibling `div`s in two flex rows — no `ul`/`li`. `Card` supports `tag="li"`, so the correct form was available and unused                                                                                                                                                    | No        |

Line numbers are approximate — they shift if the story is edited. The
component/prop signature in each row is the reliable identifier.

## Measured axe baseline

`axe.run('#storybook-root')` against the rendered story returns **3 rules / 8
nodes**:

| Rule                | Nodes | Impact   | Maps to standard |
| ------------------- | ----- | -------- | ---------------- |
| `aria-hidden-focus` | 1     | serious  | 1 (partially)    |
| `color-contrast`    | 6     | serious  | 10 (partially)   |
| `heading-order`     | 1     | moderate | 6                |

## TitleBlock / `renderSectionTitle` variant (added 2026-08-17)

The header was rewritten to use the real `TitleBlock` instead of a hand-rolled
`Heading tag="div"`. Verified rendered outline:

```
H1: Priya Raman            ← TitleBlock `title`
H3: Latest survey results  ← renderSectionTitle — skips H2
H4: Engagement … Wellbeing
H4: Manager notes
```

**Why this is a better standard-6 test.** `TitleBlock` invokes
`renderSectionTitle` **instead of** `defaultRenderSectionTitle`
(`TitleBlock.tsx:371-388`), wrapping the result in layout `div`s only — it does
not supply a heading of its own. So the consumer's `h3` lands directly in the
outline beside the `h1` and silently replaces the `h2` TitleBlock would otherwise
emit (`TitleBlock.tsx:113-131`, `<Heading variant="heading-2">` → `h2`). A
consumer opting into the render prop takes over responsibility for the heading
level and usually does not realise it.

**Two planted breaches were retired by this change** (TitleBlock emits a real
`h1`, so they no longer exist): "page has no `h1` at all", and the `h2` → `h4`
card skip. Standard 6 now has 2 breaches: the `h1` → `h3` skip, and the modal
heading still at `tag="div"`.

**One breach was gained, unplanned but authentic.** The consumer heading inherits
Kaizen's default `color="dark"` while sitting on TitleBlock's purple header
background — `#2f2438` on `#5f3361` = **1.49:1**. `defaultRenderSectionTitle`
passes `color={isReversed(variant) ? 'white' : 'dark'}`; a consumer render prop
must replicate that logic and this one doesn't. This is the second trap
`renderSectionTitle` sets, and worth keeping: it is exactly the failure mode the
prop invites.

Planted breach count stays at **21**: standard 6 went 3 → 2 (two retired, one
added), standard 10 went 3 → 4. An earlier revision of this file said 20; that was
an arithmetic slip.

## Scored result — run 3 (clean baseline, 2026-08-17)

Neutral prompt (no component or prop names) and an 18-tool-call cap. 12 calls used,
~3 minutes, **19 findings**. This is the baseline for measuring skill edits.

**Planted breaches found: 16 / 21. Standards touched: 10 / 12.**

| Std | Planted | Found | Note                                                               |
| --- | ------- | ----- | ------------------------------------------------------------------ |
| 1   | 2       | 2     | fake-link div, `aria-hidden` wrapper                               |
| 2   | 1       | 1     |                                                                    |
| 3   | 2       | **1** | SearchField miss reproduced — see below                            |
| 4   | 1       | 1     |                                                                    |
| 5   | 1       | 1     |                                                                    |
| 6   | 2       | 2     | cited Known Gaps #4 correctly without reading `TitleBlock.tsx`     |
| 7   | 2       | 2     | read `GenericModal.tsx` in full; found the inversion independently |
| 8   | 1       | **0** | explicitly rejected as "not a WCAG failure"                        |
| 9   | 2       | **1** | found `Click here`; missed the three identical `View` buttons      |
| 10  | 4       | 3     | missed the 1.49:1 heading-on-purple again                          |
| 11  | 2       | 2     |                                                                    |
| 12  | 1       | **0** | no list-semantics finding at all — runs 1 and 2 both found this    |

**Caveat on comparability.** Run 3 changed two variables at once versus run 1: a
neutral prompt _and_ a tight call budget. Its lower recall may be partly a budget
artifact (it skipped `references/acceptance-criteria/` and never read
`TitleBlock.tsx`). Treat 16/21 as "neutral prompt, 18-call budget" — not as
evidence the skill got worse.

### The headline result: the standard-3 miss is not a source-reading problem

Run 3 read `SearchField.tsx`, understood the mechanism exactly, and still concluded
there was no defect. Verbatim from its confidence section:

> **Deliberately NOT reported after checking source:** `<SearchField secondary
labelText="Filter metrics" placeholder="Filter metrics" />` looks like a
> label-hidden-by-placeholder failure, but `SearchField/SearchField.tsx:27, 43` show
> `secondary` hides only the _visual_ label and applies `aria-label={labelText}`. The
> field is correctly named; the duplicated placeholder is redundant but not a WCAG
> failure.

This **falsifies** the hypothesis that "instruct the agent to read component source
before asserting" would fix the miss. It read the source and reasoned correctly about
the mechanism. What it lacked was the _criterion_ — nothing in the skill says a
visible label is required, or that placeholder-as-only-visible-label is a failure.
Standard 3 requires a visible label; standard 8 forbids placeholder text outright.

Run 3 also rejected standard 8 in the same breath ("redundant but not a WCAG
failure"), which is the same call run 1 made. Two of three runs conclude this is not
a defect, because on WCAG-only grounds it is arguable — and on Culture Amp grounds it
is not arguable at all.

**Implication for the skill update:** this is a missing-rule problem, not a
missing-process problem. It raises "wire the 12 standards in as the severity and
criteria source" from last priority to near-first.

Plus one `color-contrast` _incomplete_. So axe surfaces evidence for **3 of the
12 standards**, and for 1 and 10 it catches only one facet each — it does not see
the keyboard-inoperable `div`, and it cannot judge the icon contrast.

## Expected baselines

- **Storybook axe panel:** 3 of 12 as measured above. Standard 6 fully; 1 and 10
  partially. Standards 3 and 4 are listed as "partially" axe-detectable in the
  Confluence pages but **do not fire here** — the `SearchField` still has an
  accessible name via `aria-label`, and `isPresentational` icons are legitimately
  `aria-hidden` as far as axe can tell. Both are real breaches axe cannot see.
- **Standards 5, 8 and 10** are documented in the Confluence pages as having no
  axe coverage _and_ no regression-test path — human-review-only today. A skill
  that finds these is delivering coverage that does not otherwise exist.
- The fixture also contains **two breaches per standard** for 1, 3, 4, 6, 9 and
  10 — a thorough skill should find both instances, not just the first.

## Scored result — run 4 (post-update, templated output, 2026-08-12)

Neutral prompt, 20-call cap, 11 calls used, ~4.5 minutes. **19 findings.** Output is
the skill's own HTML report at
[findings-run4/accessibility-audit.html](a11y-skill-test-findings-run4/accessibility-audit.html).

**Planted breaches found: 20 / 20 in static scope.** All 12 standards graded `fail`.
Denominator is 20, not 21 — the 1.49:1 heading-on-purple is out of scope by design
now that the skill is static-only.

| Std | Planted (static) | Found | Finding ids                         |
| --- | ---------------- | ----- | ----------------------------------- |
| 1   | 2                | 2     | A11Y-002, A11Y-003                  |
| 2   | 1                | 1     | A11Y-006                            |
| 3   | 2                | 2     | **A11Y-015**, A11Y-017              |
| 4   | 1                | 1     | A11Y-012                            |
| 5   | 1                | 1     | A11Y-007                            |
| 6   | 2                | 2     | A11Y-004, A11Y-005                  |
| 7   | 2                | 2     | A11Y-001, A11Y-018                  |
| 8   | 1                | 1     | **A11Y-016**                        |
| 9   | 2                | 2     | A11Y-008, A11Y-009                  |
| 10  | 3                | 3     | A11Y-010, A11Y-011, A11Y-012 (icon) |
| 11  | 2                | 2     | A11Y-013                            |
| 12  | 1                | 1     | A11Y-014                            |

**The standard-3 miss is fixed, and it was the criterion that fixed it.** Run 4 found
`SearchField secondary` unprompted (A11Y-015) and cited the mechanism —
`showVisibleLabel = !secondary` — then filed the placeholder consequence separately
against standard 8 (A11Y-016). Runs 1 and 3 cleared this same code. The only relevant
change was `Topic - Forms.md:14` stating that a correct accessible name alone is not
sufficient. Confirms the diagnosis: it was a missing rule, not a missing process.

Also recovered versus run 3: standard 12 (A11Y-014) and the three identical `View`
buttons (A11Y-008), both of which run 3 dropped. Consistent with the mandatory sweep
checklist doing its job.

Extras beyond the 21 planted: A11Y-019 (no `<main>` landmark) and A11Y-011 (hardcoded
hex instead of tokens) — both real, neither covered by the 12 standards.

### Progression

| Run | Prompt             | Findings | Planted found | Standards |
| --- | ------------------ | -------- | ------------- | --------- |
| 1   | unknown (user-run) | 17       | 20/21         | 12/12     |
| 2   | **contaminated**   | 22       | —             | 12/12     |
| 3   | neutral, 18 calls  | 19       | 16/20         | 10/12     |
| 4   | neutral, 20 calls  | 19       | **20/20**     | 12/12     |

Runs 3 and 4 are the only directly comparable pair — same neutral prompt shape, same
budget discipline. 16/20 → 20/20.

## Known axe-config gotcha

`docs/utils/global-a11y-rules.ts` disables `heading-order` globally. The story
re-enables it via `parameters.a11y.config.rules` (story rules are **merged** with
globals, `[...globalA11yRules, ...storyRules]`, not replaced). Without that, the
single fully-axe-detectable standard would silently not fire and the baseline
comparison would be wrong.

## Scored result — run of 2026-07-31

Skill output: [a11y-skill-test-findings/findings.md](a11y-skill-test-findings/findings.md)
(17 findings + 5 contrast failures + 1 cross-cutting token breach).

**Standards covered: 12 / 12.** **Planted breaches found: 20 / 21.**

| Std | Planted breaches | Found | Note                                                             |
| --- | ---------------- | ----- | ---------------------------------------------------------------- |
| 1   | 2                | 2     | findings 6, 7                                                    |
| 2   | 1                | 1     | finding 8                                                        |
| 3   | 2                | **1** | finding 13 only — see miss below                                 |
| 4   | 1                | 1     | finding 12, correctly identified icon as sole carrier of meaning |
| 5   | 1                | 1     | finding 4                                                        |
| 6   | 3                | 3     | findings 1, 2 — incl. the modal `tag="div"` third instance       |
| 7   | 2                | 2     | findings 9, 10 — plus an upstream bug discovery, below           |
| 8   | 1                | 1     | finding 15, but severity-downgraded — see calibration below      |
| 9   | 2                | 2     | findings 11, 14                                                  |
| 10  | 3                | 3     | all three ratios computed correctly by script                    |
| 11  | 2                | 2     | findings 16, 17                                                  |
| 12  | 1                | 1     | finding 5, severity-downgraded to Low                            |

### The one miss (false negative)

**Standard 3, instance 1 — `SearchField secondary` suppresses the visible label.**
The skill not only missed it, it asserted the opposite: _"`SearchField` (line 50) —
labelled correctly; only the redundant placeholder"_.

Verified in `packages/components/src/SearchField/SearchField.tsx:27,33,43`:
`const showVisibleLabel = !secondary` gates the `<Label>` out entirely, and
`aria-label={!showVisibleLabel ? labelText : undefined}` demotes the label to an
`aria-label`. So the input **is** programmatically named (passes axe) but has **no
visible label** — the only visible text is the placeholder. This is exactly the
pattern standards 3 and 8 exist to prevent.

Root cause of the miss: the skill conflated _programmatic naming_ with _visible
labelling_. Worth adding as an explicit check — "does this input have a visible
label, not just an accessible name?" — since it is the single most common way a
Kaizen component passes automated checks while failing the standard.

### Severity calibration against the 12 standards

The skill scores against WCAG 2.2 AA, so two hard Culture Amp must-haves came out
soft:

- **Standard 8** (placeholder text isn't used) → marked Low, _"Best practice, not
  a violation"_. It is a named minimum standard here, not optional.
- **Standard 12** (related items in a list) → marked Low.

If the skill is meant to gate against the Culture Amp checklist, it needs the CA
standards as a severity source, not WCAG SC alone.

### Bonus true positives (real, not planted)

- **No page landmarks** — no `<main>`, `<header>`, `<nav>`. Genuine (1.3.1, 2.4.1);
  outside the 12 but correct.
- **All colour is raw hex, not design tokens** (7 values). Genuine Kaizen rule
  breach, and the more actionable framing of standard 10 in this repo.
- **`aria-labelledby` points at a nonexistent element.** The skill traced
  `GenericModal.tsx:59-87` and found the missing `ModalAccessibleLabel` also
  suppresses `focusOnAccessibleLabel()` and fires `a11yWarn()` — a deeper and more
  accurate mechanism than this key had.
- **Raw `<a>` should be Kaizen `Link`** — confirmed present in the stable barrel
  (`packages/components/src/index.ts:34`).

### Upstream bug found — `focusLockDisabled` is inverted

**Confirmed.** `packages/components/src/Modal/GenericModal/GenericModal.tsx:133`
forwards `focusLock={focusLockDisabled}` with no negation, and `react-focus-on`
defaults `focusLock` to `true`
(`react-focus-on@3.10.2/dist/es5/UI.js:13`). So:

| `focusLockDisabled` | trap    | correct?                                    |
| ------------------- | ------- | ------------------------------------------- |
| omitted             | ON      | yes, but only via the library's own default |
| `true`              | **ON**  | no — asks to disable, stays on              |
| `false`             | **OFF** | no — the only way to disable it             |

Two consequences:

1. **Real Kaizen defect** worth a ticket — the prop does the opposite of its name.
2. **This fixture's standard-7 breach #1 is inert.** `focusLockDisabled` (=true)
   leaves the trap ON, so the intended "focus escapes the modal" defect does not
   actually occur at runtime. Standard 7 is still genuinely breached by the missing
   `ModalAccessibleLabel` (no accessible name, no initial focus). To make the
   planted breach real, the story would need `focusLockDisabled={false}`.

## Housekeeping

Fixture lives on branch `a11y-skill-test-fixture`. No changeset; not for merge.
`eslint` (jsx-a11y) is expected to fail on the story file by design — no inline
`eslint-disable` comments were added, since naming the disabled rules would leak
the answer key into the file under test.
