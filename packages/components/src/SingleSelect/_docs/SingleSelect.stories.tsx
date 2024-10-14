import React, { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Button } from '~components/__actions__/v3'
import { SingleSelect } from '../SingleSelect'

const meta = {
  title: 'Components/SingleSelect',
  component: SingleSelect,
} satisfies Meta<typeof SingleSelect>

export default meta

export const Playground: Story = {
  parameters: {
    chromatic: { disable: false },
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
}
