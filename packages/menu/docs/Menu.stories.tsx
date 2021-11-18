import React, { useRef } from "react"
import { Button } from "@kaizen/draft-button"
import { useOverlay } from "@react-aria/overlays"
import { Item } from "@react-stately/collections"
import { useTreeState } from "@react-stately/tree"
import { CATEGORIES } from "../../../storybook/constants"
import {
  Menu,
  MenuList,
  MenuItem,
  useMenuButton,
  useMenuItem,
  useMenuTrigger,
  useMenuTriggerState,
} from "../index"

export default {
  title: `${CATEGORIES.components}/Menu`,
  component: Menu,
  subcomponents: { MenuList, MenuItem },
  parameters: {
    docs: {
      description: {
        component:
          'import { Menu, MenuList, MenuItem, useMenuTrigger } from "@kaizen/menu"',
      },
    },
  },
}

export const Default = () => (
  <Menu>
    <MenuList>
      <MenuItem>Something</MenuItem>
    </MenuList>
  </Menu>
)

const MenuPopup = props => {
  const state = useTreeState({
    children: (
      <Item key="qweqwe">
        <a href="#">huh</a>
      </Item>
    ),
    selectionMode: "none",
  })
  const overlayRef = useRef<HTMLElement>()

  const { overlayProps } = useOverlay(
    {
      onClose: () => props.menuState.close(),
      shouldCloseOnBlur: true,
      isOpen: props.menuState.isOpen,
      isDismissable: true,
    },
    overlayRef
  )

  return (
    <div {...overlayProps} ref={overlayRef}>
      <MenuList>
        {[...state.collection].map(item => (
          <CustomMenuItem
            key={item.key}
            item={item}
            state={state}
            onAction={() => undefined}
            onClose={() => props.menuState.close()}
          />
        ))}
      </MenuList>
    </div>
  )
}

const CustomMenuItem = ({ item, state, onAction, onClose }) => {
  const menuItemRef = useRef()
  const { menuItemProps } = useMenuItem(
    {
      key: "sdasd",
      isDisabled: false,
      onAction,
      onClose,
    },
    state,
    menuItemRef
  )
  return (
    <MenuItem ref={menuItemRef} {...menuItemProps}>
      {item.rendered}
    </MenuItem>
  )
}

export const MenuWithTrigger = () => {
  const menuState = useMenuTriggerState({})
  const buttonRef = useRef<HTMLButtonElement>()
  const { menuTriggerProps, menuProps } = useMenuTrigger(
    {},
    menuState,
    buttonRef
  )
  const { buttonProps } = useMenuButton(menuTriggerProps, buttonRef)

  return (
    <>
      <Button label="Something" ref={buttonRef} {...buttonProps} />
      {menuState.isOpen && (
        <Menu {...menuProps}>
          <MenuPopup menuState={menuState} />
        </Menu>
      )}
    </>
  )
}
