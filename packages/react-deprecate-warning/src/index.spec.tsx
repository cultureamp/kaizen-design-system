import { cleanup, render } from "@testing-library/react"
import { screen } from "@testing-library/dom"
import * as React from "react"
import { withDeprecatedComponent, withDeprecatedProp } from "./index"

const logger = global.console
const ERROR_MESSAGE =
  "This component is deprecated. Please use ComponentA instead."

afterEach(() => {
  cleanup()
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

describe("Deprecation helpers", () => {
  describe("<withDeprecatedComponent>", () => {
    it("should passthrough a component's props", () => {
      const MockWithHOC = withDeprecatedComponent(MockAppFunc, {
        warning: ERROR_MESSAGE,
      })
      render(<MockWithHOC test="hello" />)

      expect(screen.getByText(/^Props: /).textContent).toBe("Props: hello")
    })

    it("should log a warning to the console", () => {
      const spy = jest.spyOn(logger, "warn")
      const MockWithHOC = withDeprecatedComponent(MockAppFunc, {
        warning: ERROR_MESSAGE,
      })
      render(<MockWithHOC test="hello" />)

      expect(spy).toHaveBeenCalledTimes(1)
      expect(spy).toHaveBeenCalledWith(
        `DEPRECATED COMPONENT WARNING (MockAppFunc)\n${ERROR_MESSAGE}`
      )
      spy.mockRestore()
    })

    it("should accepts class components", () => {
      const spy = jest.spyOn(logger, "warn")
      const MockWithHOC = withDeprecatedComponent(MockAppClass, {
        warning: ERROR_MESSAGE,
      })
      render(<MockWithHOC test="hello" />)
      expect(spy).toHaveBeenCalledTimes(1)
      spy.mockRestore()
    })
  })

  describe("<withDeprecatedProp />", () => {
    describe("Deprecated props", () => {
      it("should raise a warning when a deprecated prop is used", () => {
        const spy = jest.spyOn(logger, "warn")
        const MockWithHOC = withDeprecatedProp(MockAppClass, {
          warning: {
            test: "test is deprecated, use blah instead",
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
        render(<MockWithHOC test="blah" />)
        expect(spy).toHaveBeenCalledTimes(1)
        spy.mockRestore()
      })

      it("should not raise multiple warnings when a deprecated prop is used", () => {
        const spy = jest.spyOn(logger, "warn")
        const MockWithHOC = withDeprecatedProp(MockAppClass, {
          warning: {
            test: "test is deprecated, use blah instead",
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
        render(<MockWithHOC test="blah" />)
        expect(spy).toHaveBeenCalledTimes(1)
        spy.mockRestore()
      })

      it("should not raise a warning when using non-deprecated props", () => {
        const spy = jest.spyOn(logger, "warn")
        const MockWithHOC = withDeprecatedProp(MockAppClass, {
          warning: {
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

      it("should log separate warnings for each deprecated prop", () => {
        const spy = jest.spyOn(logger, "warn")
        const errorMessageOriginal =
          "The variant prop value 'original' is deprecated, use 'default' instead"
        const errorMessageZen =
          "The variant prop value 'zen' is deprecated, use 'default' instead"
        const MockWithHOC = withDeprecatedProp(MockAppFunc, {
          warning: {
            variant: [
              {
                key: "original",
                warning: errorMessageOriginal,
              },
              {
                key: "zen",
                warning: errorMessageZen,
              },
            ],
          },
        })
        render(<MockWithHOC variant="original" test="hello" />)
        render(<MockWithHOC variant="zen" test="hello" />)
        expect(spy).toHaveBeenCalledTimes(2)
        expect(spy).toHaveBeenCalledWith(
          `DEPRECATED PROP WARNING (MockAppFunc)\n${errorMessageOriginal}`
        )
        expect(spy).toHaveBeenCalledWith(
          `DEPRECATED PROP WARNING (MockAppFunc)\n${errorMessageZen}`
        )
        spy.mockRestore()
      })
    })

    describe("Deprecated prop values", () => {
      it("should raise a warning when a deprecated prop _value_ is used", () => {
        const spy = jest.spyOn(logger, "warn")
        const MockWithHOC = withDeprecatedProp(MockAppClass, {
          warning: {
            variant: [
              {
                key: "original",
                warning:
                  "The variant prop value 'original' is deprecated, use 'default' instead",
              },
            ],
          },
        })
        render(<MockWithHOC variant="original" test="hello" />)
        expect(spy).toHaveBeenCalledTimes(1)
        spy.mockRestore()
      })

      it("should _not_ raise a warning when a deprecated prop _value_ is not used", () => {
        const spy = jest.spyOn(logger, "warn")
        const MockWithHOC = withDeprecatedProp(MockAppClass, {
          warning: {
            variant: [
              {
                key: "original",
                warning:
                  "The variant prop value 'original' is deprecated, use 'default' instead",
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
})
