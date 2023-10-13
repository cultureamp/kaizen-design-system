import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { GenericModal } from "../index"

const meta = {
  title: "Components/GenericModal",
  component: GenericModal,
  args: {
    children: "Example content",
    isOpen: false,
    labelledByID: "example",
    describedByID: "example",
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

/**
 * @todo: Add your description here and use <Description /> in the MDX,
 * or write directly in the MDX.
 */
// export const Reversed: Story = {
//   args: { isReversed: true },
// }
