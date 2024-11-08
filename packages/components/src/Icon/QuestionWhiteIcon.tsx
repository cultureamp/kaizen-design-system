// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React, { useId } from "react"
import { SVG } from "~components/Icon/subcomponents/SVG"
import type { IconProps } from "~components/Icon/types"

export const QuestionWhiteIcon = (props: IconProps): JSX.Element => {
  const uniqueId = useId()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M10 2c-4.416 0-8 3.584-8 8s3.584 8 8 8c4.415 0 8-3.584 8-8s-3.585-8-8-8"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="currentColor" href={`#${uniqueId}`} />
        <path
          fill="#FFF"
          d="m12.456 9.4-.72.736c-.576.584-.936 1.064-.936 2.264H9.2V12c0-.88.36-1.68.936-2.264l.992-1.008c.296-.288.472-.688.472-1.128 0-.88-.72-1.6-1.6-1.6s-1.6.72-1.6 1.6H6.8a3.2 3.2 0 1 1 6.4 0c0 .704-.288 1.344-.744 1.8M9.2 15.6h1.6V14H9.2z"
        />
      </g>
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
