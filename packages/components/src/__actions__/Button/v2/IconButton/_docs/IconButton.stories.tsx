import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { AddIcon, MeatballsIcon } from "~components/Icon"
import * as IconButtonV1Stories from "../../../v1/IconButton/_docs/IconButton.stories"

import { IconButton } from "../index"

const meta = {
  title: "Actions/IconButton/v2",
  component: IconButton,
  argTypes: {
    icon: {
      options: ["MeatballsIcon", "AddIcon"],
      control: { type: "radio" },
      mapping: {
        MeatballsIcon: <MeatballsIcon role="presentation" />,
        AddIcon: <AddIcon role="presentation" />,
      },
    },
  },
  args: {
    label: "icon button",
    icon: <MeatballsIcon role="presentation" />,
  },
} satisfies Meta<typeof IconButton>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = IconButtonV1Stories.Playground
