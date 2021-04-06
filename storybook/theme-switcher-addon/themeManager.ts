/* eslint-disable import/no-extraneous-dependencies */
import {
  defaultTheme,
  heartTheme,
  ThemeManager,
  zenTheme,
} from "@kaizen/design-tokens"
import { THEME_KEY_STORE_KEY } from "./constants"
export const themeOfKey = (themeKey: string) => {
  switch (themeKey) {
    case "zen":
      return zenTheme
    case "heart":
    default:
      return heartTheme
  }
}

export const getInitialTheme = () =>
  themeOfKey(
    window.location.search.match(/(\?|\&)theme=(zen|heart)/)?.[2] ||
      localStorage.getItem(THEME_KEY_STORE_KEY) ||
      defaultTheme.themeKey
  )

export const themeManager = new ThemeManager(getInitialTheme())
