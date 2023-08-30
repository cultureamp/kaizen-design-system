import React from "react"
import { OptionalIntlProvider } from "./OptionalIntlProvider"
import { ThemeProvider, ThemeManager } from "./ThemeProvider"

export type KaizenProviderProps = {
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
