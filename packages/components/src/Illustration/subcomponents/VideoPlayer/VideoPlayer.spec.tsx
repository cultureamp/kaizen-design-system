import React from "react"
import { render } from "@testing-library/react"
import { VideoPlayer, VideoPlayerProps } from "./VideoPlayer"

const VideoPlayerWrapper = (customProps?: Partial<VideoPlayerProps>): JSX.Element => (
  <VideoPlayer
    exampleRequiredString="Hello!" /** @todo: Add default values for your required props (override them with customProps if needed) */
    {...customProps}
  />
)

describe("<VideoPlayer />", () => {
  it("does something", () => {
    render(<VideoPlayerWrapper />)
    /** @todo: Fill in test case */
    expect(true).toBe(false)
  })
})
