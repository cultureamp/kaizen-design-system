/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useRef } from "react"
import type { AriaMenuProps, MenuTriggerProps } from "@react-types/menu"
import type { Node } from "@react-types/shared"
import {
  useMenu,
  useMenuItem,
  useMenuSection,
  useMenuTrigger,
  useSeparator,
} from "react-aria"
import { TreeState, useMenuTriggerState, useTreeState } from "react-stately"
import { Button } from "./Button"
import { Popover } from "./Popover"

interface MenuButtonProps<T extends object>
  extends AriaMenuProps<T>,
    MenuTriggerProps {
  label: string
}

export function MenuButton<T extends object>(
  props: MenuButtonProps<T>
): JSX.Element {
  // Create state based on the incoming props
  const state = useMenuTriggerState(props)

  // Get props for the menu trigger and menu elements
  const ref = React.useRef()
  const { menuTriggerProps, menuProps } = useMenuTrigger<T>({}, state, ref)

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <Button {...menuTriggerProps} isPressed={state.isOpen} ref={ref}>
        {props.label}
      </Button>
      {state.isOpen && (
        <Popover state={state} triggerRef={ref} placement="bottom start">
          <Menu
            {...menuProps}
            {...props}
            autoFocus={state.focusStrategy || true}
            onClose={() => state.close()}
          />
        </Popover>
      )}
    </div>
  )
}

interface MenuProps<T extends object> extends AriaMenuProps<T> {
  onClose: () => void
}

export function Menu<T extends object>(props: MenuProps<T>): JSX.Element {
  // Create state based on the incoming props
  const state = useTreeState(props)

  // Get props for the menu element
  const ref = useRef()
  const { menuProps } = useMenu(props, state, ref)

  return (
    <ul
      {...menuProps}
      ref={ref}
      className="pt-1 pb-1 shadow-xs rounded-md min-w-[200px] focus:outline-none"
    >
      {[...state.collection].map(item =>
        item.type === "section" ? (
          <MenuSection key={item.key} section={item} state={state} />
        ) : (
          <MenuItem key={item.key} item={item} state={state} />
        )
      )}
    </ul>
  )
}

interface MenuSectionProps<T> {
  section: Node<T>
  state: TreeState<T>
  onAction: (key: React.Key) => void
  onClose: () => void
}

function MenuSection<T>({
  section,
  state,
  onAction,
  onClose,
}: MenuSectionProps<T>): JSX.Element {
  const { itemProps, groupProps } = useMenuSection({
    heading: section.rendered,
    "aria-label": section["aria-label"],
  })

  const { separatorProps } = useSeparator({
    elementType: "li",
  })

  return (
    <>
      {section.key !== state.collection.getFirstKey() && (
        <li
          {...separatorProps}
          className="border-t border-gray-300 mx-2 mt-1 mb-1"
        />
      )}
      <li {...itemProps}>
        <ul {...groupProps}>
          {[...section.childNodes].map(node => (
            <MenuItem
              key={node.key}
              item={node}
              state={state}
              onAction={onAction}
              onClose={onClose}
            />
          ))}
        </ul>
      </li>
    </>
  )
}

interface MenuItemProps<T> {
  item: Node<T>
  state: TreeState<T>
  onAction: (key: React.Key) => void
  onClose: () => void
}

function MenuItem<T>({ item, state, onAction, onClose }: MenuItemProps<T>) {
  // Get props for the menu item element
  const ref = React.useRef()
  const { menuItemProps, isSelected } = useMenuItem(
    {
      key: item.key,
      onAction,
      onClose,
    },
    state,
    ref
  )

  // Handle focus events so we can apply highlighted
  // style to the focused menu item
  const isFocused = state.selectionManager.focusedKey === item.key
  const focusBg = item.key === "delete" ? "bg-red-500" : "bg-blue-500"
  const focus = isFocused ? `${focusBg} text-white` : "text-gray-900"

  return (
    <li
      {...menuItemProps}
      ref={ref}
      className={`${focus} text-sm cursor-default select-none relative mx-1 rounded py-2 pl-3 pr-9 focus:outline-none`}
    >
      <input type="checkbox" name="" id="" checked={isSelected} />
      {item.rendered}
    </li>
  )
}
