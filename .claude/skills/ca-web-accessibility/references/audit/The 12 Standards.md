# The 12 Culture Amp Accessibility Standards

The authoritative criteria for this skill. Culture Amp's agreed **minimum must-haves** — not optional best practice. Source: Confluence "Accessibility standards checklist" (WCAG 2.2 AA basis; some are stricter Culture Amp rules). **Grade against these, not against raw WCAG** — a WCAG-defensible answer can still fail a Culture Amp minimum (the classic miss: judging a hidden-label + placeholder field "named correctly, not a WCAG failure" when standards 3 and 8 both fail it).

The audit must return a **per-standard verdict** (`pass` / `fail` / `na` / `review`), not just a findings list — forcing the question "does this meet minimum standard N?" is what stops a must-have being quietly downgraded.

## How severity derives from these standards

Severity comes from the **standard tier + user impact**, with the WCAG SC as a *citation*, not the ranking source. A breach of a **Minimum standard** is at least **High**. Escalate to **Critical** when it makes a control or content completely unavailable to a class of users, or actively traps/misleads. Only drop to **Medium/Low** when the task stays completable or the item is subsumed by another fix. (Full scale in `SKILL.md`.)

## Tiers

Most standards are **Minimum** (expected everywhere). **Standards 11 and 12** are **Guideline for all products / Minimum for all new-or-rebuilt products** — treat as minimum in new/rebuilt work.

## The standards

| # | Standard | WCAG | Tier | axe | Static confidence |
|---|---|---|---|---|---|
| 1 | All functionality operable with a keyboard | 2.1.1 | Minimum | Partial | Partial |
| 2 | Interactive items have clear focus indicators | 2.4.7, 2.4.11 | Minimum | No | Low (runtime) |
| 3 | Input fields have a **visible** associated label | 3.3.2, 4.1.2 | Minimum | Partial | High |
| 4 | Images have alt text or are hidden from AT | 1.1.1 | Minimum | Partial | High |
| 5 | Page title describes the page | 2.4.2 | Minimum | No | High (static titles) |
| 6 | Heading structure is logical | 1.3.1 | Minimum | Yes* | High in source |
| 7 | Focus is managed | 2.4.3 | Minimum | No | Partial |
| 8 | Placeholder text isn't used (as a label) | 3.3.2, 4.1.2 | Minimum (CA rule) | No | High |
| 9 | Button/link labels make sense in isolation | 1.3.1, 2.4.4 | Minimum | No | Partial |
| 10 | Contrast requirements met | 1.4.3, 1.4.11 | Minimum | Partial | Partial (proxy) |
| 11 | Content works at 320px + target size 24×24 | 1.4.10, 2.5.8 | Guideline all / Min new-rebuild | No | Low–partial |
| 12 | Related items are marked up in a list | 1.3.1 | Guideline all / Min new-rebuild | No | High |

\* Standard 6 is axe-detectable, **but** Kaizen's `docs/utils/global-a11y-rules` disables the `heading-order` rule globally — so it does not fire by default even under render. Static source review is the reliable path here.

## Pass/fail criteria (the sharp edges)

**1 · Keyboard** — every mouse action reachable and operable by keyboard; real `<button>`/`<a href>`, not clickable `<div>`/`<span>`; hidden/disabled content out of the tab order until shown; no duplicate tab stops for one action. *Static:* catch clickable non-interactive elements, `tabindex>0`, missing key handlers. Real tab order/operability → `review`.

**2 · Focus indicators** — visible focus, ≥3:1 contrast, and the focused element **never fully obscured** by sticky headers/launchers/overlays (2.4.11). *Static:* can catch `outline:none` with no replacement; visibility/contrast/obscuring are rendered → default `review`.

**3 · Input labels — a VISIBLE label is required.** Every input needs a **visible** label positioned near it, **and** a matching accessible name. A correct accessible name alone is **not** sufficient: hiding the visible label (Kaizen `secondary`, a visually-hidden label, or `aria-label`-only) **fails standard 3** even though the field is "named". Help text is linked via the description. **Carve-out:** a search field may use a placeholder/search-icon as its visible label *provided it has an accessible name* (Kaizen `SearchField`). Blank `labelText=""` fails. *This is the criterion whose absence caused two runs to clear a hidden-label + placeholder field — do not repeat that.*

**4 · Images** — meaningful images/icons have alt text conveying the meaning (`role="img"` + `aria-label`, or `alt`); decorative/illustrations are hidden from AT (`alt=""`, `aria-hidden`, `role="presentation"`). Kaizen `Icon` requires a `role` prop.

**5 · Page title** — unique, page-describing `<title>`, suffixed `- Culture Amp` (e.g. `Retention insights - Culture Amp`). A bare `Culture Amp` is a fail. In frontend-ops apps use `usePageTitle()` (auto-suffixes); Next.js `<Head><title>`.

**6 · Heading structure** — logical order, no skipped levels, exactly one `h1`. Kaizen `TitleBlock` renders the page `h1` (its `sectionTitle` → `h2`; a `renderSectionTitle` must render an `h2` yourself). So a second `heading-1`/`<h1>` on the page, or content starting above `h2` under a TitleBlock, is a fail.

**7 · Focus managed** — focus moved deliberately on dialog open (into dialog) and close (back to trigger), on element removal/disable, and on invalid submit (to the errored field or an error summary). Toasts use a live region — do **not** move focus to them. *Static:* presence/absence of focus code; whether it actually moves → often `review`.

**8 · No placeholder text (as a label)** — placeholder must not be the only visible label (it disappears on input, poor contrast, unreliable announcement). Use a visible label + description instead. **Same search carve-out as standard 3.** A field relying on `placeholder` for its label fails both 3 and 8.

**9 · Labels in isolation** — buttons/links whose label repeats on the page (e.g. three "View" buttons) must add context via `VisuallyHidden` text; if `aria-label` is used it must **start with the visible text** (label-in-name, and so speech-input users can activate it). Buttons for actions, links for navigation.

**10 · Contrast** — text ≥4.5:1 (large text ≥3:1); icons and meaningful non-text ≥3:1. "Large" = **rendered** 24px+, or 18.66px+ bold — a small `h5`/`h6` still needs 4.5:1. *Static:* run the contrast script on token/hex values as a **proxy**; rendered/theme/composited colour (e.g. a heading landing on a coloured header) can only be confirmed by rendering → note as proxy / `review`.

**11 · 320px + target size** — no 2D scroll and no lost content/functionality at 320px width; interactive targets ≥**24×24 CSS px** (measure the padded hit box, not the glyph) and not crowded. Failures cluster in pagination, icon-button rows, tag `×`, steppers, calendar cells. Kaizen components meet 24×24 — the risk is your density and bespoke controls. Rendered sizes → often `review`.

**12 · Lists** — groups of related items marked up as lists (`<ul>`/`<ol>` + `<li>`, or `<dl>`/`<dt>`/`<dd>`). Exceptions: nested lists, complex/interactive items (use headings), collapsible sections, forms (fieldsets), tables. `<dl>` for label–value pairs.
