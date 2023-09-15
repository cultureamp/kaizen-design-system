import React, {
  useState,
  HTMLAttributes,
  useRef,
  useId,
  MouseEventHandler,
} from "react"
import classnames from "classnames"
import { ReactFocusOnProps } from "react-focus-on/dist/es5/types"
import { ClearButton } from "~components/ClearButton"
import { Heading } from "~components/Heading"
import { ChevronDownIcon, ChevronUpIcon } from "~components/Icons"
import { OverrideClassName } from "~types/OverrideClassName"
import { Popover, useFloating } from "./subcomponents/Popover"
import styles from "./MultiSelect.module.scss"

export type MultiSelectProps = {
  label: string
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

export const MultiSelect = ({
  label,
  id: propsId,
  classNameOverride,
  ...restProps
}: MultiSelectProps): JSX.Element => {
  const id = propsId ?? useId()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggleButtonRef = useRef<HTMLButtonElement>(null)
  const { refs } = useFloating()

  const handleToggle = (): void => setIsOpen(!isOpen)
  const handleClose = (): void => setIsOpen(false)

  const onClickOutside: ReactFocusOnProps["onClickOutside"] = e => {
    const toggle = refs.reference.current as Node
    const isInToggle = toggle.contains(e.target as HTMLElement)
    if (!isInToggle) handleClose()
  }

  /* eslint-disable no-console */
  const handleSelectedOptionClick: MouseEventHandler = e => {
    e.stopPropagation()
    console.log(">:]")
  }
  const handleClearAllOptionsClick: MouseEventHandler = e => {
    e.stopPropagation()
    console.log("ALL >:]")
  }
  /* eslint-enable no-console */

  return (
    <>
      <div id={id} className={classnames(classNameOverride)} {...restProps}>
        {/* Label */}
        <Heading
          tag="span"
          variant="heading-6"
          id={`${id}--label`}
          classNameOverride={styles.label}
        >
          {label}
        </Heading>
        {/* Toggle */}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
        <div
          ref={refs.setReference}
          id={`${id}--toggle`}
          className={styles.toggle}
          onClick={handleToggle}
        >
          <button
            ref={toggleButtonRef}
            className={styles.toggleButton}
            aria-labelledby={`${id}--label`}
            aria-controls={`${id}--popover`}
            aria-expanded={isOpen}
            aria-haspopup="dialog"
            type="button"
            onClick={handleToggle}
          >
            {isOpen ? (
              <ChevronUpIcon role="presentation" />
            ) : (
              <ChevronDownIcon role="presentation" />
            )}
          </button>

          <div className={styles.selectedItemsContainer}>
            {/* list-style: none removes role="list" in Safari */}
            {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
            <ul role="list" className={styles.selectedItems}>
              <li className="inline-flex items-center bg-gray-200 h-[26px] border-solid box-border rounded-default">
                Waffle
                <ClearButton
                  aria-label="Clear waffle"
                  onClick={handleSelectedOptionClick}
                />
              </li>
            </ul>
            <ClearButton
              aria-label="Clear all waffles"
              classNameOverride={styles.clearAllButton}
              onClick={handleClearAllOptionsClick}
            />
          </div>
        </div>

        {isOpen && (
          <Popover
            refs={refs}
            id={`${id}--popover`}
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
