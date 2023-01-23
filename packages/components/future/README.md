# Entrypoint: future

This is directory is here to redirect any imports from `@kaizen/components/future` to the correct distribution of compiled code to allow for treeshaking of future components.

More details: [https://github.com/theKashey/multiple-entry-points-example](https://github.com/theKashey/multiple-entry-points-example)

## Contribution

All "future" components are to be added to the `src/__future__` directory.

### What is a "future" component?

These are components which are scheduled to replace an already existing component.

eg. `Table` is being rebuilt and released as a "future" component for consumers to adopt.

```
// Current import
import { Table } from "@kaizen/components"

// Updates to:
import { Table } from "@kaizen/components/future"
```

More details [Kaizen AIO strategy: Old & new components side-by-side](https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/2963439636/Kaizen+all-in-one+strategy#Old-%26-new-components-side-by-side)