import React, { useState } from "react"
import { Box, Heading, Paragraph } from "@kaizen/component-library"
import Action from "./Action"
import { IconButton } from "@kaizen/draft-button"
import classNames from "classnames"

const informationIcon = require("@kaizen/component-library/icons/information.icon.svg")
  .default
const arrowBackwardIcon = require("@kaizen/component-library/icons/arrow-backward.icon.svg")
  .default
const styles = require("./GenericTile.scss")

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

export interface GenericTileProps {
  readonly title: string
  readonly metadata?: string
  readonly children?: React.ReactNode
  readonly information?: TileInformation
}

interface Props extends GenericTileProps {
  readonly footer: React.ReactNode
}

type GenericTile = React.FunctionComponent<Props>

const GenericTile: GenericTile = ({
  children,
  title,
  metadata,
  information,
  footer,
}) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false)

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
    secondaryAction?: TileAction,
    disabled?: boolean
  ) => (
    <div className={styles.actions}>
      {secondaryAction && (
        <Action action={secondaryAction} secondary disabled={disabled} />
      )}
      {primaryAction && <Action action={primaryAction} disabled={disabled} />}
    </div>
  )

  const renderFront = () => (
    <div className={classNames(styles.face, styles.faceFront)}>
      {information && (
        <div className={styles.informationBtn}>
          <IconButton
            label="Information"
            icon={informationIcon}
            onClick={() => setIsFlipped(true)}
            disabled={isFlipped}
          />
        </div>
      )}
      {renderTitle()}
      <div className={styles.children}>{children && children}</div>
      {footer && footer}
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
            disabled={!isFlipped}
          />
        </div>
        {renderTitle()}
        <div className={styles.information}>
          <Paragraph variant="body">{text}</Paragraph>
          {(primaryAction || secondaryAction) && (
            <Box pt={0.5}>
              {renderActions(primaryAction, secondaryAction, !isFlipped)}
            </Box>
          )}
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

export default GenericTile
