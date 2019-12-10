import colorTokens from "@cultureamp/kaizen-design-tokens/tokens/color.json"
import * as React from "react"
import ZenColorGroup from "./ZenColorGroup"

const ZenNeutrals = () => (
  <ZenColorGroup
    // this order will be reversed before being displayed
    colors={{
      Ash: colorTokens.kz.color.ash,
      Stone: colorTokens.kz.color.stone,
      White: colorTokens.kz.color.white,
    }}
  />
)

export default ZenNeutrals
