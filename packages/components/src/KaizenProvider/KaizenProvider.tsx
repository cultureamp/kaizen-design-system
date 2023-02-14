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
  <div className="flex gap-8">
    <ThemeProvider themeManager={themeManager}>{children}</ThemeProvider>
  </div>
)

KaizenProvider.displayName = "KaizenProvider"
