import * as React from "react"
import Pagination from "../KaizenDraft/index"

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
}

export const basic = () => {
  const [currentPage, setCurrentPage] = React.useState(1)
  return (
    <Pagination
      pageCount={50}
      currentPage={currentPage}
      onPageChange={(newPage: number) => {
        setCurrentPage(newPage)
      }}
    />
  )
}
