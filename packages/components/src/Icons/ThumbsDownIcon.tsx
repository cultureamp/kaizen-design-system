import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const ThumbsDownIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="thumbs-down.icon.svg"
        d="M5.91 3.183c-.566 0-1.05.341-1.254.832L2.597 8.821c-.061.156-.095.32-.095.497v1.364c0 .75.613 1.363 1.363 1.363h4.301L7.52 15.16l-.02.218c0 .28.115.539.3.723l.722.716 4.492-4.493c.245-.245.395-.586.395-.96V4.546c0-.75-.613-1.364-1.363-1.364H5.91Zm8.862 8.18h2.726v-8.18h-2.726v8.18Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#thumbs-down.icon.svg" />
  </SVG>
)
