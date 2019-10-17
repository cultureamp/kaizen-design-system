import { withA11y } from "@storybook/addon-a11y"
import { addDecorator, addParameters, configure } from "@storybook/react"
import { create } from "@storybook/theming"
import { backgrounds } from "./backgrounds"

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
