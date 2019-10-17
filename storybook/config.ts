import { addDecorator, addParameters, configure } from "@storybook/react"
import { create } from "@storybook/theming"
import { backgrounds } from "./backgrounds"

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
