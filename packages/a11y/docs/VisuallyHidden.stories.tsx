import React from "react"

import { withDesign } from "storybook-addon-designs"
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
  decorators: [withDesign],
}

export const TextWithVisuallyHidden = () => (
  <div>
    There is visually hidden text between the two brackes (see DevTools or
    screen reader): [<VisuallyHidden>👋 Hello!</VisuallyHidden>]
  </div>
)

TextWithVisuallyHidden.storyName = "Hidden text embedded in visible text"
