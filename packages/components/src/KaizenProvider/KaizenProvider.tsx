import React from "react"
import { OptionalIntlProvider } from "./OptionalIntlProvider"
import { SVGProvider } from "./SVGProvider"
import { ThemeProvider, ThemeManager } from "./ThemeProvider"

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
    <ThemeProvider themeManager={themeManager}>
      <SVGProvider>{children}</SVGProvider>
    </ThemeProvider>
  </OptionalIntlProvider>
)

KaizenProvider.displayName = "KaizenProvider"
