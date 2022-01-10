import "@testing-library/jest-dom/extend-expect"
import {
  cleanup,
  render,
  waitFor,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react"
import * as React from "react"
import { LottieAnimation } from "../types"
import * as utils from "../utils"
import { AnimatedBase } from "./LottiePlayer"

jest.mock("../utils.ts")
const mockedGetAnimationData = utils as jest.Mocked<typeof utils>

afterEach(cleanup)

describe("<AnimatedBase />", () => {
  describe("Loading", () => {
    it("should render an initial loading indicator", async () => {
      mockedGetAnimationData.getAnimationData.mockResolvedValue(
        {} as LottieAnimation
      )
      render(
        <AnimatedBase
          name=""
          alt=""
          fallback="illustrations/heart/spot/moods-cautionary.svg"
        />
      )

      await waitFor(() => {
        expect(mockedGetAnimationData.getAnimationData).toHaveBeenCalled()
        const loadingIndicator = screen.getByTestId("loading")
        expect(loadingIndicator).toBeInTheDocument()
      })
    })
  })

  describe("Failed", () => {
    it("logs a browser warning when asset fails to load", async () => {
      mockedGetAnimationData.getAnimationData.mockRejectedValue("Error")
      const warningFunction = jest.fn()
      jest.spyOn(global.console, "warn").mockImplementation(warningFunction)
      render(
        <AnimatedBase
          name=""
          alt=""
          fallback="illustrations/heart/spot/moods-cautionary.svg"
        />
      )
      await waitFor(() => {
        expect(mockedGetAnimationData.getAnimationData).toHaveBeenCalled()
        expect(warningFunction).toHaveBeenCalledTimes(1)
        expect(warningFunction).toBeCalledWith("Error")
      })
    })

    it("defaults to a static asset when the lottie asset fails to load", async () => {
      mockedGetAnimationData.getAnimationData.mockRejectedValue("Error")
      render(
        <AnimatedBase
          name=""
          alt=""
          fallback="illustrations/heart/spot/moods-cautionary.svg"
        />
      )
      expect(mockedGetAnimationData.getAnimationData).toHaveBeenCalled()
      expect(screen.getByTestId("lottie-player")).toBeInTheDocument()
      expect(document.getElementsByTagName("img")).toHaveLength(0)
      await waitForElementToBeRemoved(await screen.getByTestId("loading")).then(
        () => {
          expect(document.getElementsByTagName("img")).toHaveLength(1)
        }
      )
    })
  })

  describe("Success", () => {
    it("Renders a figcaption for screen readers", async () => {
      mockedGetAnimationData.getAnimationData.mockResolvedValue(
        {} as LottieAnimation
      )
      render(
        <AnimatedBase
          name=""
          alt="Screen reader text"
          fallback="illustrations/heart/spot/moods-cautionary.svg"
        />
      )
      expect(mockedGetAnimationData.getAnimationData).toHaveBeenCalled()
      const items = await screen.findAllByText(/Screen reader text/)
      expect(items).toHaveLength(1)
    })
  })

  describe("when the aspect ratio is set as a prop", () => {
    it("should have aspect ratio class", () => {
      mockedGetAnimationData.getAnimationData.mockResolvedValue(
        {} as LottieAnimation
      )
      const { container } = render(
        <AnimatedBase
          name=""
          aspectRatio="landscape"
          alt="Screen reader text"
          fallback="illustrations/heart/spot/moods-cautionary.svg"
        />
      )
      expect(mockedGetAnimationData.getAnimationData).toHaveBeenCalled()
      expect(container.querySelector(".landscape")).toBeTruthy()
    })

    describe("when the aspect ratio is NOT set as a prop", () => {
      it("should not have aspect ratio class", () => {
        mockedGetAnimationData.getAnimationData.mockResolvedValue(
          {} as LottieAnimation
        )
        const { container } = render(
          <AnimatedBase
            name=""
            alt="Screen reader text"
            fallback="illustrations/heart/spot/moods-cautionary.svg"
          />
        )
        expect(mockedGetAnimationData.getAnimationData).toHaveBeenCalled()
        expect(container.querySelector(".landscape")).toBeFalsy()
      })
    })
  })
})
