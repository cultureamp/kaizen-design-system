import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { SVGUserSettingsIcon } from '../CustomIcons'

const meta = {
  title: 'Components/Icon/CustomIcons',
  component: SVGUserSettingsIcon,
  args: {
    size: 24,
    color: '#000',
  },
} satisfies Meta<typeof SVGUserSettingsIcon>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
    },
  },
}
