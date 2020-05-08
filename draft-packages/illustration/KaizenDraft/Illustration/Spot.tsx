import { assetUrl } from "@kaizen/hosted-assets"
import * as React from "react"
import { SpotName } from "../../types"

export type SpotProps = {
  /**
   * Name of the Spot Illustration.
   */
  name: SpotName
}

const Spot = ({ name }: SpotProps) => {
  return <img src={assetUrl(name)} />
}

export default Spot
