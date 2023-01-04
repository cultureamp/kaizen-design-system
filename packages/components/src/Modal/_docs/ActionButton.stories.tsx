import React from "react"
import { StoryFn } from "@storybook/react"
import { Modal } from "../"

export default {
  title: "Components/Modal/Subcomponents",
  component: Modal.ActionButton,
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
  },
}

export const ActionButton: StoryFn<typeof Modal.ActionButton> = props => (
  <Modal.ActionButton {...props} />
)

ActionButton.args = {
  isAlignedStart: false,
  label: "Action Button",
}
