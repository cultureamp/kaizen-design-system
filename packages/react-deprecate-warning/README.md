# React Deprecate Warning
React Deprecated Warning is a higher order component that warns that a component is deprecated. This works with both deprecated components, and deprecated props.

## Install
`yarn add @kaizen/react-deprecate-warning` 

## Usage

### Deprecate a component
```
withDeprecatedComponent(YourComponent, {
  name: "YourComponent",
  warning: 'This component is deprecated, use ComponentB instead',
})
```

### Deprecate a prop
```
withDeprecatedProps(YourComponent, {
  name: "YourComponent",
  warning: {
    test: "test is deprecated, use anotherProp instead",
  },
})
```
