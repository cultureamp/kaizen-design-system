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
- `src` folder for the components
- Naming for `.scss` file (`styles.scss` or `Component.scss`)
- Naming for test file (`.test.ts(x)` or `.spec.ts(x)`)
- Death to snapshot tests
  - Better to not have tests (indication that it needs to be backfilled; or if there's no logic then not required)
- Are `.elm` files still needed? (Probably not?)
- Create subcomponents in their own files
  - Keeps the files small and clean
- Separate utils into their own file?
  - Makes unit testing easier (especially if the fn is more complex) and keeps the files smaller

Given the component `PancakeStack`, the folder structure will follow this:

### Example

```
/* Directory */
packages/
  pancake-stack/
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
    - index.ts
    - Pancake/ (subcomponent)
      - index.ts
      - Pancake.tsx
      - Pancake.spec.tsx
      - ...
    - PancakeStack.tsx
    - PancakeStack.stories.tsx (OR .mdx)
    - PancakeStack.spec.tsx (OR .test.tsx)
    - styles.scss (OR PancakeStack.scss)

    // naming TBD; could be the specific function
    - utils.ts
    - utils.spec.ts

    // do we need these?
    - PancakeStack.elm
```

## Component patterns

- Direct export instead of default
  - Default exports can lead to inconsistent imports
  - Default exports actually add an extra line to the compiled code
- Use `VFC` (VoidFunctionComponent) as opposed to `FC` (FunctionComponent)
  - Currently `FC` constantly includes `children` as a prop, which means it is less type strict. `VFC` removes this
  - https://spin.atomicobject.com/2022/01/04/think-twice-react-fc/
- Should we destructure `VFC` in the import?
  - CT preference is to keep it as `React.VFC` for clarity of Type origin (since it's short)
- Explicit return types
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
- Destructure props in the `()`
- If including `children`, have it as the first destructured prop (CT preference)
- Order props according to best judgement; try to group them by their context
  - Suggestion: Perhaps required ones first?
- Allow access to `className`
- Prefix boolean props with `is` or `has`
- Prefix function props with `on`
- Should we set a default value for `boolean` props or leave it undefined?
  - When passing the value into functions, without a default value you'll need to make the function also accept `undefined`

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

# Examples

## Folder structure

Given the component `PancakeStack`, the folder structure will follow this:

```
components/
  PancakeStack/
    - index.ts
    - Pancake/ (subcomponent)
      - index.ts
      - Pancake.tsx
      - Pancake.spec.tsx
      - ...
    - PancakeStack.tsx
    - PancakeStack.stories.tsx (OR .mdx)
    - PancakeStack.spec.tsx (OR .test.tsx)
    - styles.scss (OR PancakeStack.scss)

    // naming TBD; could be the specific function
    - utils.ts
    - utils.spec.ts

    // do we need these?
    - PancakeStack.elm
```

## Component patterns

A basic component will follow this template:

```tsx
// PancakeStack.tsx
import React, { HTMLAttributes } from 'react';
import classnames from 'classnames';
import styles from './styles.scss';

// props extend native HTML attributes
export type PancakeStackProps = HTMLAttributes<HTMLDivElement> & {
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
