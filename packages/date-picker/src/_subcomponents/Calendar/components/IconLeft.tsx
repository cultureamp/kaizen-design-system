import React from "react"
import { Icon } from "@kaizen/component-library"
import arrowLeft from "@kaizen/component-library/icons/arrow-left.icon.svg"

export const IconLeft: React.VFC = () => (
  <Icon icon={arrowLeft} role="presentation" />
)

IconLeft.displayName = "Calendar__IconLeft"
