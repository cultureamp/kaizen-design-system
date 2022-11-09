import React, {
  ButtonHTMLAttributes,
  HTMLAttributes,
  useContext,
  useEffect,
} from "react"
import { MenuTriggerState, useMenuTriggerState } from "@react-stately/menu"
import { useMenuTrigger } from "@react-aria/menu"
import { useButton } from "@react-aria/button"
import { ItemType } from "../../types"
import { getLongestItem } from "../../utils/getLongestItem/getLongestItem"
import { calculateTextWidth } from "../../utils/calculateTextWidth/calculateTextWidth"

export interface MenuTriggerProviderProps {
  isOpen?: boolean
  defaultOpen?: boolean
  onOpenChange?: (isOpen: boolean) => void
  children: React.ReactNode
  isDisabled?: boolean
  isFullWidth?: boolean
  items: ItemType[]
}

export interface MenuTriggerProviderContextType {
  menuTriggerProps: HTMLAttributes<HTMLElement>
  menuProps: HTMLAttributes<HTMLElement>
  buttonProps: ButtonHTMLAttributes<HTMLButtonElement>
  menuTriggerState: MenuTriggerState
  buttonRef: React.RefObject<HTMLButtonElement>
  isFullWidth: boolean
  longestItemWidth: number | undefined
}

const MenuTriggerContext = React.createContext<MenuTriggerProviderContextType>(
  {} as MenuTriggerProviderContextType
)
export function MenuTriggerProvider({
  isOpen,
  defaultOpen,
  onOpenChange,
  children,
  isDisabled = false,
  isFullWidth = false,
  items,
}: MenuTriggerProviderProps) {
  // Create state based on the incoming props to manage the open/close
  const state = useMenuTriggerState({ isOpen, defaultOpen, onOpenChange })

  // Get A11y attributes and events for the menu trigger and menu elements
  const ref = React.createRef<HTMLButtonElement>()
  const { menuTriggerProps, menuProps } = useMenuTrigger(
    { type: "listbox", isDisabled },
    state,
    ref
  )
  // Get A11y attributes and events for the button based on the trigger props from useMenuTrigger
  const { buttonProps } = useButton({ ...menuTriggerProps, isDisabled }, ref)

  const longestItem = getLongestItem(items)
  const longestItemWidth = calculateTextWidth(longestItem)

  // Fix the issue when default open and close by keyboard, then focus is lost
  useEffect(() => {
    if (state.isOpen === false) {
      ref.current?.focus()
    }
  }, [state.isOpen])

  return (
    <MenuTriggerContext.Provider
      value={{
        menuTriggerProps,
        menuProps,
        buttonProps,
        menuTriggerState: state,
        buttonRef: ref,
        isFullWidth,
        longestItemWidth,
      }}
    >
      {children}
    </MenuTriggerContext.Provider>
  )
}

export const useMenuTriggerContext = () => useContext(MenuTriggerContext)

export const MenuTriggerConsumer = MenuTriggerContext.Consumer

MenuTriggerContext.displayName = "MenuTriggerContext"
