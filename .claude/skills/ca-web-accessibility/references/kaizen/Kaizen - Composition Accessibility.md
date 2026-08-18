# Kaizen — Composition Accessibility

Kaizen's single components are accessibility-tested with the Storybook axe addon and kept green. **Composition** — what happens when you combine components — is where accessibility actually breaks, and **axe does not catch most of it**. Consult this file whenever two or more Kaizen components combine.

Source of truth in the design system: `agents-managed-docs/a11y/composition-catalogue.md` (12 patterns). Summarised below with the detection method and the correct composition. "axe" = whether the automated addon catches it.

## The 12 composition patterns

1. **Nested interactive elements in a clickable container** — `TableCard`, `TableRowCell`, `Button`, `Checkbox`, `Menu`/`MenuTrigger`. A button/anchor inside a clickable row/card produces invalid nested-interactive HTML; the inner control gets swallowed or is unreachable. *axe: No · High.* **Fix:** never nest interactive elements; make the row navigable via one primary link and expose row actions separately (e.g. a menu), not by wrapping the whole row in a button.

2. **Multiple overlapping focus traps** — `GenericModal`, `DatePicker`, `DateRangePicker`, `Filter`, `FilterMultiSelect`, `MenuV1` (all use `react-focus-on`). Nested traps mis-fire `returnFocus`; `DatePicker` sets `returnFocus={false}` and can strand focus. *axe: No · High.* **Fix:** avoid stacking trap-owning components; if a date picker or menu must live inside a modal, verify focus returns to the correct trigger on close (see pattern 10).

3. **Heading-order collisions across layout components** — `TitleBlock` (`title` → `h1`, `sectionTitle` → `h2`; `renderSectionTitle` is consumer-rendered and **must** be an `h2`), `GenericTile` (default `titleTag="h3"`), `Modal` (hardcoded `h2`), `GuidanceBlock` (`h3`). Combining them skips levels or produces a second `h1`. *axe: Partial · High.* **Fix:** let `TitleBlock` own the single page `h1`; start everything below it at `h2`/`h3`. Don't add another `h1`. When you pass `renderSectionTitle`, render an `<h2>` yourself (nothing enforces it). Set `Heading`/`titleTag` levels explicitly so the sequence is correct; don't rely on component defaults.

4. **Duplicate or missing landmarks** — `Collapsible` (`role="region"`), `TitleBlock`, `Workflow`, `FilterBar`, `Tabs`. Many regions create landmark spam; `FilterBar` emits no landmark; `Workflow` has no `<main>`. *axe: Partial · Medium.* **Fix:** add the page-level landmarks yourself (`<main>` especially). Give repeated regions distinct accessible names or drop the region role where it adds noise.

5. **Static ID collisions when a component renders twice** — `ProgressStepper` (`id="stepper-description"`), `RichTextEditor > LinkModal > TextField` (`id="href"`), `ToastNotificationsList`. Duplicate ids break `aria-labelledby` / label association. *axe: Yes · High.* **Fix:** don't render two instances of the affected component on one page until fixed upstream (KZN-4101); see Known Gaps.

6. **Competing live regions / duplicate announcements** — `Button` pending (`aria-live="polite"`), `ButtonV1`, `MultiSelect` count, `ToastNotificationsList` (`role="status"`), `LoadingSpinner` (`role="status"`). Several polite regions flush together → a wall of speech. *axe: No · Medium.* **Fix:** minimise simultaneous live regions; don't fire a toast, a pending button, and a spinner for the same action.

7. **Form composition — label / error / description association** — `TextField`, `TextAreaField`, `Select`, `MultiSelect`, `CheckboxField`/`Group`, `RadioGroup`, `LikertScale`, `FieldMessage`, `FieldGroup`. `FieldGroup` has no group ARIA; `aria-describedby` can be shared or broken; `Select` lacks a description prop. *axe: Partial · High.* **Fix:** wrap related fields in `<fieldset>`/`<legend>`; ensure each field's error/description is uniquely associated; don't rely on `FieldGroup` for grouping semantics.

8. **Tooltip on a non-focusable host inside a Table/Tile** — `Tooltip` + `TooltipTrigger`, `Focusable`, `Table > TableHeaderRowCell` (`tooltipInfo`), `GenericTile`. A tooltip on a non-interactive host never reaches keyboard or screen-reader users unless wrapped in `Focusable`; `tooltipInfo` uses legacy `TooltipV1`. *axe: No · Medium.* **Fix:** wrap the host in `Focusable`, or attach the tooltip to an already-focusable element.

9. **FilterBar with multiple Filter popovers open at once** — `FilterBar`, `Filter`, `FilterSelect`, `FilterMultiSelect`, `FilterDatePicker`, `FilterDateRangePicker`. Two `aria-modal="true"` dialogs can be open simultaneously; Escape may close both. *axe: Maybe · Medium.* **Fix:** coordinate so only one filter popover is open at a time.

10. **Modal containing another overlay** — `GenericModal`/`ConfirmationModal`/`ContextModal`, `DatePicker`, `DateRangePicker`, `MultiSelect`, `Menu`/`MenuV1`. Escape propagation closes both; the inner `aria-modal` popover shadows the modal root. *axe: No · High.* **Fix:** prefer inline (non-modal) pickers inside modals; verify one Escape closes only the innermost layer and focus returns correctly.

11. **ProgressStepper rendered more than once** — `Workflow.ProgressStepper`, `ProgressStepper`. Hardcoded `id="stepper-description"` + `aria-labelledby`, no `useId()`. *axe: Yes · High.* **Fix:** only one per page until KZN-4101 lands (see Known Gaps).

12. **KaizenProvider nested or duplicated** — `KaizenProvider`, `ToastNotificationsList`, `ToastNotificationProvider`. A nested provider creates a second toast context whose toasts never render into the live-region container. *axe: No · Medium.* **Fix:** exactly one `KaizenProvider` at the application root.

## How to review a composition

For any screen combining Kaizen components, check in this order:
1. **Outline** — one `h1`, no skipped heading levels (patterns 3, 4).
2. **Landmarks** — a `<main>` exists; no duplicate unnamed regions (pattern 4).
3. **Overlays** — at most one focus trap / modal layer active; Escape and focus-return behave (patterns 2, 9, 10).
4. **Live regions** — not more than one announcing for the same action (pattern 6).
5. **Nested interactives** — no button/link inside a clickable row/card (pattern 1); tooltips on focusable hosts (pattern 8).
6. **Duplicate instances** — no two `ProgressStepper`s / provider duplication / colliding ids (patterns 5, 11, 12).
