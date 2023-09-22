import React, { HTMLAttributes, forwardRef } from "react"
import classnames from "classnames"
import { ClearButton } from "~components/ClearButton"
import { ChevronDownIcon, ChevronUpIcon } from "~components/Icons"
import { OverrideClassName } from "~types/OverrideClassName"
import { MultiSelectOption } from "../../types"
import styles from "./MultiSelectToggle.module.scss"

export type MultiSelectToggleProps = {
  onClick: React.MouseEventHandler
  ["aria-labelledby"]: string
  ["aria-controls"]: string
  selectedOptions: MultiSelectOption[]
  isOpen?: boolean
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

export const MultiSelectToggle = forwardRef<
  HTMLButtonElement,
  MultiSelectToggleProps
>(
  (
    {
      onClick,
      "aria-labelledby": ariaLabelledBy,
      "aria-controls": ariaControls,
      isOpen = false,
      classNameOverride,
      selectedOptions,
      ...restProps
    },
    ref
  ): JSX.Element => {
    /* eslint-disable no-console */
    const handleSelectedOptionClick: React.MouseEventHandler = () => {
      console.log(">:]")
    }
    const handleClearAllOptionsClick: React.MouseEventHandler = e => {
      e.stopPropagation()
      console.log("ALL >:]")
    }
    /* eslint-enable no-console */

    return (
      <>
        {/*
         * The inner <button> is the actual semantic element, and the onClick here
         * is just a quality-of-life implementation for mouse users.
         */}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
        <div
          className={classnames(styles.multiSelectToggle, classNameOverride)}
          onClick={onClick}
          {...restProps}
        >
          <button
            ref={ref}
            className={styles.toggleButton}
            aria-labelledby={ariaLabelledBy}
            aria-controls={ariaControls}
            aria-expanded={isOpen}
            aria-haspopup="dialog"
            type="button"
            onClick={e => {
              e.stopPropagation()
              onClick(e)
            }}
          >
            {isOpen ? (
              <ChevronUpIcon role="presentation" />
            ) : (
              <ChevronDownIcon role="presentation" />
            )}
          </button>

          <div className={styles.selectedItemsContainer}>
            {selectedOptions.length > 0 && (
              <>
                {/* list-style: none removes role="list" in Safari */}
                {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                <ul role="list" className={styles.selectedItems}>
                  {selectedOptions.map(({ label, value }) => (
                    // This stops the underlying toggle collapsing the popover when interactive with Tags
                    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
                    <li key={value} onClick={e => e.stopPropagation()}>
                      <span className="inline-flex items-center bg-gray-200 h-[26px] border-solid box-border rounded-default">
                        {label}
                        <ClearButton
                          aria-label="Clear waffle"
                          onClick={handleSelectedOptionClick}
                        />
                      </span>
                    </li>
                  ))}
                </ul>
                <ClearButton
                  aria-label="Clear all waffles"
                  classNameOverride={styles.clearAllButton}
                  onClick={handleClearAllOptionsClick}
                />
              </>
            )}
          </div>
        </div>
      </>
    )
  }
)

MultiSelectToggle.displayName = "MultiSelectToggle"
