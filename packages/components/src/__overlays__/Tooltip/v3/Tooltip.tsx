import React, { ReactNode } from "react"

export const Tooltip = ({ children }: { children: ReactNode }): JSX.Element => (
  <div>{children}</div>
)

Tooltip.displayName = "Tooltip"
