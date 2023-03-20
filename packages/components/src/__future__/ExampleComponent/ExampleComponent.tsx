import React, { HTMLAttributes } from "react"
import { OverrideClassName } from "~types/OverrideClassName"
import stylesSCSS from "./ExampleComponent.module.scss"

export interface CommonProps
  extends OverrideClassName<HTMLAttributes<HTMLSpanElement>> {
  children?: string
}

// Placeholder for illustration DO NOT COPY
export const ExampleComponent = (props: CommonProps): JSX.Element => (
  <div className={`${stylesSCSS.exampleComponent} bg-green-300`}>
    ExampleComponent FUTURE {props.children}
  </div>
)

ExampleComponent.displayName = "ExampleComponent"
