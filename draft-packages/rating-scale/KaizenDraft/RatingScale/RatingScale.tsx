import React, { useState, createRef } from "react"

import classNames from "classnames"
import { Paragraph } from "@kaizen/component-library"
import determineSelectionFromKeyPress from "./helpers/determineSelectionFromKeyPress"
import { Scale, ScaleItem, ScaleValueResponse } from "./types"

const styles = require("./styles.module.scss")

type ItemRefs = Array<{
  value: ScaleValueResponse
  ref: { current: null | HTMLDivElement }
}>

export interface RatingScaleProps {
  scale: Scale
  selectedItem: ScaleItem | null
  questionId: string
  reversed?: boolean
  onSelect: (value: ScaleItem | null) => void
}

export const RatingScale = ({
  scale,
  questionId,
  selectedItem,
  reversed,
  onSelect,
}: RatingScaleProps) => {
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

      // XHR
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
      className={classNames(styles.container, {
        [styles.rated]: selectedItem && selectedItem.value > 0,
        [styles.reversed]: reversed,
      })}
      aria-labelledby={"1"}
      role="radiogroup"
      data-focus-to-on-navigate="true"
      tabIndex={-1}
    >
      <div
        className={styles.legend}
        data-automation-id={`rating-scale-legend-${questionId}`}
      >
        <Paragraph variant="small" color={reversed ? "white" : "dark"}>
          {legend}
        </Paragraph>
      </div>
      <div
        className={classNames(styles.container, {
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
              className={classNames(styles.ratingItem, {
                [styles.selected]:
                  selectedItem && item.value <= selectedItem.value,
                [styles.suggested]:
                  hoveredItem && hoveredItem.value >= item.value,
                [styles.unselected]:
                  selectedItem && selectedItem.value < item.value,
              })}
              onClick={() => handleRadioClick(item)}
              key={item.value}
              id={item.value}
              data-automation-id={`rating-scale-item-${item.value}-${questionId}`}
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
                className={classNames(
                  styles.ratingItemFill,
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
