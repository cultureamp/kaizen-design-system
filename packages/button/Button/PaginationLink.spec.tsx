import React from "react"
import { render, screen } from "@testing-library/react"
import { PaginationLink } from ".."

describe("PaginationLink", () => {
  it("has the correct label", () => {
    const expectedPageNumber = 1
    render(<PaginationLink pageNumber={expectedPageNumber} isActive={false} />)

    expect(screen.getByLabelText(`Page ${expectedPageNumber}`))
  })
})
