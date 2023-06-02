import React, { useState } from "react"
import { Source, SourceProps, Story } from "@storybook/blocks"
import classnames from "classnames"
import { v4 } from "uuid"
import styles from "./CustomCanvas.module.scss"

export type CustomCanvasProps = {
  of: SourceProps["of"]
  initialIsOpen?: boolean
  className?: string
}

/**
 * An almost-duplicate of Storybook's <Canvas>.
 * Only use this when Canvas prevents your component rendering correctly (eg. using a popover).
 */
export const CustomCanvas = ({
  of,
  initialIsOpen = false,
  className,
}: CustomCanvasProps): JSX.Element => {
  const [sourceId] = useState<string>(v4())
  const [isOpen, setIsOpen] = useState<boolean>(initialIsOpen)

  return (
    <div className={classnames(className)}>
      <div className={styles.canvas}>
        <Story of={of} />
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={styles.sourceToggleButton}
          aria-expanded={isOpen}
          aria-controls={sourceId}
        >
          {isOpen ? "Hide code" : "Show code"}
        </button>
      </div>

      {isOpen && (
        <div id={sourceId} className={styles.sourceContainer}>
          <Source of={of} dark />
        </div>
      )}
    </div>
  )
}
