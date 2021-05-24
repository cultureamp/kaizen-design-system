import * as React from "react"
import classNames from "classnames"
import { ThemeManager } from "@kaizen/design-tokens"
import { themeSwitcher, getCurrentTheme } from "@cultureamp/theme-switcher"
import styles from "../index.module.scss"

// Polyfill for :focus-visible pseudo-selector
// See: https://github.com/WICG/focus-visible
import "focus-visible"

// Standard base stylesheet used across Culture Amp products
// See: https://github.com/necolas/normalize.css/
import "normalize.css"

// Global styles
import "./globals.module.scss"

// Supported / active face declarations
import "./fonts.module.scss"

// Initialise the ThemeManager, this is a singleton so this should not be redeclared
export const themeManager = new ThemeManager(getCurrentTheme())
themeSwitcher({ themeManager })

export default ({ children }: { children: React.ReactNode }) => children
