import * as React from "react"

const style = { gap: "1rem" }

export const Items = ({ children, ...otherProps }): JSX.Element => (
  <div {...otherProps} style={style} className="flex flex-row flex-wrap">
    {children}
  </div>
)
