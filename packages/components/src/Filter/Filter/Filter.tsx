import React, { useEffect, useId, useRef, useState, type HTMLAttributes } from 'react'
import classnames from 'classnames'
import { Dialog as RacDialog, Popover as RacPopover } from 'react-aria-components'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import popoverStyles from './subcomponents/FilterPopover/FilterPopover.module.css'
import { type FilterTriggerRef } from './types'
import styles from './Filter.module.css'

export type FilterProps = {
  children: React.ReactNode
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  renderTrigger: (triggerProps: {
    id: string
    onClick: () => void
    isOpen: boolean
  }) => JSX.Element & { ref?: React.RefObject<FilterTriggerRef> }
  onMount?: (triggerRef: React.RefObject<HTMLButtonElement>) => void
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

export const Filter = ({
  children,
  isOpen,
  setIsOpen,
  renderTrigger,
  classNameOverride,
  onMount,
  ...restProps
}: FilterProps): JSX.Element => {
  const triggerId = useId()
  const [isRefLoaded, setIsRefLoaded] = useState<boolean>(false)

  const trigger = renderTrigger({
    id: triggerId,
    onClick: (): void => setIsOpen(!isOpen),
    isOpen,
  })

  const inbuiltButtonRef = useRef<HTMLButtonElement>(null)
  const inbuiltRef = useRef<FilterTriggerRef>({
    triggerRef: inbuiltButtonRef,
  })
  const filterButtonRef = trigger.ref ?? inbuiltRef

  useEffect(() => {
    if (filterButtonRef.current?.triggerRef?.current) {
      setIsRefLoaded(true)
      onMount?.(filterButtonRef.current.triggerRef)
    }
  }, [filterButtonRef, onMount])

  return (
    <div className={classnames(styles.filter, classNameOverride)} {...restProps}>
      {React.cloneElement(trigger, {
        ref: filterButtonRef,
      })}

      {isRefLoaded && isOpen && (
        <RacPopover
          className={popoverStyles.filterPopover}
          isOpen={isOpen}
          onOpenChange={setIsOpen}
          triggerRef={filterButtonRef.current?.triggerRef}
          offset={15}
          placement="bottom start"
        >
          <RacDialog aria-labelledby={trigger.props.id}>{children}</RacDialog>
        </RacPopover>
      )}
    </div>
  )
}

Filter.displayName = 'Filter'
