import { assetUrl } from "@kaizen/hosted-assets"
import * as React from "react"
import { SceneName } from "../../types"
import { mapSceneNameToLocation } from "./util"
const styles = require("./style.module.scss")

export type SceneProps = {
  /**
   *  Refer to the Scene Illustration Sticker Sheet in Zen UI Kit
   */
  name: SceneName

  /**
   * If there is context/text surrounding this illustration that provides alt text,
   * provide an empty string
   */
  alt: string

  /**
   * Not recommended. A short-circuit for overriding styles in a pinch
   * @default ""
   */
  classNameAndIHaveSpokenToDST?: string
}

/**
 * Scene illustrations tell a rich story to set the scene for users and let them know what's possible.
 */
const Scene = ({
  name,
  alt,
  classNameAndIHaveSpokenToDST,
  ...otherProps
}: SceneProps) => {
  const className =
    (classNameAndIHaveSpokenToDST ? classNameAndIHaveSpokenToDST : "") +
    " " +
    styles.wrapper

  return (
    <img
      {...otherProps}
      className={className}
      alt={alt}
      src={assetUrl(mapSceneNameToLocation(name))}
    />
  )
}

export default Scene
