import "@testing-library/jest-dom/extend-expect"
import { cleanup, render, waitFor, screen } from "@testing-library/react"
import * as React from "react"
import { VideoPlayer } from "./VideoPlayer"

afterEach(cleanup)

describe("<VideoPlayer />", () => {
  it("should render an initial loading indicator", async () => {
    render(
      <VideoPlayer
        alt=""
        fallback="illustrations/heart/spot/moods-cautionary.svg"
        ambientAnimation="illustrations/heart/spot/moods-cautionary.webm"
      />
    )
    const videoPlayer = screen.getByTestId("kz-video-player")
    expect(videoPlayer).toBeInTheDocument()
  })
})
