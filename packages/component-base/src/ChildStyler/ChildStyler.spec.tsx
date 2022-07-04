import React, { HTMLAttributes } from "react"
import { render } from "@testing-library/react"
import { OverrideClassName } from "../types"
import { ChildStyler, ChildStylerProps } from "./ChildStyler"

const Child: React.VFC<OverrideClassName<HTMLAttributes<HTMLParagraphElement>>> = ({ classNameOverride, ...restProps}) => <p className={classNameOverride} {...restProps} />

const ChildStylerWrapper = (customProps?: Partial<ChildStylerProps>): JSX.Element => (
  <ChildStyler>
    {/* <div>hi</div> */}
    {/* <Child classNameOverride="childClass" /> */}
    <Child />
  </ChildStyler>
)

describe("<ChildStyler />", () => {
  it("does something", () => {
    // const { debug, container } = render(<Child />)
    const { debug, container } = render(<ChildStylerWrapper />)
    debug(container)
    /** @todo: Fill in test case */
    // expect(true).toBe(false)
  })
})
