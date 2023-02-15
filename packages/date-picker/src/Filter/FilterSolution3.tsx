import React, { forwardRef, HTMLAttributes, useRef, useState } from "react"
import classnames from "classnames"
import { FocusOn } from "react-focus-on"
import { OverrideClassName } from "@kaizen/component-base"
import { isRefObject } from "../utils/isRefObject"
import { FilterTriggerButtonProps } from "./components"
import { FilterPopover } from "./components/FilterPopover"
import { FilterProvider } from "./context/useFilterContext"
import { FilterProviderSol3 } from "./context/useFilterContextSol3"
import styles from "./Filter.module.scss"

export interface FilterSolution3Props
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children: React.ReactNode
  label: string
  // defaultSelectedValuesLabel?: FilterTriggerButtonProps["selectedValue"]
}

export const FilterSolution3 = ({
  children,
  label,
  // defaultSelectedValuesLabel,
  classNameOverride,
  ...restProps
}: FilterSolution3Props): JSX.Element => (
  <div
    className={classnames(styles.filter, classNameOverride)}
    {...restProps}
  >
    <FilterProvider
      label={label}
      // defaultSelectedValuesLabel={defaultSelectedValuesLabel}
    >
      {children}
    </FilterProvider>
  </div>
)
FilterSolution3.displayName = "FilterSolution3"

export interface FilterSolution3NoContextProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children: React.ReactNode
}

export const FilterSolution3NoContext = ({
  children,
  classNameOverride,
  ...restProps
}: FilterSolution3NoContextProps): JSX.Element => (
  <div
    className={classnames(styles.filter, classNameOverride)}
    {...restProps}
  >
    {children}
  </div>
)
FilterSolution3NoContext.displayName = "FilterSolution3NoContext"

// export const FilterSolution3ExtraContext = React.forwardRef<
//   HTMLButtonElement,
//   FilterSolution3Props
// >(
//   (
//     {
//       children,
//       label,
//       defaultSelectedValuesLabel,
//       classNameOverride,
//       ...restProps
//     },
//     ref
//   ) => {
//     // If the consumer uses the legacy `createRef`, it will not work
//     const consumerRef = isRefObject(ref) ? ref : null
//     const inbuiltButtonRef = useRef<HTMLButtonElement>(null)
//     // const [isOpen, setIsOpen] = useState<boolean>(false)

//     return (
//       <div
//         className={classnames(styles.filter, classNameOverride)}
//         {...restProps}
//       >
//         <FilterProviderSol3
//           label={label}
//           defaultSelectedValuesLabel={defaultSelectedValuesLabel}
//         >
//           {children}
//         </FilterProviderSol3>
//       </div>
//     )
//   }
// )
// FilterSolution3ExtraContext.displayName = "FilterSolution3ExtraContext"
