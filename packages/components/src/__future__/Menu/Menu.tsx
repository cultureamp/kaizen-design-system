import React, { HTMLAttributes, useRef, useState } from "react"
import {
  useFloating,
  useListNavigation,
  useInteractions,
  FloatingFocusManager,
  FloatingPortal,
  FloatingList,
  FloatingTree,
  useDismiss,
  useFloatingTree,
  useClick,
  useTypeahead,
} from "@floating-ui/react"
import { Button } from "~components/Button"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./Menu.module.scss"

export type MenuProps = {
  button: string
  items: Array<{
    id: string
    label: string
    href?: string
    onClick?: (event: any) => void
  }>
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

export const Menu = ({
  button,
  items,
  ...restProps
}: MenuProps): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(false)
  // const [hasFocusInside, setHasFocusInside] = React.useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: "bottom-start",
  })
  const tree = useFloatingTree()

  const listRef = useRef<Array<HTMLButtonElement | HTMLAnchorElement | null>>(
    []
  )
  const labelsRef = React.useRef<Array<string | null>>(items.map(i => i.label))

  const listNavigation = useListNavigation(context, {
    listRef,
    activeIndex,
    onNavigate: setActiveIndex,
  })

  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    onMatch: isOpen ? setActiveIndex : undefined,
    activeIndex,
  })

  const click = useClick(context, {
    event: "mousedown",
    toggle: true,
    ignoreMouse: false,
  })
  const dismiss = useDismiss(context)
  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [listNavigation, dismiss, click, typeahead]
  )

  return (
    <FloatingTree>
      <div {...restProps}>
        <Button
          type="button"
          ref={refs.setReference}
          {...getReferenceProps()}
          label={button}
        />
        <FloatingList elementsRef={listRef} labelsRef={labelsRef}>
          {isOpen && (
            <FloatingPortal>
              <FloatingFocusManager
                context={context}
                modal={false}
                returnFocus={true}
              >
                <div
                  ref={refs.setFloating}
                  style={floatingStyles}
                  className={styles.popover}
                  {...getFloatingProps()}
                >
                  {items.map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      className={styles.item}
                      role="menuitem"
                      tabIndex={activeIndex === index ? 0 : -1}
                      ref={node => {
                        listRef.current[index] = node
                      }}
                      {...getItemProps({
                        onClick(event: React.MouseEvent<HTMLButtonElement>) {
                          item.onClick?.(event)
                          tree?.events.emit("click")
                        },
                      })}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </FloatingFocusManager>
            </FloatingPortal>
          )}
        </FloatingList>
      </div>
    </FloatingTree>
  )
}

Menu.displayName = "Menu"
