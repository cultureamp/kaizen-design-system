import React from "react"
import { ThemeProvider, ThemeManager } from "./ThemeProvider"
import { OptionalIntlProvider } from "./OptionalIntlProvider"

export interface KaizenProviderProps {
  children: React.ReactNode
  themeManager?: ThemeManager
  locale?: string
}

export const KaizenProvider = ({
  children,
  themeManager,
  locale = "en",
}: KaizenProviderProps): JSX.Element => (
  <OptionalIntlProvider locale={locale}>
    <ThemeProvider themeManager={themeManager}>{children}</ThemeProvider>
  </OptionalIntlProvider>
)

KaizenProvider.displayName = "KaizenProvider"
