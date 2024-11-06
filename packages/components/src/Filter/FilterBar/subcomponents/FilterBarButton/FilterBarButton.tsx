import React, { forwardRef, useEffect } from "react"
import classnames from "classnames"
import { FilterTriggerRef } from "~components/Filter/Filter"
import { useFilterBarContext } from "~components/Filter/FilterBar/context/FilterBarContext"
import {
  FilterButton,
  FilterButtonProps,
  FilterButtonRemovable,
} from "~components/Filter/FilterButton"
import { isRefObject } from "~components/utils/isRefObject"
import styles from "./FilterBarButton.module.css"

export type FilterBarButtonProps = FilterButtonProps & {
  filterId: string
  isRemovable: boolean | undefined
}

export const FilterBarButton = forwardRef<
  FilterTriggerRef,
  FilterBarButtonProps
>(
  (
    { filterId, isRemovable = false, classNameOverride, ...props },
    ref,
  ): JSX.Element => {
    const { hideFilter, focusId, setFocus } = useFilterBarContext()

    useEffect(() => {
      if (focusId === filterId && isRefObject(ref)) {
        ref?.current?.triggerRef?.current?.focus()
        setFocus(undefined)
      }
    }, [filterId, focusId, ref, setFocus])

    return isRemovable ? (
      <FilterButtonRemovable
        ref={ref}
        triggerButtonProps={props}
        removeButtonProps={{ onClick: () => hideFilter(filterId) }}
        classNameOverride={classnames(
          classNameOverride,
          styles.filterBarButton,
        )}
      />
    ) : (
      <FilterButton
        ref={ref}
        classNameOverride={classnames(
          classNameOverride,
          styles.filterBarButton,
        )}
        {...props}
      />
    )
  },
)

FilterBarButton.displayName = "FilterBar.Button"
