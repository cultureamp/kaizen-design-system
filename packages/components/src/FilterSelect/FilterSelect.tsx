import React, { useState } from "react"
import { useButton } from "@react-aria/button"
import { HiddenSelect, useSelect } from "@react-aria/select"
import {
  useSelectState,
  SelectProps as AriaSelectProps,
} from "@react-stately/select"
import {
  getSelectChildren,
  SelectContext,
  SelectProps,
  SingleItemType,
} from "@kaizen/select"
import { ListBox } from "@kaizen/select/src/Select/components/ListBox"
import { ListItems } from "@kaizen/select/src/Select/components/ListItems"
import { Filter, FilterContents, FilterProps } from "../Filter"
import { FilterButtonProps } from "../FilterButton"
import styles from "./FilterSelect.module.scss"

export type FilterSelectProps = {
  isOpen: FilterProps["isOpen"]
  setIsOpen: FilterProps["setIsOpen"]
  renderTrigger: (triggerButtonProps: FilterButtonProps) => JSX.Element
  label: string
  children?: SelectProps["children"]
  items: AriaSelectProps<SingleItemType>["items"]
}

export const FilterSelect = ({
  isOpen,
  setIsOpen,
  renderTrigger,
  label,
  children,
  ...restProps
}: FilterSelectProps): JSX.Element => {
  // Ref will be populated by Filter
  const [triggerRef, setTriggerRef] = useState<
    React.RefObject<HTMLButtonElement>
  >({ current: null })

  const ariaSelectProps: AriaSelectProps<SingleItemType> = {
    label,
    children: getSelectChildren,
    isOpen,
    onOpenChange: setIsOpen,
    ...restProps,
  }

  const state = useSelectState(ariaSelectProps)

  const { triggerProps, menuProps } = useSelect(
    ariaSelectProps,
    state,
    triggerRef
  )

  const { buttonProps } = useButton(triggerProps, triggerRef)

  const items = Array.from(state.collection)

  return (
    <>
      <HiddenSelect label={label} state={state} triggerRef={triggerRef} />
      <Filter
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        renderTrigger={(): JSX.Element =>
          renderTrigger({
            selectedValue: state.selectedItem?.textValue || undefined,
            label,
            isOpen,
            ...buttonProps,
          })
        }
        onTriggerLoaded={setTriggerRef}
      >
        <FilterContents classNameOverride={styles.filterContents}>
          <SelectContext.Provider value={{ state }}>
            <ListBox menuProps={menuProps}>
              {children ? children({ items }) : <ListItems items={items} />}
            </ListBox>
          </SelectContext.Provider>
        </FilterContents>
      </Filter>
    </>
  )
}

FilterSelect.displayName = "FilterSelect"
