import React, { HTMLAttributes } from "react"
import { Heading } from "@kaizen/typography"
import { OverrideClassName } from "~types/OverrideClassName"

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
    variant="heading-4"
    tag="div"
    classNameOverride={classNameOverride}
  >
    {children}
  </Heading>
)

Title.displayName = "Title"
