import { Meta, StoryObj } from "@storybook/react"
import { Pagination } from "../index"

const meta = {
  title: "Components/Pagination",
  component: Pagination,
  args: {
    currentPage: 2,
    ariaLabelPage: "Home",
    ariaLabelNextPage: "Next page",
    ariaLabelPreviousPage: "Previous page",
    pageCount: 10,
    onPageChange: () => {
      alert("Page changed")
    },
  },
} satisfies Meta<typeof Pagination>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  parameters: {
    chromatic: { disable: false },
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}
