import React, { useState } from "react"

import { IconButton } from "@kaizen/component-library"

const crossIcon = require("@kaizen/component-library/icons/close.icon.svg")
  .default
const styles = require("./styles.scss")

interface Props {
  readonly id?: string
  readonly automationId?: string
  readonly onDismiss?: () => void
  readonly img?: {
    readonly src: string
    readonly alt: string
    readonly width: number
    readonly height: number
  }
}

type Panel = React.FunctionComponent<Props>

const Panel: Panel = ({ id, automationId, children, img, onDismiss }) => {
  const [dismissed, setDismissed] = useState(false)

  const dismissPanel = () => {
    onDismiss?.()

    setDismissed(true)
  }

  if (dismissed) return null

  return (
    <div className={styles.container} data-automation-id={automationId}>
      <div className={styles.close}>
        <IconButton
          icon={crossIcon}
          label="Close"
          onClick={() => dismissPanel()}
        />
      </div>
      <div className={styles.content}>
        {img && (
          <div className={styles.image}>
            <img
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
            />
          </div>
        )}
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  )
}

export default Panel
