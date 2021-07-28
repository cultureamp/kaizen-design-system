import * as React from "react"
import ZenColorGroup, { ColorThemeContext } from "./ZenColorGroup"

const ZenWhite = () => {
  const { color } = React.useContext(ColorThemeContext)
  return (
    <ZenColorGroup
      colors={{
        White: color.white,
      }}
    />
  )
}

export default ZenWhite
