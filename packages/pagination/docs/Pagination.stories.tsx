import React, { useState } from "react"
import { Meta, StoryFn } from "@storybook/react"
import { Pagination } from "@kaizen/pagination"

export default {
  tags: ["autodocs"],
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    docs: {
      description: {
        component: 'import { Pagination } from "@kaizen/pagination";',
      },
    },
  },
  decorators: [
    (story, { globals: { textDirection } }): JSX.Element => (
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
} as Meta<typeof Pagination>

export const Default: StoryFn<typeof Pagination> = args => {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      ariaLabelNextPage="Next page"
      ariaLabelPreviousPage="Previous page"
      pageCount={10}
      onPageChange={setCurrentPage}
    />
  )
}
Default.parameters = { chromatic: { disable: false } }
