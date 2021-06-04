/* eslint-disable import/no-extraneous-dependencies */
import {
  defaultTheme,
  heartTheme,
  zenTheme,
} from "@kaizen/design-tokens"
import { themeManager } from "@kaizen/container"
import { THEME_KEY_STORE_KEY } from "./constants"
export const themeOfKey = (themeKey: string) => {
  switch (themeKey) {
    case "heart":
      return heartTheme
    default:
      return zenTheme
  }
}

export const getInitialTheme = () =>
  themeOfKey(
    window.location.search.match(/(\?|\&)theme=(zen|heart)/)?.[2] ||
    localStorage.getItem(THEME_KEY_STORE_KEY) ||
    defaultTheme.themeKey
  )

themeManager.setAndApplyTheme(getInitialTheme())

