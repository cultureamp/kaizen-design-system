import "@testing-library/jest-dom/extend-expect"

import { cleanup, render, screen } from "@testing-library/react"
import * as React from "react"
import { withDeprecatedComponent, Counter } from "./index"

const logger = global.console

afterEach(() => {
  cleanup()
  Counter.reset()
})

interface MockAppProps {
  test?: string
}
const MockAppFunc = (props: MockAppProps) => <p>Props: {props.test}</p>

const MockAppClass = class extends React.Component<MockAppProps> {
  render() {
    return <p>Props: {this.props.test}</p>
  }
}

describe("<withDeprecatedComponent />", () => {
  it("should passthrough a component's props", () => {
    const MockWithHOC = withDeprecatedComponent(MockAppFunc, {
      message: "this is deprecated",
    })
    render(<MockWithHOC test="hello" />)

    expect(screen.getByText(/^Props: /).textContent).toBe("Props: hello")
  })

  it("should log a warning to the console", () => {
    const spy = jest.spyOn(logger, "warn")
    const MockWithHOC = withDeprecatedComponent(MockAppFunc, {
      message: "this is deprecated",
    })
    render(<MockWithHOC test="hello" />)

    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith("KAIZEN WARNING: this is deprecated")
    spy.mockRestore()
  })

  it("should not log more than one error for a component of the same type", () => {
    const spy = jest.spyOn(logger, "warn")
    const MockWithHOC = withDeprecatedComponent(MockAppFunc, {
      message: "this is deprecated",
    })
    render(
      <>
        <MockWithHOC test="hello" />
        <MockWithHOC />
        <MockWithHOC />
        <MockWithHOC />
      </>
    )
    expect(spy).toHaveBeenCalledTimes(1)
    spy.mockRestore()
  })

  it("should accepts class components", () => {
    const spy = jest.spyOn(logger, "warn")
    const MockWithHOC = withDeprecatedComponent(MockAppClass, {
      message: "this is deprecated",
    })
    render(<MockWithHOC test="hello" />)
    expect(spy).toHaveBeenCalledTimes(1)
    spy.mockRestore()
  })
})
