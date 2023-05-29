import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import stylesSCSS from "./ExampleComponent.module.css"

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
      "bg-blue-500",
      classNameOverride
    )}
    {...restProps}
  >
    ExampleComponent FUTURE {children}
  </div>
)

ExampleComponent.displayName = "ExampleComponent"
