# Entrypoint: next

This directory is here to redirect any imports from `@kaizen/components/next` to the correct distribution of compiled code to allow for treeshaking of next components.

More details: [https://github.com/theKashey/multiple-entry-points-example](https://github.com/theKashey/multiple-entry-points-example)

## Contribution

All "next" components are to be added to the `src/__next__` directory.

### What is a "next" component?

These are components which are scheduled to replace an already existing component. **It is not** to house unfinished components.

eg. `Table` has been rebuilt and released as a "next" component for consumers to adopt.

```
// Current import which will be deprecated:
import { Table } from "@kaizen/components"

// Consumers adopt future components:
import { Table } from "@kaizen/components/next"
```

Eventually, all next components are moved to the root import.

More details [Kaizen AIO strategy: Old & new components side-by-side](https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/2963439636/Kaizen+all-in-one+strategy#Old-%26-new-components-side-by-side)
