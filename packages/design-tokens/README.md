# Kaizen Tokens
Design tokens for all platforms.

## About
Design Tokens are the heart of every Design System. The tokens represented here are platform-agnostic (JSON), as this will help us contribute to & facilitate the maintenance of living style guides. This package defines all the option tokens in Kaizen. 

In its current state this package supports Sass and Less variables, generated from a JSON tokens file. 

**Please note** that the helpers in this package are specifically for accessing and using these design tokens. Component-specific helpers are best suited for kaizen-component-library. 

## Installation
```
yarn add @kaizen/design-tokens
```

## Usage
### Sass
```
## Note helper functions are provided
@import "~@kaizen/design-tokens/sass/[color/depth/layout/spacing/typography/helpers]";
```

### Less
```
## Note helper functions are provided
@import "~@kaizen/design-tokens/less/[color/depth/layout/spacing/typography/helpers]";
```

### Javascript 
```
import * as tokens from @kaizen/design-tokens/tokens/[color/depth/layout/spacing/typography]
```

## Where possible, we keep things unitless.
When adding support for another target the transformation should add the appropriate unit to the artefact. For example, converting typography sizes to Sass/Less should add REM. 

### Web 
All values in tokens are represented as rem, em or px. 

    * Use REMs for sizes and spacing (grid).
    * Use EMs for media queries.
    * Use px for borders.
