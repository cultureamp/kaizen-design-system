import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { MultiActionTile } from '../index'

const meta = {
  title: 'Components/Tiles/MultiActionTile',
  component: MultiActionTile,
  args: {
    title: 'Title',
    metadata: 'Side A',
    primaryAction: {
      label: 'Take Action!',
    },
  },
  argTypes: {
    mood: { control: false },
  },
} satisfies Meta<typeof MultiActionTile>

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

export const Variants: Story = {
  render: (args) => (
    <>
      <MultiActionTile {...args} variant="default" title="default" />
      <MultiActionTile {...args} variant="expert-advice" title="expert-advice" />
    </>
  ),
  decorators: [
    (Story) => (
      <div className="flex gap-16 flex-wrap">
        <Story />
      </div>
    ),
  ],
}

export const Information: Story = {
  args: {
    information: 'Side B',
  },
}

export const SecondaryAction: Story = {
  args: {
    secondaryAction: {
      label: 'Nevermind',
    },
  },
}

export const AiTile: Story = {
  args: {
    aiProps: {
      isAi: true,
    },
  },
}

export const AiLoadingTile: Story = {
  render: ({ aiProps, primaryAction: _, ...otherProps }) => {
    const [isAiLoading, setIsAiLoading] = React.useState(false)

    return (
      <MultiActionTile
        primaryAction={{ onClick: () => setIsAiLoading(!isAiLoading), label: 'Perform AI action' }}
        aiProps={{ isLoading: isAiLoading, isAi: aiProps?.isAi }}
        {...otherProps}
      />
    )
  },
  args: {
    aiProps: {
      isAi: true,
      isLoading: true,
    },
  },
}
