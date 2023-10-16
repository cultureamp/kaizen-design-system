import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Text } from "~components/Text"
import { ConfirmationModal, ConfirmationModalProps } from "../index"

const ConfirmationModalWithState = ({
  triggerTitle,
  ...args
}: ConfirmationModalProps & { triggerTitle?: string }): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = (): void => setIsOpen(true)
  const handleClose = (): void => setIsOpen(false)

  return (
    <>
      <button type="button" onClick={handleOpen}>
        {triggerTitle || "Open Modal"}
      </button>
      <ConfirmationModal
        {...args}
        isOpen={isOpen}
        onConfirm={handleClose}
        onDismiss={handleClose}
      />
    </>
  )
}

const meta = {
  title: "Components/Modals/Confirmation Modal",
  component: ConfirmationModal,
  args: {
    isOpen: false,
    title: "Confirmation modal title",
    mood: "cautionary",
    children: (
      <Text variant="body">
        Confirmation modals contain smaller pieces of content and can provide
        additional information to aide the user.
      </Text>
    ),
  },
  argTypes: {
    children: {
      control: false,
    },
  },
} satisfies Meta<typeof ConfirmationModal>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ConfirmationModalWithState,
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

export const Prominent: Story = {
  render: ConfirmationModalWithState,
  args: { isProminent: true },
}

export const Assertive: Story = {
  render: ConfirmationModalWithState,
  args: { mood: "assertive" },
}
