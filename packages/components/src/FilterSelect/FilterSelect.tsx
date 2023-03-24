import React, { useState } from "react"
import { useButton } from "@react-aria/button"
import { HiddenSelect, useSelect } from "@react-aria/select"
import {
  useSelectState,
  SelectProps as AriaSelectProps,
} from "@react-stately/select"
import { Node } from "@react-types/shared"
import {
  getSelectChildren,
  SelectContext,
  SelectProps,
  SingleItemType,
} from "@kaizen/select"
import { ListBox } from "@kaizen/select/src/Select/components/ListBox"
import { ListBoxSection } from "@kaizen/select/src/Select/components/ListBoxSection"
import { ListItem } from "@kaizen/select/src/Select/components/ListItem"
import { Option } from "@kaizen/select/src/Select/components/Option"
import { SectionDivider } from "@kaizen/select/src/Select/components/SectionDivider"
import { Filter, FilterContents, FilterProps } from "~components/Filter"
import { FilterButtonProps } from "~components/FilterButton"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./FilterSelect.module.scss"

export type FilterSelectProps = OverrideClassName<
  Omit<AriaSelectProps<SingleItemType>, "children" | "defaultOpen">
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
  classNameOverride,
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

  const renderChildren = children
    ? children
    : ({ items }): JSX.Element =>
        items.map((item: Node<SingleItemType>) =>
          item.type === "section" ? (
            <ListBoxSection key={item.key} section={item} />
          ) : (
            <Option key={item.key} item={item} />
          )
        )

  const { buttonProps } = useButton(triggerProps, triggerRef)

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
        classNameOverride={classNameOverride}
      >
        <FilterContents classNameOverride={styles.filterContents}>
          <SelectContext.Provider value={{ state }}>
            <ListBox menuProps={menuProps}>
              {renderChildren({ items: Array.from(state.collection) })}
            </ListBox>
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
