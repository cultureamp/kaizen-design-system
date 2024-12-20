import { type Meta, type StoryObj } from '@storybook/react'
import { RemovableTag } from '../RemovableTag'

const meta = {
  title: 'Components/Tag/Future/RemovableTag',
  component: RemovableTag,
  args: {
    children: 'My tag',
    removeButtonProps: {
      onClick: () => alert('Clicked'),
      ariaLabel: 'Remove tag icon',
    },
  },
} satisfies Meta<typeof RemovableTag>

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

export const Children: Story = {
  args: { children: 'This text is the children' },
}

export const ClassNameOverride: Story = {
  args: {
    classNameOverride: 'border-red-500 border-solid border-',
  },
}
