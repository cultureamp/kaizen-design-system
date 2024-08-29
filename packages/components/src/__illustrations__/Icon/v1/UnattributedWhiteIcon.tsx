// This file is autogenerated
// Changes to this file will be overwritten

import React, { useId } from "react"
import { SVG } from "~components/__illustrations__/Icon/v1/subcomponents/SVG"
import type { IconProps } from "~components/__illustrations__/v1"

export const UnattributedWhiteIcon = (props: IconProps): JSX.Element => {
  const uniqueId = useId()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M17.497 3.145H2.503c-.825 0-1.5.686-1.5 1.523v10.664c0 .838.675 1.523 1.5 1.523h14.994c.825 0 1.492-.685 1.492-1.523l.008-10.664c0-.837-.675-1.523-1.5-1.523"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="currentColor" href={`#${uniqueId}`} />
        <path
          fill="#FFF"
          d="M7.001 5.43c1.245 0 2.25 1.02 2.25 2.286C9.25 8.98 8.246 10 7 10s-2.25-1.02-2.25-2.284c0-1.265 1.005-2.286 2.25-2.286M11.5 14.57H2.503v-.761c0-1.524 2.998-2.361 4.498-2.361s4.499.837 4.499 2.36zM14.035 12.463h1.125v-1.071h-1.125zM16.324 8.312l-.505.493c-.405.39-.66.713-.66 1.516h-1.124v-.268c0-.59.254-1.125.659-1.516l.696-.675c.209-.193.332-.46.332-.756 0-.588-.505-1.07-1.124-1.07s-1.125.482-1.125 1.07h-1.125c0-1.183 1.007-2.142 2.25-2.142 1.242 0 2.249.96 2.249 2.142 0 .472-.203.9-.523 1.206"
        />
      </g>
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
