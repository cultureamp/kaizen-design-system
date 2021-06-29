import React from "react"
import { assetUrl } from "../../../hosted-assets"

interface BrandProps {
  variant:
    | "logo-horizontal"
    | "logo-vertical"
    | "enso"
    | "collective-intelligence"
  isReversed: boolean
}

export const Brand = (props: BrandProps) => {
  const brandTheme = props.isReversed ? "-reversed" : "-default"

  return (
    <img
      src={assetUrl(`brand/${props.variant}${brandTheme}.svg`)}
      alt="Culture Amp"
    />
  )
}
