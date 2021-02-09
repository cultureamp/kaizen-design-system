// TODO: Resolve design token properly rather than use default
import { defaultTheme } from "@kaizen/design-tokens"
import * as React from "react"
import ZenColorGroup from "./ZenColorGroup"

const ZenNeutrals = () => (
  <ZenColorGroup
    // this order will be reversed before being displayed
    colors={{
      Ash: defaultTheme.color.ash,
      Stone: defaultTheme.color.stone,
      White: defaultTheme.color.white,
    }}
  />
)

export default ZenNeutrals
