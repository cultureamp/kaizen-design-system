import React, { useState } from "react"

import { IconButton } from "@kaizen/component-library"

const crossIcon = require("@kaizen/component-library/icons/close.icon.svg")
  .default
const styles = require("./styles.scss")

export type PanelProps = {
  id?: string
  automationId?: string
  img?: {
    src: string
    alt: string
    width: number
    height: number
  }
}

type Panel = React.FunctionComponent<PanelProps>

const Panel: Panel = ({ id, automationId, children, img }) => {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div className={styles.container} data-automation-id={automationId}>
      <div className={styles.close}>
        <IconButton
          icon={crossIcon}
          label="Close"
          onClick={() => setDismissed(true)}
        />
      </div>
      <div className={styles.content}>
        {img && (
          <div className={styles.image}>
            <img
              src={img.src}
              alt={img.alt}
              width={img?.width}
              height={img?.height}
            />
          </div>
        )}
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  )
}

export default Panel
