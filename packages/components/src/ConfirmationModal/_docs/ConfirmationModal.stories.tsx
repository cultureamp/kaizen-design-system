import React, { useState } from "react"
import { StoryFn } from "@storybook/react"
import { Button } from "../../"
import { ConfirmationModal } from "../"

export default {
  title: "Components/Modal/Confirmation Modal",
  component: ConfirmationModal,
  parameters: {
    actions: {
      argTypesRegex: null,
    },
  },
  argTypes: {},
}

export const DefaultStory: StoryFn<typeof ConfirmationModal> = props => {
  const [modalOpen, setModalOpen] = useState<boolean>(props.isOpen)
  return (
    <>
      <Button label="Open modal" onClick={(): void => setModalOpen(true)} />
      <ConfirmationModal
        {...props}
        isOpen={modalOpen}
        onDismiss={(): void => setModalOpen(false)}
        onConfirm={(): void => setModalOpen(false)}
      />
    </>
  )
}
DefaultStory.storyName = "Confirmation Modal"
DefaultStory.parameters = {
  docs: { source: { type: "code" } },
}
DefaultStory.args = {
  headingText: "Heading",
  bodyText: "Are you sure?",
  confirmLabel: "Continue",
  cancelLabel: "Cancel",
  isOpen: true,
}
