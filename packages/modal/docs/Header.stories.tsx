import React from "react"
import { ComponentStory } from "@storybook/react"
import { Modal } from "@kaizen/modal"
import { CATEGORIES } from "../../../storybook/constants"

export default {
  title: `${CATEGORIES.components}/Modal/Subcomponents`,
  component: Modal.Header,
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

export const Header: ComponentStory<typeof Modal.Header> = props => (
  <Modal.Header {...props}>
    <Modal.Title id="my-modal-title">Some Modal Title</Modal.Title>
  </Modal.Header>
)

Header.args = {
  mood: "informative",
}
