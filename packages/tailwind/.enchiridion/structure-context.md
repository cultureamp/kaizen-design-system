# Structure Analysis Context

## Architecture Overview

The tailwind package provides Tailwind CSS presets that map Kaizen design tokens to Tailwind's configuration format. It depends on @kaizen/design-tokens and transforms those values into Tailwind-compatible utilities.

## Directory Structure

- `src/` - Source TypeScript files
  - `index.ts` - Main entry point and preset exports
  - `tailwind-presets.ts` - Tailwind preset configuration
  - `kz-spacing.ts` - Kaizen spacing utilities
  - `kz-height.ts` - Kaizen height utilities
- `_docs/` - Documentation files

## Grouping Recommendations

- Group preset configuration with related utilities
- Keep spacing and height utilities together as they serve similar purposes
- Group any theme extension utilities together

## Priority Guidance

1. Main preset exports (highest priority)
2. Spacing and height utilities
3. Configuration helpers
4. Internal utilities (lower priority)

## Files to Exclude

- Test files (`*.spec.ts`)
- Documentation files in `_docs/`
- Configuration files (tsconfig, rollup config)
