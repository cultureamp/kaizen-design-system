import React, { useState } from "react"

import { Box, Button, IconButton, Text } from "@kaizen/component-library"
const styles = require("./HeroPanel.scss")
const crossIcon = require("@kaizen/component-library/icons/close.icon.svg")
  .default

interface Props {
  readonly id?: string
  readonly automationId?: string
  readonly img: {
    readonly src: string
    readonly alt: string
    readonly width: number
    readonly height: number
  }
  readonly text: {
    readonly title: string
    readonly description: string | React.ReactNode
  }
  readonly buttons: {
    readonly dismiss?: {
      readonly onClick: () => void
    }
    readonly accept?: {
      readonly label: string
      readonly onClick: () => void
    }
    readonly decline?: {
      readonly label: string
      readonly onClick: () => void | undefined
    }
  }
}

type Panel = React.FunctionComponent<Props>

const HeroPanel: Panel = ({
  id,
  automationId,
  img,
  buttons: { accept, decline, dismiss },
  text,
}) => {
  const [dismissed, setDismissed] = useState(false)

  const closePanel = () => {
    setDismissed(true)
  }

  const onAccept = () => {
    accept?.onClick()
    closePanel()
  }

  const onDecline = () => {
    decline?.onClick()
    closePanel()
  }

  const onDismiss = () => {
    dismiss?.onClick()
    closePanel()
  }

  if (dismissed) return null

  return (
    <div id={id} className={styles.container} data-automation-id={automationId}>
      <div className={styles.content}>
        <div className={styles.close}>
          <IconButton
            icon={crossIcon}
            label="Dismiss"
            onClick={() => onDismiss()}
          />
        </div>
        <div className={styles.image}>
          <img
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
          />
        </div>
        <Box pt={1}>
          <Text style="zen-heading-3" tag="h3">
            {text.title}
          </Text>
          <div className={styles.description}>
            <Text tag="p">{text.description}</Text>
          </div>
          <div className={styles.actions}>
            <Box mt={1}>
              {accept && (
                <Button
                  label={accept.label}
                  onClick={() => onAccept()}
                  reversed
                />
              )}
              {decline && (
                <Button
                  reversed
                  secondary
                  label={decline?.label}
                  onClick={() => onDecline()}
                />
              )}
            </Box>
          </div>
        </Box>
      </div>
    </div>
  )
}

export default HeroPanel
