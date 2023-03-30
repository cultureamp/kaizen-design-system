import * as React from "react"
import { render } from "@testing-library/react"
import * as SceneIllustrations from "./Scene"
import * as SpotIllustrations from "./Spot"

let spy = jest.spyOn(global.console, "warn")

describe("<Illustration />", () => {
  describe("Spot illustrations", () => {
    beforeEach(() => {
      spy = jest.spyOn(global.console, "warn").mockImplementation(jest.fn())
    })
    afterEach(() => {
      spy.mockRestore()
    })
    Object.keys(SpotIllustrations).forEach(componentName => {
      const Component: (props: SpotIllustrations.SpotProps) => JSX.Element =
        SpotIllustrations[componentName]

      describe(`<${componentName} />`, () => {
        it("exists and renders an alt tag", () => {
          const altTitle = "My accessible title"
          const wrapper = render(<Component alt={altTitle} />)

          expect(wrapper.getByAltText(altTitle)).toBeTruthy()
          expect(wrapper.container).toMatchSnapshot()
        })

        it("has the aspect ratio class when enableAspectRatio prop is set", () => {
          const { container } = render(<Component alt="" enableAspectRatio />)
          expect(container.querySelector(".aspectRatioWrapper")).toBeTruthy()
        })

        it("doesn't have the aspect ratio class without enableAspectRatio prop", () => {
          const { container } = render(<Component alt="" />)
          expect(container.querySelector(".aspectRatioWrapper")).toBeFalsy()
        })
      })
    })
  })

  describe("Scene illustrations", () => {
    beforeEach(() => {
      spy = jest.spyOn(global.console, "warn").mockImplementation(jest.fn())
    })

    afterEach(() => {
      spy.mockRestore()
    })

    Object.keys(SceneIllustrations).forEach(componentName => {
      const Component: (props: SceneIllustrations.SceneProps) => JSX.Element =
        SceneIllustrations[componentName]

      describe(`<${componentName} />`, () => {
        it("exists and render an alt tag", () => {
          const altTitle = "My accessible title"
          const wrapper = render(<Component alt={altTitle} />)

          expect(wrapper.getByAltText(altTitle)).toBeTruthy()
          expect(wrapper.container).toMatchSnapshot()
        })

        it("has the aspect ratio class when enableAspectRatio prop is set", () => {
          const { container } = render(<Component alt="" enableAspectRatio />)
          expect(container.querySelector(".aspectRatioWrapper")).toBeTruthy()
        })

        it("doesn't have aspect ratio class without enableAspectRatio prop", () => {
          const { container } = render(<Component alt="" />)
          expect(container.querySelector(".aspectRatioWrapper")).toBeFalsy()
        })
      })
    })
  })
})
