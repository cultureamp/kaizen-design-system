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
    case "zen":
      return zenTheme
    default:
      return heartTheme
  }
}

export const getInitialTheme = () =>
  themeOfKey(
    window.location.search.match(/(\?|\&)theme=(zen|heart)/)?.[2] ||
    localStorage.getItem(THEME_KEY_STORE_KEY) ||
    "heart"
    // ^This should ideally be `defaultTheme.themeKey` (defaultTheme imported from kaizen/design-tokens)
    // but this has been manually overridden to "heart" to avoid having to wait for that change (which has other factors blocking it)
  )

themeManager.setAndApplyTheme(getInitialTheme())

