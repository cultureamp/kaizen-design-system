import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { AddIcon, MeatballsIcon } from "~components/Icons"
import { classNameOverrideArgType } from "~storybook/argTypes"
import { IconButton } from "../index"

const meta = {
  title: "Components/Buttons/IconButton",
  component: IconButton,
  argTypes: {
    ...classNameOverrideArgType,
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

export const Playground: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}
