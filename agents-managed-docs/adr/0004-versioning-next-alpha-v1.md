# ADR 0004: Component Versioning Scheme — `__next__` / `__alpha__` / V1 Coexistence

## Status

Accepted

## Context

Components needed a way to coexist at multiple maturity levels while the design system
migrated from many small `@kaizen/*` packages to a single `@kaizen/components`. The earlier
`__future__` namespace was ambiguous; versioned entry points (`v1`, `v2`, `v3`) proved
confusing as the meaning of each number shifted over time.

## Decision

Three tiers, each with a distinct entry point:

| Tier        | Entry point                 | Meaning                                          |
| ----------- | --------------------------- | ------------------------------------------------ |
| `__next__`  | `@kaizen/components/next`   | Stable replacement, landing at next major        |
| `__alpha__` | `@kaizen/components/alpha`  | In active development — **not production-ready** |
| `V1` suffix | `@kaizen/components` (main) | Deprecated; retained for transition window       |

`@kaizen/components/alpha` is **not re-exported from `src/index.ts`**. V1 components are
renamed (e.g. `ButtonV1`) at a major release and deleted at the following major once usage
is confirmed zero.

## Consequences

- Consumers can opt in to next-generation components before a major release.
- Alpha components are explicitly gate-flagged — no accidental production use.
- V1 deletions are batched at major releases, giving consumers ~6 months to migrate.
- The `__future__` and `__rc__` names are retired; old entry points were kept only until v2.0 (Sep 2025).
