import React from "react"

import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { VisuallyHidden } from ".."

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.a11y}/Visually Hidden`,
  component: VisuallyHidden,
  parameters: {
    docs: {
      description: {
        component: 'import { VisuallyHidden } from "@kaizen/a11y";',
      },
    },
  },
}

export const TextWithVisuallyHidden = () => (
  <div>
    There is visually hidden text between the two brackets (click "Show code" to
    see more): [<VisuallyHidden>👋 Hello!</VisuallyHidden>]
  </div>
)

TextWithVisuallyHidden.storyName = "Hidden text embedded in visible text"
