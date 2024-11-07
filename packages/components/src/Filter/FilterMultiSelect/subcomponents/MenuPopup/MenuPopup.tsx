import React from "react"
import { FocusScope } from "@react-aria/focus"
import { Overlay, usePopover, DismissButton } from "react-aria"
import { useMenuTriggerContext } from "../../context"
import styles from "./MenuPopup.module.scss"

export type MenuPopupProps = {
  isLoading?: boolean
  loadingSkeleton?: React.ReactNode
  children: React.ReactNode
}

export const MenuPopup = ({
  isLoading,
  loadingSkeleton,
  children,
}: MenuPopupProps): JSX.Element => {
  const { menuTriggerState, buttonRef } = useMenuTriggerContext()

  const onClose = (): void => menuTriggerState.close()

  const popoverRef = React.useRef(null)
  const { popoverProps } = usePopover(
    {
      triggerRef: buttonRef,
      popoverRef,
      placement: "bottom start",
    },
    menuTriggerState
  )

  // Wrap in <FocusScope> so that focus is restored back to the trigger when the menu is closed
  // and auto focus on the first focusable item after loading. (disable eslint no-autofocus error for it)
  // In addition, add hidden <DismissButton> components at the start and end of the list
  // to allow screen reader users to dismiss the popup easily.
  return menuTriggerState.isOpen ? (
    <Overlay>
      <div ref={popoverRef} className={styles.menuPopup} {...popoverProps}>
        {isLoading && loadingSkeleton ? (
          <>
            <DismissButton onDismiss={onClose} />
            {loadingSkeleton}
            <DismissButton onDismiss={onClose} />
          </>
        ) : (
          // eslint-disable-next-line jsx-a11y/no-autofocus
          <FocusScope contain autoFocus restoreFocus>
            <DismissButton onDismiss={onClose} />

            {children}
            <DismissButton onDismiss={onClose} />
          </FocusScope>
        )}
      </div>
    </Overlay>
  ) : (
    <></>
  )
}

MenuPopup.displayName = "FilterMultiSelect.MenuPopup"
