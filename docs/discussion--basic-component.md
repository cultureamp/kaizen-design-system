# Coding best practices

Clean code should read like prose, and we should not be able to look at a file within a codebase and immediately be able to tell who wrote the code (an indication of inconsistency).

# Suggestions / discussion points

- Components should be self-contained as best as possible
  - This means if we wish to move or delete it, we should not need to search through multiple layers in the tree to do so
  - Docs, enums, styles, tests, types, utils should remain within the same folder as the component
    - Avoid sharing with other components if possible, but otherwise they could sit within the same parents, or if it's more global, then it should be clear and generic

## Directory/File Structure

- Put stories in the same folder as the component as opposed to in a `docs` folder
  - Note: that we have some package config to consider
  - !! PARK THIS; options for naming the files in a particular pattern to exclude?
- `src` folder for the components
  - :)
  - could be easier to automate
- Naming for `.scss` file (`styles.scss` or `Component.scss`)
  `Component.scss`
- Naming for test file (`.test.ts(x)` or `.spec.ts(x)`)
  - .spec
- Death to snapshot tests
  - Better to not have tests (indication that it needs to be backfilled; or if there's no logic then not required)
  - !! PARK; this is testing
- Are `.elm` files still needed? (Probably not?)
  - Nothing new; but if they are pre-existing keep them
  - Any shared styles just duplicate/move to another file to not break them
- Create subcomponents in their own files
  - Keeps the files small and clean
  - ?? How to deal with context?
  - main file only exports 1 component
  - can mock subcomponents
- Separate utils into their own file?
  - Makes unit testing easier (especially if the fn is more complex) and keeps the files smaller
  - utils folder
  - file vs folder; is there a limit where we change?
- Subcomponents do not have subcomponents; they should become a package if they do
- index.ts is just for exports

Given the component `PancakeStack`, the folder structure will follow this:

### Example

```
/* Directory */
packages/
  pancake-stack/
    ?docs/
    src/
      ...see below
    - CHANGELOG.md (auto-generated; not needed in template?)
    - index.ts
    - package.json
    - tsconfig.dist.json
```

```
/* File */
src/
  PancakeStack/
    components/
      - Pancake/ (subcomponent)
        - index.ts
        - Pancake.tsx
        - Pancake.spec.tsx
        - ...
      - AnotherSubcomponent/ (subcomponent)
        - index.ts
        - Pancake.tsx
        - Pancake.spec.tsx
        - ...
    - index.ts
    - PancakeStack.tsx
    - PancakeStack.stories.tsx (OR .mdx)
    - PancakeStack.spec.tsx
    - PancakeStack.scss

    // naming TBD; could be the specific function
    utils/
      - getters.ts (can group similar)
      - functionName.ts
      - functionName.spec.ts
      - another.ts
      - another.spec.ts
      - index.ts

    hooks/
      ...
```

## Component patterns

- Direct export instead of default
  - Default exports can lead to inconsistent imports
  - Default exports actually add an extra line to the compiled code
  - :)
- Use `VFC` (VoidFunctionComponent) as opposed to `FC` (FunctionComponent)
  - Currently `FC` constantly includes `children` as a prop, which means it is less type strict. `VFC` removes this
  - https://spin.atomicobject.com/2022/01/04/think-twice-react-fc/
- Should we destructure `VFC` in the import?
  - CT preference is to keep it as `React.VFC` for clarity of Type origin (since it's short)
  - Check if there's linting?
- Explicit return types
  - Can we lint this for components?
- Type generics where possible (eg. `useState<string>()`) (unless they have a sensible default)
- How to handle deprecation?
  - https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/1582563561/Deprecating+components
- Declare `displayName`; this helps with debugging and possibly testing (otherwise you'll find the component tree will show any child components with just the name `Component`)

### Props

- Extend HTML attributes or child component props (depending on where you plan to spread the props)
- `interface` vs `type` for props
  - Both are similar, but depends on if our intent is more absolute (`type`) 
    or we intend for consumers to extend our components (`interface`)
    - `interface` allows the consumer to create a more narrow scope for the props (`string | undefined` can become `string`, but if you try to override with `number` it will result in `never`)
    - `type` will join the types (`string | undefined` cannot become `string`, and if you try to override with `number` it will become `string | undefined | number`)
    - Changing the type for either will require `Omit`ing the prop and redefining (`string` -> `number`), however you are best to avoid the name clash instead unless absolutely necessary
    - `interface` sounds good
- Destructure props in the `()`
  - !! PARK
  - Doug prefers not to destructure in () to be able to use props object directly
  - CK: destructuring inside can make it clear what the "params" are
- If including `children`, have it as the first destructured prop / top of prop list (CT preference)
  - Seems clearer knowing at a glance
- Order props according to best judgement; try to group them by their context
  - Suggestion: Perhaps required ones first?
- * How many props is too many props? Maybe consider breaking
- Extend native HTML attributes / child component props
  - Always extend something (so there is access for data attributes etc)
- Allow access to `className` (temporarily?)
  - https://cultureamp.slack.com/archives/C0189KBPM4Y/p1644297460990339?thread_ts=1644293810.001909&cid=C0189KBPM4Y
  - we should figure out how we can allow restricted flexibility
  - rename to have `className...DST`
    - sounds condescending??
      - `classNameOverride`?
    - include it as a default
- Prefix boolean props with `is` or `has`
  - Do it moving forward
  - Leave native props
- Prefix function props with `on`
  - Prop `on`
  - `handle` within if need
- Should we set a default value for optional `boolean` props or leave it undefined?
  - When passing the value into functions, without a default value you'll need to make the function also accept `undefined`

### Examples

A basic component will follow this template:

```tsx
// PancakeStack.tsx
import React, { HTMLAttributes } from 'react';
import classnames from 'classnames';
import styles from './styles.scss';

// props extend native HTML attributes
export interface PancakeStackProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode; // declare `children` if you need it; don't rely on FC
  isBooleanProp: boolean; // prefix with `is` or `has`
  isOptionalBooleanProp?: boolean;
  onCustomFunction: () => void; // prefix with `on`
}

// use `VFC` for better type safety
export const PancakeStack: React.VFC<PancakeStackProps> = ({
  children, /* have children as first prop for clarity */
  isBooleanProp,
  isOptionalBooleanProp = false, /* declare default value? */
  onCustomFunction,
  className, /* destructure out of spread props as we want to manipulate it */
  ...props /* spread the rest of the props */
}) => {
  // prefix with `handle` within component when using a function prop
  const handleCustomFunction = () => {
    onCustomFunction();
    return true;
  }

  return (
    <div
      // sorry if this is wrong; not familiar with syntax yet
      className={classnames(styles.pancakeStack, className, {
        [styles.someClass]: isBooleanProp,
      })}
      onSomething={handCustomFunction}
      {...props}
    >
      {children}
      {doSomething(isOptionalBooleanProp) && <SubComponent />}
    </div>
  );
}

// display name for debugging/testing
PancakeStack.displayName = 'PancakeStack';
```

```tsx
// props extend child component props
export interface NewComponentProps extends PancakeStackProps {}
// Note: I think our linting changes this^ to below when there's nothing within the braces
export type NewComponentProps = PancakeStackProps;

export const NewComponent: React.VFC<NewComponentProps> = ({ ...props }) => (
  <PancakeStack {...props} />
)
```

Simple function

```ts
// utils.ts

// Implicit return: string
export const doSomething = (aString: string) => aString;

// Explicit return: boolean
// - Picks up type error to reduce bugs
// - Builds confidence for next engineer
// - Better readability (no need to look through the fn to know what to expect)
export const doSomething2 = (aString: string): boolean => aString;

// Generic function
export const doSomethingGeneric = <TOption>(option: TOption): boolean => typeof option === 'string';
```

## Linting

### Manual fixes

- Disallow usage of `any` (`unknown` is fine if required)
- Disallow/warn usage of `let` for immutability (use built in functions like `map` or `reduce` instead)
- Early returns (may be able to autofix some instances)
  - https://eslint.org/docs/rules/no-else-return
  - Returning in an `else` is redundant
  - Early returns make functions much easier to understand (no need to read until the end to see if the return value might continue to change or not)

### Autofixed

- Semicolons? (CT preference)
  - I find it a little more readable seeing where things "end"
- Order of imports to be a little more strict
- Require parentheses for arrow function params
  - https://eslint.org/docs/rules/arrow-parens
- Short hand for arrow functions with immediate returns
    ```tsx
    // No parentheses or braces
    const Component = () => <div />;

    // Parentheses for multiline
    const Component = () => (
      <div>
        <p />
      </div>
    )

    // Braces when not immediate return
    const Component = () => {
      const doSomething = () => true;
      return <SubComponent onSomething={doSomething} />;
    }
    ```

## Where do these docs live?

I suggest since these are more tied to the codebase, they live in the repo, and perhaps
we can have Confluence link to it (not duplicated; one source of truth is best).




# Next steps

- Dot notations
- How many props on a component are too many?
- How to write Tests
