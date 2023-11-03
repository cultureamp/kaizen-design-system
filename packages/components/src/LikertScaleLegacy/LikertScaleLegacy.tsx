import React, { createRef, useState } from "react"
import classnames from "classnames"
import { FieldMessage } from "~components/FieldMessage"
import { CheckIcon } from "~components/Icon"
import { Text } from "~components/Text"
import { ScaleValue, Scale, ScaleItem } from "./types"
import determineSelectionFromKeyPress from "./utils/determineSelectionFromKeyPress"
import styles from "./LikertScaleLegacy.module.scss"

type ItemRefs = Array<{
  value: ScaleValue
  ref: { current: null | HTMLDivElement }
}>

export type LikertScaleProps = {
  labelId: string
  scale: Scale
  selectedItem: ScaleItem | null
  /**
   * @deprecated Please use data-testid instead
   */
  automationId?: string
  "data-testid"?: string
  reversed?: boolean
  validationMessage?: string
  status?: "default" | "error"
  onSelect: (value: ScaleItem | null) => void
}

const SelectedItemIcon = (): JSX.Element => (
  <CheckIcon role="presentation" classNameOverride={styles.check} />
)

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082060201/Likert+Scale Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-likertscalelegacy--docs Storybook}
 */
export const LikertScaleLegacy = ({
  scale,
  selectedItem,
  reversed,
  "data-testid": dataTestId,
  onSelect,
  validationMessage,
  status,
  labelId,
}: LikertScaleProps): JSX.Element => {
  const [hoveredItem, setHoveredItem] = useState<ScaleItem | null>(null)
  const itemRefs: ItemRefs = scale.map(s => ({
    value: s.value,
    ref: createRef<HTMLDivElement>(),
  }))

  const handleRadioClick = (item: ScaleItem): void => {
    // Is this a click on the item that is currently selected?
    const isClickOnSelectedItem = selectedItem?.value === item.value

    // Grab "Not rated" state item from the scale, its value is -1
    const notYetRated = scale.find(s => s.value === -1) || null

    // Clear or set new selection
    const newItem = isClickOnSelectedItem ? notYetRated : item

    onSelect(newItem)
    setHoveredItem(null)
  }

  /**
   * Because the radios have been built with divs, we need to add the keyboard functionality manually
   */
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    focusedItem: ScaleItem
  ): void => {
    const newPosition = determineSelectionFromKeyPress(
      event.keyCode,
      selectedItem,
      focusedItem
    )
    if (newPosition) {
      event.preventDefault()

      onSelect(scale.find(s => s.value === newPosition) || null)

      // Update focus
      const itemRef = itemRefs.find(item => item.value === newPosition)
      itemRef && itemRef.ref.current && itemRef.ref.current.focus()
    }
  }

  const legend = hoveredItem?.label || selectedItem?.label || "Not rated"

  const shouldDisplayValidationMessage =
    status !== "default" && validationMessage !== undefined

  const validationMessageId = shouldDisplayValidationMessage
    ? `${labelId}-field-validation-message`
    : undefined

  const isRated = selectedItem && selectedItem.value > 0

  return (
    <div
      className={classnames(
        styles.container,
        isRated && styles.rated,
        reversed && [styles.reversed],
        hoveredItem !== null && styles.hovered
      )}
      aria-labelledby={labelId}
      role="radiogroup"
      tabIndex={-1}
      aria-describedby={validationMessageId}
      data-testid={dataTestId}
    >
      <div
        className={styles.legend}
        data-testid={dataTestId && `${dataTestId}-legend`}
      >
        <Text variant="small" color={reversed ? "white" : "dark"}>
          {legend}
        </Text>
      </div>
      <div
        className={classnames(
          styles.itemContainer,
          isRated && styles.rated,
          reversed && styles.reversed
        )}
      >
        {scale.map((item: ScaleItem) => {
          if (item.value <= 0) {
            return
          }

          const isSelectedItem = selectedItem?.value === item.value
          const itemRef = itemRefs.find(i => item.value === i.value)

          // Make control tabbable
          let tabIndex = 0
          // Unless.. there's an item selected and it's not this one
          if (
            selectedItem &&
            selectedItem.value > 0 &&
            selectedItem.value !== item.value
          ) {
            tabIndex = -1
          }

          const isSelected =
            selectedItem && item.value <= selectedItem?.value && !hoveredItem
          const isSuggested = hoveredItem && hoveredItem.value >= item.value
          const isUnselected = selectedItem && selectedItem.value < item.value

          return (
            <div
              className={classnames(
                styles.likertItem,
                styles[`likertItem${item.value}`],
                isSelected && styles.selected,
                isSuggested && styles.suggested,
                isUnselected && styles.unselected
              )}
              key={item.value}
              data-testid={dataTestId && `${dataTestId}-item-${item.value}`}
              onClick={(): void => handleRadioClick(item)}
              onMouseEnter={(): void => setHoveredItem(item)}
              onMouseLeave={(): void => setHoveredItem(null)}
              onKeyDown={(event): void => handleKeyDown(event, item)}
              onFocus={(): void => setHoveredItem(item)}
              onBlur={(): void => setHoveredItem(null)}
              role="radio"
              aria-label={item.label}
              aria-checked={isSelectedItem}
              aria-posinset={item.value}
              aria-setsize={5}
              tabIndex={tabIndex}
              ref={itemRef && itemRef.ref}
            >
              <div
                className={classnames(
                  styles.likertItemFill,
                  styles[`field${item.value}`],
                  isSelectedItem && styles.pop
                )}
              />
              {isSelectedItem ? <SelectedItemIcon /> : null}
            </div>
          )
        })}
      </div>
      {shouldDisplayValidationMessage && (
        <FieldMessage
          id={validationMessageId}
          message={validationMessage}
          status={status}
          reversed={reversed}
        />
      )}
    </div>
  )
}
