import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import isChromatic from "chromatic"
import { Text } from "~components/Text"
import { chromaticModalSettings } from "../../_docs/controls"
import { ConfirmationModal } from "../index"

const IS_CHROMATIC = isChromatic()

const ConfirmationModalTemplate: Story = {
  render: args => {
    const [isOpen, setIsOpen] = useState(IS_CHROMATIC)

    const handleOpen = (): void => setIsOpen(true)
    const handleClose = (): void => setIsOpen(false)

    return (
      <>
        <button
          type="button"
          className="border border-gray-500"
          onClick={handleOpen}
        >
          Open Modal
        </button>
        <ConfirmationModal
          {...args}
          isOpen={isOpen}
          onConfirm={handleClose}
          onDismiss={handleClose}
        />
      </>
    )
  },
  ...chromaticModalSettings,
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
  ...ConfirmationModalTemplate,
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

export const Prominent: Story = {
  ...ConfirmationModalTemplate,
  args: { isProminent: true },
}

export const Assertive: Story = {
  ...ConfirmationModalTemplate,
  args: { mood: "assertive" },
}

export const Unpadded: Story = {
  ...ConfirmationModalTemplate,
  args: { unpadded: true },
}
