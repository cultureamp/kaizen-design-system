import React, { FunctionComponent } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import isChromatic from 'chromatic'
import { Button } from '~components/__actions__/v2'
import { Focusable } from '~components/__overlays__/v3'
import { Tag } from '~components/__rc__'
import { Tooltip, TooltipTrigger } from '../index'
import * as testStories from './Tooltip.spec.stories'

const meta = {
  title: 'Components/Tooltip/Tooltip (v3)',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  args: {
    defaultOpen: isChromatic(),
  },
  subcomponents: { TooltipTrigger } as Record<string, FunctionComponent<any>>,
  argTypes: {
    UNSTABLE_portalContainer: {
      control: false,
      table: { disable: true },
    },
    triggerRef: { control: false },
  },
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ defaultOpen: _, isOpen, ...args }) => (
    <TooltipTrigger defaultOpen={true} isOpen={isOpen}>
      <Button label="Button" />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
}

export const OnButton: Story = { ...testStories.OnButton, play: undefined }
export const OnLink: Story = { ...testStories.OnLink, play: undefined }
export const OnIconButton: Story = {
  ...testStories.OnIconButton,
  play: undefined,
}
export const Placement: Story = {
  ...testStories.OnButton,
  play: undefined,
  args: { placement: 'end' },
}
export const OnTabs: Story = {
  ...testStories.OnTabs,
  play: undefined,
}
export const OnCustomFocusableElement: Story = {
  render: ({ defaultOpen, isOpen, ...args }) => (
    <TooltipTrigger defaultOpen={defaultOpen} isOpen={isOpen}>
      <Focusable>
        <Tag>Non-interactive element</Tag>
      </Focusable>
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
  play: undefined,
}
export const OnReversed: Story = {
  ...testStories.ReversedColors,
  play: undefined,
}
