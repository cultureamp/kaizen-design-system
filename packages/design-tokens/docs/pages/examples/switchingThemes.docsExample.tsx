import { heartTheme, zenTheme } from "@kaizen/design-tokens"
import { themeManager } from "./themeManager"

themeManager.setAndApplyTheme(heartTheme)
// or
themeManager.setAndApplyTheme(zenTheme)
// or make your own modifications
themeManager.setAndApplyTheme({
  ...zenTheme,
  themeKey: "custom",
  spacing: {
    ...zenTheme.spacing,
    md: "1rem",
  },
})
