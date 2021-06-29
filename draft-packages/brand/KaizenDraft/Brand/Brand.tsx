import React from "react"
import { Base } from "../../../illustration/KaizenDraft/Illustration/Base"

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
    <Base name={`brand/${props.variant}${brandTheme}.svg`} alt="Culture Amp" />
  )
}
