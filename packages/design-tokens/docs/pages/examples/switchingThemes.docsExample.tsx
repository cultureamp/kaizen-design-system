import { heartTheme } from "@kaizen/design-tokens"
import { themeManager } from "./themeManager"

themeManager.setAndApplyTheme(heartTheme)

// or make your own modifications
themeManager.setAndApplyTheme({
  ...heartTheme,
  themeKey: "custom",
  spacing: {
    ...heartTheme.spacing,
    md: "1rem",
  },
})
