import React, { useState } from "react"
import { ThemeManager, defaultTheme, Theme } from "../"

export const ThemeContext = React.createContext<Theme>(defaultTheme)

/**
 * Wrap your application in this provider using a ThemeManager, to synchronise it with a react context.
 * This allows child react elements to more easily use theme variables, using the {@link useTheme} hook.
 */
export const ThemeProvider = ({
  themeManager,
  ...props
}: {
  themeManager?: ThemeManager
  children: React.ReactNode
}) => {
  const [themeManagerInstance] = useState(
    () => themeManager || new ThemeManager(defaultTheme)
  )

  const [theme, setTheme] = React.useState<Theme>(
    themeManagerInstance.getCurrentTheme()
  )
  React.useEffect(() => {
    let cancelled = false
    const listener = (newTheme: Theme) => {
      if (!cancelled) setTheme(newTheme)
    }
    themeManagerInstance.addThemeChangeListener(listener)
    return () => {
      cancelled = true
      themeManagerInstance.removeThemeChangeListener(listener)
    }
  }, [])

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
        crossOrigin="crossorigin"
      />
      <link
        rel="preload"
        href="https://d1e7r7b0lb8p4d.cloudfront.net/fonts/inter/inter-demi-bold.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="crossorigin"
      />
      <link
        rel="preload"
        href="https://d1e7r7b0lb8p4d.cloudfront.net/fonts/inter/inter-medium.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="crossorigin"
      />
      <link
        rel="preload"
        href="https://d1e7r7b0lb8p4d.cloudfront.net/fonts/inter/inter-regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="crossorigin"
      />
      <link
        rel="preload"
        href="https://d1e7r7b0lb8p4d.cloudfront.net/fonts/inter/inter-light.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="crossorigin"
      />
      <link
        rel="preload"
        href="https://d1e7r7b0lb8p4d.cloudfront.net/fonts/tiempos/tiempos-headline-bold.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="crossorigin"
      />
    </>
  )
}

export const useTheme = () => React.useContext(ThemeContext)
