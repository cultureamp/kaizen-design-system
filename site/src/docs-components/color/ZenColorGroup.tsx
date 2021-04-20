import * as React from "react"
import { heartTheme, Theme } from "@kaizen/design-tokens"
import ZenColor from "./ZenColor"

const colorGroupStyles: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridColumnGap: "2%",
  justifyContent: "space-between",
}

// Use custom theme context as we do not want to write CSS vars to the DOM
export const ColorThemeContext = React.createContext<Theme>(heartTheme)

const ZenColorGroup = ({ colors }) => {
  return (
    <ColorThemeContext.Provider value={heartTheme}>
      <div style={colorGroupStyles}>
        {Object.keys(colors)
          .reverse()
          .map(c => (
            <ZenColor key={colors[c]} name={c} value={colors[c]} />
          ))}
      </div>
    </ColorThemeContext.Provider>
  )
}

export default ZenColorGroup
