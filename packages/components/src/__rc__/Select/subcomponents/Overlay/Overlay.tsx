import React, { type HTMLAttributes } from 'react'
import { DismissButton, useOverlay } from '@react-aria/overlays'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import { useSelectContext } from '../../context'
import { type SelectOption } from '../../types'

export type OverlayProps = OverrideClassName<HTMLAttributes<HTMLDivElement>> & {
  children: React.ReactNode
}

// Currently this is no longer used in the SelectPopoverContents components as it has been replaced by RACs popover and dialogue. if these are viable and this is used nowhere else then we can remove this
export const Overlay = <Option extends SelectOption>({
  children,
  classNameOverride,
  ...restProps
}: OverlayProps): JSX.Element => {
  const { state } = useSelectContext<Option>()

  // Handle events that should cause the menu to close,
  // e.g. blur, clicking outside, or pressing the escape key.
  const overlayRef = React.useRef<HTMLDivElement>(null)
  const { overlayProps } = useOverlay(
    { isDismissable: true, isOpen: state.isOpen, onClose: state.close },
    overlayRef,
  )

  // Add hidden <DismissButton> components at the start and end of the list
  // to allow screen reader users to dismiss the popup easily.
  return (
    <div ref={overlayRef} className={classNameOverride} {...overlayProps} {...restProps}>
      <DismissButton onDismiss={state.close} />
      {children}
      <DismissButton onDismiss={state.close} />
    </div>
  )
}

Overlay.displayName = 'Overlay'
