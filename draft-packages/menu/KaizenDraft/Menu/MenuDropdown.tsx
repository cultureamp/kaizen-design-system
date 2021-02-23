import classnames from "classnames"
import React, { useEffect, useRef } from "react"
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
}

const MenuDropdown = ({
  children,
  position,
  id,
  hideMenuDropdown,
  autoHide = "on",
  align = "left",
  width = "default",
}: MenuDropdownProps) => {
  const menu = useRef<HTMLDivElement | null>(null)

  // This callback handler will not run when autoHide === "off"
  const handleDocumentClickForAutoHide = (e: MouseEvent) => {
    if (
      menu?.current &&
      e.target instanceof Node &&
      !menu.current.contains(e.target)
    ) {
      hideMenuDropdown()
    }
  }

  const positionMenu = () => {
    if (!position || !menu) {
      return
    }

    if (menu.current) {
      const { innerHeight } = window
      const rect = menu.current.getBoundingClientRect()
      const offsetParentRect = menu.current.offsetParent?.getBoundingClientRect()

      const offsetParentHeight = offsetParentRect?.height || 0

      menu.current.style.bottom =
        // If the menu won't fit below the the menu button, show it above instead.
        // For some reason, a 5px buffer was needed.
        position.bottom + 5 > innerHeight - rect.height &&
        // ...but, do not display it above the menu button, if there's not enough
        // room, otherwise the user won't even be able to scroll high enough to
        // see the menu items!
        rect.top - rect.height - offsetParentHeight - 10 >= 0
          ? `${offsetParentHeight + 5}px`
          : "auto"
    }
  }

  const handleDocumentResize = () => {
    hideMenuDropdown()
  }

  const handleRootClick = (): void => {
    if (autoHide === "on") {
      // ie. is not equal to "off" | "outside-click-only"
      hideMenuDropdown()
    }
  }

  useEffect(() => {
    if (autoHide !== "off") {
      document.addEventListener("click", handleDocumentClickForAutoHide, false)
    }
    window.addEventListener("resize", handleDocumentResize, false)
    positionMenu()

    return () => {
      if (autoHide !== "off") {
        document.removeEventListener(
          "click",
          handleDocumentClickForAutoHide,
          false
        )
      }
      window.removeEventListener("resize", handleDocumentResize, false)
    }
  }, [autoHide])

  return (
    <div
      id={id}
      className={classnames(styles.menuContainer, {
        [styles.defaultWidth]: width == "default",
        [styles.alignRight]: align == "right",
      })}
      ref={menu}
      onClick={handleRootClick}
    >
      {children}
    </div>
  )
}

export default MenuDropdown
