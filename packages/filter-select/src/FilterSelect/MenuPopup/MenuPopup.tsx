import React from "react"
import { FocusScope } from "@react-aria/focus"
import { useOverlay, DismissButton } from "@react-aria/overlays"
import classNames from "classnames"
import styles from "./MenuPopup.scss"

export interface MenuPopupProps {
  onClose: () => void
  children: React.ReactNode
}

export function MenuPopup({ children, ...props }: MenuPopupProps): JSX.Element {
  // Handle events that should cause the menu to close,
  // e.g. blur, clicking outside, or pressing the escape key.
  const overlayRef = React.createRef<HTMLDivElement>()
  const { overlayProps } = useOverlay(
    {
      onClose: props.onClose,
      shouldCloseOnBlur: true,
      isOpen: true,
      isDismissable: true,
    },
    overlayRef
  )

  // Wrap in <FocusScope> so that focus is restored back to the
  // trigger when the menu is closed. In addition, add hidden
  // <DismissButton> components at the start and end of the list
  // to allow screen reader users to dismiss the popup easily.
  return (
    <FocusScope contain restoreFocus>
      <div
        {...overlayProps}
        ref={overlayRef}
        className={classNames(styles.menuPopup, styles.defaultWidth)}
      >
        <DismissButton onDismiss={props.onClose} />

        {children}
        <DismissButton onDismiss={props.onClose} />
      </div>
    </FocusScope>
  )
}
