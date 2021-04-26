import * as React from "react"
import ZenColorGroup, { ColorThemeContext } from "./ZenColorGroup"

const ZenSeedling = () => {
  const { color } = React.useContext(ColorThemeContext)
  return <ZenColorGroup colors={color.seedling} />
}

export default ZenSeedling
