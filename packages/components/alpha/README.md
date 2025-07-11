# Entrypoint: alpha

This directory is here to redirect any imports from `@kaizen/components/alpha` to the correct distribution of compiled code to allow for treeshaking of alpha components.

More details: [https://github.com/theKashey/multiple-entry-points-example](https://github.com/theKashey/multiple-entry-points-example)

## Contribution

All "alpha" components are to be added to the `src/__alpha__` directory.

### What is an "alpha" component?

These components are in development phase and not yet ready for use. Imports from this entry point should not be used in production.

eg. `SingleSelect` will be built in `alpha`, you can test it and try it out here, but it won't be ready for consumers to adopt until it moved to `next` or root import.

```
// How to test an alpha component
import { SingleSelect } from "@kaizen/components/alpha"

// Consumers can only adopt it when it moves to next or the root
import { SingleSelect } from "@kaizen/components/next"
import { SingleSelect } from "@kaizen/components"
```

Eventually, all alpha components are moved to either `next` or root import.

More details [Kaizen tech vision & strategy](https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/4630021426/2.+Create+a+predictable+release+and+deprecation+cycle#Solutions)
