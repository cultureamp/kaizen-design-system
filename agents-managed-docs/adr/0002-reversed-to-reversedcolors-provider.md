# ADR 0002: `reversed`/`isReversed` Prop Deprecated → `ReversedColors` Provider

## Status

Accepted

## Context

Dozens of components each carried their own `reversed`/`isReversed` boolean prop and a
matching CSS variant. Any reversed subtree required threading `isReversed={true}` through
every nested component. This produced prop proliferation and brittle composition.

## Decision

Per-component `reversed`/`isReversed` props are deprecated in favour of a
`<ReversedColors isReversed>` context provider that themes an entire React subtree.
The prop was removed as a breaking change in v3 (Mar 2026).

## Consequences

- One provider declaration replaces N per-component props in a reversed subtree.
- Aligns with React Aria's CSS-variable-based theming model.
- `reversed` still present on some components (`TextField`, `TextAreaField`, `SingleSelect`,
  `SearchField`, `Label`) — these are not yet fully migrated; do not use the prop in new code.
- Consumers must adopt the provider before upgrading to v3.

## Future direction

`ReversedColors` is a transitional mechanism, not the end state. The intended direction is
to move away from the provider entirely in favour of **semantic colours** that are designed
to be placed on appropriate coloured backgrounds. Once the semantic token set covers the
on-background cases the provider currently handles, components will consume the correct
semantic colour directly for their context rather than flipping a subtree via
`ReversedColors`.

Implication: treat `ReversedColors` as the current recommended pattern, but do not build new
long-lived abstractions on top of it. New work that only needs correct colour on a coloured
background should prefer semantic tokens where they already exist.
