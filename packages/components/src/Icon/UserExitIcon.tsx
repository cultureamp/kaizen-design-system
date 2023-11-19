// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React, { useId } from "react"
import { SVG, IconProps } from "~components/Icon/subcomponents/SVG"

export const UserExitIcon = (props: IconProps): JSX.Element => {
  const uniqueId = useId()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M7.5 11.667C5.275 11.667.833 12.783.833 15v1.667h13.334V15c0-2.217-4.442-3.333-6.667-3.333Zm9.52-3.372.872.872-.872.871.87-.871-.87-.872Zm-1.187-2.07-.882.882 1.431 1.435h-3.361v1.25h3.361l-1.431 1.434.882.882 2.942-2.941-2.942-2.942ZM7.5 10a3.332 3.332 0 1 0 0-6.667A3.332 3.332 0 1 0 7.5 10Z"
        />
      </defs>
      <use fill="currentColor" href={`#${uniqueId}`} fillRule="evenodd" />
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
