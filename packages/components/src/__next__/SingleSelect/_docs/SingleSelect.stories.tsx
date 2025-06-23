import { type Meta, type StoryObj } from '@storybook/react'
import { SingleSelect } from '../index'

const meta = {
  title: 'Components/SingleSelect/SingleSelect (next)',
  component: SingleSelect,
  args: {
    exampleRequiredString: 'Hello',
  },
} satisfies Meta<typeof SingleSelect>

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
