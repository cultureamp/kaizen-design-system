import React from "react"
import { render } from "@testing-library/react"
import { SpyInstance } from "vitest"
import { AnimationProvider } from "./AppearanceAnim"

vi.mock("use-debounce")

const getDebounceSpy = async (): Promise<SpyInstance> => {
  const useDebounce = await import("use-debounce")
  useDebounce.useDebouncedCallback = (
    await vi.importActual<typeof import("use-debounce")>("use-debounce")
  ).useDebouncedCallback
  return vi.spyOn(useDebounce, "useDebouncedCallback")
}

describe("<AnimationProvider />", () => {
  describe("When no animationDuration prop is given", () => {
    it("calls useDebouncedCallback with a 400 ms delay", async () => {
      const useDebouncedCallback = await getDebounceSpy()
      render(<AnimationProvider isVisible />)
      expect(useDebouncedCallback).toHaveBeenCalledWith(
        expect.anything(),
        400,
        expect.anything()
      )
    })
  })

  describe("When an animationDuration prop is given", () => {
    it("calls useDebouncedCallback with the animationDuration value", async () => {
      const useDebouncedCallback = await getDebounceSpy()
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
