/* eslint import/no-extraneous-dependencies: 0 */
import React from "react"
import { heartTheme, ThemeProvider, zenTheme } from "@kaizen/design-tokens"
import { addParameters } from "@storybook/react"
import { addons } from "@storybook/addons"
import { backgrounds } from "./backgrounds"
import { themeManager, themeOfKey } from "./theme-switcher-addon/themeManager"
// Polyfill for :focus-visible pseudo-selector
// See: https://github.com/WICG/focus-visible
require("focus-visible")

// Standard base stylesheet used across Culture Amp products
// See: https://github.com/necolas/normalize.css/
require("normalize.css")

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

addons.getChannel().addListener("theme-changed", (theme: unknown) => {
  if (typeof theme === "string") {
    themeManager.setAndApplyTheme(themeOfKey(theme))
  }
})

export const decorators = [
  (Story: React.ComponentType) => (
    <ThemeProvider themeManager={themeManager}>
      <Story />
    </ThemeProvider>
  ),
]
