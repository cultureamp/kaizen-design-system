# LSP vs. Grep — Practical Guide for kaizen-design-system agents

> Measurements taken on the kaizen-design-system repo, June 2026.
> LSP measurements taken at top-level session where LSP IS available (495 symbols indexed).
> **Availability caveat:** LSP is available to the top-level agent but is NOT automatically
> inherited by spawned sub-agents. Call `ToolSearch` for `hover` or `goToDefinition` to
> confirm availability before relying on LSP; if unavailable, use the grep+Read path below.

---

## Measured token costs

| Scenario                                                             | Grep+Read     | LSP           | Ratio    | Winner            |
| -------------------------------------------------------------------- | ------------- | ------------- | -------- | ----------------- |
| Button: DOM prop forwarding + ref type (deep inheritance trace)      | ~4,300 tokens | ~1,700 tokens | **2.5×** | LSP + reliability |
| FilterButton: required a11y props                                    | ~900 tokens   | ~250 tokens   | **3.5×** | LSP               |
| Select vs SingleSelect vs MultiSelect vs FilterSelect API comparison | ~6,000 tokens | ~1,100 tokens | **5.5×** | LSP               |

**Headline:** LSP wins in two distinct patterns:

- **Single-type hover / documentSymbol** (scenarios b, c): **5–10× cheaper** — one call returns the full prop shape or subcomponent tree without reading implementation files.
- **Deep cross-package inheritance tracing** (scenario a): **~2.5× cheaper** — still meaningful, but the bigger LSP win is _reliability_: `goToDefinition` navigates pnpm hashed paths precisely where grep requires constructing correct patterns for mangled directory names.

---

## Scenario (a) — Button: does it forward DOM props and a ref?

### Grep + Read path (~4,300 tokens, 5 reads + 3 greps)

1. `grep -r "ButtonProps|forwardRef|HTMLButtonElement" packages/components/src/Button --include="*.ts" --include="*.tsx" -l` → 3 files
2. `Read Button.tsx` (~900 tokens): confirmed `forwardRef<HTMLButtonElement>`, spreads `...restProps` onto RAC `<Button>`
3. `Read types.ts` (~260 tokens): confirmed `PendingButtonProps` union
4. Traced `RACButtonProps` into `node_modules`: `ButtonProps extends Omit<AriaButtonProps, …>` → `AriaButtonProps` (~1,450 tokens) → `PressEvents + FocusableProps` (~1,688 tokens)

### LSP path (~1,700 tokens, 1 hover + 3 goToDefinition + 3 targeted Reads)

1. **hover** over `ButtonProps` alias → returned only the import alias (not useful on its own)
2. **goToDefinition** on `RACButtonProps` → jumped to exact file:line in `react-aria-components/dist/types.d.ts:567`; Read ~200 tokens
3. **goToDefinition** on `AriaButtonProps` → `@react-types/button/src/index.d.ts:74`; Read ~300 tokens
4. **goToDefinition** on `PressEvents` + `FocusableProps` → `events.d.ts`; Read ~400 tokens

---

## Scenario (b) — FilterButton: required a11y props

### Grep + Read path (~900 tokens)

1. `ls packages/components/src/Filter/FilterButton/`
2. `Read FilterButton.tsx` (~420 tokens): `aria-haspopup="true"`, `aria-expanded={isOpen}` hardcoded; `label: string` required
3. `Read FilterButtonBase.tsx` (~187 tokens): `FilterButtonBaseProps = OverrideClassName<ButtonHTMLAttributes<HTMLButtonElement>>`

### LSP path (~250 tokens)

1. **documentSymbol** on `FilterButton.tsx` → full component symbol tree in one call: props shape, `aria-haspopup`, `aria-expanded`, `FilterTriggerRef` forwarding wiring — all visible without reading the file
2. **hover** on `FilterButtonBaseProps` → resolved `OverrideClassName<ButtonHTMLAttributes<HTMLButtonElement>>` inline

**Bonus:** `documentSymbol` also surfaced `FilterButtonRemovable`'s additional `onRemove` handler — the grep path only reveals this if you happen to read that file too.

---

## Scenario (c) — Which Select to use?

### Grep + Read path (~6,000 tokens)

Read all four root component files (Select, SingleSelect, MultiSelect, FilterSelect) — 1,000–2,000 tokens each — plus directory listings to find subcomponents.

### LSP path (~1,100 tokens)

1. **workspaceSymbol** "Select" → all 4 exported component symbols with file paths in one call
2. **documentSymbol** on each file → prop type shape + static subcomponent assignments without reading full implementations
3. **hover** on `SingleSelect.Option` → confirmed it's from `./subcomponents`

**Bonus:** `documentSymbol` surfaced `aria-describedby`, `aria-required`, and `aria-labelledby` wiring inline. LSP flagged `IconButton` (from ButtonV1) as `@deprecated` automatically.

---

## Rule of thumb

### Use LSP when:

- **Shape of one or a few types** — `hover` or `documentSymbol` returns the full resolved prop signature without reading the implementation file. 5–10× cheaper than Read.
- **Multi-component API comparison** — `documentSymbol` on each file extracts the public surface. Avoids reading 4× implementation files at 1,500–2,000 tokens each.
- **Symbol location unknown** — `workspaceSymbol "FilterButton"` is faster and more precise than `find | xargs grep -l`, especially for components that don't appear in obvious index files.
- **Cross-package inheritance tracing** — `goToDefinition` navigates pnpm hashed paths to the exact file:line. Grep requires constructing correct patterns for mangled `.pnpm/` directory names.
- **Deprecation / diagnostic signals** — LSP surfaces `@deprecated` markers automatically; grep only finds them if you know to look.

### Grep is genuinely fine when:

- **You have the file path and want a specific string** — `grep -n "aria-haspopup" FilterButton.tsx` is 1 command.
- **The question is about runtime behaviour** — event wiring, CSS class logic, conditional rendering. The implementation body matters; `hover` only shows signatures.
- **Searching for a non-symbol string** — CSS module class names, test IDs, `data-automation-id` values. LSP is symbol-only.
- **Component is tiny** (< ~80 lines, 1 file, no deep inheritance). Read cost is ~150–200 tokens; LSP overhead is comparable.

### Decision tree

```
Is the question about types, prop shapes, or component API surface?
  YES → Is LSP available (ToolSearch confirms hover/documentSymbol)?
          YES → Use LSP: hover for one type, documentSymbol for a component file
          NO  → grep for the file, Read only the export/type section (not the whole impl)
  NO (runtime behaviour / arbitrary string) → grep + Read

Deep inheritance across node_modules?
  Use goToDefinition — reliable path navigation beats grep over pnpm hashed dirs

Comparing 3+ components?
  documentSymbol beats reading full implementation files by 5–10×
```
