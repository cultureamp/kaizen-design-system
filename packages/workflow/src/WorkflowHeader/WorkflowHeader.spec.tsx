import React from "react"
import { render } from "@testing-library/react"
import { WorkflowHeader, WorkflowHeaderProps } from "./WorkflowHeader"

const WorkflowHeaderWrapper = (
  customProps?: Partial<WorkflowHeaderProps>
): JSX.Element => <WorkflowHeader {...customProps} />

describe("<WorkflowHeader />", () => {
  it("does something", () => {
    render(<WorkflowHeaderWrapper />)
    /** @todo: Fill in test case */
    expect(true).toBe(false)
  })
})
