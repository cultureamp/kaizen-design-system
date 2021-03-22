import { cleanup, render } from "@testing-library/react"
import * as React from "react"
import GenericModal from "./GenericModal"

afterEach(cleanup)

describe("<GenericModal />", () => {
  it("renders the provided content", () => {
    const { getByText } = render(
      <GenericModal isOpen={true}>Example</GenericModal>
    )
    expect(() => getByText("Example")).not.toThrow()
  })
})
