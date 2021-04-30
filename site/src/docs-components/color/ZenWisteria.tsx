import * as React from "react"
import ZenColorGroup, { ColorThemeContext } from "./ZenColorGroup"

const ZenWisteria = () => {
  const { color } = React.useContext(ColorThemeContext)
  return <ZenColorGroup colors={color.wisteria} />
}

export default ZenWisteria
