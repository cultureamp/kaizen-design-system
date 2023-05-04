import React from "react"
import { Brand, BrandProps } from "@kaizen/brand"

export interface WorflowBrandingProps {
  /** * @default: "logo-horizontal" */
  brandingVariant?: BrandProps["variant"]
  brandingAlt: string
}

export const WorkflowBranding = ({
  brandingVariant = "logo-horizontal",
  brandingAlt,
}: WorflowBrandingProps): JSX.Element => (
  <div className="max-large:basis-1/4 flex basis-1/12 pt-16">
    <Brand variant={brandingVariant} alt={brandingAlt} />
  </div>
)

WorkflowBranding.displayName = "WorkflowBranding"
