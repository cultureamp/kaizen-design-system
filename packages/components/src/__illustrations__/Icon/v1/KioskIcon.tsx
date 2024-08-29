// This file is autogenerated
// Changes to this file will be overwritten

import React, { useId } from "react"
import { SVG } from "~components/__illustrations__/Icon/v1/subcomponents/SVG"
import type { IconProps } from "~components/__illustrations__/v1"

export const KioskIcon = (props: IconProps): JSX.Element => {
  const uniqueId = useId()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M14.353 2h.314c.92 0 1.353.747 1.353 1.667v12.666c0 .92-.747 1.667-1.667 1.667H5.677c-.92 0-1.667-.747-1.667-1.667V3.667C4.01 2.747 4.757 2 5.677 2zM5 14.667h10V4H5zm4 1.666c0 .553.446 1 1 1s1-.447 1-1-.446-1-1-1-1 .447-1 1"
        />
      </defs>
      <use fill="currentColor" href={`#${uniqueId}`} fillRule="evenodd" />
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
