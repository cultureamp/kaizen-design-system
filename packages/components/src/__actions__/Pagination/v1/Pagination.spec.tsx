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
  onPageChange: jest.fn<void, [number]>(),
}

describe("<Pagination />", () => {
  it("calls onPageChange when clicking page number", async () => {
    const onPageChange = jest.fn<void, [number]>()

    render(<Pagination {...defaultProps} onPageChange={onPageChange} />)

    expect(onPageChange).toHaveBeenCalledTimes(0)

    await user.click(screen.getByRole("button", { name: "Page 1" }))
    await waitFor(() => {
      expect(onPageChange).toHaveBeenCalledTimes(1)
    })
  })
})
