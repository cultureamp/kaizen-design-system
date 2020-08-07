import React, { useState } from "react"

import classNames from "classnames"
import { Button, IconButton } from "@kaizen/draft-button"
import { Box, Heading, Paragraph } from "@kaizen/component-library"

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
  const [isFlipped, setIsFlipped] = useState<boolean>(false)

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
        <Box pt={0.25}>
          <Paragraph variant="small" color="dark-reduced-opacity">
            {metadata}
          </Paragraph>
        </Box>
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
    <div className={styles.face}>
      {information && (
        <div className={styles.informationBtn}>
          <IconButton
            label="Information"
            icon={informationIcon}
            onClick={() => setIsFlipped(true)}
          />
        </div>
      )}
      {renderTitle()}
      <div className={styles.children}>{children && children}</div>
      {renderActions(primaryAction, secondaryAction)}
    </div>
  )

  const renderBack = () => {
    if (!information) return

    const { text, primaryAction, secondaryAction } = information

    return (
      <div className={classNames(styles.face, styles.faceBack)}>
        <div className={styles.informationBtn}>
          <IconButton
            label="Information"
            icon={arrowBackwardIcon}
            onClick={() => setIsFlipped(false)}
          />
        </div>
        {renderTitle()}
        <div className={styles.information}>
          <Paragraph variant="body">{text}</Paragraph>
          <Box pt={0.5}>{renderActions(primaryAction, secondaryAction)}</Box>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.root}>
      <div
        className={classNames(styles.tile, {
          [styles.isFlipped]: isFlipped,
        })}
      >
        {renderFront()}
        {renderBack()}
      </div>
    </div>
  )
}

export default MultiActionTile
