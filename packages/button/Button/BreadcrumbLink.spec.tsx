import React from "react"
import { render, screen } from "@testing-library/react"
import { BreadcrumbLink } from ".."

describe("BreadcrumbLink", () => {
  it("has the correct label", () => {
    const expectedPageNumber = 1
    render(<BreadcrumbLink pageNumber={expectedPageNumber} isActive={false} />)

    expect(screen.getByLabelText(`Page ${expectedPageNumber}`))
  })
})
