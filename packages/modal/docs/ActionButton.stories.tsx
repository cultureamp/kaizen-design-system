import React from "react"
import { ComponentStory } from "@storybook/react"
import { Modal } from "@kaizen/modal"
import { CATEGORIES } from "../../../storybook/constants"

export default {
  title: `${CATEGORIES.components}/Modal/Subcomponents`,
  component: Modal.ActionButton,
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
    docs: {
      description: {
        component: 'import { Modal } from "@kaizen/modal"',
      },
    },
  },
}

export const ActionButton: ComponentStory<
  typeof Modal.ActionButton
> = props => <Modal.ActionButton {...props} />

ActionButton.args = {
  isAlignedStart: false,
  label: "Action Button",
}
