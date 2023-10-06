import React from "react"
import { IconProps } from "~components/Icons/subComponents/SVG"
import { ArrowLeftIcon } from "./ArrowLeftIcon"
import { RTLMirror } from "./subComponents/RTLMirror"

export const ArrowBackwardIcon = (props: IconProps): JSX.Element => (
  <RTLMirror>
    <ArrowLeftIcon {...props} />
  </RTLMirror>
)
