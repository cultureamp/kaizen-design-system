import * as React from "react"
import ZenColorGroup, { ColorThemeContext } from "./ZenColorGroup"

const ZenNeutrals = () => {
  const { color } = React.useContext(ColorThemeContext)
  return (
    <ZenColorGroup
      // this order will be reversed before being displayed
      colors={{
        600: color.neutral["600"],
        500: color.neutral["500"],
        400: color.neutral["400"],
        300: color.neutral["300"],
        250: color.neutral["250"],
        200: color.neutral["200"],
        "100 (White)": color.neutral["100"],
      }}
    />
  )
}

export default ZenNeutrals
