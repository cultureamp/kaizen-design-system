# Structure Analysis Context

## Architecture Overview

The components package follows a feature-based architecture where each component is self-contained in its own directory. Components are organized by their stability level (stable, alpha, next) and export a cohesive public API.

## Directory Structure

- Each component has its own folder (e.g., `Button/`, `Modal/`, `Select/`)
- Components contain their implementation, types, subcomponents, and tests
- `__alpha__/` - Alpha/experimental components not yet stable
- `__next__/` - Next-generation components being developed
- `__libs__/` - Shared internal libraries and utilities
- `__react-aria__/` and `__react-aria-components__/` - React Aria integrations
- `utils/` - Shared utility functions
- `types/` - Shared TypeScript type definitions

## Grouping Recommendations

- Group each component with its subcomponents and related utilities
- Keep compound component parts together (e.g., Modal, Modal.Header, Modal.Body)
- Group React Aria wrappers with their corresponding components
- Utility functions should be grouped by their domain (date utils, string utils, etc.)

## Priority Guidance

1. Main component exports (highest priority)
2. Component props and types
3. Subcomponents and compound component parts
4. Utility functions used by consumers
5. Internal implementation details (lower priority)

## Files to Exclude

- Test files (`*.spec.ts`, `*.spec.tsx`, `__tests__/`)
- Storybook files (`*.stories.tsx`)
- Internal-only utilities not exported publicly
- CSS/SCSS module files (document styling via props instead)
