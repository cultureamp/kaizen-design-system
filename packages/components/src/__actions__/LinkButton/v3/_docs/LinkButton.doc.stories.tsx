import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { VisuallyHidden } from "~components/VisuallyHidden"
import { Icon } from "~components/__future__"
import { ReversedColors } from "~components/__utilities__/v3"
import { LinkButton } from "../index"

const meta = {
  title: "Actions/LinkButton/LinkButton (v3)",
  component: LinkButton,
  args: {
    children: "Label",
    href: "#link-button-clicked",
  },
  argTypes: {
    icon: {
      options: ["delete", "arrow", "plus"],
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
    href: "https://www.google.com",
    target: "_blank",
    icon: <Icon isPresentational name="open_in_new" shouldMirrorInRTL />,
    iconPosition: "end",
  },
}

export const LinkButtonVariants: Story = {
  render: args => (
    <>
      <LinkButton {...args} variant="primary" />
      <LinkButton {...args} variant="secondary" />
      <LinkButton {...args} variant="tertiary" />
    </>
  ),
  decorators: [
    Story => (
      <div className="flex gap-8">
        <Story />
      </div>
    ),
  ],
}

export const LinkButtonVariantsReversed: Story = {
  render: args => (
    <ReversedColors isReversed={true}>
      <LinkButton {...args} variant="primary" />
      <LinkButton {...args} variant="secondary" />
      <LinkButton {...args} variant="tertiary" />
    </ReversedColors>
  ),
  parameters: {
    reverseColors: true,
  },
  decorators: [
    Story => (
      <div className="flex gap-8 bg-purple-700 p-16">
        <Story />
      </div>
    ),
  ],
}

export const LinkButtonSizes: Story = {
  render: args => (
    <>
      <LinkButton {...args} size="small" />
      <LinkButton {...args} size="medium" />
      <LinkButton {...args} size="large" />
    </>
  ),
  decorators: [
    Story => (
      <div className="[&>*]:ms-8">
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
    iconPosition: "end",
  },
}

export const IconLinkButton: Story = {
  args: {
    children: "Remove highlights from: May 8, 2024",
    icon: <Icon isPresentational name="delete" />,
    hasHiddenLabel: true,
  },
}

export const DownloadIconButton: Story = {
  args: {
    children: "Download the kaizen design system badge",
    href: "./static/media/kaizen-badge.svg",
    icon: <Icon isPresentational name="download" />,
    hasHiddenLabel: true,
    download: true,
  },
}

export const ReversedLinkButton: Story = {
  parameters: {
    reverseColors: true,
    docs: {
      source: {
        code: `<ReversedColors isReversed={true}>
          <LinkButton>Label</LinkButton>
        </ReversedColors>
      `,
      },
    },
  },
}

export const LinkButtonFullWidth: Story = {
  args: {
    isFullWidth: true,
  },
}
