import React from 'react'
import { FocusScope } from '@react-aria/focus'
import { DismissButton, useOverlay } from '@react-aria/overlays'
import { useMenuTriggerContext } from '../../context'
import styles from './MenuPopup.module.css'

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
  const { menuTriggerState } = useMenuTriggerContext()

  const onClose = (): void => menuTriggerState.close()

  // Handle events that should cause the menu to close,
  // e.g. blur, clicking outside, or pressing the escape key.
  const overlayRef = React.createRef<HTMLDivElement>()
  const { overlayProps } = useOverlay(
    {
      onClose,
      isOpen: menuTriggerState.isOpen,
      isDismissable: true,
    },
    overlayRef,
  )

  console.log('overlayProps', overlayProps)

  // Wrap in <FocusScope> so that focus is restored back to the trigger when the menu is closed
  // and auto focus on the first focusable item after loading. (disable eslint no-autofocus error for it)
  // In addition, add hidden <DismissButton> components at the start and end of the list
  // to allow screen reader users to dismiss the popup easily.
  return menuTriggerState.isOpen ? (
    <div {...overlayProps} ref={overlayRef} className={styles.menuPopup}>
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
  ) : (
    <></>
  )
}

MenuPopup.displayName = 'FilterMultiSelect.MenuPopup'
