import React from "react"
import { Icon } from "@components/Icon"
import arrowLeft from "@icons/arrow-left.icon.svg"

export const IconLeft = (): JSX.Element => (
  <Icon icon={arrowLeft} role="presentation" />
)

IconLeft.displayName = "Calendar__IconLeft"
