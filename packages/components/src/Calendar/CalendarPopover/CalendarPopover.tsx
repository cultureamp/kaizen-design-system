import React, { HTMLAttributes, useState } from 'react'
import {
  autoUpdate,
  offset,
  useFloating,
  UseFloatingOptions,
  size,
  autoPlacement,
} from '@floating-ui/react-dom'
import classnames from 'classnames'
import { OverrideClassName } from '~components/types/OverrideClassName'
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
  const [floatingElement, setFloatingElement] = useState<HTMLDivElement | null>(
    null,
  )

  const { floatingStyles } = useFloating({
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

  return (
    <div
      ref={setFloatingElement}
      style={floatingStyles}
      className={classnames(styles.calendarPopover, classNameOverride)}
      role="dialog"
      aria-modal="true"
      {...restProps}
    >
      {children}
    </div>
  )
}

CalendarPopover.displayName = 'CalendarPopover'
