import React, { useState } from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import isChromatic from 'chromatic'
import { Text } from '~components/Text'
import { chromaticModalSettings } from '../../_docs/controls'
import { ConfirmationModal } from '../index'

const IS_CHROMATIC = isChromatic()

const meta = {
  title: 'Components/Modals/ConfirmationModal',
  component: ConfirmationModal,
  args: {
    isOpen: false,
    title: 'Confirmation modal title',
    variant: 'success',
    children: (
      <Text variant="body">
        Confirmation modals contain smaller pieces of content and can provide additional information
        to aide the user.
      </Text>
    ),
    onConfirm: fn(),
    onDismiss: fn(),
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
    mood: {
      control: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof ConfirmationModal>

export default meta

type Story = StoryObj<typeof meta>

const ConfirmationModalTemplate: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(IS_CHROMATIC)

    const handleOpen = (): void => setIsOpen(true)
    const handleClose = (): void => setIsOpen(false)

    return (
      <>
        <button type="button" className="border border-gray-500" onClick={handleOpen}>
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

export const Playground: Story = {
  ...ConfirmationModalTemplate,
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
}

export const Prominent: Story = {
  ...ConfirmationModalTemplate,
  args: { isProminent: true },
}

export const Cautionary: Story = {
  ...ConfirmationModalTemplate,
  args: { variant: 'cautionary' },
}

export const Unpadded: Story = {
  ...ConfirmationModalTemplate,
  args: { unpadded: true },
}
