import React from "react"
import { useOverlay, DismissButton } from "@react-aria/overlays"
import classNames from "classnames"
import { FocusScope } from "@react-aria/focus"
import { mergeProps } from "@react-aria/utils"
import { useMenuTriggerContext } from "../../provider"
import styles from "./MenuPopup.scss"

// TODO: it is an internal component, do we want put it in a new folder?
export interface MenuPopupProps {
  children: React.ReactNode
}

export const MenuPopup: React.VFC<MenuPopupProps> = ({ children }) => {
  const { menuTriggerState, menuProps } = useMenuTriggerContext()

  const onClose = () => {
    menuTriggerState.close()
  }
  // Handle events that should cause the menu to close,
  // e.g. blur, clicking outside, or pressing the escape key.
  const overlayRef = React.createRef<HTMLDivElement>()
  const { overlayProps } = useOverlay(
    {
      onClose,
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
  return menuTriggerState.isOpen ? (
    // TODO: where should the autoFocus be, the list of the first element (could be search?)
    // Also eslint error for auto focus
    // eslint-disable-next-line jsx-a11y/no-autofocus
    <FocusScope contain autoFocus restoreFocus>
      <div
        {...mergeProps(overlayProps, menuProps)}
        ref={overlayRef}
        className={classNames(styles.menuPopup, styles.defaultWidth)}
      >
        <DismissButton onDismiss={onClose} />

        {children}
        <DismissButton onDismiss={onClose} />
      </div>
    </FocusScope>
  ) : (
    <></>
  )
}

MenuPopup.displayName = "MenuPopup"
