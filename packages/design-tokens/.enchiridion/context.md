# Documentation Generation Context

## Package Overview

@kaizen/design-tokens provides the foundational design tokens for the Kaizen Design System. These tokens define colors, typography, spacing, depth, and layout values that ensure visual consistency across Culture Amp's products. Tokens are available in multiple formats: JavaScript/TypeScript, Sass, Less, and CSS variables.

## Target Audience

Frontend developers and designers implementing the Kaizen Design System who need to apply consistent visual styling. Users should understand CSS custom properties and may use Sass, Less, or JavaScript depending on their stack.

## Documentation Style

- Show token values and their CSS variable equivalents
- Provide usage examples in different formats (JS, Sass, Less, CSS)
- Explain the token naming conventions
- Include visual examples where applicable (colors, spacing scales)
- Document integration with KaizenProvider for theming

## Key Patterns

- CSS custom properties as the primary delivery mechanism
- Token values exported as JavaScript objects for programmatic access
- Sass and Less variables for legacy stylesheet integration
- Semantic token naming (e.g., `color-gray-100`, `spacing-md`)

## Example Guidelines

- Show how to import and use tokens in each supported format
- Demonstrate the relationship between JS tokens and CSS variables
- Include examples of common use cases (setting colors, applying spacing)
- Show how tokens work with the KaizenProvider theming system
