/* eslint-disable jsx-a11y/no-autofocus */
import React from "react"
import { FocusScope } from "@react-aria/focus"
import { useOverlay, DismissButton } from "@react-aria/overlays"
import { useSelectContext } from "../../provider/SelectProvider"
import styles from "./FloatingSelectWrapper.module.scss"
export interface FloatingSelectWrapperProps {
  children: React.ReactNode
}

export const FloatingSelectWrapper: React.VFC<FloatingSelectWrapperProps> = ({
  children,
}) => {
  const { state } = useSelectContext()
  const onClose = () => {
    state.close()
  }
  // Handle events that should cause the menu to close,
  // e.g. blur, clicking outside, or pressing the escape key.
  const overlayRef = React.createRef<HTMLDivElement>()
  const { overlayProps } = useOverlay(
    {
      onClose,
      isOpen: state.isOpen,
      isDismissable: true,
    },
    overlayRef
  )

  // Wrap in <FocusScope> so that focus is restored back to the trigger when the menu is closed
  // and auto focus on the first focusable item after loading. (disable eslint no-autofocus error for it)
  // In addition, add hidden <DismissButton> components at the start and end of the list
  // to allow screen reader users to dismiss the popup easily.
  return state.isOpen ? (
    <div {...overlayProps} ref={overlayRef} className={styles.menuPopup}>
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
