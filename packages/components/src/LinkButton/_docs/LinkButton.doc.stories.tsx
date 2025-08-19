import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { VisuallyHidden } from '~components/VisuallyHidden'
import { Icon } from '~components/Icon'
import { LinkButton } from '../index'

const meta = {
  title: 'Components/LinkButton',
  component: LinkButton,
  args: {
    children: 'Label',
    href: '#link-button-clicked',
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
} satisfies Meta<typeof LinkButton>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const LinkButtonOpensInNewTab: Story = {
  args: {
    children: (
      <>
        Label
        <VisuallyHidden> opens a new tab</VisuallyHidden>
      </>
    ),
    href: 'https://www.google.com',
    target: '_blank',
    rel: 'noopener noreferrer',
    icon: <Icon isPresentational name="open_in_new" shouldMirrorInRTL />,
    iconPosition: 'end',
  },
}

export const LinkButtonVariants: Story = {
  render: ({ children: _, ...otherArgs }) => (
    <>
      <LinkButton {...otherArgs} variant="primary">
        Primary
      </LinkButton>
      <LinkButton {...otherArgs} variant="secondary">
        Secondary
      </LinkButton>
      <LinkButton {...otherArgs} variant="tertiary">
        Tertiary
      </LinkButton>
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

export const LinkButtonVariantsReversed: Story = {
  ...LinkButtonVariants,
  parameters: {
    reverseColors: true,
  },
}

export const LinkButtonSizes: Story = {
  render: (args) => (
    <>
      <LinkButton {...args} size="small">
        Small
      </LinkButton>
      <LinkButton {...args} size="medium">
        Medium
      </LinkButton>
      <LinkButton {...args} size="large">
        Large
      </LinkButton>
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

export const LinkButtonWithIconStart: Story = {
  args: {
    icon: <Icon isPresentational name="delete" />,
  },
}

export const LinkButtonWithIconEnd: Story = {
  args: {
    icon: <Icon isPresentational name="arrow_forward" shouldMirrorInRTL />,
    iconPosition: 'end',
  },
}

export const IconLinkButton: Story = {
  args: {
    children: 'Remove highlights from: May 8, 2024',
    icon: <Icon isPresentational name="delete" />,
    hasHiddenLabel: true,
  },
}

export const DownloadIconButton: Story = {
  args: {
    children: 'Download the kaizen design system badge',
    href: './static/media/kaizen-badge.svg',
    icon: <Icon isPresentational name="download" />,
    hasHiddenLabel: true,
    download: true,
  },
}

export const LinkButtonFullWidth: Story = {
  args: {
    isFullWidth: true,
  },
}
