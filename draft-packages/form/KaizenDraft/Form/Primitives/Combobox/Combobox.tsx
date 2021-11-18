import React, { useState } from "react"
import { useCombobox } from "downshift"
import { MenuList, MenuItem } from "@kaizen/menu"
import { SelectItem, SelectInput } from "../"

export interface ComboboxProps {
  id: string
  labelId: string
  items: SelectItem[]
}

const Combobox = (props: ComboboxProps) => {
  const { id, labelId, items } = props
  const [inputItems, setInputItems] = useState(items)
  const itemToString = item => (item ? item.value : "")
  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        items.filter(item =>
          item.value.toLowerCase().startsWith(inputValue.toLowerCase())
        )
      )
    },
    itemToString,
  })

  return (
    <>
      <div {...getComboboxProps()}>
        <SelectInput {...getInputProps()} id={id} aria-labelledby={labelId} />
        <button
          type="button"
          {...getToggleButtonProps()}
          aria-label="toggle menu"
        >
          &#8595;
        </button>
      </div>
      <MenuList {...getMenuProps()}>
        {isOpen &&
          inputItems.map((item, index) => (
            <MenuItem
              key={`${item}${index}`}
              isHighlighted={highlightedIndex === index}
              {...getItemProps({ item, index })}
            >
              {item.value}
            </MenuItem>
          ))}
      </MenuList>
    </>
  )
}

export default Combobox
