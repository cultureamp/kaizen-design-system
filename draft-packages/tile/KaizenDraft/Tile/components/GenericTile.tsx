import React, { useState, MouseEvent, HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { Box } from "@kaizen/component-library"
import informationIcon from "@kaizen/component-library/icons/information.icon.svg"
import arrowBackwardIcon from "@kaizen/component-library/icons/arrow-backward.icon.svg"
import { IconButton } from "@kaizen/button"
import { Heading, Paragraph, AllowedHeadingTags } from "@kaizen/typography"
import Action from "./Action"
import styles from "./GenericTile.scss"

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

export const GenericTile: React.VFC<GenericTileProps> = ({
  children,
  title,
  titleTag = "h3",
  metadata,
  information,
  mood,
  footer,
  classNameOverride,
  ...restProps
}) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false)

  const renderTitle = () => (
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
  ) => (
    <div className={styles.actions}>
      {secondaryAction && (
        <Action action={secondaryAction} secondary disabled={disabled} />
      )}
      {primaryAction && <Action action={primaryAction} disabled={disabled} />}
    </div>
  )

  const renderFront = () => (
    <div
      className={classnames(styles.face, styles.faceFront, {
        [styles.faceMoodPositive]: mood === "positive",
        [styles.faceMoodInformative]: mood === "informative",
        [styles.faceMoodCautionary]: mood === "cautionary",
        [styles.faceMoodAssertive]: mood === "assertive",
        [styles.faceMoodNegative]: mood === "negative",
        [styles.faceMoodProminent]: mood === "prominent",
      })}
    >
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
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  )

  const renderInformation = informationProp => {
    if ("text" in informationProp) {
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

  const renderBack = () => {
    if (!information) return

    return (
      <div className={classnames(styles.face, styles.faceBack)}>
        <div className={styles.informationBtn}>
          <IconButton
            label="Information"
            icon={arrowBackwardIcon}
            onClick={() => setIsFlipped(false)}
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
      <div
        className={classnames(styles.tile, {
          [styles.isFlipped]: isFlipped,
        })}
      >
        {renderFront()}
        {renderBack()}
      </div>
    </div>
  )
}

GenericTile.displayName = "GenericTile"
