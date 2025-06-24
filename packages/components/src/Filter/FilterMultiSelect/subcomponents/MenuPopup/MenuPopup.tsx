import React, { useEffect, useState, type HTMLAttributes } from 'react'
import { autoUpdate, offset, useFloating, type UseFloatingOptions } from '@floating-ui/react-dom'
import classnames from 'classnames'
import { FocusOn } from 'react-focus-on'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import { useMenuTriggerContext } from '../../context'
import styles from './MenuPopup.module.css'

export type MenuPopupProps = {
  children: React.ReactNode
  floatingOptions?: Partial<UseFloatingOptions>
  isLoading?: boolean
  loadingSkeleton?: React.ReactNode
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

export const MenuPopup = ({
  children,
  floatingOptions,
  classNameOverride,
  isLoading,
  loadingSkeleton,
  ...restProps
}: MenuPopupProps): JSX.Element => {
  const [floatingElement, setFloatingElement] = useState<HTMLDivElement | null>(null)
  const { menuTriggerState, buttonRef } = useMenuTriggerContext()

  const referenceElement = buttonRef.current

  const { floatingStyles, update } = useFloating({
    placement: 'bottom-start',
    elements: {
      reference: referenceElement,
      floating: floatingElement,
    },
    strategy: 'absolute',
    middleware: [offset(6)],
    whileElementsMounted: autoUpdate,
    ...floatingOptions,
  })

  const handleReturnFocus = (): void => {
    requestAnimationFrame(() => {
      buttonRef.current?.focus()
    })
  }

  useEffect(() => {
    if (floatingElement && referenceElement) {
      floatingElement.showPopover?.()
      update()
    }
  }, [floatingElement, referenceElement, update])

  return menuTriggerState.isOpen ? (
    <FocusOn
      enabled={menuTriggerState.isOpen}
      scrollLock={false}
      returnFocus={false}
      onClickOutside={menuTriggerState.close}
      onEscapeKey={menuTriggerState.close}
      onDeactivation={handleReturnFocus}
    >
      <div
        ref={setFloatingElement}
        style={floatingStyles}
        className={classnames(styles.menuPopup, classNameOverride)}
        role="dialog"
        aria-modal="true"
        // @ts-expect-error: popover is valid in supported browsers
        popover="manual"
        {...restProps}
      >
        {isLoading && loadingSkeleton ? loadingSkeleton : children}
      </div>
    </FocusOn>
  ) : (
    <></>
  )
}

MenuPopup.displayName = 'FilterMultiSelect.MenuPopup'
