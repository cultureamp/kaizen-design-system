import React, { useId, useState } from "react"
import { Source, SourceProps, Story, Unstyled } from "@storybook/blocks"
import classnames from "classnames"
import styles from "./NoClipCanvas.module.scss"

export type NoClipCanvasProps = {
  of: SourceProps["of"]
  initialIsOpen?: boolean
  className?: string
}

/**
 * An almost-duplicate of Storybook's <Canvas>.
 * Only use this when Canvas prevents your component rendering correctly (eg. using a popover).
 */
export const NoClipCanvas = ({
  of,
  initialIsOpen = false,
  className,
}: NoClipCanvasProps): JSX.Element => {
  const sourceId = useId()
  const [isOpen, setIsOpen] = useState<boolean>(initialIsOpen)

  return (
    <Unstyled className={classnames(styles.noClipCanvas, className)}>
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
    </Unstyled>
  )
}
