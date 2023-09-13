import React, { useState, HTMLAttributes, useRef, useId } from "react"
import classnames from "classnames"
import { ReactFocusOnProps } from "react-focus-on/dist/es5/types"
import { ClearButton } from "~components/ClearButton"
import { ChevronDownIcon, ChevronUpIcon } from "~components/Icons"
import { OverrideClassName } from "~types/OverrideClassName"
import { Popover, useFloating } from "./subcomponents/Popover"
import styles from "./MultiSelect.module.scss"

export type MultiSelectProps = OverrideClassName<HTMLAttributes<HTMLDivElement>>

export const MultiSelect = ({
  id: propsId,
  classNameOverride,
  ...restProps
}: MultiSelectProps): JSX.Element => {
  const id = propsId ?? useId()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggleButtonRef = useRef<HTMLButtonElement>(null)
  const { refs } = useFloating()

  const handleClose = (): void => setIsOpen(false)

  const onClickOutside: ReactFocusOnProps["onClickOutside"] = e => {
    const toggle = refs.reference.current as Node
    const isInToggle = toggle.contains(e.target as HTMLElement)
    if (!isInToggle) handleClose()
  }

  return (
    <>
      <div id={id} className={classnames(classNameOverride)} {...restProps}>
        {/* Label */}
        {/* Toggle */}
        <div ref={refs.setReference} className={styles.toggle}>
          <button
            ref={toggleButtonRef}
            className={styles.toggleButton}
            aria-label={`${isOpen ? "Close" : "Open"} menu: Pancakes`}
            aria-controls={`${id}--popper`}
            aria-expanded={isOpen}
            aria-haspopup="dialog"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <ChevronUpIcon role="presentation" />
            ) : (
              <ChevronDownIcon role="presentation" />
            )}
          </button>
          {/* eslint-disable no-console */}
          <div className={styles.selectedItemsContainer}>
            {/* list-style: none removes role="list" in Safari */}
            {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
            <ul role="list" className={styles.selectedItems}>
              <li className="inline-flex items-center bg-gray-200 h-[26px] border-solid box-border rounded-default">
                Waffle
                <ClearButton onClick={() => console.log(">:]")} />
              </li>
              <li className="inline-flex items-center bg-gray-200 h-[26px] border-solid box-border rounded-default">
                Waffle
                <ClearButton onClick={() => console.log(">:]")} />
              </li>
              <li className="inline-flex items-center bg-gray-200 h-[26px] border-solid box-border rounded-default">
                Waffle
                <ClearButton onClick={() => console.log(">:]")} />
              </li>
              <li className="inline-flex items-center bg-gray-200 h-[26px] border-solid box-border rounded-default">
                Waffle
                <ClearButton onClick={() => console.log(">:]")} />
              </li>
              <li className="inline-flex items-center bg-gray-200 h-[26px] border-solid box-border rounded-default">
                Waffle
                <ClearButton onClick={() => console.log(">:]")} />
              </li>
              <li className="inline-flex items-center bg-gray-200 h-[26px] border-solid box-border rounded-default">
                Waffle
                <ClearButton onClick={() => console.log(">:]")} />
              </li>
              <li className="inline-flex items-center bg-gray-200 h-[26px] border-solid box-border rounded-default">
                Waffle
                <ClearButton onClick={() => console.log(">:]")} />
              </li>
              <li className="inline-flex items-center bg-gray-200 h-[26px] border-solid box-border rounded-default">
                Waffle
                <ClearButton onClick={() => console.log(">:]")} />
              </li>
              <li className="inline-flex items-center bg-gray-200 h-[26px] border-solid box-border rounded-default">
                Waffle
                <ClearButton onClick={() => console.log(">:]")} />
              </li>
              <li className="inline-flex items-center bg-gray-200 h-[26px] border-solid box-border rounded-default">
                Waffle
                <ClearButton onClick={() => console.log(">:]")} />
              </li>
            </ul>
            <ClearButton
              classNameOverride={styles.clearAllButton}
              onClick={() => console.log(">:]")}
            />
          </div>
          {/* eslint-enable no-console */}
        </div>
        {isOpen && (
          <Popover
            refs={refs}
            id={`${id}--popper`}
            focusOnProps={{
              onClickOutside,
              onEscapeKey: handleClose,
              shards: [toggleButtonRef],
              noIsolation: true,
            }}
          >
            <button type="button">Auto focus please!</button>
            Hello, is it me your looking for?
          </Popover>
        )}
        {/* Description */}
        {/* ValidationMessage */}
      </div>
    </>
  )
}

MultiSelect.displayName = "MultiSelect"
