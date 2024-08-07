import React, { HTMLAttributes, useState } from "react"
import classnames from "classnames"
import { AllowedHeadingTags, Heading } from "~components/Heading"
import { ArrowBackwardIcon, InformationIcon } from "~components/Icon"
import { Text } from "~components/Text"
import { GenericButtonProps } from "~components/__actions__/Button/v1/GenericButton"
import { IconButton } from "~components/__actions__/v2"
import { OverrideClassName } from "~types/OverrideClassName"
import Action from "./Action"
import styles from "./GenericTile.module.scss"

export type TileAction = {
  label: string
  onClick?: GenericButtonProps["onClick"]
  href?: string
  icon?: JSX.Element
  /**
   * @deprecated use data-testid instead
   */
  automationId?: string
  newTabAndIUnderstandTheAccessibilityImplications?: boolean
} & HTMLAttributes<HTMLButtonElement>

export type TileInformation = {
  text: string
  primaryAction?: TileAction
  secondaryAction?: TileAction
}

export type GenericTileProps = {
  children?: React.ReactNode
  title: React.ReactNode
  titleTag?: AllowedHeadingTags
  metadata?: string
  information?: TileInformation | React.ReactNode
  /** @deprecated Use `variant` instead */
  mood?:
    | "positive"
    | "informative"
    | "cautionary"
    | "assertive"
    | "negative"
    | "prominent"
  /**
   * If you are transitioning from `mood`:
   * - `prominent` should be `expert-advice`
   * - all else should be `default`
   * @default default
   */
  variant?: "default" | "expert-advice"
  footer: React.ReactNode
} & OverrideClassName<Omit<HTMLAttributes<HTMLDivElement>, "title">>

export const GenericTile = ({
  children,
  title,
  titleTag = "h3",
  metadata,
  information,
  mood,
  variant = "default",
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
        <div className={styles.titleMeta}>
          <Text variant="small" color="dark-reduced-opacity">
            {metadata}
          </Text>
        </div>
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
        mood ? styles[mood] : styles[variant]
      )}
    >
      {information && (
        <div className={styles.informationBtn}>
          <IconButton
            label="Information"
            icon={<InformationIcon role="presentation" />}
            onClick={(): void => setIsFlipped(true)}
            disabled={isFlipped}
            aria-hidden={isFlipped}
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
          <Text variant="body">{informationProp.text}</Text>
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
            icon={<ArrowBackwardIcon role="presentation" />}
            onClick={(): void => setIsFlipped(false)}
            disabled={!isFlipped}
            aria-hidden={!isFlipped}
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
