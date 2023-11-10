import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { BoldIcon } from "~components/Icon"
import { ToggleIconButton } from "../ToggleIconButton"

const meta = {
  title: "Components/RichTextEditor/Subcomponents/ToggleIconButton",
  component: ToggleIconButton,
  args: {
    icon: <BoldIcon role="presentation" />,
    label: "Bold",
  },
  argTypes: {
    icon: { control: "disable" },
  },
} satisfies Meta<typeof ToggleIconButton>

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
