/* eslint-disable jsx-a11y/no-autofocus */
import React, { HTMLAttributes } from "react"
import { FocusScope } from "@react-aria/focus"
import { useOverlay, DismissButton } from "@react-aria/overlays"
import { OverrideClassName } from "@kaizen/component-base"
import { useSelectContext } from "../../Select"
import styles from "./Overlay.module.scss"

export interface OverlayProps
  extends OverrideClassName<HTMLAttributes<HTMLElement>> {
  children: React.ReactNode
}

export const Overlay: React.VFC<OverlayProps> = ({
  children,
  classNameOverride,
}) => {
  // Handle events that should cause the menu to close,
  // e.g. blur, clicking outside, or pressing the escape key.
  const overlayRef = React.useRef<HTMLDivElement>(null)
  const { state } = useSelectContext()
  const { overlayProps } = useOverlay(
    { isDismissable: true, isOpen: state.isOpen, onClose: state.close },
    overlayRef
  )

  // Wrap in <FocusScope> so that focus is restored back to the trigger when the menu is closed
  // and auto focus on the first focusable item after loading. (disable eslint no-autofocus error for it)
  // In addition, add hidden <DismissButton> components at the start and end of the list
  // to allow screen reader users to dismiss the popup easily.
  return (
    <div
      {...overlayProps}
      ref={overlayRef}
      className={(styles.menuPopup, classNameOverride)}
    >
      <FocusScope contain autoFocus restoreFocus>
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </FocusScope>
    </div>
  )
}

Overlay.displayName = "Overlay"
