import React from "react"
import { Theme as BaseTheme } from "@kaizen/design-tokens"
import { OptionalIntlProvider } from "./OptionalIntlProvider"
import { ThemeProvider } from "./ThemeProvider"

export type KaizenProviderProps<Theme extends BaseTheme = BaseTheme> = {
  children: React.ReactNode
  theme?: Theme
  locale?: string
}

export const KaizenProvider = (
  { children, theme, locale = "en" }: KaizenProviderProps
): JSX.Element => (
  <OptionalIntlProvider locale={locale}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </OptionalIntlProvider>
)

KaizenProvider.displayName = "KaizenProvider"
