import React from "react"
import classnames from "classnames"
import styles from "./Listbox.scss"

export type ListboxVariant = "default" | "filter"

// TODO: decide which third-party headless library to do the heavy lifting of this component.

export interface ListboxProps {
  children: React.ReactNode
  variant?: ListboxVariant
}

const ListboxRoot: React.FC<ListboxProps> = props => (
  <div role="listbox" tabIndex={0} className={classnames([styles.listbox])}>
    <ul role="presentation">{props.children}</ul>
  </div>
)
ListboxRoot.displayName = "Listbox"

const Option: React.FC<ListboxProps> = props => (
  <li
    role="option"
    tabIndex={0}
    className={classnames([styles.listbox])}
    aria-selected={false}
  >
    {props.children}
  </li>
)
ListboxRoot.displayName = "ListboxOption"

// Pattern copied from HeadlessUI: https://github.com/tailwindlabs/headlessui/blob/6253aa52b3801e84331450a651bb41328ffa7239/packages/%40headlessui-react/src/components/listbox/listbox.tsx#L890
export const Listbox = Object.assign(ListboxRoot, { Option })
