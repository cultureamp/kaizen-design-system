import React, { HTMLAttributes, forwardRef } from "react"
import classnames from "classnames"
import { ClearButton } from "~components/ClearButton"
import { ChevronDownIcon, ChevronUpIcon } from "~components/Icon"
import { Tag } from "~components/Tag"
import { RemovableTag } from "~components/__future__/Tag"
import { OverrideClassName } from "~types/OverrideClassName"
import { MultiSelectOption } from "../../types"
import styles from "./MultiSelectToggle.module.scss"

export type MultiSelectToggleProps = {
  onClick: React.MouseEventHandler
  ["aria-labelledby"]: string
  ["aria-controls"]: string
  isDisabled?: boolean
  selectedOptions: MultiSelectOption[]
  isOpen?: boolean
  onRemoveOption: (optionValue: MultiSelectOption["value"]) => void
  onRemoveAllOptions: () => void
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

export const MultiSelectToggle = forwardRef<
  HTMLButtonElement,
  MultiSelectToggleProps
>(
  (
    {
      onClick,
      "aria-labelledby": ariaLabelledBy,
      "aria-describedby": ariaDescribedBy,
      "aria-controls": ariaControls,
      isDisabled = false,
      isOpen = false,
      classNameOverride,
      selectedOptions,
      onRemoveOption,
      onRemoveAllOptions,
      ...restProps
    },
    ref
  ): JSX.Element => (
    <>
      {/*
       * The inner <button> is the actual semantic element, and the onClick here
       * is just a quality-of-life implementation for mouse users.
       */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div
        className={classnames(
          styles.multiSelectToggle,
          classNameOverride,
          isDisabled && styles.disabled
        )}
        onClick={isDisabled ? undefined : onClick}
        {...restProps}
      >
        <button
          ref={ref}
          className={classnames(
            styles.toggleButton,
            isDisabled && styles.disabled
          )}
          aria-labelledby={ariaLabelledBy}
          aria-describedby={ariaDescribedBy}
          aria-controls={ariaControls}
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          aria-disabled={isDisabled}
          type="button"
          onClick={
            isDisabled
              ? undefined
              : e => {
                  e.stopPropagation()
                  onClick(e)
                }
          }
        >
          {isOpen ? (
            <ChevronUpIcon role="presentation" />
          ) : (
            <ChevronDownIcon role="presentation" />
          )}
        </button>

        <div
          className={classnames(
            styles.selectedItemsContainer,
            selectedOptions.length && styles.hasSelectedItems
          )}
        >
          {selectedOptions.length > 0 && (
            <>
              {/* list-style: none removes role="list" in Safari */}
              {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
              <ul role="list" className={styles.selectedItems}>
                {selectedOptions.map(({ label, value }) => (
                  // This stops the underlying toggle collapsing the popover when interactive with Tags
                  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
                  <li key={value} onClick={e => e.stopPropagation()}>
                    {isDisabled ? (
                      <Tag>{label}</Tag>
                    ) : (
                      <RemovableTag
                        removeButtonProps={{
                          ariaLabel: `Remove option: ${label}`,
                          onClick: () => !isDisabled && onRemoveOption(value),
                        }}
                      >
                        {label}
                      </RemovableTag>
                    )}
                  </li>
                ))}
              </ul>

              {!isDisabled && (
                <ClearButton
                  aria-label="Clear all waffles"
                  classNameOverride={styles.clearAllButton}
                  onClick={e => {
                    e.stopPropagation()
                    onRemoveAllOptions()
                  }}
                />
              )}
            </>
          )}
        </div>
      </div>
    </>
  )
)

MultiSelectToggle.displayName = "MultiSelectToggle"
