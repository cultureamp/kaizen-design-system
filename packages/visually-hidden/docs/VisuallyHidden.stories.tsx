import React from "react"

import { InlineNotification } from "@kaizen/notification"
import { withDesign } from "storybook-addon-designs"
import { CATEGORIES } from "../../../storybook/constants"

import { VisuallyHidden } from ".."

export default {
  title: `${CATEGORIES.components}/Visually Hidden`,
  component: InlineNotification,
  parameters: {
    docs: {
      description: {
        component: 'import { InlineNotification } from "@kaizen/notification";',
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
