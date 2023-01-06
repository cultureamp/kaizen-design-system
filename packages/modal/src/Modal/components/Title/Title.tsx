import React, { HTMLAttributes } from "react"
import { OverrideClassName } from "@kaizen/component-base"
import { Heading } from "@kaizen/typography"

export interface TitleProps
  extends OverrideClassName<HTMLAttributes<HTMLElement>> {
  children: React.ReactNode
  id: string
}

export const Title: React.FC<TitleProps> = ({
  id,
  children,
  classNameOverride,
}): JSX.Element => (
  <Heading
    id={id}
    variant="heading-3"
    tag="div"
    classNameOverride={classNameOverride}
  >
    {children}
  </Heading>
)

Title.displayName = "Title"
