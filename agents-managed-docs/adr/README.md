# Architectural Decision Records

Durable architectural decisions with rationale and git provenance.

| #                                                   | Title                                                            | Summary                                                                                                                                                             |
| --------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [0001](0001-scss-to-css-modules.md)                 | SCSS → CSS Modules Migration                                     | All styles migrate from `.module.scss` to `.module.css`; CSS custom properties replace SCSS variables for runtime theming.                                          |
| [0002](0002-reversed-to-reversedcolors-provider.md) | `reversed`/`isReversed` Deprecated → `ReversedColors` Provider   | Per-component reversed props replaced by a single context provider; removed as a breaking change in v3.                                                             |
| [0003](0003-classnameoverride-deprecated-on-rac.md) | `classNameOverride` Deprecated on New RAC Components             | New RAC-based components use CSS custom properties for consumer theming; `classNameOverride` is not added to new components.                                        |
| [0004](0004-versioning-next-alpha-v1.md)            | Component Versioning — `__next__` / `__alpha__` / V1 Coexistence | Three-tier maturity scheme with distinct entry points; alpha is hard-gated from production; V1 components are deleted at the next major after confirmed-zero usage. |
| [0005](0005-six-month-breaking-change-cadence.md)   | ~6-Monthly Breaking Change Cadence                               | Major releases on a ~6-month rhythm to give all ~51 consumer repos time to absorb migrations.                                                                       |

To add a new ADR, copy [template.md](template.md), number it sequentially, and add a row above.
