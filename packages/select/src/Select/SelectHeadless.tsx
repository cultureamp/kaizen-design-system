import React from "react"
import classnames from "classnames"
import styles from "./Listbox.scss"

export type ListboxVariant = "default" | "filter"

// TODO: decide which third-party headless library to do the heavy lifting of this component.

/*
function Blah() {
  return (
    <>
    <div id="container">
    <button>Click Me</button>
    <ul>
      <li>Number One</li>
      <li>Number Two</li>
    </ul>
    </div>
    <SelectHeadless>
      <SelectHeadless.Trigger>{props => <button {...props}>Click Me</button>}</SelectHeadless.Trigger>
      <SelectHeadless.List>
        <SelectHeadless.ListItem>Number One</SelectHeadless.ListItem>
        <SelectHeadless.ListItem>Number Two</SelectHeadless.ListItem>
      </SelectHeadless.List>
    </SelectHeadless>
    </>
  )
}

- Select
- Menu
- Multi Select
*/

export interface SelectHeadlessProps {
  children: React.ReactNode
  variant?: ListboxVariant
}

const SelectHeadlessRoot: React.FC<SelectHeadlessProps> = props => (
  <div role="listbox" tabIndex={0} className={classnames([styles.listbox])}>
    <ul role="presentation">{props.children}</ul>
  </div>
)
SelectHeadlessRoot.displayName = "SelectHeadless"

const Option: React.FC<SelectHeadlessProps> = props => (
  <li
    role="option"
    tabIndex={0}
    className={classnames([styles.listbox])}
    aria-selected={false}
  >
    {props.children}
  </li>
)
Option.displayName = "SelectHeadlessPropsOption"

// Pattern copied from HeadlessUI: https://github.com/tailwindlabs/headlessui/blob/6253aa52b3801e84331450a651bb41328ffa7239/packages/%40headlessui-react/src/components/listbox/listbox.tsx#L890
export const SelectHeadless = Object.assign(SelectHeadlessRoot, { Option })
