# React Deprecate Warning
React Deprecated Warning is a higher order component that warns that a component is deprecated. This works with both deprecated components, and deprecated props.

## Install
`yarn add @kaizen/react-deprecate-warning` 

## Usage

### Deprecate a component
```
withDeprecatedWarning(YourComponent, {
  deprecatedComponent: 'This component is deprecated, use ComponentB instead',
})
```

### Deprecate a prop
```
withDeprecatedWarning(YourComponent, {
  deprecatedProps: {
    test: "test is deprecated, use anotherProp instead",
  },
})
```
