import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { vi } from "vitest"
import { VideoPlayer } from "./VideoPlayer"
const matchMedia = {
  media: "",
  onchange: null,
  addListener: vi.fn(),
  removeListener: vi.fn(),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
}
const mockPrefersReducedMotion = {
  matches: true,
  ...matchMedia,
}
const mockDoesNotPreferReducedMotion = {
  matches: false,
  ...matchMedia,
}
const mockPlay = vi.fn().mockResolvedValue(undefined)
const mockLoad = vi.fn()
const mockPause = vi.fn()

describe("<VideoPlayer />", () => {
  beforeEach(() => {
    window.HTMLMediaElement.prototype.load = mockLoad
    window.HTMLMediaElement.prototype.play = mockPlay
    window.HTMLMediaElement.prototype.pause = mockPause
    window.matchMedia = vi
      .fn()
      .mockImplementation(() => mockDoesNotPreferReducedMotion)
    // this will stop throwing the unstable_flushDiscreteUpdates console error cause by react bug
    // https://stackoverflow.com/a/65338472/18285270
    Object.defineProperty(HTMLMediaElement.prototype, "muted", {
      set: vi.fn(),
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it("renders a video player in the document and autoplay", async () => {
    render(
      <VideoPlayer
        autoplay
        fallback="illustrations/heart/spot/moods-cautionary.svg"
        source="illustrations/heart/spot/moods-cautionary.webm"
      />
    )
    const videoPlayer = screen.getByTestId("kz-video-player")
    expect(videoPlayer).toBeInTheDocument()
    expect(mockPlay).toHaveBeenCalled()
  })

  describe("use-reduced-motion", () => {
    it("respects the use-reduced-motion preferences of the user", () => {
      window.matchMedia = vi
        .fn()
        .mockImplementation(() => mockPrefersReducedMotion)
      render(
        <VideoPlayer
          autoplay
          fallback="illustrations/heart/spot/moods-cautionary.svg"
          source="illustrations/heart/spot/moods-cautionary.webm"
        />
      )
      const videoPlayer = screen.getByTestId("kz-video-player")
      expect(videoPlayer).not.toHaveAttribute("autoplay")
      expect(mockPause).toHaveBeenCalled()
    })

    it("defaults to autoplay when user does not set use-reduced-motion preferences", () => {
      window.matchMedia = vi
        .fn()
        .mockImplementation(() => mockDoesNotPreferReducedMotion)
      render(
        <VideoPlayer
          autoplay
          fallback="illustrations/heart/spot/moods-cautionary.svg"
          source="illustrations/heart/spot/moods-cautionary.webm"
        />
      )
      const videoPlayer = screen.getByTestId("kz-video-player")
      expect(videoPlayer).toHaveAttribute("autoplay")
      expect(mockPlay).toHaveBeenCalled()
    })
  })

  describe("when the aspect ratio is set as a prop", () => {
    it("has aspect ratio class", () => {
      window.matchMedia = vi
        .fn()
        .mockImplementation(() => mockDoesNotPreferReducedMotion)
      const { container } = render(
        <VideoPlayer
          aspectRatio="landscape"
          autoplay
          fallback="illustrations/heart/spot/moods-cautionary.svg"
          source="illustrations/heart/spot/moods-cautionary.webm"
        />
      )
      expect(container.querySelector(".aspectRatioWrapper")).toBeTruthy()
      expect(container.querySelector(".landscape")).toBeTruthy()
    })
  })

  describe("when the aspect ratio is not set as a prop", () => {
    it("does not have aspect ratio class", () => {
      window.matchMedia = vi
        .fn()
        .mockImplementation(() => mockDoesNotPreferReducedMotion)
      const { container } = render(
        <VideoPlayer
          autoplay
          fallback="illustrations/heart/spot/moods-cautionary.svg"
          source="illustrations/heart/spot/moods-cautionary.webm"
        />
      )
      expect(container.querySelector(".aspectRatioWrapper")).toBeFalsy()
      expect(container.querySelector(".landscape")).toBeFalsy()
    })
  })

  describe("Pausing/Playing animations", () => {
    it("restarts the animation when pause button is clicked", () => {
      const { container, getByRole } = render(
        <VideoPlayer
          fallback="illustrations/heart/spot/moods-cautionary.svg"
          source="illustrations/heart/spot/moods-cautionary.webm"
        />
      )

      const videoElement = container.querySelector("video")!

      expect(videoElement.paused).toEqual(true)

      const button = getByRole("button")
      userEvent.click(button)

      expect(mockPlay).toHaveBeenCalled()
    })
  })
})
