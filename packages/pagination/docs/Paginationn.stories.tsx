import React, { useState } from "react"
import { Pagination } from "@kaizen/pagination"
import { CATEGORIES } from "../../../storybook/constants"

export default {
  title: `${CATEGORIES.components}/Pagination`,
  component: Pagination,
  parameters: {
    docs: {
      description: {
        component: 'import { Pagination } from "@kaizen/pagination";',
      },
    },
  },
  decorators: [
    (story, { globals: { textDirection } }) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        {story({ isRTL: textDirection === "rtl" })}
      </div>
    ),
  ],
}

export const Default = args => {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      ariaLabelNextPage="Next page"
      ariaLabelPreviousPage="Previous page"
      pageCount={10}
      onPageChange={(newPage: number) => setCurrentPage(newPage)}
    />
  )
}
