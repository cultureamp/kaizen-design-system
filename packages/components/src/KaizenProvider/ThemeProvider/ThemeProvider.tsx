import React, {
  Context,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"
import { ThemeManager } from "./ThemeManager"
import { defaultTheme, Theme } from "./themes"

export const ThemeContext: Context<Theme> = createContext<Theme>(defaultTheme)

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
}): JSX.Element => {
  const [themeManagerInstance] = useState<ThemeManager>(
    () => themeManager || new ThemeManager(defaultTheme)
  )

  const [theme, setTheme] = useState<Theme>(
    themeManagerInstance.getCurrentTheme()
  )

  useEffect(() => {
    let cancelled = false
    const listener = (newTheme: Theme): void => {
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

export const useTheme = (): Theme => useContext(ThemeContext)
