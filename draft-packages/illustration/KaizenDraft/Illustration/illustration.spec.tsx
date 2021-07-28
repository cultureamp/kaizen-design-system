import { cleanup, render } from "@testing-library/react"
import * as React from "react"
import * as SpotIllustrations from "./Spot"
import * as SceneIllustrations from "./Scene"

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
    })
  })
})
