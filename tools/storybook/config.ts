import { addParameters, configure } from "@storybook/react"
import { create } from "@storybook/theming"

addParameters({
  options: {
    theme: create({ brandTitle: "🌱 Kaizen", base: "light" }),
  },
})

const loadStories = () => {
  const req = require.context("../../site", true, /(.+\.)?stories.tsx?$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
