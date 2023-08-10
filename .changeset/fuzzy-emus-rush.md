---
"@kaizen/components": major
---

Export Icon components.

Exports the react-icon-component version of each of our svg files.
For each of our existing raw svg files, users can now import them as a React component from "@kaizen/components".

BREAKING CHANGE: Raw svg file location has moved from `@kaizen/components/icons/<SVG_FILE>` to `@kaizen/components/assets/svgs/icons/<SVG_FILE>` 
BREAKING CHANGE: The SVG component has moved from `@kaizen/components/src/SVG/SVG.tsx` to `@kaizen/components/src/Icons/subComponents/SVG/SVG.tsx`
BREAKING CHANGE: Icon import paths have changed from `import {<ICON_NAME>} from @kaizen/components/SVG/icons/<ICON_NAME>` to `import {<ICON_NAME>} @kaizen/components`
