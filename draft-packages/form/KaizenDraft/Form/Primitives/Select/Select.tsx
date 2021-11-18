import React from "react"
import { useSelect } from "downshift"
import { Menu, MenuList, MenuItem } from "@kaizen/menu"
import { SelectButton } from "../"

export interface SelectItem {
  value: string
}

export interface SelectProps {
  id: string
  labelId: string
  items: SelectItem[]
}

const Select = props => {
  const { id, labelId, items } = props
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({ items })
  return (
    <>
      <SelectButton
        type="button"
        {...getToggleButtonProps()}
        id={id}
        aria-labelledby={labelId}
        isOpen={isOpen}
      >
        {(selectedItem && selectedItem.value) || "Choose something"}
      </SelectButton>
      <Menu>
        <MenuList {...getMenuProps()}>
          {isOpen &&
            items.map((item, index) => (
              <MenuItem
                key={`${item}${index}`}
                isHighlighted={highlightedIndex === index}
                {...getItemProps({ item, index })}
              >
                {item.value}
              </MenuItem>
            ))}
        </MenuList>
      </Menu>
    </>
  )
}

export default Select
