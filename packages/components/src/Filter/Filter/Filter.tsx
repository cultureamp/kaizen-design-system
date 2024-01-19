import React, {
  HTMLAttributes,
  useEffect,
  useId,
  useRef,
  useState,
} from "react"
import { FocusOn } from "react-focus-on"
import { OverrideClassName } from "~types/OverrideClassName"
import { FilterPopover } from "./subcomponents/FilterPopover"
import { FilterTriggerRef } from "./types"

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
  }, [filterButtonRef.current?.triggerRef?.current, onMount])

  return (
    <div className={classNameOverride} {...restProps}>
      {React.cloneElement(trigger, {
        ref: filterButtonRef,
      })}
      {isRefLoaded && isOpen && (
        <FocusOn
          scrollLock={false}
          onClickOutside={(): void => setIsOpen(false)}
          onEscapeKey={(): void => setIsOpen(false)}
        >
          <FilterPopover
            referenceElement={
              filterButtonRef.current?.triggerRef?.current || null
            }
            aria-labelledby={trigger.props.id}
          >
            {children}
          </FilterPopover>
        </FocusOn>
      )}
    </div>
  )
}

Filter.displayName = "Filter"
