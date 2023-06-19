import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import stylesSCSS from "./ExampleComponent.module.scss"

export interface CommonProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children?: string
}

// Placeholder for illustration DO NOT COPY
export const ExampleComponent = ({
  children,
  classNameOverride,
  ...restProps
}: CommonProps): JSX.Element => (
  <div
    className={classnames(
      stylesSCSS.exampleComponent,
      "bg-green-300",
      classNameOverride
    )}
    {...restProps}
  >
    ExampleComponent FUTURE {children} change the world
  </div>
)

ExampleComponent.displayName = "ExampleComponent"
