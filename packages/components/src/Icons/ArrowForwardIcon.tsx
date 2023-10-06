import React from "react"
import { IconProps } from "~components/Icons/subComponents/SVG"
import { ArrowRightIcon } from "./ArrowRightIcon"
import { RTLMirror } from "./subComponents/RTLMirror"

export const ArrowForwardIcon = (props: IconProps): JSX.Element => (
  <RTLMirror>
    <ArrowRightIcon {...props} />
  </RTLMirror>
)
