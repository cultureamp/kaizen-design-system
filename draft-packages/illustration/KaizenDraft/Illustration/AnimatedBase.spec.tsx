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
import { LottieAnimation } from "./types"

jest.mock("./utils.ts")
const mockedGetAnimationData = utils as jest.Mocked<typeof utils>

afterEach(cleanup)

describe("<AnimatedBase />", () => {
  describe("Loading", () => {
    beforeEach(() => {
      mockedGetAnimationData.getAnimationData.mockResolvedValue(
        {} as LottieAnimation
      )
    })

    it("should render an initial loading indicator", async () => {
      render(
        <AnimatedBase
          name=""
          alt=""
          isAnimated
          fallback="illustrations/heart/spot/moods-cautionary.svg"
        />
      )

      const loadingIndicator = await screen.getByTestId("loading")
      expect(loadingIndicator).toBeInTheDocument()
      await waitFor(() => {
        mockedGetAnimationData.getAnimationData
      })
    })
  })

  describe("Loading failed", () => {
    beforeEach(() => {
      mockedGetAnimationData.getAnimationData.mockRejectedValue("Error")
    })

    it("logs a browser warning when asset fails to load", async () => {
      const warningFunction = jest.fn()
      jest.spyOn(global.console, "warn").mockImplementation(warningFunction)
      render(
        <AnimatedBase
          name=""
          alt=""
          isAnimated
          fallback="illustrations/heart/spot/moods-cautionary.svg"
        />
      )
      waitFor(() => {
        expect(warningFunction).toHaveBeenCalledTimes(1)
        expect(warningFunction).toBeCalledWith("Error")
        return mockedGetAnimationData.getAnimationData
      })
    })

    it("defaults to a static asset when the lottie asset fails to load", async () => {
      render(
        <AnimatedBase
          name=""
          alt=""
          isAnimated
          fallback="illustrations/heart/spot/moods-cautionary.svg"
        />
      )
      expect(screen.getByTestId("lottie-player")).toBeInTheDocument()
      expect(document.getElementsByTagName("img")).toHaveLength(0)
      await waitForElementToBeRemoved(await screen.getByTestId("loading")).then(
        () => {
          expect(document.getElementsByTagName("img")).toHaveLength(1)
        }
      )
    })
  })
})
