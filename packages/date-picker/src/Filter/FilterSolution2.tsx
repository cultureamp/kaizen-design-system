import React, { forwardRef, HTMLAttributes, useRef, useState } from "react"
import classnames from "classnames"
import { FocusOn } from "react-focus-on"
import { OverrideClassName } from "@kaizen/component-base"
import { isRefObject } from "../utils/isRefObject"
import { FilterTriggerButtonProps } from "./components"
import { FilterPopover } from "./components/FilterPopover"
import { FilterProvider } from "./context/useFilterContext"
import styles from "./Filter.module.scss"

export interface FilterSolution2RefProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children: React.ReactNode
  // This ensures `ref` exists
  // The `any` can probably be scoped better
  filterButton: (
    props?: Partial<FilterTriggerButtonProps>
  ) => React.FunctionComponentElement<any>
}

export const FilterSolution2Ref = React.forwardRef<
  HTMLButtonElement,
  FilterSolution2RefProps
>(({ children, filterButton, classNameOverride, ...restProps }, ref) => {
  // If the consumer uses the legacy `createRef`, it will not work
  const consumerRef = isRefObject(ref) ? ref : null
  const inbuiltButtonRef = useRef<HTMLButtonElement>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const filterButtonComponent = filterButton({
    onClick: (): void => setIsOpen(!isOpen),
    isOpen,
  })

  return (
    <div
      className={classnames(styles.filter, classNameOverride)}
      {...restProps}
    >
      {React.cloneElement(filterButtonComponent, {
        ref: filterButtonComponent.ref ?? consumerRef ?? inbuiltButtonRef,
        ...filterButtonComponent.props,
      })}
      {isOpen && (
        <FocusOn
          scrollLock={false}
          onClickOutside={(): void => setIsOpen(false)}
          onEscapeKey={(): void => setIsOpen(false)}
        >
          <FilterPopover
            referenceElement={consumerRef?.current ?? inbuiltButtonRef.current}
            // Does the popper need this or just the contents?
            // aria-label={label}
          >
            {children}
          </FilterPopover>
        </FocusOn>
      )}
    </div>
  )
})
FilterSolution2Ref.displayName = "FilterSolution2Select"

export interface FilterSolution2ContextProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children: React.ReactNode
  label: string
  defaultSelectedValuesLabel?: FilterTriggerButtonProps["selectedValue"]
  // This ensures `ref` exists
  // The `any` can probably be scoped better
  filterButton: (
    props?: Partial<FilterTriggerButtonProps>
  ) => React.FunctionComponentElement<any>
}

export const FilterSolution2Context = React.forwardRef<
  HTMLButtonElement,
  FilterSolution2ContextProps
>(
  (
    {
      children,
      label,
      defaultSelectedValuesLabel,
      filterButton,
      classNameOverride,
      ...restProps
    },
    ref
  ) => {
    // If the consumer uses the legacy `createRef`, it will not work
    const consumerRef = isRefObject(ref) ? ref : null
    const inbuiltButtonRef = useRef<HTMLButtonElement>(null)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const filterButtonComponent = filterButton({
      onClick: (): void => setIsOpen(!isOpen),
      isOpen,
    })

    return (
      <FilterProvider
        label={label}
        defaultSelectedValuesLabel={defaultSelectedValuesLabel}
      >
        <div
          className={classnames(styles.filter, classNameOverride)}
          {...restProps}
        >
          {React.cloneElement(filterButtonComponent, {
            ref: filterButtonComponent.ref ?? consumerRef ?? inbuiltButtonRef,
            ...filterButtonComponent.props,
          })}
          {isOpen && (
            <FocusOn
              scrollLock={false}
              onClickOutside={(): void => setIsOpen(false)}
              onEscapeKey={(): void => setIsOpen(false)}
            >
              <FilterPopover
                referenceElement={
                  consumerRef?.current ?? inbuiltButtonRef.current
                }
                // Does the popper need this or just the contents?
                // aria-label={label}
              >
                {children}
              </FilterPopover>
            </FocusOn>
          )}
        </div>
      </FilterProvider>
    )
  }
)
FilterSolution2Context.displayName = "FilterSolution2Context"


export interface FilterSolutionFlexiRefProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children: React.ReactNode
  label: string
  defaultSelectedValuesLabel?: FilterTriggerButtonProps["selectedValue"]
  // This ensures `ref` exists
  // The `any` can probably be scoped better
  filterButton: (
    triggerButtonProps:
    // { ref?: React.RefObject<HTMLButtonElement> }
    & Partial<FilterTriggerButtonProps>
  // ) => React.FunctionComponentElement<any>
  ) => JSX.Element & { ref?: React.RefObject<FilterRef> }
}

export type FilterRef = {
  triggerButtonRef?: React.RefObject<HTMLButtonElement>
}

export const FilterSolutionFlexiRef = ({
  label,
  defaultSelectedValuesLabel,
  children, filterButton, classNameOverride, ...restProps
}: FilterSolutionFlexiRefProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const filterButtonComponent = filterButton({
    onClick: (): void => setIsOpen(!isOpen),
    isOpen,
  })

  // If the consumer uses the legacy `createRef`, it will not work
  // const consumerRef = isRefObject(filterButtonComponent.ref) ? filterButtonComponent.ref : null

  const inbuiltButtonRef = useRef<HTMLButtonElement>(null)
  const inbuiltRef = useRef<FilterRef>({
    triggerButtonRef: inbuiltButtonRef
  })
  // const theButtonRef = useRef<FilterRef>(filterButtonComponent.ref || null)

  const filterButtonRef = filterButtonComponent.ref ?? inbuiltRef
// console.log("filterButtonComponent.ref", filterButtonComponent.ref)

  // const filterButtonRef = filterButtonComponent.ref && isRefObject(filterButtonComponent.ref)
  //   ? filterButtonComponent.ref
  //   : inbuiltRef

  return (
    <FilterProvider
    label={label}
    defaultSelectedValuesLabel={defaultSelectedValuesLabel}
  >
    <div
      className={classnames(styles.filter, classNameOverride)}
      {...restProps}
    >
      {React.cloneElement(filterButtonComponent, {
        ref: filterButtonRef,
      })}
      {isOpen && (
        <FocusOn
          scrollLock={false}
          onClickOutside={(): void => setIsOpen(false)}
          onEscapeKey={(): void => setIsOpen(false)}
        >
          <FilterPopover
            referenceElement={filterButtonRef.current?.triggerButtonRef?.current || null}
            // Does the popper need this or just the contents?
            // aria-label={label}
          >
            {children}
          </FilterPopover>
        </FocusOn>
      )}
    </div>
    </FilterProvider>
  )
}
FilterSolutionFlexiRef.displayName = "FilterSolutionFlexiRef"
