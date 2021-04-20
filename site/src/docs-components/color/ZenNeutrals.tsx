import * as React from "react"
import ZenColorGroup, { ColorThemeContext } from "./ZenColorGroup"

const ZenNeutrals = () => {
  const { color } = React.useContext(ColorThemeContext)
  return (
    <ZenColorGroup
      // this order will be reversed before being displayed
      colors={{
        Slate: color.slate,
        Iron: color.iron,
        Ash: color.ash,
        Stone: color.stone,
        White: color.white,
      }}
    />
  )
}

export default ZenNeutrals
