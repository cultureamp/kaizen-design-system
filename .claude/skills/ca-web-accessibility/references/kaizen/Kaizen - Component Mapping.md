# Kaizen — Component Mapping

In a Culture Amp / Kaizen project (`@kaizen/components`), reuse the Kaizen component instead of building the pattern from scratch. **Most** Kaizen components wrap **React Aria Components (RAC)** (verified: Button, Link, Checkbox, Radio, Tabs, Tooltip, Menu, Table, form fields), which owns their roles, focus management, and keyboard interaction — do **not** re-implement those.

**But not all of them.** The overlay components — `GenericModal`/`ConfirmationModal`/`ContextModal`, `DatePicker`/`DateRangePicker`, `Filter` — use **`react-focus-on`** and **hand-roll** their dialog semantics (a plain div with `role="dialog"`, **no `aria-modal`**, focus trap via `FocusOn`). `MenuV1` is fully hand-rolled. For these, "React Aria has it covered" is false — check the per-row notes and Known Gaps, and when auditing do not assume focus/dialog semantics are handled.

What you still own regardless: correct **accessible names/labels**, correct **heading order and landmarks** around the component, correct **colour via tokens**, and **composition** (see `Kaizen - Composition Accessibility.md`).

What you still own: correct **accessible names/labels**, correct **heading order and landmarks** around the component, correct **colour via tokens**, and **composition** (see `Kaizen - Composition Accessibility.md`).

All imports are from `@kaizen/components` unless noted.

## Mapping table

| Pattern | Kaizen component | Accessibility the component handles | You still supply |
|---|---|---|---|
| Button | `Button` | Role, keyboard activation, pending `aria-live` | Accessible name (label or `aria-label` for icon-only) |
| Link | `Link` | Role, keyboard | Descriptive link text |
| Checkbox | `Checkbox`, `CheckboxField` | Role, checked/indeterminate state, keyboard | Label via `CheckboxField`; grouping via `CheckboxGroup` |
| Checkbox group | `CheckboxGroup` | Group semantics, state | Group label |
| Radio group | `RadioGroup`, `Radio`, `RadioField` | Radiogroup roles, arrow-key navigation, state | Group label |
| Select (single) | `SingleSelect` (canonical) | Listbox roles, keyboard, focus, `aria-expanded` | Label; option content |
| Select (multi) | `MultiSelect` | Listbox roles, keyboard, selection state | Label; watch its live count announcement (composition) |
| Text input | `TextField`, `TextAreaField` | Label/description/error association | Label text, validation state/messages |
| Modal / dialog | `GenericModal`, `ConfirmationModal`, `ContextModal`, `InputEditModal` | Focus trap via **`react-focus-on`** (NOT React Aria); hand-rolled `role="dialog"` on a div; **no `aria-modal`**; `aria-labelledby` → a generated id | **`<ModalAccessibleLabel>` is mandatory** — it supplies the accessible name *and* is the focus target on open (`autoFocus={false}`); omit it and the dialog is unnamed and focus never enters. Heading level (Modal heading is `h2`). Do not set `focusLockDisabled` without reading Known Gaps — it is inverted. |
| Tabs | `Tabs` (+ subcomponents) | Tab roles, arrow-key navigation, `aria-selected`, panel association | Tab labels, panel content |
| Tooltip | `Tooltip`, `TooltipTrigger` | Tooltip role, hover/focus show-hide, keyboard | A **focusable** trigger — wrap non-focusable hosts in `Focusable` (see Composition pattern 8) |
| Table | `Table` | Table roles / grid semantics | Header cells, caption/summary, correct scope |
| Heading | `Heading` | Renders a real heading element | The correct **level** — see Heading semantics below; use `tag` when visual size ≠ semantic level |
| Accordion / disclosure | `Collapsible`, `CollapsibleGroup`, `ExpertAdviceCollapsible` | `aria-expanded`, disclosure keyboard, `role="region"` | Heading structure around it; avoid landmark spam (Composition pattern 4) |
| Notification (inline) | `InlineNotification` | Structure | Intent conveyed by more than colour; icon labelling |
| Notification (global banner) | `GlobalNotification` | Structure | As above |
| Toast | `ToastNotification` via `KaizenProvider` | `role="status"` live-region container | One provider at app root only (Composition pattern 12) |
| Loading | `Loading` / `LoadingSpinner` | `role="status"` | Avoid stacking with other live regions (Composition pattern 6) |
| Progress / workflow steps | `Workflow`, `Workflow.ProgressStepper` | Structure | Do not render `ProgressStepper` twice on one page (Known Gaps — hardcoded ids, KZN-4101) |
| Field grouping | `FieldGroup`, `FieldMessage`, `LabelledMessage` | Message association helpers | `FieldGroup` has **no** group ARIA — wrap in `<fieldset>`/`<legend>` yourself (Known Gaps) |
| Filters | `Filter`, `FilterBar`, `FilterSelect`, `FilterMultiSelect` | Popover dialog per filter via **`react-focus-on`** (not React Aria); each is `aria-modal` | Coordinate open-state — avoid two modal popovers at once (Composition pattern 9); FilterBar has no landmark (Known Gaps) |
| Rich text | `RichTextEditor` | Editor semantics | Watch `LinkModal` id collisions (Known Gaps) |
| Likert | `LikertScale` | Radio-group semantics | Group label |
| Avatar / Badge / Tag / Icon / Illustration / Brand | `Avatar`, `Badge`, `Tag`, `Icon`, `Illustration`, `Brand` | Structure | Text alternatives; decorative vs meaningful distinction |

## Heading semantics — `variant` (visual) vs `tag` (element)

`Heading` has **two independent props**, and confusing them breaks the document outline:

- **`variant`** (required) controls **visual style only**: `display-0`, `composable-header-title`, `heading-1`…`heading-6`.
- **`tag`** (optional) sets the **semantic element**: `h1`–`h6`, `p`, `span`, `div`, `label`, `pre`.

When `tag` is omitted, the element is **inferred from `variant`**:

| variant | inferred element (no `tag`) |
|---|---|
| `display-0`, `composable-header-title`, `heading-1` | `<h1>` |
| `heading-2` | `<h2>` |
| `heading-3` | `<h3>` |
| `heading-4` | `<h4>` |
| `heading-5` | `<h5>` |
| `heading-6` (and unknown) | `<h6>` |

Consequences for accessibility:

- `<Heading variant="heading-1">` **does render a real `<h1>`** — good, but it means **every `heading-1` on the page is an `<h1>`**. Multiple = multiple `<h1>`s / broken outline. Only one belongs at the top level.
- When you want a big *look* but a lower semantic level (or vice-versa), **set `tag` explicitly**: `<Heading variant="heading-1" tag="h2">` (looks like h1, is an h2) or `<Heading variant="heading-3" tag="h1">` (small, but the page's h1).
- **Auditing a consumer:** don't assume "no literal `<h1>` in source" = no h1. Check whether a top-level `Heading variant="heading-1"` (or `tag="h1"`) exists. The real bugs are (a) *no* heading-1/`tag="h1"` anywhere → no h1; (b) *several* → multiple h1s; (c) visual variant chosen without regard to level → skipped levels.

## No Kaizen component — build with semantic HTML

Use the framework-agnostic acceptance-criteria / topic references for these; there is no Kaizen wrapper:

- **List** — semantic `<ul>` / `<ol>` / `<dl>`.
- **Landmark** — raw landmark elements (`<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`) / roles. Kaizen does not provide a `<main>`; you must add page landmarks yourself (Composition pattern 4).
- **Toggletip** — no Kaizen component; build per `Acceptance Criteria - Toggletip.md` (a click-triggered popover announcing into a live region — distinct from `Tooltip`).

## A11y primitives

- **`VisuallyHidden`** — screen-reader-only text (visible label alternatives, live-region text).
- **`Focusable`** — makes a non-interactive host focusable so a `Tooltip` reaches keyboard and screen-reader users.
- **`KaizenProvider`** — single app-root provider hosting the toast live-region. Never nest.

## Version note

Some components ship legacy variants (`ButtonV1`, `TooltipV1`, `MenuV1`, react-select `Select`). Prefer the canonical (unsuffixed / RAC-based) export. `TableHeaderRowCell.tooltipInfo` still uses legacy `TooltipV1` internally — see Known Gaps.
