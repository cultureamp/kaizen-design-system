import { Meta, StoryObj } from "@storybook/react"
import { PaginationLink } from "../index"

const meta = {
  title: "Tier 2/Pagination/PaginationLink",
  component: PaginationLink,
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
