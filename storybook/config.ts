import { withA11y } from "@storybook/addon-a11y"
import { addDecorator, addParameters, configure } from "@storybook/react"
import { create } from "@storybook/theming"
import { backgrounds } from "./backgrounds"

// Log to the browser console and actions panel (e.g. from Elm's Debug.log)
import "@storybook/addon-console"

// Polyfill for :focus-visible pseudo-selector
// See: https://github.com/WICG/focus-visible
require("focus-visible")

addDecorator(withA11y)

addParameters({
  backgrounds,
  options: {
    theme: create({ brandTitle: "🌱 Storybook", base: "light" }),
  },
})

const loadStories = () => {
  const req = require.context("../packages", true, /\.stories.tsx?$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
