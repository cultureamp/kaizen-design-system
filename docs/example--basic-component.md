# Note

This is inspiration only (I wrote this for my previous workplace); not currently catered for Culture Amp.

# Basic component recipe

Recipe for creating a basic component.

- [Generate template](#generate-template)
- [Folder structure](#folder-structure)
- [index.ts](#indexts)
- [Component.tsx](#componenttsx)
  - [Props](#props)
  - [The component](#the-component)
  - [Display name](#display-name)

## Generate template

Run `yarn plop {PascalCaseComponentName}` to create the base for your component (eg. `yarn plop PancakeStack`).

## Folder structure

Given the component `PancakeStack`, the folder structure will follow this:

```
components/
  PancakeStack/
    - index.ts
    - PancakeStack.tsx
    - PancakeStack.stories.mdx
    - PancakeStack.test.tsx
    - styles.scss
    - styles.scss.d.ts // This is an auto-generated file
```

## index.ts

This file is used only as an entrypoint.
Anything relating to the component (eg. enums, subcomponents) that are to be exported should be included here.

```ts
// index.ts
export * from './PancakeStack';
export * from './Subcomponent';
export * from './enums';
```

## Component.tsx

A basic component will follow this template:

```tsx
// PancakeStack.tsx
import React, { HTMLAttributes } from 'react';
import { joinClassNames } from '../../utils';
import styles from './styles.scss';

export type PancakeStackProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  customProp: string; // Replace as required
}

export const PancakeStack: React.FC<PancakeStackProps> = ({
  children,
  className,
  customProp,
  ...props
}) => (
  <div className={joinClassNames(styles.pancakeStack, className)} {...props}>
    {children} {customProp}
  </div>
);

PancakeStack.displayName = 'PancakeStack';
```

### Breakdown

#### Props

```tsx
import { HTMLAttributes } from 'react';

export type PancakeStackProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  customProp: string; // Replace as required
}
```

- Create and export a `type` (not `interface`) for your props in the format of `{PascalComponentName}Props`.

- Extend the attributes of the closest HTML element of your component (eg. `<section>` will use `<div>` attributes).

```tsx
// Extending <section>
import { HTMLAttributes } from 'react';
export type SectionProps = HTMLAttributes<HTMLDivElement>;

// Extending <button>
import { ButtonHTMLAttributes } from 'react';
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
```

- Declare the `children` prop if you require it
  - While `React.FC` includes `children` in the current version of `@types/react`, it will be removed in a later 
  version as it isn't type safe for components which shouldn't have `children`
  - We have a custom type `OneOrMoreReactElements<T>` you could import from `src/types` for components which have 
  the intent of only accepting children of a certain type, but it isn't technically supported, so it is more just 
  for readability

#### The component

```tsx
export const PancakeStack: React.FC<PancakeStackProps> = ({
  children,
  className,
  customProp,
  ...props
}) => (
  <div className={joinClassNames(styles.pancakeStack, className)} {...props}>
    {children} {customProp}
  </div>
);
```

- Write and export a `React.FunctionComponent (React.FC)` and destructure your props
- List `children` as your first prop if you are using it
  - This makes it clearer at a glance if you are using it
- Declare `className` in your props
  - As we will be merging any consumer classNames with base ones, we cannot include it in the spread props, otherwise 
  it will override our styles
- Spread the remaining props (the HTML attributes) into your element

#### Display name

```tsx
PancakeStack.displayName = 'PancakeStack';
```

The `displayName` is useful for writing tests and debugging.
It gives the component the assigned name within the component tree, so instead of seeing `<Component>` in the tree,
it will show `<PancakeStack>`.
