import React, { useEffect, useState, type HTMLAttributes } from 'react'
import {
  autoPlacement,
  autoUpdate,
  offset,
  size,
  useFloating,
  type UseFloatingOptions,
} from '@floating-ui/react-dom'
import classnames from 'classnames'
import { FocusOn } from 'react-focus-on'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import { useMenuTriggerContext } from '../../context'
import { type MenuPopupProps } from './MenuPopup'
import styles from './MenuPopup.module.css'

export type FloatingConfig = Pick<
  UseFloatingOptions,
  'placement' | 'strategy' | 'whileElementsMounted'
> & {
  /** Whether the component should automatically resize based on the available window height.
   * @default true
   */
  shouldResize?: boolean
  /** Whether the component should automatically flip to the top of the input based on the available window height.
   * @default true
   */
  shouldFlip?: boolean
}

export type ResponsiveMenuPopupProps = MenuPopupProps & {
  floatingConfig?: FloatingConfig
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

/** This is a popup primitive that can be used with the FilterMultiSelect when there are overflow issues with the original implementation. This uses the floating-ui */
export const ResponsiveMenuPopup = ({
  children,
  floatingConfig = {
    placement: 'bottom-start',
    strategy: 'absolute',
    whileElementsMounted: autoUpdate,
    shouldFlip: true,
    shouldResize: true,
  },
  classNameOverride,
  isLoading,
  loadingSkeleton,
  ...restProps
}: ResponsiveMenuPopupProps): JSX.Element => {
  const [floatingElement, setFloatingElement] = useState<HTMLDivElement | null>(null)
  const { menuTriggerState, buttonRef } = useMenuTriggerContext()
  const referenceElement = buttonRef.current

  const { floatingStyles, update } = useFloating({
    elements: {
      reference: referenceElement,
      floating: floatingElement,
    },
    middleware: [
      offset(6),
      floatingConfig.shouldFlip &&
        autoPlacement({ allowedPlacements: ['bottom-start', 'top-start'] }),
      floatingConfig.shouldResize &&
        size({
          apply({ availableHeight, elements }) {
            Object.assign(elements.floating.style, {
              maxHeight: Math.max(250, Math.min(availableHeight - 12, 500)) + 'px',
            })
          },
        }),
    ],
    ...floatingConfig,
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
      scrollLock={true}
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

ResponsiveMenuPopup.displayName = 'FilterMultiSelect.ResponsiveMenuPopup'
