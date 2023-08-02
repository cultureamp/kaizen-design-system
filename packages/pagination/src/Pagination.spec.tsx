import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Pagination } from "./Pagination"

const user = userEvent.setup()

const defaultProps = {
  currentPage: 1,
  pageCount: 10,
  ariaLabelNextPage: "Next page",
  ariaLabelPreviousPage: "Previous page",
  ariaLabelPage: "Page",
  onPageChange: jest.fn<[number], void>(),
}

describe("<Pagination />", () => {
  it("renders pagination component", () => {
    render(<Pagination {...defaultProps} />)
    expect(screen.getByRole("navigation")).toBeInTheDocument()
  })

  it("renders all pages when pageCount is less than 8", () => {
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

  it("does not render all pages and render truncated indicator when pageCount is greater than 7", () => {
    render(<Pagination {...defaultProps} />)
    expect(screen.getByTestId("truncate-indicator")).toBeInTheDocument()
  })

  it("renders a disabled back button when current page less than 1", () => {
    render(<Pagination {...defaultProps} />)
    expect(
      screen.getByRole("button", { name: defaultProps.ariaLabelPreviousPage })
    ).toBeDisabled()
  })

  it("renders a disabled forward button when current page equals page count", () => {
    render(
      <Pagination {...defaultProps} currentPage={defaultProps.pageCount} />
    )
    expect(
      screen.getByRole("button", { name: defaultProps.ariaLabelNextPage })
    ).toBeDisabled()
  })

  it("calls onPageChange when clicking page number", async () => {
    const onPageChange = jest.fn<[number], void>()

    render(<Pagination {...defaultProps} onPageChange={onPageChange} />)

    expect(onPageChange).toHaveBeenCalledTimes(0)

    await user.click(screen.getByRole("button", { name: "Page 1" }))
    await waitFor(() => {
      expect(onPageChange).toHaveBeenCalledTimes(1)
    })
  })
})
