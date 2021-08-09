import * as React from "react"
import ZenColorGroup, { ColorThemeContext } from "./ZenColorGroup"

const ZenRed = () => {
  const { color } = React.useContext(ColorThemeContext)
  return <ZenColorGroup colors={color.red} />
}

export default ZenRed
