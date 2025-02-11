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
import { type OverrideClassName } from '~components/types/OverrideClassName'
import styles from './CalendarPopover.module.scss'

export type CalendarPopoverProps = {
  children: React.ReactNode
  referenceElement: HTMLElement | null
  floatingOptions?: Partial<UseFloatingOptions>
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

/**
 * Only for use with Calendar components.
 * @todo: Replace with Popover when we have a reusable one.
 */
export const CalendarPopover = ({
  children,
  referenceElement,
  floatingOptions,
  classNameOverride,
  ...restProps
}: CalendarPopoverProps): JSX.Element => {
  const [floatingElement, setFloatingElement] = useState<HTMLDivElement | null>(null)

  const { floatingStyles, update } = useFloating({
    placement: 'bottom-start',
    elements: {
      reference: referenceElement,
      floating: floatingElement,
    },
    middleware: [
      size({
        apply({ availableHeight, availableWidth, elements }) {
          Object.assign(elements.floating.style, {
            // 155 is enough of a minimum to cut off half of the second row of dates.
            // This indicates to users that there is more content that is scrollable
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
      // @ts-expect-error this can be removed when we update to react 19
      referenceElement.popoverTargetElement = floatingElement
      floatingElement.showPopover?.()
      update()
    }
  }, [referenceElement, floatingElement, update])

  return (
    <div
      ref={setFloatingElement}
      style={floatingStyles}
      className={classnames(styles.calendarPopover, classNameOverride)}
      role="dialog"
      aria-modal="true"
      // @ts-expect-error this can be removed when we update to react 19
      popover="manual"
      {...restProps}
    >
      {children}
    </div>
  )
}

CalendarPopover.displayName = 'CalendarPopover'
