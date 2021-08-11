import * as React from "react"
import ZenColorGroup, { ColorThemeContext } from "./ZenColorGroup"

const ZenBlue = () => {
  const { color } = React.useContext(ColorThemeContext)
  return <ZenColorGroup colors={color.blue} />
}

export default ZenBlue
