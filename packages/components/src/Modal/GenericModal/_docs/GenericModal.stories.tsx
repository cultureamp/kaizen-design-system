import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { GenericModal } from "../index"

const meta = {
  title: "Components/Modals/Generic Modal",
  component: GenericModal,
  args: {
    children: "Example content",
    isOpen: false,
  },
} satisfies Meta<typeof GenericModal>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ isOpen: propsIsOpen, ...args }) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(propsIsOpen)
    const handleDismiss = (): void => setIsOpen(false)

    return (
      <>
        <button type="button" onClick={() => setIsOpen(true)}>
          Open Modal
        </button>
        <GenericModal
          {...args}
          isOpen={isOpen}
          onOutsideModalClick={handleDismiss}
          onEscapeKeyup={handleDismiss}
        />
      </>
    )
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}
