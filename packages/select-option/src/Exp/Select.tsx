import React, { ReactNode, useState } from "react"
import { useMenuTriggerState } from "@react-stately/menu"
import { useButton } from "@react-aria/button"
import { useMenu, useMenuItem, useMenuTrigger } from "@react-aria/menu"
import { useTreeState } from "@react-stately/tree"
import { Item, Section } from "@react-stately/collections"
import { mergeProps } from "@react-aria/utils"
import { FocusScope, useFocusRing } from "@react-aria/focus"
import { useFocus } from "@react-aria/interactions"
import { useOverlay, DismissButton } from "@react-aria/overlays"

import { useListBox, useListBoxSection, useOption } from "@react-aria/listbox"
import { useListState } from "@react-stately/list"

export function MenuButton(props) {
  // Create state based on the incoming props
  const state = useMenuTriggerState(props)

  // Get props for the menu trigger and menu elements
  const ref = React.createRef<HTMLButtonElement>()
  const { menuTriggerProps, menuProps } = useMenuTrigger({}, state, ref)

  // Get props for the button based on the trigger props from useMenuTrigger
  const { buttonProps } = useButton(menuTriggerProps, ref)

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button {...buttonProps} ref={ref} style={{ height: 30, fontSize: 14 }}>
        {props.label}
        <span aria-hidden="true" style={{ paddingLeft: 5 }}>
          ▼
        </span>
      </button>
      {state.isOpen && (
        <MenuPopup {...props} {...menuProps} onClose={() => state.close()} />
      )}
    </div>
  )
}

function MenuPopup(props) {
  // Create menu state based on the incoming props
  const state = useTreeState({ ...props, selectionMode: "multiple" })

  // Get props for the menu element
  const ref = React.createRef<HTMLDivElement>()

  // Handle events that should cause the menu to close,
  // e.g. blur, clicking outside, or pressing the escape key.
  const overlayRef = React.createRef<HTMLDivElement>()
  const { overlayProps } = useOverlay(
    {
      onClose: props.onClose,
      shouldCloseOnBlur: true,
      isOpen: true,
      isDismissable: true,
    },
    overlayRef
  )

  const defualt = ["One", "Two", "Three"]
  const [items, setItems] = useState<string[]>(defualt)

  // Wrap in <FocusScope> so that focus is restored back to the
  // trigger when the menu is closed. In addition, add hidden
  // <DismissButton> components at the start and end of the list
  // to allow screen reader users to dismiss the popup easily.
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    if (!e.target.value) {
      setItems(defualt)
      return
    }
    setItems(value => value.filter(f => f.includes(e.target.value)))
  }
  return (
    <FocusScope restoreFocus>
      <div {...overlayProps} ref={overlayRef}>
        <DismissButton onDismiss={props.onClose} />
        <input type="search" placeholder="Search...." onChange={handleChange} />
        <ListBox selectionMode="multiple" autoFocus={true}>
          {items.map(item => (
            <Item>{item}</Item>
          ))}
        </ListBox>
        <DismissButton onDismiss={props.onClose} />
      </div>
    </FocusScope>
  )
}

function ListBox(props) {
  const state = useListState(props)
  const ref = React.createRef<HTMLUListElement>()
  const { listBoxProps } = useListBox(props, state, ref)

  return (
    <>
      <ul
        {...listBoxProps}
        ref={ref}
        style={{
          padding: 0,
          margin: "5px 0",
          listStyle: "none",
          border: "1px solid gray",
          maxWidth: 250,
        }}
      >
        {[...state.collection].map(item => (
          <Option key={item.key} item={item} state={state} />
        ))}
      </ul>
      <button onClick={() => state.selectionManager.selectAll()}>
        Select All
      </button>
      <button onClick={() => state.selectionManager.clearSelection()}>
        Clear
      </button>
    </>
  )
}

function Option({ item, state }) {
  // Get props for the option element
  const ref = React.createRef<HTMLLIElement>()
  const { optionProps, isSelected, isDisabled } = useOption(
    { key: item.key },
    state,
    ref
  )

  // Determine whether we should show a keyboard
  // focus ring for accessibility
  const { isFocusVisible, focusProps } = useFocusRing()

  return (
    <li
      {...mergeProps(optionProps, focusProps)}
      ref={ref}
      style={{
        background: isSelected ? "blueviolet" : "transparent",
        color: isSelected ? "white" : null,
        padding: "2px 5px",
        outline: isFocusVisible ? "2px solid orange" : "none",
      }}
    >
      {item.rendered}
    </li>
  )
}
