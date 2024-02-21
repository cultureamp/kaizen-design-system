import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import isChromatic from "chromatic"
import { ModalAccessibleDescription } from "~components/Modal"
import { Text } from "~components/Text"
import { TextField } from "~components/TextField"
import { chromaticModalSettings } from "../../_docs/controls"
import { InputEditModal } from "../index"

const IS_CHROMATIC = isChromatic()

const InputModalTemplate: Story = {
  render: args => {
    const [isOpen, setIsOpen] = useState(IS_CHROMATIC)

    const handleOpen = (): void => setIsOpen(true)
    const handleClose = (): void => setIsOpen(false)

    return (
      <>
        <button
          type="button"
          className="kz-border kz-border-gray-500"
          onClick={handleOpen}
        >
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
  },
}

const ExampleForm = (): JSX.Element => (
  <>
    <ModalAccessibleDescription>
      <Text variant="body">
        Instructive text to drive user selection goes here.
      </Text>
    </ModalAccessibleDescription>
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
  ...InputModalTemplate,
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

export const Positive: Story = {
  ...InputModalTemplate,
  args: { mood: "positive" },
  ...chromaticModalSettings,
}

export const Destructive: Story = {
  ...InputModalTemplate,
  args: { mood: "destructive" },
  ...chromaticModalSettings,
}

export const Unpadded: Story = {
  ...InputModalTemplate,
  args: { unpadded: true },
  ...chromaticModalSettings,
}
