import React from "react"
import { StoryFn } from "@storybook/react"
import { Modal } from "../"

export default {
  title: "Components/Modal/Subcomponents",
  component: Modal.Footer,
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
  },
}

export const Footer: StoryFn<typeof Modal.Footer> = props => (
  <Modal.Footer {...props}>
    <Modal.ActionButton label="Tertiary" isAlignedStart secondary />
    <Modal.ActionButton secondary label="Secondary" />
    <Modal.ActionButton primary label="Primary" />
  </Modal.Footer>
)

Footer.args = {
  hasFormControls: true,
}
