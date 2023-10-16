import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { ModalDescription } from "~components/Modal/GenericModal/subcomponents/ModalDescription"
import { Text } from "~components/Text"
import { TextField } from "~components/TextField"
import { InputEditModal, InputEditModalProps } from "../index"

const InputEditModalWithState = (
  args: Omit<InputEditModalProps, "onDismiss" | "onSubmit">
): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = (): void => setIsOpen(true)
  const handleClose = (): void => setIsOpen(false)

  return (
    <>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <InputEditModal
        {...args}
        isOpen={isOpen}
        onSubmit={handleClose}
        onDismiss={handleClose}
      />
    </>
  )
}

const ExampleForm = (): JSX.Element => (
  <>
    <ModalDescription>
      <Text variant="body">
        Instructive text to drive user selection goes here.
      </Text>
    </ModalDescription>
    <form>
      <TextField labelText="Opinion" />
    </form>
  </>
)

const meta = {
  title: "Components/Modals/Input Edit Modal",
  component: InputEditModal,
  args: {
    isOpen: false,
    title: "Your input is valuable",
    mood: "positive",
    children: <ExampleForm />,
    submitLabel: "Submit label",
  },
  argTypes: {
    children: {
      control: false,
    },
  },
} satisfies Meta<typeof InputEditModal>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: InputEditModalWithState,
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

export const Positive: Story = {
  render: InputEditModalWithState,
  args: { mood: "positive" },
}

export const Destructive: Story = {
  render: InputEditModalWithState,
  args: { mood: "destructive" },
}
