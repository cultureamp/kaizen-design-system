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
  variant?: "default" | "original" | "zen"
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
        name: "MockWithHOC",
        deprecatedComponent: ERROR_MESSAGE,
      })
      render(<MockWithHOC test="hello" />)

      expect(screen.getByText(/^Props: /).textContent).toBe("Props: hello")
    })

    it("should log a warning to the console", () => {
      const spy = jest.spyOn(logger, "warn")
      const MockWithHOC = withDeprecatedWarning(MockAppFunc, {
        name: "MockWithHOC",
        deprecatedComponent: ERROR_MESSAGE,
      })
      render(<MockWithHOC test="hello" />)

      expect(spy).toHaveBeenCalledTimes(1)
      expect(spy).toHaveBeenCalledWith(
        `DEPRECATED COMPONENT WARNING (MockWithHOC)\n${ERROR_MESSAGE}`
      )
      spy.mockRestore()
    })

    it("should not log more than one error for a component of the same type", () => {
      const spy = jest.spyOn(logger, "warn")
      const MockWithHOC = withDeprecatedWarning(MockAppFunc, {
        name: "MockWithHOC",
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
        name: "MockWithHOC",
        deprecatedComponent: ERROR_MESSAGE,
      })
      render(<MockWithHOC test="hello" />)
      expect(spy).toHaveBeenCalledTimes(1)
      spy.mockRestore()
    })
  })

  describe("Deprecated props", () => {
    it("should raise a warning when a deprecated prop is used", () => {
      const spy = jest.spyOn(logger, "warn")
      const MockWithHOC = withDeprecatedWarning(MockAppClass, {
        name: "MockWithHOC",
        deprecatedProps: {
          test: "test is deprecated, use blah instead",
        },
      })
      render(<MockWithHOC test="hello" />)
      expect(spy).toHaveBeenCalledTimes(1)
      spy.mockRestore()
    })

    it("should raise a warning when a deprecated prop _value_ is used", () => {
      const spy = jest.spyOn(logger, "warn")
      const MockWithHOC = withDeprecatedWarning(MockAppClass, {
        name: "MockWithHOC",
        deprecatedProps: {
          variant: [
            {
              key: "original",
              warning:
                "The variant prop value 'original' is deprecated, use 'default' instead",
            },
            {
              key: "zen",
              warning:
                "The variant prop value 'zen' is deprecated, use 'default' instead",
            },
          ],
        },
      })
      render(<MockWithHOC variant="original" test="hello" />)
      expect(spy).toHaveBeenCalledTimes(1)
      spy.mockRestore()
    })

    it("should not raise a warning when using non-deprecated props", () => {
      const spy = jest.spyOn(logger, "warn")
      const MockWithHOC = withDeprecatedWarning(MockAppClass, {
        name: "MockWithHOC",
        deprecatedProps: {
          variant: [
            {
              key: "original",
              warning:
                "The variant prop value 'original' is deprecated, use 'default' instead",
            },
            {
              key: "zen",
              warning:
                "The variant prop value 'zen' is deprecated, use 'default' instead",
            },
          ],
        },
      })
      render(<MockWithHOC variant="default" test="hello" />)
      expect(spy).toHaveBeenCalledTimes(0)
      spy.mockRestore()
    })
  })
})
