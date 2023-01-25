import React, { forwardRef, HTMLAttributes, useRef, useState } from "react"
import classnames from "classnames"
import { FocusOn } from "react-focus-on"
import { OverrideClassName } from "@kaizen/component-base"
import { isRefObject } from "../utils/isRefObject"
import { FilterTriggerButtonProps } from "./components"
import { FilterPopover } from "./components/FilterPopover"
import { FilterProvider } from "./context/useFilterContext"
import styles from "./Filter.module.scss"

// export interface FilterSolution2RefProps
//   extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
//   children: React.ReactNode
//   // This ensures `ref` exists
//   // The `any` can probably be scoped better
//   filterButton: (
//     props?: Partial<FilterTriggerButtonProps>
//   ) => React.FunctionComponentElement<any>
// }

// export const FilterSolution2Ref = React.forwardRef<
//   HTMLButtonElement,
//   FilterSolution2RefProps
// >(({ children, filterButton, classNameOverride, ...restProps }, ref) => {
//   // If the consumer uses the legacy `createRef`, it will not work
//   const consumerRef = isRefObject(ref) ? ref : null
//   const inbuiltButtonRef = useRef<HTMLButtonElement>(null)
//   const [isOpen, setIsOpen] = useState<boolean>(false)

//   const filterButtonComponent = filterButton({
//     onClick: (): void => setIsOpen(!isOpen),
//     isOpen,
//   })

//   return (
//     <div
//       className={classnames(styles.filter, classNameOverride)}
//       {...restProps}
//     >
//       {React.cloneElement(filterButtonComponent, {
//         ref: filterButtonComponent.ref ?? consumerRef ?? inbuiltButtonRef,
//         ...filterButtonComponent.props,
//       })}
//       {isOpen && (
//         <FocusOn
//           scrollLock={false}
//           onClickOutside={(): void => setIsOpen(false)}
//           onEscapeKey={(): void => setIsOpen(false)}
//         >
//           <FilterPopover
//             referenceElement={consumerRef?.current ?? inbuiltButtonRef.current}
//             // Does the popper need this or just the contents?
//             // aria-label={label}
//           >
//             {children}
//           </FilterPopover>
//         </FocusOn>
//       )}
//     </div>
//   )
// })
// FilterSolution2Ref.displayName = "FilterSolution2Select"

export interface FilterSolution2FlexiButtonRefProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children: React.ReactNode
  label: string
  defaultSelectedValuesLabel?: FilterTriggerButtonProps["selectedValue"]
  filterButton: (
    props?: Partial<FilterTriggerButtonProps>
  ) => JSX.Element & { ref?: React.RefObject<any> }
}

export const FilterSolution2FlexiButtonRef = React.forwardRef<
  HTMLButtonElement,
  FilterSolution2FlexiButtonRefProps
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
FilterSolution2FlexiButtonRef.displayName = "FilterSolution2FlexiButtonRef"


export interface FilterSolution2ForcedButtonRefProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children: React.ReactNode
  label: string
  defaultSelectedValuesLabel?: FilterTriggerButtonProps["selectedValue"]
  filterButton: (
    triggerButtonProps:
    & Partial<FilterTriggerButtonProps>
  ) => JSX.Element & { ref?: React.RefObject<FilterRef> }
}

export type FilterRef = {
  triggerButtonRef?: React.RefObject<HTMLButtonElement>
}

export const FilterSolution2ForcedButtonRef = ({
  label,
  defaultSelectedValuesLabel,
  children, filterButton, classNameOverride, ...restProps
}: FilterSolution2ForcedButtonRefProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const filterButtonComponent = filterButton({
    onClick: (): void => setIsOpen(!isOpen),
    isOpen,
  })

  const inbuiltButtonRef = useRef<HTMLButtonElement>(null)
  const inbuiltRef = useRef<FilterRef>({
    triggerButtonRef: inbuiltButtonRef
  })
  const filterButtonRef = filterButtonComponent.ref ?? inbuiltRef

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
FilterSolution2ForcedButtonRef.displayName = "FilterSolution2ForcedButtonRef"
