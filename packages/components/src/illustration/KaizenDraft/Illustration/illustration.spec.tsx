import * as React from "react"
import { cleanup, render } from "@testing-library/react"
import * as SceneIllustrations from "./Scene"
import * as SpotIllustrations from "./Spot"

let spy = jest.spyOn(global.console, "warn")

afterEach(cleanup)
describe("<Illustration />", () => {
  describe("Spot", () => {
    beforeEach(() => {
      spy = jest.spyOn(global.console, "warn").mockImplementation(jest.fn())
    })
    afterEach(() => {
      spy.mockRestore()
    })
    Object.keys(SpotIllustrations).forEach(componentName => {
      const Component: (props: SpotIllustrations.SpotProps) => JSX.Element =
        SpotIllustrations[componentName]

      it(`${componentName} should exist and render an alt tag`, () => {
        const altTitle = "My accessible title"
        const wrapper = render(<Component alt={altTitle} />)

        expect(wrapper.getByAltText(altTitle)).toBeTruthy()
        expect(wrapper.container).toMatchSnapshot()
      })

      it(`${componentName} should has aspect ratio class`, () => {
        const { container } = render(<Component alt="" enableAspectRatio />)
        expect(container.querySelector(".aspectRatioWrapper")).toBeTruthy()
      })

      it(`${componentName} doesn't have aspect ratio class`, () => {
        const { container } = render(<Component alt="" />)
        expect(container.querySelector(".aspectRatioWrapper")).toBeFalsy()
      })
    })
  })

  describe("Scene", () => {
    beforeEach(() => {
      spy = jest.spyOn(global.console, "warn").mockImplementation(jest.fn())
    })
    afterEach(() => {
      spy.mockRestore()
    })
    Object.keys(SceneIllustrations).forEach(componentName => {
      const Component: (props: SceneIllustrations.SceneProps) => JSX.Element =
        SceneIllustrations[componentName]

      it(`${componentName} should exist and render an alt tag`, () => {
        const altTitle = "My accessible title"
        const wrapper = render(<Component alt={altTitle} />)

        expect(wrapper.getByAltText(altTitle)).toBeTruthy()
        expect(wrapper.container).toMatchSnapshot()
      })

      it(`${componentName} should has aspect ratio class`, () => {
        const { container } = render(<Component alt="" enableAspectRatio />)
        expect(container.querySelector(".aspectRatioWrapper")).toBeTruthy()
      })

      it(`${componentName} doesn't have aspect ratio class`, () => {
        const { container } = render(<Component alt="" />)
        expect(container.querySelector(".aspectRatioWrapper")).toBeFalsy()
      })
    })
  })
})
