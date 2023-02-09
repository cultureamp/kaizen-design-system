import React, { useState } from "react"
import { ComponentStory } from "@storybook/react"
import { Button } from "@kaizen/button"
import { ConfirmationModal } from "@kaizen/modal"
import { CATEGORIES } from "../../../storybook/constants"

export default {
  title: `${CATEGORIES.components}/Modal/Confirmation/Confirmation Modal`,
  component: ConfirmationModal,
  parameters: {
    actions: {
      argTypesRegex: null,
    },
    docs: {
      description: {
        component: 'import { ConfirmationModal } from "@kaizen/modal"',
      },
    },
  },
  argTypes: {},
}

export const DefaultStory: ComponentStory<typeof ConfirmationModal> = props => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
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
}
