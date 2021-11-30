import * as React from "react"
import { AnimatedSceneProps } from "./Scene"
import { Base } from "./Base"
import { VideoPlayer } from "./Players/VideoPlayer"

/**
 * This component is a snowflake. It plays two assets one after the other:
 *  - An "initial" animation that is only ever played once, never looping
 *  - An "ambient" animation that can be looped, depending on the props passed into it
 */
export const BrandMomentCaptureIntro = ({
  isAnimated,
  alt,
  enableAspectRatio,
  ...otherProps
}: AnimatedSceneProps) => {
  const [firstAnimationComplete, setFirstAnimationComplete] = React.useState(
    false
  )

  if (isAnimated) {
    return (
      <>
        <div style={{ display: firstAnimationComplete ? "none" : "" }}>
          <VideoPlayer
            {...otherProps}
            aspectRatio={enableAspectRatio ? "landscape" : undefined}
            fallback="illustrations/heart/scene/brand-moments-capture-intro"
            source="illustrations/heart/scene/brand-moments-capture-intro"
            onEnded={() => setFirstAnimationComplete(true)}
            loop={false}
          />
        </div>
        <div style={{ display: firstAnimationComplete ? "" : "none" }}>
          <VideoPlayer
            {...otherProps}
            aspectRatio={enableAspectRatio ? "landscape" : undefined}
            fallback="illustrations/heart/scene/brand-moments-capture-intro-loop"
            source="illustrations/heart/scene/brand-moments-capture-intro-loop"
            autoplay={firstAnimationComplete ? otherProps.autoplay : false}
          />
        </div>
      </>
    )
  }
  return (
    <Base
      aspectRatio={enableAspectRatio ? "landscape" : undefined}
      alt={alt || ""}
      {...otherProps}
      name="illustrations/heart/scene/brand-moments-capture-intro-loop.png"
    />
  )
}
