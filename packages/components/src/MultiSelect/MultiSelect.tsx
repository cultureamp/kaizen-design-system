import React, { HTMLAttributes, useRef, useId } from "react"
import classnames from "classnames"
import { ReactFocusOnProps } from "react-focus-on/dist/es5/types"
import {
  FieldMessage,
  FieldMessageProps,
  FieldMessageStatus,
} from "~components/FieldMessage"
import { Heading } from "~components/Heading"
import { OverrideClassName } from "~types/OverrideClassName"
import {
  MultiSelectOptions,
  MultiSelectOptionsProps,
} from "./subcomponents/MultiSelectOptions"
import { MultiSelectToggle } from "./subcomponents/MultiSelectToggle"
import { Popover, useFloating } from "./subcomponents/Popover"
import { MultiSelectOption } from "./types"
import styles from "./MultiSelect.module.scss"

export type MultiSelectProps = {
  label: string
  items: MultiSelectOptionsProps["options"]
  selectedValues: Set<MultiSelectOption["value"]>
  /**
   * A description that provides context for the field
   */
  description?: FieldMessageProps["message"]
  onSelectedValuesChange: MultiSelectOptionsProps["onChange"]
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
  /** A status to convey `error` or `caution` states for the field  */
  status?: Extract<FieldMessageStatus, "error" | "caution">
  /** A message to provide context for the change in `status`, most commonly validation.  */
  validationMessage?: FieldMessageProps["message"]
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

export const MultiSelect = ({
  id: propsId,
  label,
  items,
  selectedValues,
  description,
  onSelectedValuesChange,
  isOpen,
  onOpenChange,
  classNameOverride,
  status,
  validationMessage,
  ...restProps
}: MultiSelectProps): JSX.Element => {
  const id = propsId ?? useId()
  const descriptionId = `${id}-description`
  const validationId = `${id}-validation-message`

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

  const itemsMap = items.reduce(
    (acc, item) => {
      acc[item.value] = item
      return acc
    },
    {} as Record<MultiSelectOption["value"], MultiSelectOption>
  )

  const handleOnRemoveOption = (
    optionValue: MultiSelectOption["value"]
  ): void => {
    const newValues = new Set(selectedValues.values())
    newValues.delete(optionValue)
    onSelectedValuesChange(newValues)
  }

  const handleRemoveAllOptions = (): void => {
    const newValues = new Set([])
    onSelectedValuesChange(newValues)
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
          aria-describedby={`${descriptionId} ${validationId}`}
          aria-controls={`${id}--popover`}
          onClick={handleToggleClick}
          isOpen={isOpen}
          selectedOptions={Array.from(selectedValues).map(
            value => itemsMap[value]
          )}
          status={status}
          onRemoveOption={handleOnRemoveOption}
          onRemoveAllOptions={handleRemoveAllOptions}
        />
      </div>

      {description && <FieldMessage id={descriptionId} message={description} />}
      {validationMessage && (
        <FieldMessage
          id={validationId}
          message={validationMessage}
          status={status}
        />
      )}

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
            options={items}
            onChange={onSelectedValuesChange}
            selectedValues={selectedValues}
          />
        </Popover>
      )}
    </div>
  )
}

MultiSelect.displayName = "MultiSelect"
