# Code standards

General code standards.

- [Enums and constants](#enums-and-constants)
- [Functions](#functions)

## Enums and constants

Following the naming conventions for [JavaScript](https://google.github.io/styleguide/javascriptguide.xml?showone=Naming#Naming) / [TypeScript](https://www.typescriptlang.org/docs/handbook/enums.html):

- Constant values should be upper snake case (`CONSTANT_VALUES_LIKE_THIS`)
- Enums should be named in singular PascalCase with keys also in PascalCase

```ts
// Example enum with string values
enum Direction {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}
```

## Functions

Use arrow functions with explicit return types.

```ts
// Don't do this!
// Implicit return: string
export const doSomething = (aString: string) => aString

// Explicit return: boolean
// - Picks up type error to reduce bugs
// - Builds confidence for next engineer
// - Better readability (no need to look through the fn to know what to expect)
export const doSomething2 = (aString: string): boolean => aString

// Generic function
export const doSomethingGeneric = <TOption>(option: TOption): boolean => typeof option === "string"
```
