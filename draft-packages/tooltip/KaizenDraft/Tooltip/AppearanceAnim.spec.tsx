import * as React from "react"
import { cleanup, render } from "@testing-library/react"
import useDebounce from "use-debounce"
import { AnimationProvider } from "./AppearanceAnim"
import "@testing-library/jest-dom"
jest.mock("use-debounce")
const useDebouncedCallback = useDebounce.useDebouncedCallback as jest.Mock

let mockReturnValue

beforeEach(() => {
  mockReturnValue = jest.fn()
  mockReturnValue.cancel = () => undefined
  useDebouncedCallback.mockImplementation(() => mockReturnValue)
})

describe("<AnimationProvider />", () => {
  describe("When no animationDuration prop is given", () => {
    it("calls useDebouncedCallback with a 400 ms delay", () => {
      render(<AnimationProvider isVisible />)
      expect(useDebouncedCallback).toHaveBeenCalledWith(
        expect.anything(),
        400,
        expect.anything()
      )
    })
  })
  describe("When an animationDuration prop is given", () => {
    it("calls useDebouncedCallback with the animationDuration value", () => {
      const expected = 1000
      render(<AnimationProvider isVisible animationDuration={expected} />)
      expect(useDebouncedCallback).toHaveBeenCalledWith(
        expect.anything(),
        expected,
        expect.anything()
      )
    })
  })
})
