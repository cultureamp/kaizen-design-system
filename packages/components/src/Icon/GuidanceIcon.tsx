// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React, { useId } from "react"
import { SVG, IconProps } from "~components/Icon/subcomponents/SVG"

export const GuidanceIcon = (props: IconProps): JSX.Element => {
  const uniqueId = useId()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M7.2 17.2c0 .44.36.8.8.8h3.2c.44 0 .8-.36.8-.8v-.8H7.2v.8ZM9.6 2A5.606 5.606 0 0 0 4 7.6c0 1.904.952 3.576 2.4 4.592V14c0 .44.36.8.8.8H12c.44 0 .8-.36.8-.8v-1.808A5.597 5.597 0 0 0 15.2 7.6c0-3.088-2.512-5.6-5.6-5.6Zm2.28 8.88-.68.48v1.84H8v-1.84l-.68-.48A3.997 3.997 0 0 1 5.6 7.6c0-2.208 1.792-4 4-4s4 1.792 4 4c0 1.304-.64 2.528-1.72 3.28Z"
        />
      </defs>
      <use fill="currentColor" href={`#${uniqueId}`} fillRule="nonzero" />
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
