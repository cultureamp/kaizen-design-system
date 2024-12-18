import React from 'react'
import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'
import { Badge } from '~components/Badge'
import { Icon } from '~components/__rc__'
import { ReversedColors } from '~components/__utilities__/v3'
import { Button } from '../index'

const meta = {
  title: 'Components/Button/Button (v3)',
  component: Button,
  args: {
    children: 'Label',
    onPress: action('Button onPress event'),
  },
  argTypes: {
    icon: {
      options: ['delete', 'arrow', 'plus'],
      mapping: {
        delete: <Icon isPresentational name="delete" />,
        arrow: <Icon isPresentational name="arrow_forward" />,
        add: <Icon isPresentational name="add" />,
      },
    },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const ButtonVariants: Story = {
  render: (args) => (
    <>
      <Button {...args} variant="primary" />
      <Button {...args} variant="secondary" />
      <Button {...args} variant="tertiary" />
    </>
  ),
  decorators: [
    (Story) => (
      <div className="flex gap-8">
        <Story />
      </div>
    ),
  ],
}

export const ButtonVariantsReversed: Story = {
  render: (args) => (
    <ReversedColors isReversed={true}>
      <Button {...args} variant="primary" />
      <Button {...args} variant="secondary" />
      <Button {...args} variant="tertiary" />
    </ReversedColors>
  ),
  parameters: {
    reverseColors: true,
    backgrounds: { default: 'Purple 700' },
  },
  decorators: [
    (Story) => (
      <div className="flex gap-8">
        <Story />
      </div>
    ),
  ],
}

export const ButtonSizes: Story = {
  render: (args) => (
    <>
      <Button {...args} size="small" />
      <Button {...args} size="medium" />
      <Button {...args} size="large" />
    </>
  ),
  decorators: [
    (Story) => (
      <div className="flex gap-8 items-center">
        <Story />
      </div>
    ),
  ],
}

export const ButtonWithIconStart: Story = {
  args: {
    icon: <Icon isPresentational name="delete" />,
  },
}

export const ButtonWithIconEnd: Story = {
  args: {
    icon: <Icon isPresentational name="arrow_forward" shouldMirrorInRTL />,
    iconPosition: 'end',
  },
}

export const IconButton: Story = {
  args: {
    children: 'Remove highlights from: May 8, 2024',
    icon: <Icon isPresentational name="delete" />,
    hasHiddenLabel: true,
  },
}

export const ReversedButton: Story = {
  render: (args) => (
    <ReversedColors isReversed={true}>
      <Button {...args} />
    </ReversedColors>
  ),
  parameters: {
    backgrounds: { default: 'Purple 700' },
  },
}

export const ButtonFullWidth: Story = {
  args: {
    isFullWidth: true,
  },
}

export const ButtonWithBadge: Story = {
  args: {
    children: (
      <>
        Label
        <Badge classNameOverride="ms-8" size="small">
          3
        </Badge>
      </>
    ),
  },
}
