import React from "react"
import { ThemeProvider, ThemeManager } from "./ThemeProvider"

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
