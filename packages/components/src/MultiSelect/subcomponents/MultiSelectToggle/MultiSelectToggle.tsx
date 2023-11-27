import React, { HTMLAttributes, forwardRef, useId } from "react"
import classnames from "classnames"
import { ClearButton } from "~components/ClearButton"
import { FieldMessageProps } from "~components/FieldMessage"
import { ChevronDownIcon, ChevronUpIcon } from "~components/Icon"
import { RemovableTag } from "~components/__future__/Tag"
import { OverrideClassName } from "~types/OverrideClassName"
import { MultiSelectOption } from "../../types"
import styles from "./MultiSelectToggle.module.scss"

export type MultiSelectToggleProps = {
  onClick: React.MouseEventHandler
  ["aria-labelledby"]: string
  ["aria-controls"]: string
  selectedOptions: MultiSelectOption[]
  isOpen?: boolean
  status?: FieldMessageProps["status"]
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
      isOpen = false,
      classNameOverride,
      selectedOptions,
      onRemoveOption,
      onRemoveAllOptions,
      status,
      ...restProps
    },
    ref
  ): JSX.Element => {
    const clearAllId = useId()
    return (
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
            status && styles[status]
          )}
          onClick={onClick}
          {...restProps}
        >
          <button
            ref={ref}
            className={styles.toggleButton}
            aria-labelledby={ariaLabelledBy}
            aria-describedby={ariaDescribedBy}
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
                      <RemovableTag
                        removeButtonProps={{
                          ariaLabel: `Remove option: ${label}`,
                          onClick: () => onRemoveOption(value),
                        }}
                      >
                        {label}
                      </RemovableTag>
                    </li>
                  ))}
                </ul>

                <ClearButton
                  id={clearAllId}
                  aria-label="Remove all options from "
                  aria-labelledby={`${clearAllId} ${ariaLabelledBy}`}
                  classNameOverride={styles.clearAllButton}
                  onClick={e => {
                    e.stopPropagation()
                    onRemoveAllOptions()
                  }}
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
