import { addDecorator, addParameters, configure } from "@storybook/react"
import { create } from "@storybook/theming"
import focusVisible from "focus-visible"
import { backgrounds } from "./backgrounds"

focusVisible // This causes the :focus-visible polyfill to load

addParameters({
  backgrounds,
  options: {
    theme: create({ brandTitle: "🌱 Storybook", base: "light" }),
  },
})

const loadStories = () => {
  const req = require.context("../packages", true, /(.+\.)?stories.tsx?$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
