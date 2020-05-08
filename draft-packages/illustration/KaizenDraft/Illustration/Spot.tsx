import { assetUrl } from "@kaizen/hosted-assets"
import * as React from "react"
import { SpotName } from "../../types"
import { mapSpotNameToLocation } from "./util"
const styles = require("./style.module.scss")

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

  /**
   * Not recommended. A short-circuit for overriding styles in a pinch
   * @default ""
   */
  classNameAndIHaveSpokenToDST?: string
}

/**
 * Spot illustrations are simple, informational visuals that assist users in their task.
 */
const Spot = ({
  name,
  alt,
  classNameAndIHaveSpokenToDST,
  ...otherProps
}: SpotProps) => {
  const className =
    (classNameAndIHaveSpokenToDST ? classNameAndIHaveSpokenToDST : "") +
    " " +
    styles.wrapper

  return (
    <img
      {...otherProps}
      className={className}
      alt={alt}
      src={assetUrl(mapSpotNameToLocation(name))}
    />
  )
}

export default Spot
