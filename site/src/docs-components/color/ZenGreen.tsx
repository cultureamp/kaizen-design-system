import * as React from "react"
import ZenColorGroup, { ColorThemeContext } from "./ZenColorGroup"

const ZenGreen = () => {
  const { color } = React.useContext(ColorThemeContext)
  return <ZenColorGroup colors={color.green} />
}

export default ZenGreen
