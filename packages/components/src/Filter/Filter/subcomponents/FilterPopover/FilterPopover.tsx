import React, { useState, type HTMLAttributes } from 'react'
import { type Options } from '@popperjs/core'
import classnames from 'classnames'
import { usePopper } from 'react-popper'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import styles from './FilterPopover.module.css'

export type FilterPopoverProps = {
  children: React.ReactNode
  referenceElement: HTMLElement | null
  popperOptions?: Partial<Options>
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

export const FilterPopover = ({
  children,
  referenceElement,
  popperOptions,
  classNameOverride,
  ...restProps
}: FilterPopoverProps): JSX.Element => {
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null)

  const { styles: popperStyles, attributes: popperAttributes } = usePopper(
    referenceElement,
    popperElement,
    {
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 15],
          },
        },
      ],
      placement: 'bottom-start',
      ...popperOptions,
    },
  )

  return (
    <div
      ref={setPopperElement}
      style={popperStyles?.popper}
      {...popperAttributes?.popper}
      className={classnames(styles.filterPopover, classNameOverride)}
      role="dialog"
      aria-modal="true"
      {...restProps}
    >
      {children}
    </div>
  )
}

FilterPopover.displayName = 'FilterPopover'
