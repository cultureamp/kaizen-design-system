import React, { useCallback, useEffect, useState } from "react"
import classnames from "classnames"
import { usePopper } from "react-popper"
import styles from "./MenuDropdown.module.scss"

export type MenuDropdownProps = {
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
}

export const MenuDropdown = ({
  children,
  referenceElement,
  id,
  hideMenuDropdown,
  autoHide = "on",
  align = "left",
  width = "default",
}: MenuDropdownProps): JSX.Element => {
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
            offset: [0, 6], // value used from the $spacing-xs scss variable,
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
    // Disabling these because we don't want this to be keyboard focusable.
    // Esc keypress should be used instead for the same behaviour (hasn't been implemented here yet)
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      id={id}
      ref={setPopperElement}
      {...attributes.popper}
      style={popperStyles.popper}
      className={classnames(
        styles.menuContainer,
        width == "default" && styles.defaultWidth
      )}
      onClick={handleRootClick}
    >
      {children}
    </div>
  )
}

MenuDropdown.displayName = "MenuDropdown"
