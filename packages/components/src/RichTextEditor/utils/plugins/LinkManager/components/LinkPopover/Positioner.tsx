import React, { forwardRef, useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import debounce from "lodash.debounce"
import { SelectionPosition } from "../../types"

export const Positioner = forwardRef(
  (
    { top, left, height, width }: SelectionPosition,
    ref: React.Ref<HTMLElement>
  ) => {
    const [windowScroll, setWindowScroll] = useState<[number, number]>([
      window.scrollX,
      window.scrollY,
    ])

    const onResize = useRef(
      debounce(() => setWindowScroll([window.scrollX, window.scrollY]), 15)
    )

    useEffect(() => {
      const resizeCurrent = onResize.current
      window.addEventListener("resize", resizeCurrent)
      return () => {
        window.removeEventListener("resize", resizeCurrent)
      }
    }, [setWindowScroll, onResize])

    const [x, y] = windowScroll

    return createPortal(
      <div
        ref={ref as React.Ref<HTMLDivElement>}
        style={{
          height: `${height}px`,
          left: `${left + x}px`,
          pointerEvents: "none",
          position: "absolute",
          top: `${top + y}px`,
          width: `${width}px`,
        }}
      />,
      document.body
    )
  }
)

Positioner.displayName = "Positioner"
