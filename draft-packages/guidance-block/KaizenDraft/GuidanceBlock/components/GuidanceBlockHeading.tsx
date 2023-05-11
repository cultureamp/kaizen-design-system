import React from "react"
import { AllowedHeadingTags, Heading, HeadingProps } from "@kaizen/typography"

export interface MenuHeadingProps extends Partial<HeadingProps> {
  tag: AllowedHeadingTags
  children: React.ReactNode
}

export const GuidanceBlockHeading = (props: MenuHeadingProps): JSX.Element => {
  const { ...restProps } = props
  return <Heading variant="heading-3" {...restProps} />
}

GuidanceBlockHeading.displayName = "GuidanceBlockHeading"
