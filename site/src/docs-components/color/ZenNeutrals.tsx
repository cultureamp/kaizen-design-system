import * as React from "react"
import ZenColorGroup, { ColorThemeContext } from "./ZenColorGroup"

const ZenNeutrals = () => {
  const { color } = React.useContext(ColorThemeContext)
  return (
    <ZenColorGroup
      // this order will be reversed before being displayed
      colors={{
        "Neutral-600": color.neutral["600"],
        "Neutral-500": color.neutral["500"],
        "Neutral-400": color.neutral["400"],
        "Neutral-300": color.neutral["300"],
        "Neutral-250": color.neutral["250"],
        "Neutral-200": color.neutral["200"],
        "Neutral-100 (White)": color.neutral["100"],
      }}
    />
  )
}

export default ZenNeutrals
