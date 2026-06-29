# ADR 0003: `classNameOverride` Deprecated on New RAC Components

## Status

Accepted

## Context

`classNameOverride` (type `OverrideClassName<T>`) was introduced to make consumer style
overrides explicit. RAC components manage `className` internally via slots; allowing
arbitrary consumer classNames on top of RAC's slot system produces unpredictable CSS
specificity and undermines the component's accessibility contract.

## Decision

New components built on React Aria Components (RAC) do not accept `classNameOverride`.
Consumer-controlled theming on new components uses CSS custom properties instead.
Existing V1/current components retain the prop for backwards compatibility.

## Consequences

- `OverrideClassName` type still exists and is used by ~60+ existing components.
- The type has **no `@deprecated` JSDoc** today — a gap tracked in candidate-tickets.md #3.
  IDE call-site signals are absent until that is fixed.
- New `__alpha__` and `__next__` components must not accept `classNameOverride`.
- Theming interface for new components is CSS custom properties only.
