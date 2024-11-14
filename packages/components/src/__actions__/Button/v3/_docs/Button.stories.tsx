import React from "react"
import { action } from "@storybook/addon-actions"
import { Meta, StoryObj } from "@storybook/react"
import { Badge } from "~components/Badge"
import { Icon } from "~components/__future__"
import { Button } from "../index"

const meta = {
  title: "Actions/Button/Button (v3)",
  component: Button,
  args: {
    children: "Label",
    pendingLabel: "Submitting",
    onPress: action("Button onPress event"),
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const ButtonWithIcon: Story = {
  args: {
    icon: <Icon isPresentational name="delete" />,
  },
}

export const ButtonWithIconEnd: Story = {
  args: {
    icon: <Icon isPresentational name="arrow_forward" shouldMirrorInRTL />,
    iconPosition: "end",
  },
}

export const IconButton: Story = {
  args: {
    children: "Remove highlights from: May 8, 2024",
    icon: <Icon isPresentational name="delete" />,
    hasHiddenLabel: true,
  },
}

export const ReversedButton: Story = {
  parameters: {
    reverseColors: true,
    docs: {
      source: {
        code: `<ReversedColors isReversed={true}>
          <Button>Label</Button>
        </ReversedColors>
      `,
      },
    },
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
        <Badge classNameOverride="ms-4" size="small">
          3
        </Badge>
      </>
    ),
  },
}
