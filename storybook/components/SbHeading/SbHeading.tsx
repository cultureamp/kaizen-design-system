import React from "react"
import { Unstyled } from "@storybook/blocks"
import { Heading, HeadingProps } from "~components/Heading"

/** A sensible default and convenience wrapper for Storybook Heading so we don't have to wrap it in an unstyled all the time */
export const SbHeading = ({
  // This is just a stylistic wrapper - the content should still be in the ### md heading format
  tag = "span",
  children,
  ...otherProps
}: HeadingProps): JSX.Element => (
  <Unstyled>
    <Heading
      classNameOverride=" border-b-none [&>*]:m-0 "
      tag={tag}
      {...otherProps}
    >
      {children}
    </Heading>
  </Unstyled>
)

SbHeading.displayName = "SbHeading"
