import React, { ButtonHTMLAttributes, HTMLAttributes, useContext } from "react"
import { useButton } from "@react-aria/button"
import { AriaMenuOptions, useMenuTrigger } from "@react-aria/menu"
import { MenuTriggerState, useMenuTriggerState } from "@react-stately/menu"
import { ItemType } from "../../types"

export interface MenuTriggerProviderProps {
  isOpen?: boolean
  defaultOpen?: boolean
  onOpenChange?: (isOpen: boolean) => void
  children: React.ReactNode
}

export interface MenuTriggerProviderContextType {
  menuTriggerProps: HTMLAttributes<HTMLElement>
  buttonProps: ButtonHTMLAttributes<HTMLButtonElement>
  menuProps: AriaMenuOptions<ItemType>
  menuTriggerState: MenuTriggerState

  buttonRef: React.RefObject<HTMLButtonElement>
}

const MenuTriggerContext = React.createContext<MenuTriggerProviderContextType>(
  {} as MenuTriggerProviderContextType
)
export function MenuTriggerProvider({
  isOpen,
  defaultOpen,
  onOpenChange,
  children,
}: MenuTriggerProviderProps): JSX.Element {
  // Create state based on the incoming props to manage the open/close
  const state = useMenuTriggerState({ isOpen, defaultOpen, onOpenChange })

  // Get A11y attributes and events for the menu trigger and menu elements
  const ref = React.createRef<HTMLButtonElement>()
  const { menuTriggerProps, menuProps } = useMenuTrigger<ItemType>(
    {},
    state,
    ref
  )

  // Get A11y attributes and events for the button based on the trigger props from useMenuTrigger
  const { buttonProps } = useButton(menuTriggerProps, ref)

  return (
    <MenuTriggerContext.Provider
      value={{
        menuTriggerProps,
        buttonProps,
        menuProps,
        menuTriggerState: state,
        buttonRef: ref,
      }}
    >
      {children}
    </MenuTriggerContext.Provider>
  )
}

export const useMenuTriggerContext = (): MenuTriggerProviderContextType =>
  useContext(MenuTriggerContext)

export const MenuTriggerConsumer = MenuTriggerContext.Consumer

MenuTriggerContext.displayName = "MenuTriggerContext"
