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
  onPageChange: jest.fn<void, [number]>(),
}

describe("<Pagination />", () => {
  it("should render pagination component", () => {
    render(<Pagination {...defaultProps} />)
    expect(screen.getByRole("navigation")).toBeInTheDocument()
  })

  it("should render all pages when pageCount is less than 8", () => {
    const pageCount = 7
    render(<Pagination {...defaultProps} pageCount={pageCount} />)

    for (const pageNumber of Array.from(
      { length: pageCount },
      (_, i) => i + 1
    )) {
      expect(
        screen.getByRole("button", { name: `Page ${pageNumber}` })
      ).toBeInTheDocument()
    }
  })

  it("should not render all pages and render truncated indicator when pageCount is greater than 7", () => {
    render(<Pagination {...defaultProps} />)
    expect(screen.getByTestId("truncate-indicator")).toBeInTheDocument()
  })

  it("should render a disabled back button when current page less than 1", () => {
    render(<Pagination {...defaultProps} />)
    expect(
      screen.getByRole("button", { name: defaultProps.ariaLabelPreviousPage })
    ).toBeDisabled
  })

  it("should render a disabled forward button when current page equals page count", () => {
    render(
      <Pagination {...defaultProps} currentPage={defaultProps.pageCount} />
    )
    expect(
      screen.getByRole("button", { name: defaultProps.ariaLabelPreviousPage })
    ).toBeDisabled
  })

  it("should call onPageChange when clicking page number", async () => {
    const onPageChange = jest.fn<void, [number]>()

    render(<Pagination {...defaultProps} onPageChange={onPageChange} />)

    expect(onPageChange).toHaveBeenCalledTimes(0)

    fireEvent.click(screen.getByRole("button", { name: "Page 1" }))

    expect(onPageChange).toHaveBeenCalledTimes(1)
  })
})
