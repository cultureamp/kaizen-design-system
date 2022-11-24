import React from "react"
import { fireEvent } from "@testing-library/dom"
import { render, screen } from "@testing-library/react"
import { Pagination } from "./Pagination"

const defaultProps = {
  currentPage: 1,
  pageCount: 10,
  ariaLabelNextPage: "Next page",
  ariaLabelPreviousPage: "Previous page",
  ariaLabelPage: "Page",
  onPageChange: () => jest.fn(),
}

describe("<Pagination />", () => {
  it("should render pagination component", async () => {
    render(<Pagination {...defaultProps} />)

    await screen.getByRole("navigation")
  })

  it("should render all pages when pageCount is less than 8", async () => {
    const pageCount = 7
    render(<Pagination {...defaultProps} pageCount={pageCount} />)

    for (const pageNumber of Array.from(
      { length: pageCount },
      (_, i) => i + 1
    )) {
      await screen.getByRole("button", { name: `Page ${pageNumber}` })
    }
  })

  it("should not render all pages and render truncated indicator when pageCount is greater than 7", async () => {
    render(<Pagination {...defaultProps} />)

    await screen.getByTestId("truncate-indicator")
  })

  it("should render a disabled back button when current page less than 1", async () => {
    render(<Pagination {...defaultProps} />)

    expect(
      screen.getByRole("button", { name: defaultProps.ariaLabelPreviousPage })
    ).toBeDisabled
  })

  it("should render a disabled forward button when current page equals page count", async () => {
    render(
      <Pagination {...defaultProps} currentPage={defaultProps.pageCount} />
    )

    expect(
      screen.getByRole("button", { name: defaultProps.ariaLabelPreviousPage })
    ).toBeDisabled
  })

  it("should call onPageChange when clicking page number", async () => {
    const onPageChange = jest.fn()

    render(<Pagination {...defaultProps} onPageChange={onPageChange} />)

    expect(onPageChange).toHaveBeenCalledTimes(0)

    fireEvent.click(screen.getByRole("button", { name: "Page 1" }))

    expect(onPageChange).toHaveBeenCalledTimes(1)
  })
})
