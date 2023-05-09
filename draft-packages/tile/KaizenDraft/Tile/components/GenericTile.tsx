import React, { useState, MouseEvent, HTMLAttributes } from "react"
import classnames from "classnames"
import { IconButton } from "@kaizen/button"
import { OverrideClassName } from "@kaizen/component-base"
import { Box } from "@kaizen/component-library"
import arrowBackwardIcon from "@kaizen/component-library/icons/arrow-backward.icon.svg"
import informationIcon from "@kaizen/component-library/icons/information.icon.svg"
import { Heading, Paragraph, AllowedHeadingTags } from "@kaizen/typography"
import Action from "./Action"
import styles from "./GenericTile.module.scss"

export interface TileAction {
  label: string
  onClick?: (e: MouseEvent) => void
  href?: string
  icon?: React.SVGAttributes<SVGSymbolElement>
  automationId?: string
  newTabAndIUnderstandTheAccessibilityImplications?: boolean
}

export interface TileInformation {
  text: string
  primaryAction?: TileAction
  secondaryAction?: TileAction
}

export interface GenericTileProps
  extends OverrideClassName<Omit<HTMLAttributes<HTMLDivElement>, "title">> {
  children?: React.ReactNode
  title: React.ReactNode
  titleTag?: AllowedHeadingTags
  metadata?: string
  information?: TileInformation | React.ReactNode
  mood?:
    | "positive"
    | "informative"
    | "cautionary"
    | "assertive"
    | "negative"
    | "prominent"
  footer: React.ReactNode
}

export const GenericTile = ({
  children,
  title,
  titleTag = "h3",
  metadata,
  information,
  mood,
  footer,
  classNameOverride,
  ...restProps
}: GenericTileProps): JSX.Element => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false)

  const renderTitle = (): JSX.Element => (
    <div className={styles.title}>
      <Heading variant="heading-3" tag={titleTag}>
        {title}
      </Heading>
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
  ): JSX.Element => (
    <div className={styles.actions}>
      {secondaryAction && (
        <Action action={secondaryAction} secondary disabled={disabled} />
      )}
      {primaryAction && <Action action={primaryAction} disabled={disabled} />}
    </div>
  )

  const renderFront = (): JSX.Element => (
    <div
      className={classnames(
        styles.face,
        styles.faceFront,
        mood === "positive" && styles.faceMoodPositive,
        mood === "informative" && styles.faceMoodInformative,
        mood === "cautionary" && styles.faceMoodCautionary,
        mood === "assertive" && styles.faceMoodAssertive,
        mood === "negative" && styles.faceMoodNegative,
        mood === "prominent" && styles.faceMoodProminent
      )}
    >
      {information && (
        <div className={styles.informationBtn}>
          <IconButton
            label="Information"
            icon={informationIcon}
            onClick={(): void => setIsFlipped(true)}
            disabled={isFlipped}
          />
        </div>
      )}
      {renderTitle()}
      <div className={styles.children}>{children && children}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  )

  const renderInformation = (
    informationProp: GenericTileProps["information"] | undefined
  ): JSX.Element | React.ReactNode => {
    if (
      informationProp &&
      typeof informationProp === "object" &&
      "text" in informationProp
    ) {
      return (
        <>
          <Paragraph variant="body">{informationProp.text}</Paragraph>
          {(informationProp.primaryAction ||
            informationProp.secondaryAction) && (
            <div className={styles.footer}>
              {renderActions(
                informationProp.primaryAction,
                informationProp.secondaryAction,
                !isFlipped
              )}
            </div>
          )}
        </>
      )
    }

    return informationProp
  }

  const renderBack = (): JSX.Element | void => {
    if (!information) return

    return (
      <div className={classnames(styles.face, styles.faceBack)}>
        <div className={styles.informationBtn}>
          <IconButton
            label="Information"
            icon={arrowBackwardIcon}
            onClick={(): void => setIsFlipped(false)}
            disabled={!isFlipped}
          />
        </div>
        <div className={styles.information}>
          {renderInformation(information)}
        </div>
      </div>
    )
  }

  return (
    <div className={classnames(styles.root, classNameOverride)} {...restProps}>
      <div className={classnames(styles.tile, isFlipped && styles.isFlipped)}>
        <>
          {renderFront()}
          {renderBack()}
        </>
      </div>
    </div>
  )
}

GenericTile.displayName = "GenericTile"
