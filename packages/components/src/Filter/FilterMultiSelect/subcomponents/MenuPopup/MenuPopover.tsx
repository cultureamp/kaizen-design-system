import React, { useEffect, useState, type HTMLAttributes } from 'react'
import {
  autoPlacement,
  autoUpdate,
  offset,
  size,
  useFloating,
  type UseFloatingOptions,
} from '@floating-ui/react-dom'
import { FocusScope } from '@react-aria/focus'
import classnames from 'classnames'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import { useMenuTriggerContext } from '../../context'
import styles from './MenuPopup.module.scss'

export type MenuPopoverProps = {
  children: React.ReactNode
  floatingOptions?: Partial<UseFloatingOptions>
  isLoading?: boolean
  loadingSkeleton?: React.ReactNode
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

export const MenuPopover = ({
  children,
  floatingOptions,
  classNameOverride,
  isLoading,
  loadingSkeleton,
  ...restProps
}: MenuPopoverProps): JSX.Element => {
  const [floatingElement, setFloatingElement] = useState<HTMLDivElement | null>(null)
  const { menuTriggerState, buttonRef } = useMenuTriggerContext()

  const referenceElement = buttonRef.current

  const { floatingStyles, update } = useFloating({
    placement: 'bottom-start',
    elements: {
      reference: referenceElement,
      floating: floatingElement,
    },
    strategy: 'fixed',
    middleware: [
      size({
        apply({ availableHeight, availableWidth, elements }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${Math.max(availableHeight - 25, 155)}px`,
            maxWidth: `${availableWidth}px`,
          })
        },
      }),
      offset(15),
      autoPlacement({
        allowedPlacements: ['bottom-start', 'bottom', 'top-start', 'top'],
      }),
    ],
    whileElementsMounted: autoUpdate,
    ...floatingOptions,
  })

  useEffect(() => {
    if (floatingElement && referenceElement) {
      referenceElement.popoverTargetElement = floatingElement
      floatingElement.showPopover?.()
      update()
    }
  }, [floatingElement, referenceElement, update])

  return menuTriggerState.isOpen ? (
    <div
      ref={setFloatingElement}
      style={floatingStyles}
      className={classnames(styles.menuPopover, classNameOverride)}
      role="dialog"
      aria-modal="true"
      // @ts-expect-error: popover is valid in supported browsers
      popover="manual"
      {...restProps}
    >
      {isLoading && loadingSkeleton ? (
        loadingSkeleton
      ) : (
        // eslint-disable-next-line jsx-a11y/no-autofocus
        <FocusScope contain autoFocus restoreFocus>
          {children}
        </FocusScope>
      )}
    </div>
  ) : (
    <></>
  )
}

MenuPopover.displayName = 'FilterMultiSelect.MenuPopover'
