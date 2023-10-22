import React from "react"
import { FontDefinitions } from "./subcomponents/FontDefinitions"
import { OptionalIntlProvider } from "./subcomponents/OptionalIntlProvider"
import {
  ThemeProvider,
  Theme as BaseTheme,
} from "./subcomponents/ThemeProvider"

export type KaizenProviderProps<Theme extends BaseTheme = BaseTheme> = {
  children: React.ReactNode
  theme?: Theme
  locale?: string
}

export const KaizenProvider = ({
  children,
  theme,
  locale = "en",
}: KaizenProviderProps): JSX.Element => (
  <OptionalIntlProvider locale={locale}>
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
      <FontDefinitions />
    </>
  </OptionalIntlProvider>
)

KaizenProvider.displayName = "KaizenProvider"
