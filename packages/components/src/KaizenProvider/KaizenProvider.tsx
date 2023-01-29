import React from "react"
import { ThemeProvider } from "./ThemeProvider"
import { ThemeManager } from "./ThemeProvider/themeManager"

export interface KaizenProviderProps {
  children: React.ReactNode
  themeManager?: ThemeManager
}

export const KaizenProvider = ({
  children,
  themeManager,
}: KaizenProviderProps): JSX.Element => (
  <ThemeProvider themeManager={themeManager}>{children}</ThemeProvider>
)

KaizenProvider.displayName = "KaizenProvider"
