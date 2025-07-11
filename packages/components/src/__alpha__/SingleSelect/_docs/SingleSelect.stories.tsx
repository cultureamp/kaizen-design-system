import { type Meta, type StoryObj } from '@storybook/react'
import { SingleSelect } from '../index'

const meta = {
  title: 'Components/SingleSelect/SingleSelect (alpha)',
  component: SingleSelect,
  args: {},
} satisfies Meta<typeof SingleSelect>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {},
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
}
