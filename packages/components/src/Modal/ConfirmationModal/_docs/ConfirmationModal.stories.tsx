import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import isChromatic from "chromatic"
import { Text } from "~components/Text"
import { ConfirmationModal, ConfirmationModalProps } from "../index"

const IS_CHROMATIC = isChromatic()

const ConfirmationModalWithState = ({
  triggerTitle,
  ...args
}: ConfirmationModalProps & { triggerTitle?: string }): JSX.Element => {
  const [isOpen, setIsOpen] = useState(IS_CHROMATIC)

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
  parameters: {
    chromatic: {
      disable: false,
      delay: 400, // match MODAL_TRANSITION_TIMEOUT in modals + 50ms
      pauseAnimationAtEnd: true,
    },
  },
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
  decorators: [
    // Add additional height to the stories when running in Chromatic only.
    // Modals have fixed position and would be cropped from snapshot tests.
    // Setting height to 100vh ensures we capture as much content of the
    // modal, as it's height responds to the content within it.
    Story => {
      if (IS_CHROMATIC) {
        return (
          <div style={{ minHeight: "100vh" }}>
            <Story />
          </div>
        )
      }

      return <Story />
    },
  ],
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
