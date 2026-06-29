# RAC & RA Foundations — kaizen-design-system

Reference for the React Aria Components (RAC) and React Aria (RA) layer that Kaizen
components are built on. This is stable reference material, not a proposal.

---

## Dependency versions (packages/components/package.json)

| Package                      | Version    |
| ---------------------------- | ---------- |
| `react-aria-components`      | `^1.10.1`  |
| `react-aria`                 | `^3.41.1`  |
| `@react-aria/button`         | `^3.13.3`  |
| `@react-aria/datepicker`     | `^3.14.5`  |
| `@react-aria/focus`          | `^3.20.5`  |
| `@react-aria/i18n`           | `^3.12.10` |
| `@react-aria/listbox`        | `^3.14.6`  |
| `@react-aria/menu`           | `^3.18.5`  |
| `@react-aria/overlays`       | `^3.27.3`  |
| `@react-aria/select`         | `^3.15.7`  |
| `@react-aria/utils`          | `^3.29.1`  |
| `@react-stately/collections` | `^3.12.5`  |
| `@react-stately/combobox`    | `^3.11.1`  |
| `@react-stately/datepicker`  | `^3.14.2`  |
| `@react-stately/list`        | `^3.12.3`  |
| `@react-stately/menu`        | `^3.9.5`   |
| `@react-stately/select`      | `^3.6.14`  |
| `@react-types/shared`        | `^3.30.0`  |

---

## Layering mental model

```
┌─────────────────────────────────────────────────────┐
│  Kaizen component (public API)                       │
│  e.g. <Button>, <Menu>, <Tabs>, <Tooltip>            │
│  - Adds Kaizen visual tokens via CSS modules         │
│  - Narrows or renames props for design-system needs  │
│  - Omits props that conflict with Kaizen guidelines  │
│  - Forwards ref to the underlying DOM element        │
├─────────────────────────────────────────────────────┤
│  RAC primitive (react-aria-components)               │
│  e.g. <Button>, <Menu>, <Tabs>, <Tooltip>            │
│  - Wires aria roles/attributes onto the DOM element  │
│  - Owns focus management and keyboard navigation     │
│  - Exposes render props (isHovered, isPressed, …)    │
│  - Re-exports from __react-aria-components__/        │
├─────────────────────────────────────────────────────┤
│  RA hooks + stately (@react-aria/*, @react-stately/*)│
│  e.g. useSelect, useSelectState, useButton,          │
│       useFocusable                                   │
│  - Lower-level: explicit state object + DOM props    │
│  - Used when a component needs custom DOM structure  │
│  - Re-exported from __react-aria__/                  │
└─────────────────────────────────────────────────────┘
```

Two distinct integration styles co-exist in the codebase:

**Style A — RAC wrapper (most modern components):** The Kaizen component renders a RAC
primitive directly, spreading `...restProps` through so all RAC props pass to the underlying
element. Used by: Button, Link, LinkButton, Menu (and subcomponents), Tabs, Tooltip.

**Style B — RA hooks (older/lower-level components):** The Kaizen component constructs state
manually via a `use*State` hook and then calls the matching `use*` hook to get DOM props.
More layout freedom, more boilerplate. Used by: SingleSelect (stable), alpha SingleSelect.

Both styles re-export their RA/RAC dependency via internal barrel files:

- `src/__react-aria-components__/index.ts` → `export * from 'react-aria-components'`
- `src/__react-aria__/index.ts` → `export * from 'react-aria'`

---

## Common props/behaviours an agent should expect

### aria-\* passthrough

All RAC-based components spread `...restProps` onto the RAC primitive, so any `aria-label`,
`aria-describedby`, `aria-labelledby`, etc. passed by the consumer reaches the underlying DOM
element without any extra plumbing.

### ref forwarding

Every RAC-based Kaizen component wraps its export in `React.forwardRef` and passes `ref` to
the RAC primitive. Consumers can attach refs to the DOM node directly (e.g. `HTMLButtonElement`
for Button, `HTMLAnchorElement` for Link, `HTMLDivElement` for Menu).

### Render props / render children (RAC style)

RAC primitives accept both plain `ReactNode` children and a **render prop** `(state) => ReactNode`.
Kaizen components handle both forms:

```tsx
// In Button.tsx
{
  ;(racStateProps) => {
    const childIsFunction = typeof children === 'function'
    return childIsFunction ? children(racStateProps) : children
  }
}
```

State flags available: `isHovered`, `isPressed`, `isFocused`, `isFocusVisible`, `isDisabled`,
`isPending` (Button), `isSelected`/`isExpanded` (Tab), `placement` (Tooltip). Use these to
drive conditional styling in the consumer without any extra state management.

### Controlled vs uncontrolled

RAC follows the React convention: uncontrolled by default (component manages state internally),
controlled when you pass `selectedKey`/`isOpen`/`defaultSelectedKey`. Kaizen passes these
through unchanged; check individual component prop types for which keys are surfaced.

### Built-in focus management + keyboard navigation

Handled entirely by RAC primitives:

- **Roving tabindex** on TabList, Menu, ListBox — only one child in the set is in the tab
  order at a time; arrow keys move focus.
- **Overlay focus trapping** on MenuPopover / Tooltip overlays.
- **Focus restoration** when an overlay closes.
- **Type-ahead** in Menu and ListBox.

Kaizen components do not add custom focus logic on top of RAC; they rely on RAC's implementation.

### slots

RAC uses a context-based slot system. Some Kaizen components re-export the RAC context to
allow advanced composition (e.g. `Tooltip.tsx` re-exports `TooltipContext`). When building
composite components, use the exported context rather than reaching into internals.

### mergeClassNames utility

Because RAC's `className` prop can be a function `(state) => string`, Kaizen ships
`mergeClassNames(…classNames)` which returns a plain string when no function is present and
a function `(state) => string` when one is. Always use this helper when combining a RAC
`className` prop with extra class values — never concatenate strings directly.

---

## Which components use RA hooks (not RAC primitives)

| Component                                             | RA hooks used                                                        |
| ----------------------------------------------------- | -------------------------------------------------------------------- |
| `SingleSelect` (stable, `src/SingleSelect/`)          | `useSelect`, `useButton`, `useSelectState` (stately), `HiddenSelect` |
| `SingleSelect` (alpha, `src/__alpha__/SingleSelect/`) | `useSelect`, `useSelectState`                                        |
| `Select`                                              | `useButton` (for ClearIndicator only; wraps react-select otherwise)  |
| `Focusable`                                           | `useFocusable`                                                       |
| `Filter/FilterMultiSelect`                            | `useMenuTriggerState` (stately), `useMenuTrigger`, `useListState`    |

**Use the stable `SingleSelect` (`src/SingleSelect/`) for all production work.** The
`__alpha__/SingleSelect/` is the direction of travel toward RAC primitives but was explicitly
split off as not production-ready (Sep 2025). The `__alpha__` prefix is a hard gate, not a
preview — do not adopt alpha components unless explicitly instructed.

---

## Worked examples

### 1. Button

**RA/RAC foundation:** `Button` from `react-aria-components` (RAC primitive wrapping `<button>`).
Handles `isDisabled`, `isPending`, keyboard activation, aria role.

**Kaizen API on top:**

```tsx
// src/Button/Button.tsx
export type ButtonProps = ButtonUIProps & // variant, size, icon, iconPosition, etc.
  PendingButtonProps & // isPending, pendingLabel, hasHiddenPendingLabel
  Omit<RACButtonProps, 'children'> & {
    // all RAC props pass through
    children: RACButtonProps['children'] // render prop or ReactNode
  }
```

- Kaizen adds: `variant`, `size`, `icon`, `iconPosition`, `isFullWidth`, `hasHiddenLabel`.
- The `isPending` state from RAC drives a visually hidden `<span aria-live="polite">` for
  screen reader announcements.

### 2. Menu

**RA/RAC foundation:** Four RAC primitives compose the full menu pattern:
`MenuTrigger`, `Button` (Kaizen), `MenuPopover → Popover`, `Menu → RACMenu`, `MenuItem → RACMenuItem`.

```tsx
// MenuProps omits selection-related props — Kaizen's Menu is action-only, not a listbox.
export type MenuProps = Omit<
  RACMenuProps<HTMLDivElement>,
  'selectionMode' | 'disallowEmptySelection' | 'selectedKeys' | 'defaultSelectedKeys'
>

// MenuItem adds an optional icon slot
export type MenuItemProps = RACMenuItemProps & { icon?: ReactNode }
```

Typical usage:

```tsx
<MenuTrigger>
  <Button>Open</Button>
  <MenuPopover>
    <Menu onAction={handleAction}>
      <MenuItem id="copy">Copy</MenuItem>
      <MenuItem id="delete" icon={<TrashIcon />}>
        Delete
      </MenuItem>
    </Menu>
  </MenuPopover>
</MenuTrigger>
```

### 3. Tabs

**RA/RAC foundation:** `Tabs`, `TabList`, `Tab`, `TabPanel` from `react-aria-components`.
RAC handles ARIA `tablist`/`tab`/`tabpanel` roles, arrow-key navigation, and
controlled/uncontrolled `selectedKey`.

```tsx
// Tabs: strips orientation (Kaizen only supports horizontal)
export type TabsProps = Omit<RACTabsProps, 'orientation'>

// Tab: strips link-related props to comply with WAI-ARIA tabs pattern
export type TabProps = { badge?: string } & Omit<
  RACTabProps,
  'href' | 'hrefLang' | 'target' | 'rel' | 'download' | 'ping' | 'referrerPolicy'
>
```

The `Tab` component uses RAC render props to drive `Badge` variant:

```tsx
<RACTab data-kz-tab {...tabProps}>
  {({ isSelected, isFocusVisible, isHovered }) => (
    <>
      {children}
      {badge && (
        <Badge variant={isSelected || isFocusVisible || isHovered ? 'active' : 'default'}>
          {badge}
        </Badge>
      )}
    </>
  )}
</RACTab>
```
