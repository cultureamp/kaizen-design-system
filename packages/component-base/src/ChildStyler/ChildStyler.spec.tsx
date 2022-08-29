import React, { HTMLAttributes } from "react"
import { render, screen } from "@testing-library/react"
import { OverrideClassName } from "../types"
import { ChildStyler } from "./ChildStyler"
import { TestChild } from "./TestComponents"

const IncompatibleChild: React.VFC<
  OverrideClassName<HTMLAttributes<HTMLParagraphElement>>
> = ({ classNameOverride, ...restProps }) => (
  <p className={classNameOverride} {...restProps} />
)

// const ChildStylerWrapper = (customProps?: Partial<ChildStylerProps>): JSX.Element => (
//   <>
//   <ChildStyler children={<TestChild />} {...customProps} />
//     {/* <div>hi</div> */}
//     {/* <Child classNameOverride="childClass" /> */}
//     {/* <TestChild /> */}
//   {/* </ChildStyler> */}
//   </>
// )

describe("<ChildStyler />", () => {
  it("passes in styles correctly to a compatible component", () => {
    render(
      <ChildStyler>
        <TestChild data-testid="test--testchild" />
      </ChildStyler>
    )
    const element = screen.getByTestId("test--testchild")
    expect(element).toHaveClass("testing")
  })

  it("does not apply styles to other components", () => {
    render(
      <ChildStyler>
        <IncompatibleChild data-testid="test--incompatiblechild" />
      </ChildStyler>
    )
    const element = screen.getByTestId("test--incompatiblechild")
    expect(element).not.toHaveClass("testing")
  })

  it("does not apply styles to other components", () => {
    render(
      <ChildStyler>
        <div data-testid="test--div" />
      </ChildStyler>
    )
    const element = screen.getByTestId("test--div")
    expect(element).not.toHaveClass("testing")
  })
})
