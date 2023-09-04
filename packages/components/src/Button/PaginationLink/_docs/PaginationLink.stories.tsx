import { Meta, StoryObj } from "@storybook/react"
import { classNameOverrideArgType } from "~storybook/argTypes"
import { PaginationLink } from "../index"

const meta = {
  title: "Components/Buttons/PaginationLink",
  component: PaginationLink,
  argTypes: { ...classNameOverrideArgType },
  args: {
    pageNumber: 1,
    "aria-label": "Page 1",
  },
} satisfies Meta<typeof PaginationLink>

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
