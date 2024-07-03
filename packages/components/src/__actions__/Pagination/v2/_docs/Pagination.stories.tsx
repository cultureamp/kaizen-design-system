import { Meta, StoryObj } from "@storybook/react"
import * as PaginationV1Stories from "../../v1/_docs/Pagination.stories"
import { Pagination } from "../index"

const meta = {
  title: "Actions/Pagination/v2",
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

export const Playground: Story = PaginationV1Stories.Playground
