import React from "react"
import { HiddenSelect } from "@react-aria/select"
import { useSelectState } from "@react-stately/select"
import { Item } from "@react-stately/collections"
import { useMenuTriggerContext } from "../../provider"
import { ItemType } from "../../types"

export interface HiddenSelectWrapperProps {
  items?: ItemType[]
  label: string
  name: string
}

export const HiddenSelectWrapper: React.VFC<HiddenSelectWrapperProps> = ({
  name,
  label,
  ...rest
}) => {
  const { buttonRef } = useMenuTriggerContext()
  const state = useSelectState<ItemType>({
    ...rest,
    children: item => <Item key={item.value}>{item.label}</Item>,
  })

  return (
    <HiddenSelect
      label={label}
      name={name}
      state={state}
      triggerRef={buttonRef}
    />
  )
}

HiddenSelectWrapper.displayName = "HiddenSelectWrapper"
