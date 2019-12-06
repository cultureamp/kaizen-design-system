import * as React from "react"
import ZenColor from "./ZenColor"

const colorGroupStyles: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridColumnGap: "2%",
  justifyContent: "space-between",
}

const ZenColorGroup = ({ colors }) => (
  <div style={colorGroupStyles}>
    {Object.keys(colors)
      .reverse()
      .map(c => (
        <ZenColor name={c} value={colors[c]} />
      ))}
  </div>
)

export default ZenColorGroup
