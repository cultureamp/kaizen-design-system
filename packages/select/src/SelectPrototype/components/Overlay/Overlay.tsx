/* eslint-disable jsx-a11y/no-autofocus */
import React from "react"
import { FocusScope } from "@react-aria/focus"
import { useOverlay, DismissButton } from "@react-aria/overlays"
import { State } from "../../types"
import styles from "./Overlay.module.scss"

export type OverlayProps = {
  children: React.ReactNode
} & State

export const Overlay: React.VFC<OverlayProps> = ({ children, state }) => {
  // Handle events that should cause the menu to close,
  // e.g. blur, clicking outside, or pressing the escape key.
  const overlayRef = React.useRef<HTMLDivElement>(null)
  const { overlayProps } = useOverlay(
    { isDismissable: true, isOpen: state.isOpen, onClose: state.close },
    overlayRef
  )

  // Wrap in <FocusScope> so that focus is restored back to the trigger when the menu is closed
  // and auto focus on the first focusable item after loading. (disable eslint no-autofocus error for it)
  // In addition, add hidden <DismissButton> components at the start and end of the list
  // to allow screen reader users to dismiss the popup easily.
  return (
    <div {...overlayProps} ref={overlayRef} className={styles.menuPopup}>
      <FocusScope contain autoFocus restoreFocus>
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </FocusScope>
    </div>
  )
}

Overlay.displayName = "Overlay"
