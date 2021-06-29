import * as React from "react"
import Pagination from "../KaizenDraft/index"

export default {
  title: "Pagination (React)",
  component: Pagination,
  parameters: {
    info: {
      text: `
      import { AsyncSelect, Select } from "@kaizen/draft-select"
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
      onPageChange={setCurrentPage}
    />
  )
}
