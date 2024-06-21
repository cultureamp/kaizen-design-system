import React from "react"
import { Unstyled } from "@storybook/blocks"
import { Text, TextProps } from "~components/Text"

/** A sensible default and convenience wrapper for Storybook text so we don't have to wrap it in an unstyled all the time */
export const SbText = ({
  tag = "span",
  variant = "body",
  ...otherProps
}: TextProps): JSX.Element => (
  <Unstyled>
    <Text variant={variant} tag={tag} {...otherProps} />
  </Unstyled>
)

SbText.displayName = "SbText"
