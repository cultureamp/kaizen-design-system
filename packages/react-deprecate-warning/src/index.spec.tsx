// import "@testing-library/jest-dom/extend-expect"

import { cleanup, render } from "@testing-library/react"
import { screen } from "@testing-library/dom"
import * as React from "react"
import { withDeprecatedWarning, Counter } from "./index"

const logger = global.console
const ERROR_MESSAGE =
  "This component is deprecated. Please use ComponentA instead."

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

describe("<withDeprecatedWarning />", () => {
  describe("Deprecated component", () => {
    it("should passthrough a component's props", () => {
      const MockWithHOC = withDeprecatedWarning(MockAppFunc, {
        deprecatedComponent: ERROR_MESSAGE,
      })
      render(<MockWithHOC test="hello" />)

      expect(screen.getByText(/^Props: /).textContent).toBe("Props: hello")
    })

    it("should log a warning to the console", () => {
      const spy = jest.spyOn(logger, "warn")
      const MockWithHOC = withDeprecatedWarning(MockAppFunc, {
        deprecatedComponent: ERROR_MESSAGE,
      })
      render(<MockWithHOC test="hello" />)

      expect(spy).toHaveBeenCalledTimes(1)
      expect(spy).toHaveBeenCalledWith(
        `DEPRECATED COMPONENT WARNING: ${ERROR_MESSAGE}`
      )
      spy.mockRestore()
    })

    it("should not log more than one error for a component of the same type", () => {
      const spy = jest.spyOn(logger, "warn")
      const MockWithHOC = withDeprecatedWarning(MockAppFunc, {
        deprecatedComponent: ERROR_MESSAGE,
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
      const MockWithHOC = withDeprecatedWarning(MockAppClass, {
        deprecatedComponent: ERROR_MESSAGE,
      })
      render(<MockWithHOC test="hello" />)
      expect(spy).toHaveBeenCalledTimes(1)
      spy.mockRestore()
    })
  })

  describe("Deprecated props", () => {
    it("should warn about deprecated props", () => {
      const spy = jest.spyOn(logger, "warn")
      const MockWithHOC = withDeprecatedWarning(MockAppClass, {
        deprecatedProps: {
          test: "test is deprecated, use blah instead",
        },
      })
      render(<MockWithHOC test="hello" />)
      expect(spy).toHaveBeenCalledTimes(1)
      spy.mockRestore()
    })
  })
})
