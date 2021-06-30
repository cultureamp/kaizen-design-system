import React from "react"
import { assetUrl } from "@kaizen/hosted-assets"

export interface BrandProps {
  variant:
    | "logo-horizontal"
    | "logo-vertical"
    | "enso"
    | "collective-intelligence"
  reversed?: boolean
  alt: string
}

export const Brand = (props: BrandProps) => {
  const brandTheme = props.reversed ? "-reversed" : "-default"

  return (
    <img
      src={assetUrl(`brand/${props.variant}${brandTheme}.svg`)}
      alt={props.alt}
    />
  )
}
