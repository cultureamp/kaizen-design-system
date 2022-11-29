import React, {
  ButtonHTMLAttributes,
  HTMLAttributes,
  useContext,
  useEffect,
} from "react"
import { useButton } from "@react-aria/button"
import { HiddenSelect, useSelect } from "@react-aria/select"
import { Item } from "@react-stately/collections"
import { SelectState, useSelectState } from "@react-stately/select"
import classnames from "classnames"
import { VisuallyHidden } from "@kaizen/a11y"
import { FloatingSelectWrapper } from "../../components/FloatingSelectWrapper"
import { RootProps } from "../../components/Root"
import rootStyles from "../../components/Root/rootStyles.module.scss"
import { ItemType } from "../../types"

export interface SelectProviderProps {
  isOpen?: boolean
  defaultOpen?: boolean
  onOpenChange?: (isOpen: boolean) => void
  children: React.ReactNode
  isDisabled?: boolean
  items: ItemType[]
  onSelectionChange?: RootProps["onSelectionChange"]
  selectedKey?: RootProps["selectedKey"]
  label: string
  id: string // provide A11y context for label
  isFullWidth?: boolean
  trigger: React.ReactNode
}

export interface SelectProviderContextType {
  menuTriggerProps: HTMLAttributes<HTMLElement>
  menuProps: HTMLAttributes<HTMLElement>
  buttonProps: ButtonHTMLAttributes<HTMLButtonElement>
  buttonRef: React.RefObject<HTMLButtonElement>
  listBoxProps: HTMLAttributes<HTMLElement>
  labelProps: HTMLAttributes<HTMLElement>
  valueProps: HTMLAttributes<HTMLElement>
  state: SelectState<ItemType>
}

const SelectContext = React.createContext<SelectProviderContextType>(
  {} as SelectProviderContextType
)
export function SelectProvider(props: SelectProviderProps) {
  const {
    onSelectionChange,
    children,
    isDisabled,
    label,
    id,
    trigger,
    ...otherProps
  } = props

  // Create state based on the incoming props to manage the open/close
  const state = useSelectState({
    ...otherProps,
    children: item => <Item key={item.value}>{item.label}</Item>,
    onSelectionChange,
  })

  // Get A11y attributes and events for the menu trigger and menu elements
  const ref = React.useRef<HTMLButtonElement>(null)

  const { labelProps, triggerProps, valueProps, menuProps } = useSelect(
    {
      ...otherProps,
      children: item => <Item key={item.value}>{item.label}</Item>,
      onSelectionChange,
    },
    state,
    ref
  )
  const menuTriggerProps = triggerProps
  // Get A11y attributes and events for the button based on the trigger props from useMenuTrigger
  const { buttonProps } = useButton({ ...menuTriggerProps, isDisabled }, ref)

  const listBoxProps = menuProps

  // Fix the issue when default open and close by keyboard, then focus is lost
  useEffect(() => {
    if (state.isOpen === false) {
      ref.current?.focus()
    }
  }, [state.isOpen])

  return (
    <SelectContext.Provider
      value={{
        menuTriggerProps,
        menuProps,
        buttonProps,
        buttonRef: ref,
        listBoxProps,
        labelProps,
        valueProps,
        state,
      }}
    >
      <div
        className={classnames([
          rootStyles.container,
          !otherProps.isFullWidth && rootStyles.notFullWidth,
        ])}
      >
        <HiddenSelect label={label} name={id} state={state} triggerRef={ref} />
        {trigger}
        <FloatingSelectWrapper>
          <VisuallyHidden {...labelProps}>{label}</VisuallyHidden>
          {children}
        </FloatingSelectWrapper>
      </div>
    </SelectContext.Provider>
  )
}

export const useSelectContext = () => useContext(SelectContext)

export const SelectConsumer = SelectContext.Consumer

SelectContext.displayName = "SelectContext"
