import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { Button } from '~components/__next__'
import { GenericModal } from '../index'

const meta = {
  title: 'Components/Modals/GenericModal (primitive)',
  component: GenericModal,
  args: {
    children: 'Example content',
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
        <Button type="button" onPress={() => setIsOpen(true)}>
          Open Modal
        </Button>
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
        sourceState: 'shown',
      },
    },
  },
}
