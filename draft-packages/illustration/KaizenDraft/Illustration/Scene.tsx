import { assetUrl } from "@kaizen/hosted-assets"
import * as React from "react"
import { SceneName } from "../../types"

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
}

/**
 * Scene illustrations tell a rich story to set the scene for users and let them know what's possible.
 */
const Scene = ({ name, alt }: SceneProps) => (
  <img alt={alt} src={assetUrl(name)} />
)

export default Scene
