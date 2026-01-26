# Structure Analysis Context

## Architecture Overview

The design-tokens package generates multiple output formats from a single source of truth. The source tokens are defined in JSON/TypeScript and transformed into Sass, Less, CSS, and JavaScript outputs during the build process.

## Directory Structure

- `src/` - TypeScript source files and token generation logic
- `tokens/` - Source token definitions in JSON format
- `js/` - Generated JavaScript token exports
- `sass/` - Generated Sass variables
- `less/` - Generated Less variables
- `css/` - Generated CSS custom properties
- `bin/` - Build scripts for token generation

## Grouping Recommendations

- Group tokens by category (color, typography, spacing, depth, layout)
- Keep token generation utilities together
- Group format-specific exports (JS exports, Sass mixins, etc.)

## Priority Guidance

1. Public token exports and types (highest priority)
2. Token categories and their values
3. Utility functions for token access
4. Build/generation scripts (lower priority)

## Files to Exclude

- Generated output files (sass/, less/, css/, js/ directories)
- Build scripts in bin/
- Test files
- Configuration files (tsconfig, rollup config)
