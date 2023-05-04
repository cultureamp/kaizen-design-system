---
"@kaizen/date-picker": patch
---

Fix a typescript error by bumping the minimum required @react-stately/datepicker package

Version 3.3.0 of react-stately/datepicker generated a TS issue, which was handled in Kaizen with a @ts-expect-error comment. But newer releases (3.4.0 onwards) don't have the problem, and so no error is found.

Because of a problem with Kaizen packaging accidentally shipping TS source files, consuming projects, which had different versions of this package, got TS errors saying that the "ts-expect-error" was unnecessary.

In this release we have bumped the minimum version for this package and removed the `@ts-expect-error`.