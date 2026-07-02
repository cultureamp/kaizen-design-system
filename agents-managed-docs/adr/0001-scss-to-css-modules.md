# ADR 0001: SCSS → CSS Modules Migration

## Status

Accepted

## Context

Component styles were written in `.module.scss`. SCSS variables compile away at build time,
making them unavailable for runtime theming (dark mode, white-labelling). The SCSS build step
added toolchain complexity, and strict CSS parsers (Turbopack) rejected some SCSS features.

## Decision

All component styles migrate from `.module.scss` to `.module.css` using CSS custom properties
for variables. New components are written in plain CSS from the start. No new `.scss` files.

## Consequences

- CSS custom properties are runtime-swappable; consumers can override tokens for theming.
- Eliminates the SCSS build step from the component pipeline.
- Migration is in progress — existing `.module.scss` files are legacy; do not add to them.
- New components must use `.module.css` only.
