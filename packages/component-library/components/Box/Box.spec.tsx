import { cleanup, render } from "@testing-library/react"
import * as React from "react"
import Box from "./index"

afterEach(cleanup)

describe("<Box />", () => {
  it("renders the correct classes for a default box", () => {
    const { getByText } = render(<Box>Example</Box>)
    const boxClasslist = getByText("Example").classList
    expect(boxClasslist).toContain("p-0")
    expect(boxClasslist).toContain("m-0")
  })

  it("allows consumers to provide a className", () => {
    const { getByText } = render(
      <Box classNameAndIHaveSpokenToDST="example-classname">Example</Box>
    )
    const boxClasslist = getByText("Example").classList
    expect(boxClasslist).toContain("example-classname")
  })
})
