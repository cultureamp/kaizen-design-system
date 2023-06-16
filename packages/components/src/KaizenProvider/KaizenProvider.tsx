import React from "react"
// import { OptionalIntlProvider } from "./OptionalIntlProvider"
import { ThemeProvider, ThemeManager } from "./ThemeProvider"

export interface KaizenProviderProps {
  children: React.ReactNode
  themeManager?: ThemeManager
  // locale?: string
}

export const KaizenProvider = ({
  children,
  themeManager,
}: // locale = "en",
KaizenProviderProps): JSX.Element => (
  // TODO: Add this back in once UH's webpack plugin is capable of
  // merging translation files.
  // <OptionalIntlProvider locale={locale}>
  <ThemeProvider themeManager={themeManager}>{children}</ThemeProvider>
  // </OptionalIntlProvider>
)

KaizenProvider.displayName = "KaizenProvider"
