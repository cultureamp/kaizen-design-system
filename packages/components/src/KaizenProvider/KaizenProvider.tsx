import React from "react"
import { IntlConfig, RawIntlProvider } from "react-intl"
import { ThemeProvider, ThemeManager } from "./ThemeProvider"

export interface KaizenProviderProps {
  children: React.ReactNode
  intlConfig: IntlConfig
  themeManager?: ThemeManager
}

export const KaizenProvider = ({
  children,
  intlConfig,
  themeManager,
}: KaizenProviderProps): JSX.Element => (
  <ThemeProvider themeManager={themeManager}>
    <RawIntlProvider value={intlConfig}>{children}</RawIntlProvider>
  </ThemeProvider>
)

KaizenProvider.displayName = "KaizenProvider"
