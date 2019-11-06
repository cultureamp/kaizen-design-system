# Kaizen Tokens
Design tokens for all platforms.

## About
Design Tokens are the heart of every Design System. The tokens represented here are platform-agnostic (JSON), as this will help us contribute to & facilitate the maintenance of living style guides. 

In its current state, this package supports Sass and generates three different outputs: color, typography, helpers.

**Please note** that the helpers in this package are specifically for accessing and using these design tokens. Component-specific helpers are best suited for kaizen-component-library. 

## Installation
```
yarn add @cultureamp/kaizen-tokens
```

## Usage
### Sass
```
## Note helper functions are provided
@import "~@cultureamp/kaizen-design-tokens/lib/sass/[color/depth/layout/spacing/typography/helpers]";
```

### Javascript 
```
@import * as tokens from @cultureamp/kaizen-tokens/tokens/[color/depth/layout/spacing/typography]
```

### Less + others
Coming soon (or eventually) :D 

## Misc

### This is a pixel-free zone
All values in tokens are represented as rem or em.
    * Use REMs for sizes and spacing (grid)
    * Use EMs for media queries.
