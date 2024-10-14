import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { MultiCombobox, MultiComboboxProps } from "../index"

const meta = {
  title: "Pickers/MultiCombobox",
  component: MultiCombobox,
  args: {},
} satisfies Meta<typeof MultiCombobox>

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
