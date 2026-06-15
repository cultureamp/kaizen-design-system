import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { UserSettingsIcon } from '../CustomIcons'

const meta = {
  title: 'Components/Icon/CustomIcons',
  component: UserSettingsIcon,
  args: {
    size: 24,
    color: '#FF0000',
  },
} satisfies Meta<typeof UserSettingsIcon>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
    },
  },
}
