import React from "react"
import { AriaListBoxOptions } from "@react-aria/listbox"
import { useSelectContext } from "../../context"
import { SelectOption, SelectItem, SelectItemNode } from "../../types"
import { ListBox } from "../ListBox"
import { ListItems } from "../ListItems"
import { Overlay } from "../Overlay"

export type SelectPopoverContentsProps<Option extends SelectOption> = {
  children?: (args: { items: Array<SelectItemNode<Option>> }) => React.ReactNode
  menuProps: AriaListBoxOptions<SelectItem<Option>>
}

export const SelectPopoverContents = <Option extends SelectOption>({
  children,
  menuProps,
}: SelectPopoverContentsProps<Option>): JSX.Element => {
  const { state } = useSelectContext<Option>()

  // The collection structure is set by useSelectState's `children`
  // which we have used a util to ensure the following structure
  // - SelectOptionGroup => Section
  // - Option => Item
  const itemNodes = Array.from(state.collection) as Array<
    SelectItemNode<Option>
  >

  return (
    <Overlay<Option>>
      <ListBox<Option> menuProps={menuProps}>
        {children ? (
          children({ items: itemNodes })
        ) : (
          <ListItems<Option> items={itemNodes} />
        )}
      </ListBox>
    </Overlay>
  )
}

SelectPopoverContents.displayName = "Select.PopoverContents"
