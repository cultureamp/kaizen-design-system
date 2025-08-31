# Entrypoint: libs

This directory is here to redirect any imports from `@kaizen/components/libs` to the correct distribution of compiled code to allow for treeshaking of external libraries like `react-aria`.

These are exported to reduce compatibility issues when using libs within our components.

More details: [https://github.com/theKashey/multiple-entry-points-example](https://github.com/theKashey/multiple-entry-points-example)
