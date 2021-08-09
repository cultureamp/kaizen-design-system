import * as React from "react"
import ZenColorGroup, { ColorThemeContext } from "./ZenColorGroup"

const ZenYellow = () => {
  const { color } = React.useContext(ColorThemeContext)
  return <ZenColorGroup colors={color.yellow} />
}

export default ZenYellow
