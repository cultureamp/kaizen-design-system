import { Meta, StoryObj } from "@storybook/react"
import { MultiSelectOptions } from "../index"

const meta = {
  title: "Components/MultiSelect/MultiSelectOptions",
  component: MultiSelectOptions,
  args: {
    id: "id--multi-select-options",
    options: [
      {
        label: "Pancakes",
        value: "pancakes",
      },
      {
        label: "Waffle",
        value: "waffle",
      },
      {
        label: "Toastie",
        value: "toastie",
      },
    ],
  },
} satisfies Meta<typeof MultiSelectOptions>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    id: "id--jaffle",
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}
