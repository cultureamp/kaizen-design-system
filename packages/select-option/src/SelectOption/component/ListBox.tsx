import React from "react"
import { useSelectOptionContext } from "../provider/SelectOptionProvider"

export interface ListboxProps {
  children: React.ReactNode
}

export function ListBox(props: ListboxProps): JSX.Element {
  const { isOpen } = useSelectOptionContext()
  return isOpen ? (
    <ul role="listbox" tabIndex={0}>
      {props.children}
    </ul>
  ) : (
    <></>
  )
}
