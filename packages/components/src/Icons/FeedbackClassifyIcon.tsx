import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const FeedbackClassifyIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="feedback-classify.icon.svg"
        d="M16.387 2c.872 0 1.57.698 1.613 1.57v9.59c0 .916-.74 1.614-1.613 1.614H5.183L2 18V3.613C2 2.698 2.698 2 3.57 2h12.817Zm-4.141 9.94-.306-2.616 1.745-1.831-2.486-.349-1.22-2.571-1.22 2.571-2.486.349 1.744 1.831-.306 2.66 2.223-1.44 2.312 1.396Z"
      />
    </defs>
    <use
      fill="currentColor"
      fill-rule="evenodd"
      href="#feedback-classify.icon.svg"
    />
  </SVG>
)
