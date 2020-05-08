import { assetUrl } from "@kaizen/hosted-assets"
import * as React from "react"
import { SceneName } from "../../types"

export type SceneProps = {
  /**
   * Name of the scene illustration
   */
  name: SceneName
}

/**
 *
 * @param param0
 */
const Scene = ({ name }: SceneProps) => {
  return <img src={assetUrl(name)} />
}

export default Scene
