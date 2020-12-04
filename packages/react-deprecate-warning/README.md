# React Deprecate Warning
React Deprecated Warning is a higher order component that warns that a component is deprecated. This works with both deprecated components, and deprecated props.

## Install
`yarn add @kaizen/react-deprecate-warning` 

## Usage

### Deprecate a component
```
withDeprecatedComponent(YourComponent, {
  warning: 'This component is deprecated, use ComponentB instead',
})
```

### Deprecate a prop
```
withDeprecatedProp(YourComponent, {
  warning: {
    test: "test is deprecated, use anotherProp instead",
  },
})
```

### Deprecate values within a prop
```
withDeprecatedProp(YourComponent, {
  warning: {
    variant: [
      {
        key: "original",
        warning: "original is deprecated, use prominent instead",
      },
      {
        key: "zen",
        warning: "zen is deprecated, use default instead",
      },
    ],
  },
})

<YourComponent variant="default"> // fine, no warning
<YourComponent variant="original"> // warning, logs "original is deprecated, use prominent instead"
```


