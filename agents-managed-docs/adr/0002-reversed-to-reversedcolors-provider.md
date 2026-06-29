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
