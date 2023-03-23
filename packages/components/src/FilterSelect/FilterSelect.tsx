import React, { useState } from "react"
import { useButton } from "@react-aria/button"
import { HiddenSelect, useSelect } from "@react-aria/select"
import {
  useSelectState,
  SelectProps as AriaSelectProps,
} from "@react-stately/select"
import { SelectContext, SelectProps, SingleItemType } from "@kaizen/select"
import { ListBox } from "@kaizen/select/src/Select/components/ListBox"
import { ListBoxSection } from "@kaizen/select/src/Select/components/ListBoxSection"
import { ListItem } from "@kaizen/select/src/Select/components/ListItem"
import { ListItems } from "@kaizen/select/src/Select/components/ListItems"
import { Option } from "@kaizen/select/src/Select/components/Option"
import { Overlay } from "@kaizen/select/src/Select/components/Overlay"
import { SectionDivider } from "@kaizen/select/src/Select/components/SectionDivider"
import { transformSelectChildren } from "@kaizen/select/src/Select/utils/transformSelectChildren"
import { Filter, FilterContents, FilterProps } from "~components/Filter"
import { FilterButtonProps } from "~components/FilterButton"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./FilterSelect.module.scss"

export type FilterSelectProps = OverrideClassName<
  Omit<AriaSelectProps<SingleItemType>, "children">
> & {
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
    children: transformSelectChildren,
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
        isOpen={state.isOpen}
        setIsOpen={state.setOpen}
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
            <Overlay>
              <ListBox menuProps={menuProps}>
                {children ? children({ items }) : <ListItems items={items} />}
              </ListBox>
            </Overlay>
          </SelectContext.Provider>
        </FilterContents>
      </Filter>
    </>
  )
}

FilterSelect.displayName = "FilterSelect"

FilterSelect.Section = ListBoxSection
FilterSelect.SectionDivider = SectionDivider
FilterSelect.Option = Option
FilterSelect.ItemDefault = ListItem
