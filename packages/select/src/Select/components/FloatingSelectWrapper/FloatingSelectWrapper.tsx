/* eslint-disable jsx-a11y/no-autofocus */
import React, { useEffect, useState } from "react"
import { FocusScope } from "@react-aria/focus"
import { useOverlay, DismissButton } from "@react-aria/overlays"
import { mergeProps } from "@react-aria/utils"
import { useMenuTriggerContext } from "../../provider"
import styles from "./FloatingSelectWrapper.module.scss"
export interface FloatingSelectWrapperProps {
  children: React.ReactNode
}

export const FloatingSelectWrapper: React.VFC<FloatingSelectWrapperProps> = ({
  children,
}) => {
  const { menuTriggerState, menuProps, buttonRef, isFullWidth } =
    useMenuTriggerContext()
  const [width, setWidth] = useState<number | undefined>(undefined)
  const onClose = () => {
    menuTriggerState.close()
  }
  // Handle events that should cause the menu to close,
  // e.g. blur, clicking outside, or pressing the escape key.
  const overlayRef = React.createRef<HTMLDivElement>()
  const { overlayProps } = useOverlay(
    {
      onClose,
      isOpen: menuTriggerState.isOpen,
      isDismissable: true,
    },
    overlayRef
  )

  const setWidthBasedOnButton = (): void => {
    if (isFullWidth && buttonRef.current != null) {
      return setWidth(buttonRef.current.clientWidth)
    }
    return setWidth(undefined)
  }

  useEffect(() => {
    window.addEventListener("resize", setWidthBasedOnButton)
  })

  useEffect(() => {
    setWidthBasedOnButton()
  }, [menuTriggerState.isOpen])

  // Wrap in <FocusScope> so that focus is restored back to the trigger when the menu is closed
  // and auto focus on the first focusable item after loading. (disable eslint no-autofocus error for it)
  // In addition, add hidden <DismissButton> components at the start and end of the list
  // to allow screen reader users to dismiss the popup easily.
  return menuTriggerState.isOpen ? (
    <div
      {...mergeProps(overlayProps, menuProps)}
      ref={overlayRef}
      className={styles.menuPopup}
      style={{
        width: width != null ? `${width}px` : undefined,
        minWidth: !isFullWidth ? "248px" : undefined,
      }}
    >
      <FocusScope contain autoFocus restoreFocus>
        <DismissButton onDismiss={onClose} />

        {children}
        <DismissButton onDismiss={onClose} />
      </FocusScope>
    </div>
  ) : (
    <></>
  )
}

FloatingSelectWrapper.displayName = "FloatingSelectWrapper"
