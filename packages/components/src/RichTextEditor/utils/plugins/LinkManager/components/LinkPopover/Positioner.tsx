import React, { forwardRef, useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import debounce from "lodash.debounce"
import { SelectionPosition } from "../../types"

export const Positioner = forwardRef<HTMLElement, SelectionPosition>(
  ({ top, left, height, width }, ref) => {
    const [portalContainer, setPortalContainer] = useState<HTMLElement>()
    const [windowScroll, setWindowScroll] = useState<[number, number]>()

    useEffect(() => {
      setWindowScroll([window.scrollX, window.scrollY])
      setPortalContainer(document.body)
    }, [])

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

    if (windowScroll === undefined || portalContainer === undefined) return null

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
      portalContainer
    )
  }
)

Positioner.displayName = "Positioner"
