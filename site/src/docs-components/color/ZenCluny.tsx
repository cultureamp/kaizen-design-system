import * as React from "react"
import ZenColorGroup, { ColorThemeContext } from "./ZenColorGroup"

const ZenCluny = () => {
  const { color } = React.useContext(ColorThemeContext)
  return <ZenColorGroup colors={color.cluny} />
}

export default ZenCluny
