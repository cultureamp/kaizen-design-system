import "@testing-library/jest-dom/extend-expect"
import {
  cleanup,
  render,
  waitFor,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react"
import * as React from "react"
import { AnimatedBase } from "./AnimatedBase"
import * as utils from "./utils"

jest.mock("./utils.ts")
const mockedGetAnimationData = utils as jest.Mocked<typeof utils>

afterEach(cleanup)

describe("<AnimatedBase />", () => {
  describe("Loading", () => {
    beforeEach(() => {
      mockedGetAnimationData.getAnimationData.mockResolvedValue(undefined)
    })

    it("should render an initial loading indicator", async () => {
      render(<AnimatedBase name="" alt="" isAnimated />)

      const loadingIndicator = await screen.getByTestId("loading")
      expect(loadingIndicator).toBeInTheDocument()
      expect(loadingIndicator).toMatchSnapshot()
      waitFor(() => mockedGetAnimationData.getAnimationData)
    })
  })

  describe("Loading failed", () => {
    beforeEach(() => {
      mockedGetAnimationData.getAnimationData.mockRejectedValue("Error")
    })

    it("logs a browser warning when asset fails to load", async () => {
      const warningFunction = jest.fn()
      jest.spyOn(global.console, "warn").mockImplementation(warningFunction)
      render(<AnimatedBase name="" alt="" isAnimated />)
      waitFor(() => {
        expect(warningFunction).toHaveBeenCalledTimes(1)
        expect(warningFunction).toBeCalledWith("Error")
      })
    })

    it("defaults to loading state when the asset fails to load", async () => {
      render(<AnimatedBase name="" alt="" isAnimated />)
      expect(screen.getByTestId("lottie-player")).toBeInTheDocument()
      waitFor(() => mockedGetAnimationData.getAnimationData)
    })
  })
})
