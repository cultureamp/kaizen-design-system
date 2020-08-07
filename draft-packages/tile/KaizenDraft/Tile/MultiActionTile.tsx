import React, { useState } from "react"

import { Card } from "@kaizen/draft-card"
import { Box, Heading, Icon, Paragraph } from "@kaizen/component-library"
import { Button, IconButton } from "@kaizen/draft-button"

const informationIcon = require("@kaizen/component-library/icons/information.icon.svg")
  .default
const arrowBackwardIcon = require("@kaizen/component-library/icons/arrow-backward.icon.svg")
  .default
const styles = require("./Tile.scss")

export interface TileAction {
  readonly label: string
  readonly onClick?: (e: MouseEvent) => void
  readonly href?: string
  readonly icon?: React.SVGAttributes<SVGSymbolElement>
  readonly automationId?: string
}

export interface TileInformation {
  readonly text: string
  readonly primaryAction?: TileAction
  readonly secondaryAction?: TileAction
}

export interface TileProps {
  readonly title: string
  readonly metadata?: string
  readonly children?: React.ReactNode
  readonly primaryAction: TileAction
  readonly secondaryAction?: TileAction
  readonly information?: TileInformation
}

type MultiActionTile = React.FunctionComponent<TileProps>

const MultiActionTile: MultiActionTile = ({
  children,
  title,
  metadata,
  primaryAction,
  secondaryAction,
  information,
}) => {
  const [flipped, setFlipped] = useState<boolean>(false)

  const renderAction = (action: TileAction, secondary: boolean) => {
    const { label, href, onClick, icon, automationId } = action

    return href ? (
      <Button
        label={label}
        href={href}
        secondary={secondary}
        icon={icon}
        automationId={automationId}
      />
    ) : (
      <Button
        label={label}
        onClick={onClick}
        secondary={secondary}
        icon={icon}
        automationId={automationId}
      />
    )
  }

  const renderTitle = () => (
    <div className={styles.title}>
      <Heading variant="heading-4">{title}</Heading>
      {metadata && (
        <Paragraph variant="small" color="dark-reduced-opacity">
          {metadata}
        </Paragraph>
      )}
    </div>
  )

  const renderActions = (
    primaryAction?: TileAction,
    secondaryAction?: TileAction
  ) => (
    <div className={styles.actions}>
      {secondaryAction && renderAction(secondaryAction, true)}
      {primaryAction && renderAction(primaryAction, false)}
    </div>
  )

  const renderFront = () => (
    <>
      {information && (
        <div className={styles.informationBtn}>
          <IconButton
            label="Information"
            icon={informationIcon}
            onClick={() => setFlipped(true)}
          />
        </div>
      )}
      {renderTitle()}
      <div className={styles.children}>{children && children}</div>
      {renderActions(primaryAction, secondaryAction)}
    </>
  )

  const renderBack = () => {
    if (!information) return

    const { text, primaryAction, secondaryAction } = information

    return (
      <>
        <div className={styles.informationBtn}>
          <IconButton
            label="Information"
            icon={arrowBackwardIcon}
            onClick={() => setFlipped(false)}
          />
        </div>
        {renderTitle()}
        <div className={styles.information}>
          <Paragraph variant="body">{text}</Paragraph>
          <Box pt={0.5}>{renderActions(primaryAction, secondaryAction)}</Box>
        </div>
      </>
    )
  }

  return (
    <div className={styles.wrapper}>
      <Card>
        <div className={styles.content}>
          {flipped ? renderBack() : renderFront()}
        </div>
      </Card>
    </div>
  )
}

export default MultiActionTile
