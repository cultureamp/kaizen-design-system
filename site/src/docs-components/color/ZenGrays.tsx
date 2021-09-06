import * as React from "react"
import ZenColorGroup, { ColorThemeContext } from "./ZenColorGroup"

const ZenGrays = () => {
  const { color } = React.useContext(ColorThemeContext)
  return (
    <ZenColorGroup
      // this order will be reversed before being displayed
      colors={color.gray}
    />
  )
}

export default ZenGrays
