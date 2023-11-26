// import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Autocomplete } from "../Autocomplete"

const meta = {
  title: "Components/Autocomplete",
  component: Autocomplete,
  args: {},
} satisfies Meta<typeof Autocomplete>

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
