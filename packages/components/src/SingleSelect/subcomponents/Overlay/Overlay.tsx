import React, { type HTMLAttributes } from 'react'
import { FocusScope } from '@react-aria/focus'
import { DismissButton, useOverlay } from '@react-aria/overlays'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import { useSelectContext } from '../../context'
import { type SingleSelectOption } from '../../types'

export type OverlayProps = OverrideClassName<HTMLAttributes<HTMLDivElement>> & {
  children: React.ReactNode
  popoverRef?: React.RefObject<Element | null>
}

export const Overlay = <Option extends SingleSelectOption>({
  children,
  classNameOverride,
  popoverRef,
  ...restProps
}: OverlayProps): JSX.Element => {
  const { state } = useSelectContext<Option>()

  // Handle events that should cause the menu to close,
  // e.g. blur, clicking outside, or pressing the escape key.
  const overlayRef = React.useRef<HTMLDivElement>(null)
  const { overlayProps } = useOverlay(
    { isDismissable: true, isOpen: state.isOpen, onClose: state.close },
    popoverRef ?? overlayRef,
  )

  // Wrap in <FocusScope> so that focus is restored back to the trigger when the menu is closed
  // and auto focus on the first focusable item after loading. (disable eslint no-autofocus error for it)
  // In addition, add hidden <DismissButton> components at the start and end of the list
  // to allow screen reader users to dismiss the popup easily.
  return (
    <div className={classNameOverride} {...overlayProps} {...restProps}>
      {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
      <FocusScope autoFocus={false} restoreFocus>
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </FocusScope>
    </div>
  )
}

Overlay.displayName = 'Overlay'
