import React, { useState, HTMLAttributes, useRef, useId } from "react"
import classnames from "classnames"
import { ReactFocusOnProps } from "react-focus-on/dist/es5/types"
import { Heading } from "~components/Heading"
import { OverrideClassName } from "~types/OverrideClassName"
import {
  MultiSelectOptions,
  MultiSelectOptionsProps,
} from "./subcomponents/MultiSelectOptions"
import { MultiSelectToggle } from "./subcomponents/MultiSelectToggle"
import { Popover, useFloating } from "./subcomponents/Popover"
import styles from "./MultiSelect.module.scss"

export type MultiSelectProps = {
  label: string
  options: MultiSelectOptionsProps["options"]
  selectedValues: MultiSelectOptionsProps["selectedValues"]
  onSelectedValuesChange: MultiSelectOptionsProps["onChange"]
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

export const MultiSelect = ({
  id: propsId,
  label,
  options,
  selectedValues,
  onSelectedValuesChange,
  isOpen,
  onOpenChange,
  classNameOverride,
  ...restProps
}: MultiSelectProps): JSX.Element => {
  const id = propsId ?? useId()

  const toggleButtonRef = useRef<HTMLButtonElement>(null)
  const { refs } = useFloating()

  const handleToggleClick = (): void => onOpenChange(!isOpen)
  const handleClose = (): void => onOpenChange(false)

  const onClickOutside: ReactFocusOnProps["onClickOutside"] = e => {
    const toggle = refs.reference.current as Node
    const isInToggle = toggle.contains(e.target as HTMLElement)
    if (!isInToggle) {
      e.stopPropagation()
      handleClose()
    }
  }

  return (
    <div id={id} className={classnames(classNameOverride)} {...restProps}>
      <Heading tag="span" variant="heading-6" id={`${id}--label`}>
        {label}
      </Heading>

      <div ref={refs.setReference} className={styles.toggleContainer}>
        <MultiSelectToggle
          ref={toggleButtonRef}
          id={`${id}--toggle`}
          aria-labelledby={`${id}--label`}
          aria-controls={`${id}--popover`}
          onClick={handleToggleClick}
          isOpen={isOpen}
        />
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
          classNameOverride={styles.popover}
        >
          <MultiSelectOptions
            id={`${id}--options`}
            options={options}
            onChange={onSelectedValuesChange}
            selectedValues={selectedValues}
          />
        </Popover>
      )}
      {/* Description */}
      {/* ValidationMessage */}
    </div>
  )
}

MultiSelect.displayName = "MultiSelect"
