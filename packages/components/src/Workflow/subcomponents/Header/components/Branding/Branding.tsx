import React, { HTMLAttributes } from "react"
import { Brand, BrandProps } from "@kaizen/brand"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./Branding.module.scss"

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
  <div className={styles.branding}>
    <Brand classNameOverride={styles.logo} variant={variant} alt={alt} />
  </div>
)

Branding.displayName = "Workflow.Branding"
