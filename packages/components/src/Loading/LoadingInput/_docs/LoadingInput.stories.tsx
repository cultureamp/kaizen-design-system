import React from 'react'
// import { type Meta, type StoryObj } from "storybook"
import { LoadingHeading } from '~components/Loading'
import { LoadingInput } from '../index'

const meta = {
  title: 'Components/Loading states/LoadingInput',
  component: LoadingInput,
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
    chromatic: { disable: false },
  },
}

export const Animated: Story = {
  args: { isAnimated: true },
}

export const Reversed: Story = {
  args: { isReversed: true },

  parameters: {
    chromatic: { disable: false }
  },

  globals: {
    backgrounds: {
      value: "purple_700"
    }
  }
}

const TextControlExampleTemplate: Story = {
  render: (args) => (
    <>
      <LoadingHeading variant="heading-6" width={10} />
      <LoadingInput {...args} />
    </>
  ),
}

export const TextFieldExample: Story = {
  ...TextControlExampleTemplate,
  name: 'TextField Example',
}

export const TextAreaFieldExample: Story = {
  ...TextControlExampleTemplate,
  name: 'TextAreaField Example',
  args: { height: 100 },
}
