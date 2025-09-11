import React, { useLayoutEffect } from 'react'
import { DismissButton, Overlay, usePopover } from 'react-aria'
import { useSingleSelectContext } from '../../context'
import { type PopoverProps, type SelectItem } from '../../types'
import { usePositioningStyles, useSupportsAnchorPositioning } from './utils'

import styles from './Popover.module.css'

export const Popover = <T extends SelectItem>({
  state,
  popoverRef,
  children,
  ...restProps
}: PopoverProps<T>): React.ReactElement => {
  const { anchorName } = useSingleSelectContext()
  const manualPopoverRef = React.useRef<HTMLDivElement>(null)

  const { popoverProps } = usePopover(
    {
      ...restProps,
      popoverRef,
    },
    state,
  )

  const supportsAnchorPositioning = useSupportsAnchorPositioning()
  const { popoverStyle, isPositioned, updatePosition } = usePositioningStyles(
    restProps.triggerRef as React.RefObject<HTMLElement>,
    manualPopoverRef,
    anchorName,
  )

  useLayoutEffect(() => {
    if (!supportsAnchorPositioning) return
    if (!state.isOpen) return

    updatePosition()
  }, [state.isOpen, supportsAnchorPositioning, updatePosition])

  useLayoutEffect(() => {
    if (!supportsAnchorPositioning) return

    const popover = manualPopoverRef?.current
    if (!popover?.showPopover || !popover?.hidePopover) return

    if (state.isOpen) {
      popover.showPopover()
    } else {
      popover.hidePopover()
    }
  }, [supportsAnchorPositioning, state.isOpen, isPositioned])

  const manualPopover = (
    <div
      // @ts-expect-error - popover attribute is not included in current ts version, ignore type error
      popover="manual"
      ref={manualPopoverRef}
      className={styles.popover}
      style={popoverStyle}
    >
      {children}
    </div>
  )

  return (
    <>
      {state.isOpen && (
        <Overlay>
          <div
            id="popover-id"
            {...popoverProps}
            ref={popoverRef}
            style={{
              ...popoverProps.style,
            }}
            className={styles.popover}
          >
            <DismissButton onDismiss={state.close} />
            {supportsAnchorPositioning ? manualPopover : children}
            <DismissButton onDismiss={state.close} />
          </div>
        </Overlay>
      )}
    </>
  )
}
