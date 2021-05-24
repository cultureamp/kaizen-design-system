/* eslint import/no-extraneous-dependencies: 0 */
import React from "react"
import { addParameters } from "@storybook/react"
import { addons } from "@storybook/addons"
import KaizenContainer from "@kaizen/bootstrap"
import { backgrounds } from "./backgrounds"
import { themeManager, themeOfKey } from "./theme-switcher-addon/themeManager"
import {
  THEME_CHANGE_EVENT_TYPE,
  THEME_KEY_STORE_KEY,
} from "./theme-switcher-addon/constants"

require("@kaizen/component-library/styles/fonts.scss")

addParameters({
  backgrounds: {
    default: "White",
    values: backgrounds,
  },
  options: {
    storySort: (a, b) => a[1].id.localeCompare(b[1].id),
  },
  docs: {
    extractComponentDescription: (component, { notes }) => {
      if (notes) {
        return typeof notes === "string" ? notes : notes.markdown || notes.text
      }
      return null
    },
  },
})

// Get notified when them theme has changed (perhaps from the addon panel, or from localStorage changes)
addons.getChannel().addListener(THEME_CHANGE_EVENT_TYPE, (theme: unknown) => {
  if (typeof theme === "string") {
    // Update localStorage if needed. This is important because updating localStorage will notify other tabs of the change, and could potentially fire listeners recursively/infinitely.
    if (localStorage.getItem(THEME_KEY_STORE_KEY) !== theme)
      localStorage.setItem(THEME_KEY_STORE_KEY, theme)
    themeManager.setAndApplyTheme(themeOfKey(theme))
  }
})

// Get notified when themes get changed in localStorage from other tabs/windows, and ONLY others (not the current one).
window.addEventListener("storage", () => {
  addons
    .getChannel()
    .emit(THEME_CHANGE_EVENT_TYPE, localStorage.getItem(THEME_KEY_STORE_KEY))
})

export const decorators = [
  (Story: React.ComponentType) => (
    <KaizenContainer>
      <Story />
    </KaizenContainer>
  ),
]
