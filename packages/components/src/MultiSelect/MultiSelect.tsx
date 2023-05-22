import React, { useState } from "react"
import { Selection } from "@react-types/shared"
import { useMenuTrigger } from "react-aria"
import { Item, useMenuTriggerState } from "react-stately"
import { v4 } from "uuid"
import { Label } from "@kaizen/draft-form"
import { Tag } from "@kaizen/draft-tag"
import { Menu } from "./Menu/Menu"
import { Popover } from "./MenuPopup"
import { Trigger } from "./Trigger/Trigger"

type MultiSelectProps = {
  id: string
  label: string
}

export const MultiSelect = ({ id, label }: MultiSelectProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = React.useState<Selection>(new Set())
  const labelId = id || v4()

  const stateProps = { isOpen, onOpenChange: setIsOpen, labelId }

  const triggerState = useMenuTriggerState(stateProps)
  const ref = React.useRef(null)
  const { menuTriggerProps, menuProps } = useMenuTrigger({}, triggerState, ref)

  return (
    <div className="max-w-[180px]">
      <Label id={labelId}>{label}</Label>
      <Trigger
        {...menuTriggerProps}
        isOpen={triggerState.isOpen}
        ref={ref}
        aria-labelledby={labelId}
      >
        {selected === "all"
          ? "all"
          : [...selected].map(value => <Tag key={value}>{value}</Tag>)}
      </Trigger>
      {triggerState.isOpen && (
        <Popover state={triggerState} triggerRef={ref} placement="bottom start">
          <Menu
            {...stateProps}
            {...menuProps}
            onClose={() => triggerState.close()}
            selectionMode="multiple"
            selectedKeys={selected}
            onSelectionChange={setSelected}
          >
            <Item key="edit">Edit…</Item>
            <Item key="duplicate">Duplicate</Item>
          </Menu>
        </Popover>
      )}
    </div>
  )
}

MultiSelect.displayName = "MultiSelect"
