/* eslint-disable jsx-a11y/no-autofocus */
import React from "react"
import ReactDOM from "react-dom"
import { FocusScope } from "@react-aria/focus"
import { DismissButton, usePopover } from "@react-aria/overlays"
import { useSelectContext } from "../../context/SelectContext"
import styles from "./Overlay.module.scss"

export type OverlayProps = {
  children: React.ReactNode
  triggerRef: React.RefObject<Element>
}

export const Overlay = ({
  children,
  triggerRef,
}: OverlayProps): JSX.Element => {
  // Handle events that should cause the menu to close,
  // e.g. blur, clicking outside, or pressing the escape key.
  const { state } = useSelectContext()

  const popoverRef = React.useRef<HTMLDivElement>(null)
  const { popoverProps } = usePopover(
    {
      triggerRef,
      popoverRef,
      isNonModal: true,
      placement: "bottom left",
    },
    state
  )

  const { width } = triggerRef.current?.getBoundingClientRect() || {}
  // Wrap in <FocusScope> so that focus is restored back to the trigger when the menu is closed
  // and auto focus on the first focusable item after loading. (disable eslint no-autofocus error for it)
  // In addition, add hidden <DismissButton> components at the start and end of the list
  // to allow screen reader users to dismiss the popup easily.
  const contents = (
    <div
      {...popoverProps}
      ref={popoverRef}
      style={{ ...popoverProps.style, width }}
      className={styles.menuPopup}
    >
      <FocusScope contain autoFocus restoreFocus>
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </FocusScope>
    </div>
  )
  return ReactDOM.createPortal(contents, document.body)
}
