import React, { useState } from "react"
import { ComponentStory } from "@storybook/react"
import { Pagination } from "@kaizen/pagination"

export default {
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
}

export const Default: ComponentStory<typeof Pagination> = args => {
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
