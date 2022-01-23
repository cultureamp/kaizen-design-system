# Note

This is inspiration only (I wrote this for my previous workplace); not currently catered for Culture Amp.

# Generic component recipe

Recipe for creating a component which has [TypeScript generics](https://www.typescriptlang.org/docs/handbook/2/generics.html).

The generic component shares most of its structure with the basic component.

- [Basic component / Folder structure](basic-component.md#folder-structure)
- [Basic component / index.ts](basic-component.md#indexts)
- [Basic component / Display name](basic-component.md#display-name)
- [Component.tsx](#componenttsx)

## Component.tsx

If you require generics for your component, you will need to use a traditional `function` as opposed to
an arrow function as `tsx` will misinterpret the `<T>` as a component.
Technically you could use `<T,>`, but you still wouldn't be able to pass it back into `React.VFC<Props>`
so it still doesn't work.

For clarity, you would probably want to name your generic something helpful to the consumer (eg. `<Topping>`)

```tsx
// PancakeStack.tsx
import React, { HTMLAttributes } from 'react';
import { joinClassNames } from '../../utils';
import styles from './styles.scss';

export type PancakeStackProps<Topping> = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  topping: Topping;
}

export function PancakeStack<Topping>({
  children,
  className,
  topping,
  ...props
}: PancakeStackProps<Topping>): React.ReactElement {
  return (
    <div className={joinClassNames(styles.pancakeStack, className)} {...props}>
      {children} {topping}
    </div>
  );
}

PancakeStack.displayName = 'PancakeStack';
```
