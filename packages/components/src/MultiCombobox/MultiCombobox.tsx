import React, { useState } from "react"
import { ComboBox, Key, Popover } from "react-aria-components"
import { ComboboxInput } from "~components/Combobox"
import { ComboboxPopoverToggle } from "~components/Combobox/subcomponents/ComboboxPopoverToggle"
import { Listbox, ListboxItem } from "~components/Listbox"
import { RemovableTag } from "~components/__future__"

export type MultiComboboxProps = {
  something?: boolean
}

export const MultiCombobox = () => {
  const [inputValue, setInputValue] = useState<string>("asdasd")
  const [selectedOptions, setSelectedOptions] = useState<Key[]>([])

  const handleSelectionChange = (key: Key) => {
    setInputValue("")
    setSelectedOptions(Array.from(new Set([...selectedOptions, key])))
  }

  return (
    <>
      <div>
        {selectedOptions &&
          selectedOptions.map(option => (
            <RemovableTag
              key={option}
              removeButtonProps={{
                ariaLabel: `Remove selected option ${option}`,
                onClick: () => {
                  setSelectedOptions(selectedOptions.filter(o => o !== option))
                },
              }}
            >
              {option}
            </RemovableTag>
          ))}
      </div>
      <ComboBox onSelectionChange={handleSelectionChange}>
        <ComboboxInput
          value={inputValue}
          onChange={event => setInputValue(event.target.value)}
        />
        <ComboboxPopoverToggle />
        <Popover>
          <Listbox>
            <ListboxItem>Aardvark</ListboxItem>
            <ListboxItem>Cat</ListboxItem>
            <ListboxItem>Dog</ListboxItem>
            <ListboxItem>Kangaroo</ListboxItem>
            <ListboxItem>Panda</ListboxItem>
            <ListboxItem>Snake</ListboxItem>
          </Listbox>
        </Popover>
      </ComboBox>
    </>
  )
}
