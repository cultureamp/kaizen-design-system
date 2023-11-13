import React, { useState } from "react"
import { AnimatedSceneProps } from "~components/Illustration/Scene/Scene"
import { Base } from "~components/Illustration/subcomponents/Base/Base"
import { VideoPlayer } from "~components/Illustration/subcomponents/VideoPlayer"

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
}: AnimatedSceneProps): JSX.Element => {
  const [firstAnimationComplete, setFirstAnimationComplete] =
    useState<boolean>(false)
  const aspectRatio = enableAspectRatio ? "landscape" : undefined

  if (!isAnimated) {
    return (
      <Base
        aspectRatio={aspectRatio}
        alt={alt || ""}
        {...otherProps}
        name="illustrations/heart/scene/brand-moments-capture-intro-loop.png"
      />
    )
  }

  if (firstAnimationComplete) {
    return (
      <VideoPlayer
        {...otherProps}
        aspectRatio={aspectRatio}
        fallback="illustrations/heart/scene/brand-moments-capture-intro-loop"
        source="illustrations/heart/scene/brand-moments-capture-intro-loop"
        autoplay={firstAnimationComplete ? otherProps.autoplay : false}
      />
    )
  }

  return (
    <VideoPlayer
      {...otherProps}
      aspectRatio={aspectRatio}
      fallback="illustrations/heart/scene/brand-moments-capture-intro"
      source="illustrations/heart/scene/brand-moments-capture-intro"
      onEnded={(): void => setFirstAnimationComplete(true)}
      loop={false}
    />
  )
}

BrandMomentCaptureIntro.displayName = "BrandMomentCaptureIntro"
