---
name: dx-insight-usage-guardrail
description: Checks deps update in widely consumed repos will cause problems or not.
---

## `dx-insights` Usage Guardrail

Use this skill when changing dependencies or APIs in widely consumed repos (`kaizen-design-system`, `unified-home` and shared packages) to check if the change is likely to cause problems.

## Preconditions

- Hotel is installed and configured in the repo
- Hotel is up to date (v0.10.5 or later): `hotel version update`
- DX Insights plugin is enabled: `hotel plugin enable dx-insights`
- You are on the Development VPN because `dx-insights` runs in the dev account

## Workflow

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
   - If you see high-risk consumers (widly used components):
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
