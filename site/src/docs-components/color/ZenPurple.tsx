import * as React from "react"
import ZenColorGroup, { ColorThemeContext } from "./ZenColorGroup"

const ZenPurple = () => {
  const { color } = React.useContext(ColorThemeContext)
  return <ZenColorGroup colors={color.purple} />
}

export default ZenPurple
