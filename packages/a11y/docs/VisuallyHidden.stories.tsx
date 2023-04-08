import React from "react"
import { StoryFn } from "@storybook/react"
import { VisuallyHidden } from ".."

export default {
  tags: ["autodocs"],
  title: "Components/Visually Hidden",
  component: VisuallyHidden,
  parameters: {
    docs: {
      description: {
        component: 'import { VisuallyHidden } from "@kaizen/a11y";',
      },
    },
  },
}

export const TextWithVisuallyHidden: StoryFn = () => (
  <div>
    There is visually hidden text between the two brackets (click "Show code" to
    see more): [<VisuallyHidden>👋 Hello!</VisuallyHidden>]
  </div>
)
TextWithVisuallyHidden.storyName = "Hidden text embedded in visible text"
TextWithVisuallyHidden.parameters = { chromatic: { disable: false } }
