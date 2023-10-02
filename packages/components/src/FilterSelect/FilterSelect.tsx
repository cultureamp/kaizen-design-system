import React, { useState } from "react"
import { useButton } from "@react-aria/button"
import { HiddenSelect, useSelect } from "@react-aria/select"
import {
  useSelectState,
  SelectProps as AriaSelectProps,
} from "@react-stately/select"
import { Filter, FilterContents } from "~components/Filter"
import { FilterButtonProps } from "~components/FilterButton"
import { SelectProvider } from "~components/__future__/Select/context"
import {
  ListBoxSection,
  ListItem,
  Option,
  SectionDivider,
  SelectPopoverContents,
} from "~components/__future__/Select/subcomponents"
import { getDisabledKeysFromItems } from "~components/__future__/Select/utils/getDisabledKeysFromItems"
import { transformSelectItemToCollectionElement } from "~components/__future__/Select/utils/transformSelectItemToCollectionElement"
import { OverrideClassName } from "~types/OverrideClassName"
import { SelectItem, SelectItemNode, SelectOption } from "./types"
import styles from "./FilterSelect.module.scss"

type OmittedAriaSelectProps =
  | "label"
  | "children"
  | "isOpen"
  | "onOpenChange"
  | "defaultOpen"
  | "items"

export type FilterSelectProps<Option extends SelectOption = SelectOption> = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  renderTrigger: (triggerButtonProps: FilterButtonProps) => JSX.Element
  label: string
  children?: (args: { items: Array<SelectItemNode<Option>> }) => React.ReactNode
  items: Array<SelectItem<Option>>
} & OverrideClassName<Omit<AriaSelectProps<Option>, OmittedAriaSelectProps>>

export const FilterSelect = <Option extends SelectOption = SelectOption>({
  isOpen,
  setIsOpen,
  renderTrigger,
  label,
  children,
  items,
  classNameOverride,
  selectedKey,
  ...restProps
}: FilterSelectProps<Option>): JSX.Element => {
  // Ref will be populated by Filter
  const [triggerRef, setTriggerRef] = useState<
    React.RefObject<HTMLButtonElement>
  >({ current: null })

  const disabledKeys = getDisabledKeysFromItems(items)

  const ariaSelectProps: AriaSelectProps<SelectItem<Option>> = {
    label,
    items,
    children: transformSelectItemToCollectionElement,
    isOpen,
    onOpenChange: setIsOpen,
    disabledKeys,
    selectedKey:
      typeof selectedKey === "number" ? selectedKey.toString() : selectedKey,
    ...restProps,
  }

  const state = useSelectState(ariaSelectProps)

  const { triggerProps, menuProps } = useSelect(
    ariaSelectProps,
    state,
    triggerRef
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
        onMount={setTriggerRef}
        classNameOverride={classNameOverride}
      >
        <FilterContents classNameOverride={styles.filterContents}>
          <SelectProvider<Option> state={state}>
            <SelectPopoverContents menuProps={menuProps}>
              {children}
            </SelectPopoverContents>
          </SelectProvider>
        </FilterContents>
      </Filter>
    </>
  )
}

FilterSelect.displayName = "FilterSelect"

FilterSelect.Section = ListBoxSection
FilterSelect.SectionDivider = SectionDivider
FilterSelect.Option = Option
FilterSelect.ItemDefaultRender = ListItem
