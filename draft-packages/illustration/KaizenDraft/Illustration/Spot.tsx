import { assetUrl } from "@kaizen/hosted-assets"
import * as React from "react"
import { SpotName } from "../../types"

export type SpotProps = {
  /**
   * Refer to the Spot Illustration Sticker Sheet in Zen UI Kit
   */
  name: SpotName

  /**
   * If there is context/text surrounding this illustration that provides alt text,
   * provide an empty string
   */
  alt: string
}

/**
 * Spot illustrations are simple, informational visuals that assist users in their task.
 */
const Spot = ({ name, alt }: SpotProps) => (
  <img alt={alt} src={assetUrl(name)} />
)

export default Spot
