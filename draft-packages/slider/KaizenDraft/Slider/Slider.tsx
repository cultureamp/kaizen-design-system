import React, { useCallback, useEffect, useState } from "react"
import cx from "classnames"
import { throttle } from "lodash"
import { Paragraph } from "@kaizen/component-library"
import styles from "./styles.module.scss"

export interface SliderProps {
  /**
   * Remember to annotate your props! The typehints make developers happy
   * @default ""
   */
  disabled?: boolean
  disabledLabel?: string
  automationId?: string
  initialValue?: number
  onChange?: (n: number) => void
  labelLeft?: string
  labelRight?: string
}

export const Slider = ({
  automationId,
  initialValue,
  disabled = false,
  onChange = () => {},
  labelLeft = "Not at all",
  labelRight = "Very",
  disabledLabel,
}: SliderProps) => {
  const [value, setValue] = useState(initialValue)

  // Update local value if a new initialValue is received from the server
  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  // Disabling as a quick fix, but might be worth fixing
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const throttledOnChange = useCallback(throttle(onChange, 200), [onChange])

  return (
    <div
      className={cx([
        styles.ratingScale,
        !value && styles.emptyValue,
        disabled ? styles.disabled : styles.enabled,
      ])}
      data-automation-id={automationId}
    >
      <input
        className={styles.ratingScaleRange}
        type="range"
        min="1"
        max="10"
        step="1"
        value={value || 5}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const v = Number.parseFloat(e.target.value)
          setValue(v)
          throttledOnChange(Math.round(v)) // Save final rounded value
        }}
        disabled={disabled}
      />
      <div className={styles.labelsContainer}>
        {!disabled && (
          <div className={styles.sliderLabels}>
            <Paragraph
              variant="extra-small"
              color="dark-reduced-opacity"
              tag="span"
            >
              {labelLeft}
            </Paragraph>
            <Paragraph
              variant="extra-small"
              color="dark-reduced-opacity"
              tag="span"
            >
              {labelRight}
            </Paragraph>
          </div>
        )}
        {disabled && disabledLabel && (
          <Paragraph
            variant="extra-small"
            color="dark-reduced-opacity"
            tag="div"
          >
            {disabledLabel}
          </Paragraph>
        )}
      </div>
    </div>
  )
}
