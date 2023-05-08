import React, { HTMLAttributes } from "react"
import { Brand, BrandProps } from "@kaizen/brand"
import { OverrideClassName } from "@kaizen/component-base"

export interface WorflowBrandingProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  /** * @default: "logo-horizontal" */
  variant?: BrandProps["variant"]
  alt: string
}

export const Branding = ({
  variant = "logo-horizontal",
  alt,
}: WorflowBrandingProps): JSX.Element => (
  <div className="flex grow-1 pt-16">
    <Brand variant={variant} alt={alt} />
  </div>
)

Branding.displayName = "Branding"
