---
name: dx-insight-usage-guardrail
description: Checks deps update in widely consumed repos will cause problems or not, and ranks dependency updates by downstream impact for prioritisation.
---

## `dx-insights` Usage Guardrail

Use this skill when changing dependencies or APIs in widely consumed repos (`kaizen-design-system`, `unified-home` and shared packages) to check if the change is likely to cause problems.

## Preconditions

- Hotel is installed and configured in the repo
- Hotel is up to date (v0.10.5 or later): `hotel version update`
- DX Insights plugin is enabled: `hotel plugin enable dx-insights`
- You are on the Development VPN because `dx-insights` runs in the dev account

## Workflow A: Breaking Change Impact Check

When you are about to make a potentially breaking change (e.g. major bump, peer dependency change, API or component rename):

1. Ask DX Insights
   - In your coding agent, run a DX Insights query for the package, component and API you are changing.
   - Phrase the prompt so it can tie usage back to GitHub, for example:
     - "Show me where `@kaizen/components` `Heading` is used across repos"
     - "List repos, branches, and file paths that depends on `@kaizen/components`"
2. Review the DX Insights results table:
   - Look at the table of affected repos, branches, and file paths returned by DX Insights.
   - Pay attention to:
     - Production apps vs internal tools
     - Shared packages vs apps
3. Decide on change:
   - If you see high-risk consumers (widely used components):
     - Prefer a non-breaking or additive change (small dependencies update, deprecation warning, opt-in feature flag) instead of a breaking change
     - Or plan a major release with:
       - Clear migration notes
       - Coordination with affected teams if possible
   - If usage seems low-risk:
     - Proceed with the change but keep an eye on any related issues that may arise after release
4. Surface impact in your PR:
   - In the PR description, paste or summarise the DX Insights table output:
     - Key repos affected
     - Example branches if relevant
     - Representative file paths that may be impacted
   - Call out any especially risky areas so reviewers know where to focus for manual or regression testing.
5. Re-run as needed:
   If you revise your change (broaden its scope), re-run the DX Insights check so the table still reflects the final impact before merge.

## Workflow B: Dependency Update Prioritisation

When deciding **which** dependency updates to tackle first (e.g. during a health week or time-boxed session), use DX Insights to rank updates by downstream impact. This is referenced by the [deps-update-playbook](../deps-update-playbook/SKILL.md#prioritisation-choosing-what-to-update).

1. Gather the list of pending updates
   - Use the deps-update-playbook's `check-dashboard.sh` or review open Renovate PRs.

2. Query consumer counts for each affected package
   - For each package being updated, ask DX Insights:
     - "How many repos depend on `<package-name>`?"
     - "List all consumers of `<package-name>` with repo names and whether they are apps or libraries"
   - Example queries:
     - "Count unique repos that import from `@kaizen/components`"
     - "Show consumer breakdown for `@kaizen/design-tokens` — apps vs shared packages"

3. Build a priority ranking
   - For each pending update, combine:
     - **Consumer count**: more consumers = higher impact
     - **Consumer type**: production apps weigh more than internal tools or dev-only packages
     - **Version gap**: how far behind the current version is (check release notes for cumulative breaking changes)
     - **Security advisories**: any CVEs in the current version jump to the top
     - **Test coverage**: how many test cases exist that exercise the affected package or component? More tests = higher confidence that breakage will be caught during validation, which makes the update safer to attempt. Check for unit tests, integration tests, and Chromatic snapshots that cover the changed surface area.
     - **Safety layers**: does the affected area have multiple layers of protection beyond tests (e.g. TypeScript strict types, Chromatic visual regression, Storybook interaction tests, runtime feature flags)? Updates with more safety layers are lower-risk because even if something slips through, downstream teams are more likely to catch it before it reaches production. Prefer tackling well-guarded updates first — they give you confidence with less manual verification effort.
   - Present this as a ranked table to the human, e.g.:

     | Package | Update  | Consumers | Prod apps | Security | Tests | Safety layers        | Priority |
     | ------- | ------- | --------- | --------- | -------- | ----- | -------------------- | -------- |
     | `pkg-a` | 2.0→3.0 | 42 repos  | 12        | CVE-XXX  | 85    | TS, Chromatic, flags | P0       |
     | `pkg-b` | 1.2→1.3 | 35 repos  | 8         | None     | 40    | TS, Storybook        | P1       |
     | `pkg-c` | 4.0→5.0 | 3 repos   | 0         | None     | 5     | None                 | P3       |

4. Use the ranking to guide work order
   - Follow the triage matrix in the deps-update-playbook to decide what to tackle within the available time.
