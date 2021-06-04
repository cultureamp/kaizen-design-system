import * as React from "react"
import { ThemeManager } from "@kaizen/design-tokens"
import { themeSwitcher, getCurrentTheme } from "@cultureamp/theme-switcher"

import "./polyfils"

// Initialise the ThemeManager, this is a singleton so this should not be redeclared
export const themeManager = new ThemeManager()

export default ({ children }: { children?: React.ReactNode }) => <>{children}</>
