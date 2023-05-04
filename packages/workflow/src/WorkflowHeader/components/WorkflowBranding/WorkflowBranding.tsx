import React from "react"
import { Brand, BrandProps } from "@kaizen/brand"

export interface WorflowBranding {
  /** * @default: "logo-horizontal" */
  variant?: BrandProps["variant"]
  alt: string
}

export const WorkflowBranding = ({
  variant = "logo-horizontal",
  alt = "Culture Amp",
}: WorflowBranding): JSX.Element => (
  <div className="max-large:basis-1/4 flex basis-1/12 pt-16">
    <Brand variant={variant} alt={alt} />
  </div>
)

WorkflowBranding.name = "WorkflowBranding"
