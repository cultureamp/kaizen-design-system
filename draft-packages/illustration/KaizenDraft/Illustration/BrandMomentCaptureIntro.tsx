import * as React from "react"
import { assetUrl } from "@kaizen/hosted-assets"
import { AnimatedSceneProps } from "./Scene"
import { Base } from "./Base"
import { VideoPlayer } from "./Players/VideoPlayer"
import { canPlayWebm } from "./utils"

/**
 * This component is a snowflake. It plays two assets one after the other:
 *  - An "initial" animation that is only ever played once, never looping
 *  - An "ambient" animation that can be looped, depending on the props passed into it
 */
export const BrandMomentCaptureIntro = ({
  isAnimated,
  alt,
  ...otherProps
}: AnimatedSceneProps) => {
  const [firstAnimationComplete, setFirstAnimationComplete] = React.useState(
    false
  )

  React.useEffect(() => {
    /**
     * To prevent the inevitable "jump" when loading the ambient animation, we
     * preemptively fetch the ambient animation when the player is first mounted.
     * That way, the browser is able to retrieve the second asset from it's cache
     * when it is needed
     */
    if (window) {
      // Check what format the browser can play, then preload the correct animation
      if (canPlayWebm()) {
        fetch(
          assetUrl(
            "illustrations/heart/scene/brand-moments-capture-intro-loop.webm"
          )
        )
      } else {
        fetch(
          assetUrl(
            "illustrations/heart/scene/brand-moments-capture-intro-loop.mp4"
          )
        )
      }
    }
  }, [])

  if (isAnimated) {
    if (!firstAnimationComplete) {
      return (
        <VideoPlayer
          {...otherProps}
          fallback="illustrations/heart/scene/brand-moments-capture-intro"
          source="illustrations/heart/scene/brand-moments-capture-intro"
          onEnded={() => setFirstAnimationComplete(true)}
          loop={false}
        />
      )
    }

    return (
      <VideoPlayer
        {...otherProps}
        fallback="illustrations/heart/scene/brand-moments-capture-intro-loop"
        source="illustrations/heart/scene/brand-moments-capture-intro-loop"
      />
    )
  }
  return (
    <Base
      alt={alt || ""}
      {...otherProps}
      name="illustrations/heart/scene/brand-moments-capture-intro-loop.png"
    />
  )
}
