import React, { ButtonHTMLAttributes, HTMLAttributes, useContext } from "react"
import { MenuTriggerState } from "@react-stately/menu"
import { AriaButtonProps } from "@react-types/button"

export interface MenuTriggerProviderProps {
  /* A11y */
  menuTriggerProps: AriaButtonProps<"button">
  menuProps: HTMLAttributes<HTMLElement>
  buttonProps: ButtonHTMLAttributes<HTMLButtonElement>
  /* MenuTiggerState */
  menuTiggerState: MenuTriggerState

  buttonRef: React.RefObject<HTMLButtonElement>

  children: React.ReactNode
}

export interface MenuTriggerProviderContextType {
  menuTriggerProps: HTMLAttributes<HTMLElement>
  menuProps: HTMLAttributes<HTMLElement>
  buttonProps: ButtonHTMLAttributes<HTMLButtonElement>
  menuTiggerState: MenuTriggerState

  buttonRef: React.RefObject<HTMLButtonElement>
}

const MenuTriggerContext = React.createContext<MenuTriggerProviderContextType>(
  {} as MenuTriggerProviderContextType
)
export function MenuTriggerProvider(props: MenuTriggerProviderProps) {
  const {
    menuTriggerProps,
    menuProps,
    buttonProps,
    menuTiggerState,
    buttonRef,
  } = props
  return (
    <MenuTriggerContext.Provider
      value={{
        menuTriggerProps,
        menuProps,
        buttonProps,
        menuTiggerState,
        buttonRef,
      }}
    >
      {props.children}
    </MenuTriggerContext.Provider>
  )
}

export const useMenuTriggerContext = () => useContext(MenuTriggerContext)

export const MenuTriggerConsumer = MenuTriggerContext.Consumer
