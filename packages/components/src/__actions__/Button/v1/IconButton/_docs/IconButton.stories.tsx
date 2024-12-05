import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Icon } from '~components/__future__/Icon'
import { IconButton } from '../index'

const meta = {
  title: 'Actions/IconButton/IconButton (v1)',
  component: IconButton,
  argTypes: {
    icon: {
      options: ['MeatballsIcon', 'AddIcon'],
      control: { type: 'radio' },
      mapping: {
        MeatballsIcon: <Icon name="more_horiz" isPresentational />,
        AddIcon: <Icon name="add" isPresentational />,
      },
    },
  },
  args: {
    label: 'icon button',
    icon: <Icon name="more_horiz" isPresentational />,
  },
} satisfies Meta<typeof IconButton>

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
