/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/display-name */
import React, { HTMLAttributes, useRef, useState } from "react"
import {
  autoUpdate,
  size,
  flip,
  useId,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
  FloatingFocusManager,
  FloatingPortal,
} from "@floating-ui/react"
// import { useFloating } from "@floating-ui/react-dom"
import classnames from "classnames"
import { CheckIcon } from "~components/Icon"
import { Popover } from "~components/MultiSelect/subcomponents/Popover"
import { OverrideClassName } from "~types/OverrideClassName"
import { RemovableTag } from "../Tag"
import styles from "./MultiSelect.module.scss"

type Item = {
  id: string
  label: string
}

const items = [
  {
    id: "avo",
    label: "Avocado",
  },
  {
    id: "banana",
    label: "Banana",
  },
  {
    id: "blueberry",
    label: "Blueberry",
  },
  {
    id: "feijoa",
    label: "Feijoa",
  },
  {
    id: "fig",
    label: "Fig",
  },
  {
    id: "kiwifruit",
    label: "Kiwifruit",
  },
]

export type MultiSelectProps = {
  isReversed?: boolean
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

export const MultiSelect = ({
  isReversed = false,
  classNameOverride,
  ...restProps
}: MultiSelectProps): JSX.Element => {
  const asdasd = "asdasd"
  return (
    <div
      className={classnames(
        styles.multiSelect,
        isReversed && styles.isReversed,
        classNameOverride
      )}
      {...restProps}
    >
      <AutoComplete />
    </div>
  )
}

function AutoComplete() {
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [selectedItems, setSelectedItems] = useState<Set<Item>>(new Set())

  const listRef = useRef<Array<HTMLElement | null>>([])

  const { refs, floatingStyles, context } = useFloating<HTMLInputElement>({
    whileElementsMounted: autoUpdate,
    open,
    onOpenChange: setOpen,
    middleware: [
      flip({ padding: 10 }),
      size({
        apply({ rects, availableHeight, elements }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
            maxHeight: `${availableHeight}px`,
          })
        },
        padding: 20,
      }),
    ],
  })

  const role = useRole(context, { role: "listbox" })
  const dismiss = useDismiss(context)
  const listNav = useListNavigation(context, {
    listRef,
    activeIndex,
    onNavigate: setActiveIndex,
    virtual: true,
    loop: true,
  })

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [role, dismiss, listNav]
  )

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    setInputValue(value)

    if (value) {
      setOpen(true)
      setActiveIndex(0)
    } else {
      setOpen(false)
    }
  }

  const filteredItems = inputValue.length
    ? items.filter(item =>
        item.label.toLowerCase().startsWith(inputValue.toLowerCase())
      )
    : items

  return (
    <>
      <div>
        {Array.from(selectedItems).map(item => (
          <RemovableTag
            key={item.id}
            removeButtonProps={{
              ariaLabel: `Remove option: ${item}`,
              onClick: () =>
                setSelectedItems(
                  new Set(
                    Array.from(selectedItems).filter(i => i.id !== item.id)
                  )
                ),
            }}
          >
            {item.label}
          </RemovableTag>
        ))}
      </div>
      <div>
        <div ref={refs.setReference}>
          <button type="button" className="border-purple">
            Open popover
          </button>
        </div>
        <Popover refs={refs} classNameOverride="p-12">
          <input
            className={classnames(
              "font-family-paragraph",
              "p-12",
              "border-default border-gray-500 rounded-default",
              "relative focus-visible:outline-none focus-visible:after:absolute focus-visible:after:inset-[-3px] focus-visible:after:rounded-focus-ring focus-visible:after:border-default focus-visible:after:border-solid focus-visible:after:border-blue-500 focus-visible:after:bg-transparent focus-visible:after:content-['']"
            )}
            {...getReferenceProps({
              // ref: refs.setReference,
              onChange,
              value: inputValue,
              placeholder: "Search…",
              "aria-autocomplete": "list",
              onKeyDown(event) {
                if (
                  event.key === "Enter" &&
                  activeIndex != null &&
                  filteredItems[activeIndex]
                ) {
                  setSelectedItems(
                    new Set([
                      ...Array.from(selectedItems),
                      filteredItems[activeIndex],
                    ])
                  )
                }
              },
            })}
          />
          {filteredItems.map((item, index) => {
            const isSelected =
              Array.from(selectedItems).findIndex(i => i.id === item.id) !== -1
            return (
              <div
                key={item.id}
                role="option"
                // id={item.id}
                aria-selected={isSelected}
                {...getItemProps({
                  key: item.id,
                  ref(node) {
                    listRef.current[index] = node
                  },
                  onClick() {
                    if (isSelected) {
                      setSelectedItems(
                        new Set(
                          Array.from(selectedItems).filter(
                            i => i.id !== item.id
                          )
                        )
                      )
                      return
                    }

                    setSelectedItems(
                      new Set([...Array.from(selectedItems), item])
                    )
                  },
                })}
                className={classnames(
                  "font-family-paragraph text-purple-800 p-12 cursor-default",
                  {
                    ["bg-blue-100"]: activeIndex === index,
                  }
                )}
              >
                {item.label}
                {isSelected && <CheckIcon role="presentation" />}
              </div>
            )
          })}
        </Popover>

        {/* <FloatingPortal>
          {open && (
            <FloatingFocusManager
              context={context}
              initialFocus={-1}
              visuallyHiddenDismiss
            >
              <div
                {...getFloatingProps({
                  ref: refs.setFloating,
                  style: {
                    ...floatingStyles,
                    overflowY: "auto",
                  },
                })}
                className="bg-white shadow-lg mt-4 rounded-default"
              > */}

        {/* </div>
            </FloatingFocusManager>
          )}
        </FloatingPortal> */}
      </div>
    </>
  )
}

MultiSelect.displayName = "MultiSelect"
