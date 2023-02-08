import React from "react"
import { ComponentStory } from "@storybook/react"
import { Modal } from "@kaizen/modal"
import { CATEGORIES } from "../../../storybook/constants"

export default {
  title: `${CATEGORIES.components}/Modal/Subcomponents`,
  component: Modal.Footer,
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

export const Footer: ComponentStory<typeof Modal.Footer> = props => (
  <Modal.Footer {...props}>
    <Modal.ActionButton label="Tertiary" isAlignedStart secondary />
    <Modal.ActionButton secondary label="Secondary" />
    <Modal.ActionButton primary label="Primary" />
  </Modal.Footer>
)

Footer.args = {
  hasFormControls: true,
}
