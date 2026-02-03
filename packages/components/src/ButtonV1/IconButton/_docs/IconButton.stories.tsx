import React from 'react'
// import { type Meta, type StoryObj } from "storybook"
import { Icon } from '~components/Icon'
import { IconButton } from '../index'

const meta = {
  title: 'Components/Button/IconButton (deprecated)',
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
  tags: ['!dev'],
} satisfies any

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
