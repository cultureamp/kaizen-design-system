import React, { useState, createRef } from "react"

import classnames from "classnames"
import { Paragraph } from "@kaizen/component-library"
import styles from "../styles/styles.module.scss"
import determineSelectionFromKeyPress from "./helpers/determineSelectionFromKeyPress"
import { Scale, ScaleItem, ScaleValue } from "./types"

type ItemRefs = Array<{
  value: ScaleValue
  ref: { current: null | HTMLDivElement }
}>

export interface LikertScaleProps {
  labelId: string
  scale: Scale
  selectedItem: ScaleItem | null
  automationId?: string
  reversed?: boolean
  validationError?: boolean
  validationErrorId?: string
  onSelect: (value: ScaleItem | null) => void
}

export const LikertScaleLegacy = ({
  scale,
  selectedItem,
  reversed,
  automationId,
  onSelect,
  validationError,
  validationErrorId,
  labelId,
}: LikertScaleProps) => {
  const [hoveredItem, setHoveredItem] = useState<ScaleItem | null>(null)
  const itemRefs: ItemRefs = scale.map(s => ({
    value: s.value,
    ref: createRef<HTMLDivElement>(),
  }))

  const handleRadioClick = (item: ScaleItem): void => {
    const newValue =
      selectedItem && item.value === selectedItem.value
        ? scale.find(s => s.value === -1) || null
        : item
    onSelect(newValue)

    // Remove hover state
    setHoveredItem(null)
  }

  const handleRadioMouseEnter = (item: ScaleItem): void => {
    if (selectedItem && selectedItem.value > 0) {
      return // Disable hover when there is a selection
    }
    setHoveredItem(item)
  }

  const handleRadioMouseLeave = (): void => {
    if (selectedItem && selectedItem.value > 0) {
      return // Disable hover when there is a selection
    }
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

  let legend = "Not rated"
  if (hoveredItem) {
    legend = hoveredItem.label
  } else if (selectedItem) {
    legend = selectedItem.label
  }

  return (
    <div
      className={classnames(styles.container, {
        [styles.rated]: selectedItem && selectedItem.value > 0,
        [styles.reversed]: reversed,
      })}
      aria-labelledby={labelId}
      role="radiogroup"
      tabIndex={-1}
      aria-describedby={(validationError && validationErrorId) || undefined}
      data-automation-id={automationId}
    >
      <div
        className={styles.legend}
        data-automation-id={automationId && `${automationId}-legend`}
      >
        <Paragraph variant="small" color={reversed ? "white" : "dark"}>
          {legend}
        </Paragraph>
      </div>
      <div
        className={classnames(styles.itemContainer, {
          [styles.rated]: selectedItem && selectedItem.value > 0,
          [styles.reversed]: reversed,
        })}
      >
        {scale.map((item: ScaleItem) => {
          if (item.value <= 0) {
            return
          }

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

          return (
            <div
              className={classnames(styles.likertItem, {
                [styles.selected]:
                  selectedItem && item.value <= selectedItem.value,
                [styles.suggested]:
                  hoveredItem && hoveredItem.value >= item.value,
                [styles.unselected]:
                  selectedItem && selectedItem.value < item.value,
              })}
              onClick={() => handleRadioClick(item)}
              key={item.value}
              data-automation-id={
                automationId && `${automationId}-item-${item.value}`
              }
              onMouseEnter={() => handleRadioMouseEnter(item)}
              onMouseLeave={handleRadioMouseLeave}
              role="radio"
              aria-label={item.label}
              aria-checked={
                selectedItem ? item.value === selectedItem.value : false
              }
              aria-posinset={item.value}
              aria-setsize={5}
              tabIndex={tabIndex}
              ref={itemRef && itemRef.ref}
              onKeyDown={event => handleKeyDown(event, item)}
            >
              <div
                className={classnames(
                  styles.likertItemFill,
                  styles[`field${item.value}`],
                  {
                    [styles.pop]:
                      selectedItem && item.value === selectedItem.value,
                  }
                )}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
