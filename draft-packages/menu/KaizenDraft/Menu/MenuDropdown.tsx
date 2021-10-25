import classnames from "classnames"
import React, { ElementType, useCallback, useEffect, useState } from "react"
import { usePopper } from "react-popper"
import styles from "./styles.scss"

type MenuDropdownProps = {
  id?: string
  hideMenuDropdown: () => void
  position?: {
    top: number
    bottom: number
    left: number
    right: number
  } | null
  align?: "left" | "right"
  width?: "default" | "contain"
  autoHide?: "on" | "outside-click-only" | "off"
  children: React.ReactNode
  referenceElement: HTMLElement | null
  tag?: ElementType<any>
}

const MenuDropdown = ({
  children,
  referenceElement,
  id,
  hideMenuDropdown,
  autoHide = "on",
  align = "left",
  width = "default",
  tag = "ul",
}: MenuDropdownProps) => {
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  )
  const { styles: popperStyles, attributes } = usePopper(
    referenceElement,
    popperElement,
    {
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 6], // value used from the $kz-var-spacing-xs scss variable,
          },
        },
        {
          name: "preventOverflow",
          options: {
            // Gives some room so the menu shadow doesn't get clipped if near the edge of the viewport.
            padding: 8,
          },
        },
      ],
      placement: align === "left" ? "bottom-start" : "bottom-end",
    }
  )

  // This callback handler will not run when autoHide === "off"
  const handleDocumentClickForAutoHide = useCallback(
    (e: MouseEvent) => {
      if (
        popperElement &&
        e.target instanceof Node &&
        !popperElement.contains(e.target) &&
        referenceElement !== e.target &&
        !referenceElement?.contains(e.target)
      ) {
        hideMenuDropdown()
      }
    },
    [popperElement, referenceElement, hideMenuDropdown]
  )

  const handleDocumentResize = useCallback(() => {
    hideMenuDropdown()
  }, [hideMenuDropdown])

  const handleRootClick = (): void => {
    if (autoHide === "on") {
      // ie. is not equal to "off" | "outside-click-only"
      hideMenuDropdown()
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleDocumentResize, false)

    return () => {
      window.removeEventListener("resize", handleDocumentResize, false)
    }
  }, [handleDocumentResize])

  useEffect(() => {
    if (autoHide !== "off") {
      document.addEventListener("click", handleDocumentClickForAutoHide, true)
    }

    return () => {
      if (autoHide !== "off") {
        document.removeEventListener(
          "click",
          handleDocumentClickForAutoHide,
          true
        )
      }
    }
  }, [autoHide, handleDocumentClickForAutoHide])

  return (
    <div
      id={id}
      ref={setPopperElement}
      {...attributes.popper}
      style={popperStyles.popper}
      className={classnames(styles.menuContainer, {
        [styles.defaultWidth]: width == "default",
      })}
      onClick={handleRootClick}
    >
      {React.createElement(tag, { className: styles.menuList }, children)}
    </div>
  )
}

export default MenuDropdown
