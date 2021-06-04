import * as React from "react"
import { ThemeManager, ThemeProvider, heartTheme } from "@kaizen/design-tokens"
import "./polyfills"

// Initialise the ThemeManager, this is a singleton so this should not be redeclared
export const themeManager = new ThemeManager(heartTheme)

export default ({ children }: { children?: React.ReactNode }) => (
  <ThemeProvider themeManager={themeManager}>{children}</ThemeProvider>
)
