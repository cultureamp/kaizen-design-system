// This file is autogenerated
// Changes to this file will be overwritten

import React, { useId } from "react"
import { SVG } from "~components/__illustrations__/Icon/v1/subcomponents/SVG"
import type { IconProps } from "~components/__illustrations__/v1"

export const FaceVeryDissatisfiedWhiteIcon = (
  props: IconProps
): JSX.Element => {
  const uniqueId = useId()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M9.992 2A7.99 7.99 0 0 0 2 10c0 4.424 3.576 8 7.992 8S18 14.424 18 10a8 8 0 0 0-8.008-8"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="currentColor" href={`#${uniqueId}`} />
        <path
          fill="#FFF"
          d="M10 16.4A6.4 6.4 0 0 1 3.6 10c0-3.536 2.864-6.4 6.4-6.4s6.4 2.864 6.4 6.4-2.864 6.4-6.4 6.4"
        />
        <path
          fill="currentColor"
          d="m13.344 6.608-.848.848-.848-.848-.848.848.848.848-.848.848.848.848.848-.848.848.848.848-.848-.848-.848.848-.848zM6.656 10l.848-.848.848.848.848-.848-.848-.848.848-.848-.848-.848-.848.848-.848-.848-.848.848.848.848-.848.848zM10 11.6a4.4 4.4 0 0 0-4.088 2.8h8.176A4.4 4.4 0 0 0 10 11.6"
        />
      </g>
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
