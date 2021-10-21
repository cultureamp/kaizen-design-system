import * as React from "react"
import { Pagination } from "../src/index"

export default {
  title: "Pagination (React)",
  component: Pagination,
  parameters: {
    info: {
      text: `
      import Pagination from "@kaizen/draft-pagination"
      `,
    },
  },
  argTypes: {
    currentPage: { control: { type: null } },
    onPageChange: { control: { type: null } },
    pageCount: { defaultValue: 10 },
  },
}

export const basic = args => {
  const [currentPage, setCurrentPage] = React.useState(1)
  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      onPageChange={(newPage: number) => {
        setCurrentPage(newPage)
      }}
    />
  )
}
