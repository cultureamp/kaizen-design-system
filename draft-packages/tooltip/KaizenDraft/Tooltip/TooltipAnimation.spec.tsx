import React from "react"
import { render } from "@testing-library/react"
import { Mock } from "vitest"
import * as AppearanceAnim from "./AppearanceAnim"
import { Tooltip } from "./index"
import "@testing-library/jest-dom"

vi.mock("./AppearanceAnim")

const AnimationProvider = AppearanceAnim.AnimationProvider as Mock

describe("<Tooltip /> animationDuration", () => {
  beforeEach(() => {
    AnimationProvider.mockReturnValue(<div />)
  })
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
