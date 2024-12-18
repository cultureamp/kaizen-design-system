import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Icon } from '~components/__rc__/Icon'
import { ToggleIconButton } from '../ToggleIconButton'

const meta = {
  title: 'Components/RichTextEditor/Subcomponents/ToggleIconButton',
  component: ToggleIconButton,
  args: {
    icon: <Icon name="format_bold" isPresentational />,
    label: 'Bold',
  },
  argTypes: {
    icon: { control: false },
  },
} satisfies Meta<typeof ToggleIconButton>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
}
