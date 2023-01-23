import React, { forwardRef, HTMLAttributes, useRef, useState } from "react"
import classnames from "classnames"
import { FocusOn } from "react-focus-on"
import { OverrideClassName } from "@kaizen/component-base"
import { isRefObject } from "../utils/isRefObject"
import { FilterTriggerButtonProps } from "./components"
import { FilterPopover } from "./components/FilterPopover"
import styles from "./Filter.module.scss"

export interface FilterProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children: React.ReactNode
  // This ensures `ref` exists
  // The `any` can probably be scoped better
  filterButton: (
    props?: Partial<FilterTriggerButtonProps>
  ) => React.FunctionComponentElement<any>
}

// interface FilterWithRefProps extends Omit<FilterProps, "filterButton"> {
//   filterButton: (
//     props?: Partial<FilterTriggerButtonProps>
//   ) => React.FunctionComponentElement<any>
// }

export const FilterWithRef = React.forwardRef<HTMLButtonElement, FilterProps>(
  ({ children, filterButton, classNameOverride, ...restProps }, ref) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const filterButtonComponent = filterButton({
      onClick: (): void => setIsOpen(!isOpen),
      isOpen,
    })

    return (
      <div
        className={classnames(
          styles.filterDateRangePickerContainer,
          classNameOverride
        )}
        {...restProps}
      >
        {React.cloneElement(filterButtonComponent, {
          ref: filterButtonComponent.ref ?? ref,
        })}
        {isOpen && (
          <FocusOn
            scrollLock={false}
            onClickOutside={(): void => setIsOpen(false)}
            onEscapeKey={(): void => setIsOpen(false)}
          >
            <FilterPopover
              // If the consumer uses the legacy `createRef`, it will not work
              referenceElement={isRefObject(ref) ? ref.current : null}
              // Does the popper need this or just the contents?
              // aria-label={label}
            >
              {children}
            </FilterPopover>
          </FocusOn>
        )}
      </div>
    )
  }
)
FilterWithRef.displayName = "FilterWithRef"

export type FilterRef = {
  triggerButtonRef?: React.RefObject<HTMLButtonElement>
}

export const FilterWithForcedShapeRef = React.forwardRef<
  FilterRef,
  FilterProps
>(({ children, filterButton, classNameOverride, ...restProps }, ref) => {
  const customRefObject = isRefObject(ref) ? ref.current : null
  const triggerButtonRef = customRefObject?.triggerButtonRef
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const filterButtonComponent = filterButton({
    onClick: (): void => setIsOpen(!isOpen),
    isOpen,
  })

  return (
    <div
      className={classnames(
        styles.filterDateRangePickerContainer,
        classNameOverride
      )}
      {...restProps}
    >
      {React.cloneElement(filterButtonComponent, {
        ref: filterButtonComponent.ref ?? ref,
      })}
      {isOpen && (
        <FocusOn
          scrollLock={false}
          onClickOutside={(): void => setIsOpen(false)}
          onEscapeKey={(): void => setIsOpen(false)}
        >
          <FilterPopover
            referenceElement={triggerButtonRef?.current || null}
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

FilterWithForcedShapeRef.displayName = "FilterWithForcedShapeRef"

// interface FilterConsumerRefProps extends Omit<FilterProps, "filterButton"> {
//   filterButton: React.FunctionComponentElement<any>
// }

// export const FilterConsumerRef = React.forwardRef<
//   HTMLButtonElement,
//   FilterConsumerRefProps
// >(({ children, filterButton, classNameOverride, ...restProps }, ref) => {
//   const [isOpen, setIsOpen] = useState<boolean>(false)

//   return (
//     <div
//       className={classnames(
//         styles.filterDateRangePickerContainer,
//         classNameOverride
//       )}
//       {...restProps}
//     >
//       {React.cloneElement(filterButton, {
//         onClick: () => setIsOpen(!isOpen),
//         isOpen,
//         ...filterButton.props,
//       })}
//       {isOpen && (
//         <FocusOn
//           scrollLock={false}
//           onClickOutside={(): void => setIsOpen(false)}
//           onEscapeKey={(): void => setIsOpen(false)}
//         >
//           <FilterPopover
//             // If the consumer uses the legacy `createRef`, it will not work
//             referenceElement={isRefObject(ref) ? ref.current : null}
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

// FilterConsumerRef.displayName = "FilterConsumerRef"
