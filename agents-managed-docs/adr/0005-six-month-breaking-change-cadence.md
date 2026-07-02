# ADR 0005: ~6-Monthly Breaking Change Cadence

## Status

Accepted

## Context

~51 repos consume kaizen. A short cadence would not give all consumers time to migrate
before the next wave of breaking changes. A long cadence causes deprecated code to
accumulate, creating ambiguity about what to use. Culture Amp planning cycles run on
quarterly/half-yearly rhythms.

## Decision

Major breaking releases follow an approximately 6-month cadence: v2 (Sep 2025), v3 (Mar
2026). Deprecated APIs are removed at a major release; the following major is the delete
gate once usage is confirmed zero across the fleet.

## Consequences

- Teams have a stable quarter to absorb migrations between releases.
- Breaking changes must be batched — sporadic majors are not acceptable.
- The fleet-wide blast radius (DX Insights `package_import_jsx_usage`) should be checked
  before each major to confirm deprecated usage has reached zero.
- A v4 target has been referenced (Oct 2025 commit) but not publicly confirmed.
