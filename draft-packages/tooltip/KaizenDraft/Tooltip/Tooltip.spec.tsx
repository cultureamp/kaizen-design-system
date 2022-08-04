import { cleanup, render } from "@testing-library/react"
import * as React from "react"
import * as AppearanceAnim from "./AppearanceAnim"
import { Tooltip } from "./index"
import "@testing-library/jest-dom"
jest.mock("./AppearanceAnim")
const AnimationProvider = AppearanceAnim.AnimationProvider as jest.Mock

afterEach(() => cleanup())
beforeEach(() => {
  AnimationProvider.mockReturnValue(<div />)
})

describe("<Tooltip />", () => {
  describe("When no animationDuration prop is given", () => {
    it("animationDuration prop is passed to AnimationProvider as undefined", () => {
      render(
        <Tooltip text="Example">
          <div />
        </Tooltip>
      )
      expect(AnimationProvider).toHaveBeenCalledWith(
        expect.objectContaining({
          animationDuration: undefined,
        }),
        {}
      )
    })
  })
  describe("When animationDuration prop is given", () => {
    it("animationDuration prop is passed to AnimationProvider", () => {
      render(
        <Tooltip text="Example" animationDuration={1000}>
          <div />
        </Tooltip>
      )
      expect(AnimationProvider).toHaveBeenCalledWith(
        expect.objectContaining({
          animationDuration: 1000,
        }),
        {}
      )
    })
  })
})
