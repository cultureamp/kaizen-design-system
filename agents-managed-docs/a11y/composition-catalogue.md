# Kaizen Composition Accessibility Catalogue

> **Scope**: Emergent accessibility issues that arise when _composing_ Kaizen components
> together. Single-component issues (missing `alt`, bad colour contrast) are covered by the
> Storybook axe addon. This catalogue focuses on problems that only appear when two or more
> components are combined.
>
> Each pattern documents: components involved, a11y risk, how to detect, and correct composition.

---

## Summary Table

| #   | Pattern                                                            | axe catches?           | Severity |
| --- | ------------------------------------------------------------------ | ---------------------- | -------- |
| 1   | Nested interactive elements in clickable containers                | No                     | High     |
| 2   | Multiple overlapping focus traps                                   | No                     | High     |
| 3   | Heading order collisions across layout components                  | Partial (skips only)   | High     |
| 4   | Duplicate / missing landmarks from multiple layout regions         | Partial (missing main) | Medium   |
| 5   | Static ID collisions when same component renders twice             | Yes (duplicate-id)     | High     |
| 6   | Competing live regions and duplicate announcements                 | No                     | Medium   |
| 7   | Form composition — label, error, and description association       | Partial (label only)   | High     |
| 8   | Tooltip on non-focusable host inside Table or Tile                 | No                     | Medium   |
| 9   | FilterBar with multiple Filter popovers open simultaneously        | Maybe                  | Medium   |
| 10  | Modal containing another overlay (DatePicker / Menu / MultiSelect) | No                     | High     |
| 11  | ProgressStepper rendered more than once on a page                  | Yes (duplicate-id)     | High     |
| 12  | KaizenProvider nested or duplicated                                | No                     | Medium   |

---

## 1. Nested interactive elements in clickable containers

**Components involved:** `TableCard` (clickable `<button>` row), `TableRowCell` (clickable `<a>` cell), `Button`, `Checkbox`, `Menu`/`MenuTrigger`

**A11y risk:** A `<button>` inside another `<button>` is invalid HTML and causes undefined AT
behaviour — screen readers may swallow the inner control, announce it twice, or fail to
activate it. Keyboard users pressing Enter on the row-level button will never reach the
cell-level button via normal navigation.

**How to detect:** axe does not catch button-in-button. Manual: inspect the DOM; open NVDA +
Chrome and Tab through the row. HTML validator (`validator.w3.org`) will flag it.

**Mitigation:**

- If a row is clickable, cell-level actions must be `stopPropagation`-guarded; the row itself
  must not be `<button>` or `<a>` — use `role="row"` on a `<div>` with a dedicated row action
  outside the cells.
- Prefer `forceHoverState` on `TableCard` and move row navigation to a cell with `href` rather
  than wrapping the whole row in an anchor.
- For menus inside a row: use `role="cell"` + `MenuTrigger`/`Menu` pair that is keyboard-reachable
  independently via Tab, not a child of the row's click handler.

---

## 2. Multiple overlapping focus traps

**Components involved:** `GenericModal`, `DatePicker`, `DateRangePicker`, `Filter`,
`FilterMultiSelect`, `MenuV1` — all use `react-focus-on`

**A11y risk:** Each component activates its own `FocusOn` trap when open. If two are
simultaneously open (e.g. a `DatePicker` inside a `Modal`), the outer trap's `returnFocus`
fires before the inner trap is fully closed, sending focus to an unexpected element.
`DatePicker` explicitly sets `returnFocus={false}`, meaning focus is never returned to the
date input when the calendar is dismissed inside a modal — the user is stranded.

**How to detect:** axe does not catch focus-order bugs. Manual: open a Modal containing a
DatePicker. Open the calendar, then press Escape. Verify focus returns to the date input, not
the modal title or page.

**Mitigation:**

- Only one `FocusOn` should be active at a time — outer trap should use `noIsolation={true}`
  or be temporarily disabled when an inner trap activates.
- When `DatePicker` is inside `GenericModal`, pass the modal's `scrollLayerRef` as a `FocusOn`
  shard so the calendar's click-outside handler does not close it when the click lands on the
  modal backdrop.
- Always test `onAfterLeave` — verify focus returns to the correct trigger element.

---

## 3. Heading order collisions across layout components

**Components involved:** `TitleBlock` (hardcoded `<h2>`), `GenericTile` (default `titleTag="h3"`),
`Modal` subcomponents (hardcoded `<h2>`), `GuidanceBlock` (`<h3>`)

**A11y risk:** `TitleBlock` always renders an `<h2>` regardless of where it appears. If a page
has no `<h1>`, screen reader users navigating by heading land on an `<h2>` as the first heading.
When a `Modal` opens it injects another `<h2>` via portal — two sibling `<h2>` elements exist
simultaneously, neither subordinate to an `<h1>`. `GenericTile` uses `titleTag="h3"` by default;
if tiles appear outside a section with an `<h2>`, the heading tree skips a level.

**How to detect:** axe catches "heading levels should only increase by one" if there is an
explicit skip, but does not catch the absence of `<h1>`. Manual: Chrome DevTools Accessibility
Tree → "Headings" view; or `$('h1,h2,h3,h4,h5,h6')` in the console. Storybook axe may miss
portal-injected modal headings.

**Mitigation:**

- Every page using `TitleBlock` must supply a visually-hidden `<h1>` before it, or override
  `TitleBlock`'s heading tag to `h1` (not currently exposed — a design system gap).
- When rendering `GenericTile` in a grid, pass `titleTag="h3"` only if there is an `<h2>`
  ancestor; otherwise use `titleTag="h2"`.
- Modal headings rendered via portal are siblings of page headings — consider `aria-label` on
  `role="dialog"` in addition to `aria-labelledby` to avoid polluting the page heading outline.

---

## 4. Duplicate / missing landmarks from multiple layout regions

**Components involved:** `Collapsible` (renders `role="region"` + `aria-labelledby`),
`TitleBlock`, `Workflow`, `FilterBar`, `Tabs`

**A11y risk:** A page with 10+ `Collapsible` components creates 10+ region landmarks — the AT
landmark tree becomes unusable. `FilterBar` has no landmark; if not placed inside a `<form>`
or `<search>` element, filter controls are unreachable by landmark. `Workflow` wraps content in
plain `<div>` elements — if used as the page-level shell without a `<main>` wrapper, there is
no main landmark at all.

**How to detect:** axe does not flag too many regions (only regions without accessible names).
Manual: NVDA landmark list (Insert+F7). For missing main: axe rule `landmark-one-main` catches this.

**Mitigation:**

- Wrap `Collapsible` components in a single named `<section>` or `<nav>` landmark. Only promote
  a collapsible to landmark status when it is a meaningful page section, not a list item.
- Wrap `FilterBar` in `<search>` (HTML5) or `role="search"` when it filters page content.
- Consumers of `Workflow` must supply an outer `<main>` element.

---

## 5. Static ID collisions when the same component renders twice

**Components involved:** `ProgressStepper` (hardcoded `id="stepper-description"`),
`RichTextEditor > LinkModal > TextField` (hardcoded `id="href"`), `ToastNotificationsList`

**A11y risk:**

- **ProgressStepper:** two instances → `aria-labelledby` on both `<ol>` elements points to
  the same id; browser uses the first, so one stepper announces the wrong step count.
- **LinkModal/TextField:** two `RichTextEditor` instances → two `id="href"` elements; clicking
  the label of one focuses the input of the other.
- **ToastNotificationsList:** guarded by a `document.querySelector` dedup check, but multiple
  `KaizenProvider` mounts each register a `ToastNotificationProvider`, so `useAddToast` calls
  may go to the wrong provider.

**How to detect:** axe rule `duplicate-id` will catch `id="href"` and `id="stepper-description"`
when both components are mounted. Run axe on a page with two `RichTextEditor` instances or two
open `Workflow` components.

**Mitigation:**

- `ProgressStepper` should use `useId()` for the description id — bug tracked in
  candidate-tickets.md #1.
- `LinkModal`'s `TextField` `id="href"` should use `useId()` for correctness (theoretical risk;
  two link modals are never simultaneously open, but still).
- Never nest `KaizenProvider` — one per application root.

---

## 6. Competing live regions and duplicate announcements

**Components involved:** `Button` (`aria-live="polite"` in pending state), `ButtonV1`,
`MultiSelect` (`VisuallyHidden aria-live="polite"` for option count),
`ToastNotificationsList` (`role="status"`), `LoadingSpinner` (`role="status"`)

**A11y risk:** A form submission action can simultaneously trigger: (1) Button pending state →
"Saving…"; (2) MultiSelect option count change → "3 options selected"; (3) ToastNotification
→ "Changes saved". Screen reader queues all three `polite` announcements. On some AT+browser
combinations the queue is flushed rapidly — the user hears a wall of speech.

**How to detect:** axe does not catch competing live regions. Manual: use macOS VoiceOver or
NVDA speech log; trigger a multi-step action that fires several live regions within 500 ms.

**Mitigation:**

- Prefer a single application-level live region (the `ToastNotificationsList` `role="status"`
  container managed by `KaizenProvider`) and funnel all status messages through it.
- Avoid using both a pending `Button` and a `LoadingSpinner` for the same action.
- When `MultiSelect` is inside a form with `Button` pending states, hide the option-count
  `aria-live` region while the form is submitting (`aria-hidden` or unmount).

---

## 7. Form composition — label, error, and description association

**Components involved:** `TextField`, `TextAreaField`, `Select`, `MultiSelect`, `CheckboxField`,
`CheckboxGroup`, `RadioGroup`, `LikertScale`, `FieldMessage`, `FieldGroup`

**A11y risk:**

- `FieldGroup` is a plain `<div>` with no ARIA group semantics. Fields inside are not announced
  as a group to screen readers.
- A `MultiSelect` and `TextField` sharing the same `FieldMessage` error: only the component
  that wires `aria-describedby` to that `FieldMessage`'s id will announce the error.
- `Select` (v3/react-aria) does not expose a `description` prop — manual `aria-describedby`
  wiring is fragile if `Select` uses `useId`-generated ids internally.
- `LikertScale` in a loop: safe if using `useId` per instance; if a consumer passes a static
  `id`, duplicate-id issues emerge.

**How to detect:** axe catches `label` association failures for `<input>` elements. Does not
catch missing `<fieldset>` on grouped fields, or `aria-describedby` pointing to non-existent id.
Manual: in NVDA, Tab into each field and verify the announced name includes the group label.

**Mitigation:**

- Wrap logical field groups in `<fieldset>` + `<legend>` rather than `FieldGroup` when the
  group label is meaningful.
- For cross-field validation, place `FieldMessage` above the group and link via `aria-describedby`
  on every field, or use a `role="alert"` live region so it is announced on insertion.
- Never reuse a `FieldMessage` id across two fields — each field should own its own error element.

---

## 8. Tooltip on a non-focusable host inside a Table or Tile

**Components involved:** `Tooltip` + `TooltipTrigger`, `Focusable`, `Table > TableHeaderRowCell`
(has `tooltipInfo` prop), `GenericTile`

**A11y risk:** `Tooltip` (react-aria-components) requires a focusable trigger to announce its
content on focus/hover. When the trigger is non-interactive (a `<div>` or `<span>`), the
tooltip content is never surfaced to keyboard or screen reader users unless `Focusable` is used
as the wrapper. `TableHeaderRowCell`'s `tooltipInfo` renders via `TooltipV1` (old implementation)
with a different accessibility model.

**How to detect:** axe does not catch mouse-only tooltip text. Manual: Tab to the triggering
element; verify the screen reader announces the tooltip text without moving the mouse.

**Mitigation:**

- Always wrap non-interactive tooltip hosts in `Focusable` from `@kaizen/components` — this
  sets `data-inline-hidden-content` so the `VisuallyHidden` fallback is rendered.
- If the host is already a button or link, use `TooltipTrigger > Button > Tooltip` — the RAC
  `Tooltip` wires `aria-describedby` automatically.
- Do not mix `TooltipV1` (Popper-based) and `Tooltip` (react-aria-based) for the same interaction
  pattern on the same page.

---

## 9. FilterBar with multiple Filter popovers open simultaneously

**Components involved:** `FilterBar`, `Filter`, `FilterSelect`, `FilterMultiSelect`,
`FilterDatePicker`, `FilterDateRangePicker`

**A11y risk:** Each `Filter` popover renders `role="dialog" aria-modal="true"` and its own
`FocusOn` trap. `FilterBar` does not coordinate open state — two filter popovers can be open
at once. Two `aria-modal="true"` dialogs open simultaneously: screen readers that honour
`aria-modal` will shadow one of them. Keyboard users pressing Escape may accidentally close
both if event propagation is not stopped.

**How to detect:** axe may flag multiple `aria-modal="true"` elements open simultaneously.
Manual: use NVDA + Firefox; open two filter popovers; verify the AT only presents the topmost
dialog's content.

**Mitigation:**

- Maintain a single "active filter id" in application state; ensure at most one `isOpen=true`
  across all `Filter` children.
- Rely on the built-in `FilterBarProvider` which manages filter registration — do not bypass it
  by wiring `isOpen` outside the context.

---

## 10. Modal containing another overlay (DatePicker / Menu / MultiSelect)

**Components involved:** `GenericModal` / `ConfirmationModal` / `ContextModal`,
`DatePicker`, `DateRangePicker`, `MultiSelect`, `Menu` / `MenuV1`

**A11y risk:**

- `GenericModal` renders into `document.body` via `createPortal`. `DatePicker`'s calendar
  renders inline in the DOM via `FocusOn`. When the calendar is open inside the modal,
  pressing Escape on the calendar propagates to the modal's `onEscapeKeyup` and closes both.
- `MultiSelect` inside a `Modal` renders its popover inline; `aria-modal="true"` on the
  popover causes some screen readers to treat it as the modal root, making the modal's other
  content unreachable.
- A `Menu` inside a modal: if `GenericModal`'s `focusLockDisabled` is `false` (default),
  the inner overlay may not appear in the AT's reading order because `FocusOn` calls
  `document.body.setAttribute('aria-hidden', ...)` on siblings.

**How to detect:** axe does not catch compound escape propagation or aria-modal stacking
conflicts. Manual: open a modal with a DatePicker; open the calendar; press Escape once — the
modal should stay open, only the calendar should close.

**Mitigation:**

- Prevent Escape key propagation at the inner overlay's handler before it reaches the modal.
- Avoid `aria-modal="true"` on inner popovers inside a `role="dialog"` — use `role="listbox"`
  or `role="menu"` without `aria-modal`.
- Pass `focusLockDisabled={true}` on `GenericModal` only as a last resort; instead, use
  react-aria's `OverlayContainer` for inner overlays which participates in the same stacking
  context as `useModal`.

---

## 11. ProgressStepper rendered more than once on a page

**Components involved:** `Workflow.ProgressStepper`, `ProgressStepper`

**A11y risk:** `ProgressStepper` uses two hardcoded static IDs: `id="stepper-description"` on
the description `<span>` and `aria-labelledby="stepper-description"` on the `<ol>`. Two
instances on the same page means both `<ol>` elements announce step count information from the
first stepper. **Confirmed code-level bug** — the component never uses `useId()`.

Bug location: `packages/components/src/Workflow/subcomponents/Footer/components/ProgressStepper/ProgressStepper.tsx`
lines 59 and 106.

**How to detect:** axe rule `duplicate-id` will flag this when two instances are mounted. Also
detectable via `document.querySelectorAll('#stepper-description').length > 1`.

**Mitigation:**

- Until fixed upstream: render only one `Workflow` per page.
- Fix: replace `id="stepper-description"` with `const descId = useId()` and thread it to both
  the `<ol aria-labelledby>` and `<span id>`. Tracked in candidate-tickets.md #1.

---

## 12. KaizenProvider nested or duplicated

**Components involved:** `KaizenProvider`, `ToastNotificationsList`, `ToastNotificationProvider`

**A11y risk:** `KaizenProvider` is designed for a single root. If nested (e.g. a micro-frontend
inside an app that already has a provider), two `ToastNotificationProvider` contexts are created.
`useAddToast()` inside the inner subtree adds toasts to the inner context; `ToastNotificationsList`
from the inner provider attempts to create `id="toast-notifications-list"` on `document.body`
but the dedup guard prevents a second container. Result: the inner context's toasts are never
rendered to the live-region container — they are added to state but never announced to screen
readers.

**How to detect:** No axe rule covers this. Manual: render an inner `KaizenProvider`; fire
`useAddToast()` from the inner subtree; verify the toast appears and is announced by a screen reader.

**Mitigation:**

- Never nest `KaizenProvider` — one per application shell root.
- If micro-frontends each need their own toast queue, instantiate `ToastNotificationProvider`
  and `ToastNotificationsList` at the micro-frontend shell level _without_ `KaizenProvider`,
  and use a unique container id for each (currently hardcoded — tracked in candidate-tickets.md #1).
- Consider adding a dev-mode warning when `KaizenProvider` detects it is inside another
  `KaizenProvider` via a React context sentinel.

---

_All component file paths verified against `packages/components/src` at the time of writing.
Research context: kaizen-design-system, June 2026._
