import React from "react"
import { render } from "@testing-library/react"
import marginStyles from "../Spacing/Margin.module.scss"
import paddingStyles from "../Spacing/Padding.module.scss"
import { Box } from "./index"

describe("<Box />", () => {
  it("renders the correct classes for a default box", () => {
    const { getByText } = render(<Box>Example</Box>)
    const boxClasslist = getByText("Example").classList
    expect(Object.values(boxClasslist)).toEqual(
      expect.arrayContaining([paddingStyles["p-0"], marginStyles["m-0"]])
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
      expect.arrayContaining([
        marginStyles["m-3"],
        paddingStyles["pl-1"],
        paddingStyles["pt-0-point-25"],
      ])
    )
  })

  it("allows consumers to provide a className", () => {
    const { getByText } = render(
      <Box classNameOverride="example-classname">Example</Box>
    )
    const boxClasslist = getByText("Example").classList
    expect(boxClasslist.contains("example-classname")).toBe(true)
  })

  it("allows consumers to provide data attributes", () => {
    const { getByTestId } = render(<Box data-testid="test-id">Example</Box>)
    expect(getByTestId("test-id")).toBeVisible()
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
        expect.arrayContaining([
          marginStyles["m-0"],
          paddingStyles["pr-4"],
          paddingStyles["pl-2"],
        ])
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
        expect.arrayContaining([
          paddingStyles["p-0"],
          marginStyles["mr-4"],
          marginStyles["ml-2"],
        ])
      )
    })
  })
})
