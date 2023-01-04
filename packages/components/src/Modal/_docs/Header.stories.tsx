import React from "react"
import { StoryFn } from "@storybook/react"
import { Modal } from "../"

export default {
  title: "Components/Modal/Subcomponents",
  component: Modal.Header,
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
  },
}

export const Header: StoryFn<typeof Modal.Header> = args => (
  <Modal.Header {...args}>
    <Modal.Title id="my-modal-title">Some Modal Title</Modal.Title>
  </Modal.Header>
)

Header.args = {
  mood: "informative",
}
