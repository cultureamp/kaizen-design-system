import React, { useEffect, useState, type HTMLAttributes } from 'react'
import { createPortal } from 'react-dom'
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
import styles from './MenuPopup.module.css'

export type FloatingConfig = Pick<
  UseFloatingOptions,
  'placement' | 'strategy' | 'whileElementsMounted'
> & {
  shouldResize?: boolean
  shouldFlip?: boolean
}

export type MenuPopupProps = {
  children: React.ReactNode
  isLoading?: boolean
  loadingSkeleton?: React.ReactNode
  floatingConfig?: FloatingConfig
  portalContainer?: Element | DocumentFragment
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

export const MenuPopup = ({
  children,
  floatingConfig = {
    placement: 'bottom-start',
    strategy: 'absolute',
    whileElementsMounted: autoUpdate,
  },
  classNameOverride,
  isLoading,
  loadingSkeleton,
  portalContainer,
  ...restProps
}: MenuPopupProps): JSX.Element | null => {
  const [floatingElement, setFloatingElement] = useState<HTMLDivElement | null>(null)
  const [activePortalContainer, setActivePortalContainer] = useState<
    Element | DocumentFragment | undefined
  >(() => portalContainer ?? (typeof document !== 'undefined' ? document.body : undefined))
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
      buttonRef.current?.focus({ preventScroll: true }) // prevent scroll from snapping to the top when focus is returned
    })
  }

  // Handle SSR - set document.body as fallback once component mounts
  useEffect(() => {
    if (!portalContainer && typeof document !== 'undefined' && !activePortalContainer) {
      setActivePortalContainer(document.body)
    }
  }, [portalContainer, activePortalContainer])

  useEffect(() => {
    if (portalContainer) {
      setActivePortalContainer(portalContainer)
    }
  }, [portalContainer])

  useEffect(() => {
    if (floatingElement && referenceElement) {
      update()
    }
  }, [floatingElement, referenceElement, update])

  return menuTriggerState.isOpen && activePortalContainer
    ? createPortal(
        <FocusOn
          enabled={menuTriggerState.isOpen}
          scrollLock={false}
          returnFocus={false}
          onClickOutside={menuTriggerState.close}
          onEscapeKey={menuTriggerState.close}
          onDeactivation={handleReturnFocus}
          preventScrollOnFocus={floatingConfig.shouldFlip ?? floatingConfig.shouldResize ?? false}
        >
          <div
            ref={setFloatingElement}
            style={floatingStyles}
            className={classnames(styles.menuPopup, classNameOverride)}
            role="dialog"
            aria-modal="true"
            {...restProps}
          >
            {isLoading && loadingSkeleton ? loadingSkeleton : children}
          </div>
        </FocusOn>,
        activePortalContainer,
      )
    : null
}

MenuPopup.displayName = 'FilterMultiSelect.MenuPopup'
