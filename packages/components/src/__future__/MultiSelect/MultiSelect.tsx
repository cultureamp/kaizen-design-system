import React, { useState } from "react"
import { useMenuTrigger } from "react-aria"
import { Section, Item, useMenuTriggerState } from "react-stately"
import { Filter, FilterContents } from "~components/Filter"
import { FilterButton } from "~components/FilterButton"
import { Menu } from "./Menu/Menu"

export const MultiSelect = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  const stateProps = { isOpen, onOpenChange: setIsOpen }

  const state = useMenuTriggerState(stateProps)
  const ref = React.useRef()
  const { menuProps } = useMenuTrigger({}, state, ref)

  return (
    <Filter
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      renderTrigger={(triggerProps): JSX.Element => (
        <FilterButton label="Label" {...triggerProps} />
      )}
    >
      <FilterContents>
        <Menu
          {...stateProps}
          {...menuProps}
          onClose={() => state.close()}
          selectionMode="multiple"
        >
          <Item key="edit">Edit…</Item>
          <Item key="duplicate">Duplicate</Item>
        </Menu>
      </FilterContents>
    </Filter>
  )
}

MultiSelect.displayName = "MultiSelect"
