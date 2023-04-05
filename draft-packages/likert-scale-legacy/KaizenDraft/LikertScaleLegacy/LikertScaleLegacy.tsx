import React, { useState, createRef } from "react"
import classnames from "classnames"
import { Icon } from "@kaizen/component-library"
import checkIcon from "@kaizen/component-library/icons/check.icon.svg"
import { FieldMessage } from "@kaizen/draft-form"
import { Paragraph } from "@kaizen/typography"
import determineSelectionFromKeyPress from "./helpers/determineSelectionFromKeyPress"
import { Scale, ScaleItem, ScaleValue } from "./types"
import styles from "./LikertScaleLegacy.module.scss"

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
  validationMessage?: string
  status?: "default" | "error"
  onSelect: (value: ScaleItem | null) => void
}

const SelectedItemIcon = (): JSX.Element => (
  <Icon role="presentation" icon={checkIcon} classNameOverride={styles.check} />
)

/**
 * {@link https://cultureamp.design/components/likert-scale/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-likert-scale--default-story Storybook}
 */
export const LikertScaleLegacy = ({
  scale,
  selectedItem,
  reversed,
  automationId,
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
  const notRatedStateItem = scale.find(s => s.value === -1) || null

  const handleRadioClick = (item: ScaleItem): void => {
    const isSameAsCurrentlySelectedItem = selectedItem?.value === item.value
    const newItem = isSameAsCurrentlySelectedItem ? notRatedStateItem : item

    onSelect(newItem)
    setHoveredItem(null)
  }

  const handleRadioMouseEnter = (item: ScaleItem): void => {
    setHoveredItem(item)
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

  return (
    <div
      className={classnames(styles.container, {
        [styles.rated]: selectedItem && selectedItem.value > 0,
        [styles.reversed]: reversed,
        [styles.hovered]: !!hoveredItem,
      })}
      aria-labelledby={labelId}
      role="radiogroup"
      tabIndex={-1}
      aria-describedby={validationMessageId}
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

          return (
            <div
              className={classnames(
                styles.likertItem,
                styles[`likertItem${item.value}`],
                {
                  [styles.selected]:
                    selectedItem &&
                    item.value <= selectedItem?.value &&
                    !hoveredItem,
                  [styles.suggested]:
                    hoveredItem && hoveredItem.value >= item.value,
                  [styles.unselected]:
                    selectedItem && selectedItem.value < item.value,
                }
              )}
              key={item.value}
              data-automation-id={
                automationId && `${automationId}-item-${item.value}`
              }
              onClick={(): void => handleRadioClick(item)}
              onMouseEnter={(): void => handleRadioMouseEnter(item)}
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
                  {
                    [styles.pop]: isSelectedItem,
                  }
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
