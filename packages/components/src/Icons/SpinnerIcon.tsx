import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const SpinnerIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <path fill="none" d="M0 0h100v100H0z" class="bk" />
    <rect
      width="6"
      height="20"
      x="47"
      y="40"
      rx="3"
      ry="3"
      transform="translate(0 -30)"
    >
      <animate
        attributeName="opacity"
        begin="-1s"
        dur="1s"
        from="1"
        repeatCount="indefinite"
        to="0"
      />
    </rect>
    <rect
      width="6"
      height="20"
      x="47"
      y="40"
      rx="3"
      ry="3"
      transform="rotate(25.714 115.72 65)"
    >
      <animate
        attributeName="opacity"
        begin="-0.9285714285714286s"
        dur="1s"
        from="1"
        repeatCount="indefinite"
        to="0"
      />
    </rect>
    <rect
      width="6"
      height="20"
      x="47"
      y="40"
      rx="3"
      ry="3"
      transform="rotate(51.429 81.148 65)"
    >
      <animate
        attributeName="opacity"
        begin="-0.8571428571428571s"
        dur="1s"
        from="1"
        repeatCount="indefinite"
        to="0"
      />
    </rect>
    <rect
      width="6"
      height="20"
      x="47"
      y="40"
      rx="3"
      ry="3"
      transform="rotate(77.143 68.81 65)"
    >
      <animate
        attributeName="opacity"
        begin="-0.7857142857142857s"
        dur="1s"
        from="1"
        repeatCount="indefinite"
        to="0"
      />
    </rect>
    <rect
      width="6"
      height="20"
      x="47"
      y="40"
      rx="3"
      ry="3"
      transform="rotate(102.857 61.962 65)"
    >
      <animate
        attributeName="opacity"
        begin="-0.7142857142857143s"
        dur="1s"
        from="1"
        repeatCount="indefinite"
        to="0"
      />
    </rect>
    <rect
      width="6"
      height="20"
      x="47"
      y="40"
      rx="3"
      ry="3"
      transform="rotate(128.571 57.224 65)"
    >
      <animate
        attributeName="opacity"
        begin="-0.6428571428571429s"
        dur="1s"
        from="1"
        repeatCount="indefinite"
        to="0"
      />
    </rect>
    <rect
      width="6"
      height="20"
      x="47"
      y="40"
      rx="3"
      ry="3"
      transform="rotate(154.286 53.424 65)"
    >
      <animate
        attributeName="opacity"
        begin="-0.5714285714285714s"
        dur="1s"
        from="1"
        repeatCount="indefinite"
        to="0"
      />
    </rect>
    <rect
      width="6"
      height="20"
      x="47"
      y="40"
      rx="3"
      ry="3"
      transform="rotate(180 50 65)"
    >
      <animate
        attributeName="opacity"
        begin="-0.5s"
        dur="1s"
        from="1"
        repeatCount="indefinite"
        to="0"
      />
    </rect>
    <rect
      width="6"
      height="20"
      x="47"
      y="40"
      rx="3"
      ry="3"
      transform="rotate(-154.286 46.576 65)"
    >
      <animate
        attributeName="opacity"
        begin="-0.42857142857142855s"
        dur="1s"
        from="1"
        repeatCount="indefinite"
        to="0"
      />
    </rect>
    <rect
      width="6"
      height="20"
      x="47"
      y="40"
      rx="3"
      ry="3"
      transform="rotate(-128.571 42.776 65)"
    >
      <animate
        attributeName="opacity"
        begin="-0.35714285714285715s"
        dur="1s"
        from="1"
        repeatCount="indefinite"
        to="0"
      />
    </rect>
    <rect
      width="6"
      height="20"
      x="47"
      y="40"
      rx="3"
      ry="3"
      transform="rotate(-102.857 38.038 65)"
    >
      <animate
        attributeName="opacity"
        begin="-0.2857142857142857s"
        dur="1s"
        from="1"
        repeatCount="indefinite"
        to="0"
      />
    </rect>
    <rect
      width="6"
      height="20"
      x="47"
      y="40"
      rx="3"
      ry="3"
      transform="rotate(-77.143 31.19 65)"
    >
      <animate
        attributeName="opacity"
        begin="-0.21428571428571427s"
        dur="1s"
        from="1"
        repeatCount="indefinite"
        to="0"
      />
    </rect>
    <rect
      width="6"
      height="20"
      x="47"
      y="40"
      rx="3"
      ry="3"
      transform="rotate(-51.429 18.852 65)"
    >
      <animate
        attributeName="opacity"
        begin="-0.14285714285714285s"
        dur="1s"
        from="1"
        repeatCount="indefinite"
        to="0"
      />
    </rect>
    <rect
      width="6"
      height="20"
      x="47"
      y="40"
      rx="3"
      ry="3"
      transform="rotate(-25.714 -15.72 65)"
    >
      <animate
        attributeName="opacity"
        begin="-0.07142857142857142s"
        dur="1s"
        from="1"
        repeatCount="indefinite"
        to="0"
      />
    </rect>
  </SVG>
)
