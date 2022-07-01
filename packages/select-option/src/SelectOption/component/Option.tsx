import React from "react"

export interface OptionProps {
  children: React.ReactNode
}
export function Option(props: OptionProps): JSX.Element {
  return (
    <li role="option" tabIndex={-1} aria-selected={false}>
      {props.children}
    </li>
  )
}
