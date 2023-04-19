import * as React from "react"

const style = {
  display: "inline-grid",
  gridTemplateColumns: "1fr auto",
  justifyContent: "center",
  alignItems: "center",
  border: "solid 1px rgb(244, 244, 245)",
  padding: "10px",
}

export const Row = ({ children, ...otherProps }): JSX.Element => (
  <div
    {...otherProps}
    style={style}
    className="bg-white rounded shadow-sm w-full"
  >
    {children}
  </div>
)
