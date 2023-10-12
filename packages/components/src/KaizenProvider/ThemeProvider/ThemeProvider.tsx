import React, { createContext, useContext } from "react"
import { Theme as BaseTheme } from "@kaizen/design-tokens"
import { defaultTheme } from "./themes"
import { useThemeManager } from "./useThemeManager"

// We set the generic default value to `any` as SelectContext
// is instantiated as a constant which does not accept generics.
type ThemeContextValue<Theme extends BaseTheme = any> = Theme

export const ThemeContext = createContext<ThemeContextValue | null>(null)

/**
 * Wrap your application in this provider using a ThemeManager, to synchronise it with a react context.
 * This allows child react elements to more easily use theme variables, using the {@link useTheme} hook.
 */
export const ThemeProvider = <Theme extends BaseTheme = BaseTheme>({
  theme: userTheme,
  ...props
}: {
  theme?: Theme
  children: React.ReactNode
}): JSX.Element => {
  const { theme } = useThemeManager(userTheme ?? defaultTheme)

  return (
    <>
      <ThemeContext.Provider value={theme}>
        {props.children}
      </ThemeContext.Provider>
      <link
        rel="preload"
        href="https://d1e7r7b0lb8p4d.cloudfront.net/fonts/inter/inter-bold.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="https://d1e7r7b0lb8p4d.cloudfront.net/fonts/inter/inter-demi-bold.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="https://d1e7r7b0lb8p4d.cloudfront.net/fonts/inter/inter-medium.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="https://d1e7r7b0lb8p4d.cloudfront.net/fonts/inter/inter-regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="https://d1e7r7b0lb8p4d.cloudfront.net/fonts/tiempos/tiempos-headline-bold.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
    </>
  )
}

export const useTheme = <
  Theme extends BaseTheme = BaseTheme,
>(): ThemeContextValue<Theme> => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error("useTheme must be used within the ThemeContext.Provider")
  }

  return context
}
