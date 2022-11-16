import * as React from "react"
import { cleanup, render } from "@testing-library/react"
import { Box } from "./index"

afterEach(cleanup)

describe("<Box />", () => {
  it("renders the correct classes for a default box", () => {
    const { getByText } = render(<Box>Example</Box>)
    const boxClasslist = getByText("Example").classList
    expect(Object.values(boxClasslist)).toEqual(
      expect.arrayContaining(["p-0", "m-0"])
    )
  })

  it("applies the correct spacing classes", () => {
    const { getByText } = render(
      <Box m={3} pl={1} pt={0.25}>
        Example
      </Box>
    )
    const boxClasslist = getByText("Example").classList
    expect(Object.values(boxClasslist)).toEqual(
      expect.arrayContaining(["m-3", "pl-1", "pt-0-point-25"])
    )
  })

  it("allows consumers to provide a className", () => {
    const { getByText } = render(
      <Box classNameOverride="example-classname">Example</Box>
    )
    const boxClasslist = getByText("Example").classList
    expect(boxClasslist).toContain("example-classname")
  })

  it("allows consumers to provide data attributes", () => {
    const { container } = render(
      <Box data-automation-id="test-id">Example</Box>
    )
    expect(
      container.querySelector('[data-automation-id="test-id"]')
    ).not.toBeNull()
  })

  describe("RTL support", () => {
    it("swaps the left and right padding", () => {
      const { getByText } = render(
        <Box rtl pl={4} pr={2}>
          Example
        </Box>
      )
      const boxClasslist = getByText("Example").classList
      expect(Object.values(boxClasslist)).toEqual(
        expect.arrayContaining(["m-0", "pr-4", "pl-2"])
      )
    })

    it("swaps the left and right margins", () => {
      const { getByText } = render(
        <Box rtl ml={4} mr={2}>
          Example
        </Box>
      )
      const boxClasslist = getByText("Example").classList
      expect(Object.values(boxClasslist)).toEqual(
        expect.arrayContaining(["p-0", "mr-4", "ml-2"])
      )
    })
  })
})
