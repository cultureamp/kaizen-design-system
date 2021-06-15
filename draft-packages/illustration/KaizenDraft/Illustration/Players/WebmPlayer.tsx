import * as React from "react"
import { assetUrl } from "@kaizen/hosted-assets"

export const Player = () => (
  <video controls>
    <source
      src={assetUrl("illustrations/heart/scene/empty-states-action.webm")}
      type="video/webm"
    />
    Sorry, your browser doesn't support embedded videos.
  </video>
)
