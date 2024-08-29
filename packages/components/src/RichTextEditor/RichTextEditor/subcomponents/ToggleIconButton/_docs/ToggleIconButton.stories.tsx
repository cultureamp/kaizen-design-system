import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { BoldIcon } from "~components/__illustrations__/v1"
import { ToggleIconButton } from "../ToggleIconButton"

const meta = {
  title: "Components/RichTextEditor/Subcomponents/ToggleIconButton",
  component: ToggleIconButton,
  args: {
    icon: <BoldIcon role="presentation" />,
    label: "Bold",
  },
  argTypes: {
    icon: { control: false },
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
