import colorTokens from "@kaizen/design-tokens/tokens/color.json"
import * as React from "react"
import ZenColorGroup, { ColorThemeContext } from "./ZenColorGroup"

const ZenYuzu = () => {
  const { color } = React.useContext(ColorThemeContext)
  return <ZenColorGroup colors={color.yuzu} />
}

export default ZenYuzu
