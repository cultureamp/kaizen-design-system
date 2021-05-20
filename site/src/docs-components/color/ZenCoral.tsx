import * as React from "react"
import ZenColorGroup, { ColorThemeContext } from "./ZenColorGroup"

const ZenCoral = () => {
  const { color } = React.useContext(ColorThemeContext)
  return <ZenColorGroup colors={color.coral} />
}

export default ZenCoral
