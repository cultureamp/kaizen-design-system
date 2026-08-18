---
name: ca-web-accessibility
description: Audit or build accessible web UIs against Culture Amp's 12-point accessibility standard (WCAG 2.2 AA basis), Kaizen-first. Use to review a page, component or repo for accessibility issues and produce a local HTML report, to fix what it finds, or when generating or modifying HTML, CSS, JSX, TSX, React, Vue or Svelte. In Culture Amp / Kaizen projects (@kaizen/components), prefer Kaizen components and design tokens over hand-rolled markup.
compatibility: Designed for Claude Code. Static source analysis only — no browser or test runner required. Kaizen references activate when @kaizen/components is present.
metadata:
  author: culture-amp
  version: "0.1"
---

# Culture Amp web accessibility

> **WIP — KZN-4108.** This skill is under construction on branch `KZN-4108/a11y-skill`.
> The reference layer below is complete and scored; the entry point, topic rules and
> contrast scripts are still to be written. Do not promote to `ca-agent-context` until
> the manifest at the end of this file is clear.

## What is here today

Complete and validated — scored at 20/20 planted breaches and 12/12 standards on run 4:

| Path | Role |
| --- | --- |
| `references/audit/The 12 Standards.md` | The criteria spine. Grade against these, not raw WCAG |
| `references/audit/Audit - Workflow.md` | Audit process, verdict model, finding schema |
| `references/kaizen/Kaizen - Component Mapping.md` | Which Kaizen component satisfies which requirement |
| `references/kaizen/Kaizen - Composition Accessibility.md` | Emergent issues when components combine |
| `references/kaizen/Kaizen - Design Tokens.md` | Token and Tailwind consumption paths |
| `references/kaizen/Kaizen - Known Gaps.md` | Where Kaizen does not deliver what it appears to |
| `assets/audit-report-template.html` | Self-rendering report shell with manual-check tracking |
| `assets/kaizen-palette.json` | Kaizen token values for contrast checking |

Scope of v1 is a **static code sweep**. Standards 2, 5, 7, 10 and 11 cannot be scored `pass`
from source and are reported as `review`; only 7 of 12 are statically decidable. A gate must
key off "no `fail` rows" and treat `review` as non-blocking.

## Still to be written

Universal (non-Kaizen) rules and the entry point. Structure may follow convention; every
sentence must be original — write from `agents-managed-docs/a11y/composition-catalogue.md`
and the Confluence standards checklist, not from any third-party skill.

| To write | Covers |
| --- | --- |
| This file's mode/rule sections | Audit / Fix / Generate mode selection, universal rules, Kaizen-first checks |
| `INDEX.md`, `README.md` | Progressive-disclosure index and install/usage |
| `references/topic/Structure and Semantics.md` | Standards 6, 9, 12 — landmarks, headings, lists, link text |
| `references/topic/Forms.md` | Standards 3, 8 — visible associated labels, placeholder rule |
| `references/topic/Keyboard and Focus.md` | Standards 1, 2, 7 — operability, focus indicators, focus management, 2.4.11 |
| `references/topic/Responsive and Reflow.md` | Standard 11 — 320px reflow, 24×24 targets |
| `references/topic/Live Regions and Status.md` | Composition live-region check |
| `references/topic/Images and Charts.md` | Standard 4 — alt text, charts |
| `references/colour-contrast/Colour Contrast Reference.md` | Standard 10 — thresholds, alpha compositing |
| `scripts/check-colour-contrast.js` | Contrast measurement. Reimplement from the WCAG relative-luminance definitions; add a stdin/argv form so a read-only audit can run it |
| `scripts/composite-colour.js` | Alpha compositing over a backdrop |

Provenance: Culture Amp's own skill. Intopia's public accessibility skill was an influence
on approach; none of its text or code is included. See
`agents-managed-docs/reports/kzn-4108-skill-delivery-plan.md`.
