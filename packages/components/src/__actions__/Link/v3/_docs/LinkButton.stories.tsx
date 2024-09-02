import React from "react"
import { action } from "@storybook/addon-actions"
import { Meta, StoryObj } from "@storybook/react"
import { validate } from "uuid"
import { AddIcon, TrashIcon, ChevronUpIcon } from "~components/Icon"
import { VisuallyHidden } from "~components/VisuallyHidden"
import { LinkButton } from "../index"

const meta = {
  title: "Actions/Button/Button (v3)",
  component: LinkButton,
  args: {
    label: "Label",
    onPress: action("Button onPress event"),
  },
} satisfies Meta<typeof LinkButton>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => <LinkButton {...args}></LinkButton>,
}
