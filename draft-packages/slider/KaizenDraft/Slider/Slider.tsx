import React, { useCallback, useEffect, useState } from "react"
import cx from "classnames"
import { throttle } from "lodash"
import styles from "./styles.module.scss"

export interface SliderProps {
  /**
   * Remember to annotate your props! The typehints make developers happy
   * @default ""
   */
  canRespond: boolean
  automationId?: string
  initialValue?: number
  onChange?: (n: number) => void
}

export const Slider = ({
  automationId,
  initialValue,
  canRespond,
  onChange = () => {},
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
        canRespond ? styles.canRespond : styles.cannotRespond,
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
        disabled={!canRespond}
      />
    </div>
  )
}
