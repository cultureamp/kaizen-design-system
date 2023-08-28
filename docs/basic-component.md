# Basic component recipe

Recipe for creating a basic component.

- [Intro](#intro)
- [Component structure](#component-structure)
  - [Documentation](#documentation)
  - [Subcomponents](#subcomponents)
  - [Hooks and Utils](#hooks-and-utils)
  - [index.ts](#indexts-1)
  - [Component.tsx](#componenttsx)
  - [Styles](#styles)
  - [Tests](#tests)
  - [Types](#types)
- [Component.tsx template](#componenttsx-template)
  - [Props](#props)
  - [The component](#the-component)
  - [Display name](#display-name)

## Intro

All components are to be added to `packages/components`.

To generate a new component or a subcomponent,
run the following command and follow the prompts:
```
yarn plop
```
or run the following command to answer the name prop (replace `NewComponentName` with your component name):
```
yarn plop NewComponentName
```

## Component structure

Given the component `PancakeStack`, the component structure will follow this:

```
/* Component */
src/
  PancakeStack/
    _docs/
      - PancakeStack.mdx
      - PancakeStack.stickersheet.stories.tsx
      - PancakeStack.stories.tsx
    hooks/
      - index.ts
      - useHook.ts
      - useHook.spec.ts
    subcomponents/
      - Pancake/
        - index.ts
        - Pancake.tsx
        - Pancake.module.scss
        - Pancake.spec.tsx
      - Topping/
        - index.ts
        - Topping.tsx
        - Topping.module.scss
        - Topping.spec.tsx
    utils/
      - index.ts
      - groupedFunctions.ts (eg. getters)
      - groupedFunctions.spec.ts
      - functionName.ts
      - functionName.spec.ts
    - _mixins.scss
    - _variables.scss
    - index.ts
    - PancakeStack.tsx
    - PancakeStack.module.scss
    - PancakeStack.spec.tsx
    - types.ts
```

### Documentation

The `_docs/` folder houses Storybook stories and stickersheets, and the directory is excluded from the published package.

### Subcomponents

Subcomponents live in the `subcomponents/` directory and should not have subcomponents of their own. If you are finding that you want subcomponents for your subcomponents, then one (or both) should be a component instead.

Aside from the above, subcomponents should follow the same structure as a normal component.

Subcomponents living within their own directories have the benefits of keeping files small and clean, and allows for mocking for tests.

### Hooks and Utils

Hooks and utils go into their own respective folders, with their filename reflective of either the function name or a collective name based on the functionality of functions within the file.

### index.ts

This file is used only as an entrypoint.
Anything relating to the component (eg. hooks, subcomponents) that are to be exported should be included here.

```ts
// index.ts
export * from "./PancakeStack"
export * from "./Pancake"
export * from "./hooks"
```

### Component.tsx

Component files should be named to match the component name (eg. the Pancake component will be named `Pancake.tsx`).

See [template](#componenttsx-template) for component composition.

### Styles

Style files should named to match the component name (eg. the Pancake component will be named `Pancake.module.scss`) and live in the same directory.

Keep these clean by separating styles for subcomponents in their own respective files.

If you require scss variables or mixins to be shared between the parent and its children, add them to `_variables.scss` or `_mixins.scss` in the parent directory and import the file into the required stylesheets. Note that these do not have `.module` as part of their extension as they should not contain any classes directly used by the component.

### Tests

Test files should be named to match the component/function name (eg. `Pancake.spec.tsx` and `functionName.ts`) and live in the same directory.

We should only write unit and functional tests in these files, and not snapshot tests as they do not have meaningful assertions/expectations.

For visual regression testing, create a stickersheet story in Storybook and send it to Chromatic.

### Types

For any shared/useful TypeScript types that do not make sense to belong in the file it is used, create a `types.ts` file and export the types from `index.ts`.

## Component.tsx template

A basic component will follow this template:

```tsx
// PancakeStack.tsx
import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./PancakeStack.module.scss"

export interface PancakeStackProps extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children: React.ReactNode
  isBooleanProp: boolean
  hasOptionalBooleanProp?: boolean
  onCustomFunction: () => void
}

export const PancakeStack = ({
  children,
  isBooleanProp,
  hasOptionalBooleanProp = false,
  onCustomFunction,
  classNameOverride,
  ...restProps
}: PancakeStackProps): JSX.Element => {
  const [hasSyrup, setHasSyrup] = useState<boolean>(false)

  const handleCustomFunction = (): boolean => {
    onCustomFunction()
    setHasSyrup(!hasSyrup)
    return true
  }

  return (
    <div
      className={classnames(
        styles.pancakeStack,
        classNameOverride,
        isBooleanProp && styles.someClass,
      )}
      onSomething={handleCustomFunction}
      {...restProps}
    >
      {children}
      {doSomething(hasOptionalBooleanProp) && <SubComponent />}
    </div>
  )
}

PancakeStack.displayName = "PancakeStack"
```

### Props

```tsx
import { HTMLAttributes } from "react"
import { OverrideClassName } from "~types/OverrideClassName"

export interface PancakeStackProps extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children: React.ReactNode
  isBooleanProp: boolean
  hasOptionalBooleanProp?: boolean
  onCustomFunction: () => void
}
```

- Create and export an `interface` for your props in the format of `{PascalComponentName}Props`
  - You can restrict a prop's type signature by redeclaring it (eg. changing a prop from `string | undefined` to `string`)
  - If you need to change the type signature of an extended prop, ensure you `Omit` it otherwise it will become `never` (eg. changing a prop from `string | undefined` to `number`)
- Use our custom type `OverrideClassName` to replace `className` with the alias `classNameOverride`
  - The alias allows us to easier track usage (as ideally teams should not need to use this) and allows us to not be a bottleneck if the component does not meet their needs in the interim
  - Previously `classNameAndIHaveSpokenToDST`
- Extend the native attributes of the HTML element of your component

```tsx
// Extending <section>
import { HTMLAttributes } from "react"
export type SectionProps = OverrideClassName<HTMLAttributes<HTMLDivElement>>

// Extending <button>
import { ButtonHTMLAttributes } from "react"
export type ButtonProps = OverrideClassName<ButtonHTMLAttributes<HTMLButtonElement>>
```

- If your component is mainly extending another component, extend the props of that component and spread the props
  - This will prevent the need for updating the consuming component with any new props in the child
  - You don't need to extend HTML attributes as they would come from the child props (this also ensures consistency)

```tsx
export interface NewComponentProps extends PancakeStackProps {}

export const NewComponent = (props: NewComponentProps): JSX.Element => <PancakeStack {...props} />
```

- Declare the `children` prop if you require it
  - Usually it is `React.ReactNode`, however you can customise it to your needs
  - [ReactNode vs ReactElement vs JSX.Element](https://stackoverflow.com/questions/58123398/when-to-use-jsx-element-vs-reactnode-vs-reactelement)
- If you are extending third party props which contain `className`, wrap it in `OverrideClassName` to replace it with `classNameOverride`
- Prefix boolean props with `is` or `has`
- Declare a default value for optional boolean props
  - Unless you specifically have a need to differentiate between `false` and `undefined`, this allows you to have the type safety of only needing to cater for a boolean value in any usages (eg. in a util)
  - Aim to name the prop so that the default value is `false`
    - Consumer experience:
      ```tsx
      // Good - default `false`
      <Component /> // isBoolean={false}
      <Component isBoolean /> // isBoolean={true}

      // Bad - default `true`
      <Component /> // isBoolean={true}
      <Component isBoolean={false} /> // isBoolean={false}
      ```
- Prefix function props with `on`

### The component

```tsx
import React from "react"

export const PancakeStack = ({
  children,
  isBooleanProp,
  hasOptionalBooleanProp = false,
  onCustomFunction,
  classNameOverride,
  ...restProps
}: PancakeStackProps): JSX.Element => {
  const [hasSyrup, setHasSyrup] = useState<boolean>(false)

  const handleCustomFunction = (): boolean => {
    onCustomFunction()
    setHasSyrup(!hasSyrup)
    return true
  }

  return (
    <div
      className={classnames(
        styles.pancakeStack,
        classNameOverride,
        isBooleanProp && styles.someClass,
      )}
      onSomething={handleCustomFunction}
      {...restProps}
    >
      {children}
      {doSomething(hasOptionalBooleanProp) && <SubComponent />}
    </div>
  );
}
```

- Ensure you explicitly state your return type (in most cases it would be `JSX.Element`)
- Destructure your props within the parentheses
  - If appropriate to your use case, you may choose not to destructure your props (eg. you wish to pass the whole object)
- Always be explicit and include the expected generic type (eg. `useState<string>()`)
  - If you don't know what to expect, you can use the `unknown` type
- If you are handling a few extra steps for your prop functions (eg. transforming the params) and don't have another name for your function, use the `handle` prefix in place of the `on` for the prop (eg. `onClick` to `handleClick`)
- Spread the remaining props (the HTML attributes) into your main element

### Display name

```tsx
PancakeStack.displayName = "PancakeStack"
```

The `displayName` is useful for writing tests and debugging.
It gives the component the assigned name within the component tree, so instead of seeing `<Component>` in the tree,
it will show `<PancakeStack>`.
