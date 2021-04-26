import * as React from "react"
import ZenColorGroup, { ColorThemeContext } from "./ZenColorGroup"

const ZenPeach = () => {
  const { color } = React.useContext(ColorThemeContext)
  return <ZenColorGroup colors={color.peach} />
}

export default ZenPeach
