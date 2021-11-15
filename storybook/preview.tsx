/* eslint import/no-extraneous-dependencies: 0 */
import React from "react"
import { addParameters } from "@storybook/react"
import { addons } from "@storybook/addons"
import KaizenContainer, { themeManager } from "@kaizen/container"
import { backgrounds } from "./backgrounds"
import { themeOfKey } from "./theme-switcher-addon/themeManager"
import {
  THEME_CHANGE_EVENT_TYPE,
  THEME_KEY_STORE_KEY,
} from "./theme-switcher-addon/constants"
import { CATEGORIES } from "./constants"
// Polyfill for :focus-visible pseudo-selector
// See: https://github.com/WICG/focus-visible
require("focus-visible")

// Standard base stylesheet used across Culture Amp products
// See: https://github.com/necolas/normalize.css/
require("normalize.css")

require("@kaizen/component-library/styles/fonts.scss")
require("./global.scss")

addParameters({
  backgrounds: {
    default: "White",
    values: backgrounds,
  },
  options: {
    storySort: {
      method: "alphabetical",
      order: [
        CATEGORIES.components,
        CATEGORIES.helpers,
        CATEGORIES.designTokens,
        CATEGORIES.elm,
        CATEGORIES.deprecated,
      ],
    },
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

export const globalTypes = {
  textDirection: {
    name: "Text direction",
    description: "",
    defaultValue: "ltr",
    toolbar: {
      icon: "globe",
      items: ["ltr", "rtl"],
    },
  },
}

export const decorators = [
  (Story: React.ComponentType) => (
    <KaizenContainer>
      <Story />
    </KaizenContainer>
  ),
  (Story, props) => {
    const dir = props.args.textDirection ?? props.globals.textDirection
    return (
      <div dir={dir}>
        <Story {...props} />
      </div>
    )
  },
]
