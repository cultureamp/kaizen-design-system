import { addParameters } from "@storybook/react"
import { create } from "@storybook/theming"
import { backgrounds } from "./backgrounds"

// Log to the browser console and actions panel (e.g. from Elm's Debug.log)
import "@storybook/addon-console"

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
    theme: create({ brandTitle: "🌱 Storybook", base: "light" }),
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
