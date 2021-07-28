import "@testing-library/jest-dom/extend-expect"
import { cleanup, render, screen } from "@testing-library/react"
import * as React from "react"
import { VideoPlayer } from "./VideoPlayer"

afterEach(cleanup)

const matchMedia = {
  media: "",
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
}
const mockPrefersReducedMotion = {
  matches: true,
  ...matchMedia,
}
const mockDoesNotPreferReducedMotion = {
  matches: false,
  ...matchMedia,
}
const mockPlay = jest.fn().mockResolvedValue(undefined)
const mockLoad = jest.fn()
const mockPause = jest.fn()

describe("<VideoPlayer />", () => {
  beforeEach(() => {
    jest.clearAllMocks()
    window.HTMLMediaElement.prototype.load = mockLoad
    window.HTMLMediaElement.prototype.play = mockPlay
    window.HTMLMediaElement.prototype.pause = mockPause
    window.matchMedia = jest
      .fn()
      .mockImplementation(() => mockDoesNotPreferReducedMotion)
  })

  it("should render a video player in the document and autoplay", async () => {
    render(
      <VideoPlayer
        autoplay
        fallback="illustrations/heart/spot/moods-cautionary.svg"
        source="illustrations/heart/spot/moods-cautionary.webm"
      />
    )
    const videoPlayer = screen.getByTestId("kz-video-player")
    expect(videoPlayer).toBeInTheDocument()
    expect(mockPlay).toBeCalled()
  })

  describe("use-reduced-motion", () => {
    it("respects the use-reduced-motion preferences of the user", () => {
      window.matchMedia = jest
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
      expect(videoPlayer).toMatchInlineSnapshot(`
        <video
          aria-hidden="true"
          class="wrapper"
          data-testid="kz-video-player"
          muted=""
          playsinline=""
          poster="https://d1e7r7b0lb8p4d.cloudfront.net/illustrations/heart/spot/moods-cautionary.svg.png"
          preload="metadata"
          width="100%"
        >
          <source
            src="https://d1e7r7b0lb8p4d.cloudfront.net/illustrations/heart/spot/moods-cautionary.webm.webm"
            type="video/webm"
          />
          <source
            src="https://d1e7r7b0lb8p4d.cloudfront.net/illustrations/heart/spot/moods-cautionary.webm.mp4"
            type="video/mp4"
          />
        </video>
      `)
      expect(mockPause).toBeCalled()
    })

    it("defaults to autoplay when user does not set use-reduced-motion preferences", () => {
      window.matchMedia = jest
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
      expect(videoPlayer).toMatchInlineSnapshot(`
        <video
          aria-hidden="true"
          autoplay=""
          class="wrapper"
          data-testid="kz-video-player"
          muted=""
          playsinline=""
          poster="https://d1e7r7b0lb8p4d.cloudfront.net/illustrations/heart/spot/moods-cautionary.svg.png"
          preload="metadata"
          width="100%"
        >
          <source
            src="https://d1e7r7b0lb8p4d.cloudfront.net/illustrations/heart/spot/moods-cautionary.webm.webm"
            type="video/webm"
          />
          <source
            src="https://d1e7r7b0lb8p4d.cloudfront.net/illustrations/heart/spot/moods-cautionary.webm.mp4"
            type="video/mp4"
          />
        </video>
      `)
      expect(mockPlay).toBeCalled()
    })
  })
})
