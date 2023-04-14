import React, { useState } from "react"
import { StoryFn } from "@storybook/react"
import { Pagination } from "@kaizen/pagination"
import { ComponentDocsTemplate } from "../../../storybook/components/DocsContainer"

const meta = {
  tags: ["autodocs"],
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    docs: {
      container: ComponentDocsTemplate,
    },
    installation: [
      "npm install @kaizen/pagination",
      "import { Pagination } from `@kaizen/pagination`",
    ],
    resourceLinks: {
      sourceCode:
        "https://github.com/cultureamp/kaizen-design-system/tree/main/packages/pagination",
      figma:
        "https://www.figma.com/file/ZRfnoNUXbGZv4eVWLbF4Az/%F0%9F%96%BC%EF%B8%8F-Component-Gallery?node-id=9-39913&t=PsW56BTLlG11eXLS-0",
      designGuidelines:
        "https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082092975/Pagination",
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

export default meta

/**
 * Pagination separates large bodies of content into separate pages.
 * You can access each page via a shared index of links.
 */
export const Playground: StoryFn<typeof Pagination> = args => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
    />
  )
}

Playground.args = {
  ariaLabelNextPage: "Next page",
  ariaLabelPreviousPage: "Previous page",
  pageCount: 10,
}
Playground.parameters = {
  docs: {
    canvas: {
      sourceState: "shown",
    },
  },
}
