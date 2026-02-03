import React from 'react'
// import { type Meta, type StoryObj } from "storybook"
import { FieldMessage } from '../index'

const meta = {
  title: 'Components/Form primitives/FieldMessage',
  component: FieldMessage,
  args: {
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullasemper odio vitae sem gravida rutrum.',
  },
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

export const HelperText: Story = {
  args: {
    message: 'Your email address will be used to send survey notifications and reports',
  },
}
export const DetailedHelperText: Story = {
  args: {
    message: (
      <div>
        Your email address will be used to send survey notifications and reports. Learn more about{' '}
        <a href="/">how your data will be used</a>
      </div>
    ),
  },
}

export const Error: Story = {
  args: { status: 'error', message: 'Invalid email provided.' },
}

export const Cautionary: Story = {
  args: {
    status: 'caution',
    message: 'Do not share your password or account details.',
  },
}

export const Success: Story = {
  args: { status: 'success', message: 'Your account has been created' },
}

export const Reversed: Story = {
  args: { reversed: true, status: 'error' },
  name: 'reversed',
  globals: {
    backgrounds: {
      value: "purple_700"
    }
  },
}

export const Position: Story = {
  args: { position: 'bottom' },
  render: (args) => (
    <div className="flex gap-6">
      <FieldMessage
        {...args}
        status="caution"
        message='Position "bottom" will apply margin to the top'
      />
      <FieldMessage
        {...args}
        status="caution"
        position="top"
        message='Position "top" will apply margin to the bottom'
      />
    </div>
  ),
}
