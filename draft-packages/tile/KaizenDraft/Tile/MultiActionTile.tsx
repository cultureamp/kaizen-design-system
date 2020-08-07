import * as React from "react"

import { Card } from "@kaizen/draft-card"
import { Heading, Icon, Paragraph } from "@kaizen/component-library"
import { Button } from "@kaizen/draft-button"

const informationIcon = require("@kaizen/component-library/icons/information.icon.svg")
  .default
const styles = require("./Tile.scss")

export interface TileAction {
  readonly label: string
  readonly onClick?: (e: MouseEvent) => void
  readonly href?: string
  readonly icon?: React.SVGAttributes<SVGSymbolElement>
  readonly automationId?: string
}

export interface TileProps {
  readonly title: string
  readonly metadata?: string
  readonly children?: React.ReactNode
  readonly primaryAction: TileAction
  readonly secondaryAction?: TileAction
  readonly information?: string
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

  return (
    <div className={styles.wrapper}>
      <Card>
        <div className={styles.content}>
          {information && (
            <div className={styles.infoBtn}>
              <Icon icon={informationIcon} inheritSize />
            </div>
          )}
          <div className={styles.title}>
            <Heading variant="heading-4">{title}</Heading>
            {metadata && (
              <Paragraph variant="small" color="dark-reduced-opacity">
                {metadata}
              </Paragraph>
            )}
          </div>
          <div className={styles.children}>{children && children}</div>
          <div className={styles.actions}>
            {secondaryAction && renderAction(secondaryAction, true)}
            {renderAction(primaryAction, false)}
          </div>
        </div>
      </Card>
    </div>
  )
}

export default MultiActionTile
