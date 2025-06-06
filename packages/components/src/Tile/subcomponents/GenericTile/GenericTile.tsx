import React, { useEffect, useRef, useState, type HTMLAttributes, type ReactNode } from 'react'
import { useIntl } from '@cultureamp/i18n-react-intl'
import classnames from 'classnames'
import { Button, IconButton } from '~components/Button'
import type { GenericButtonProps } from '~components/Button/GenericButton'
import { Heading, type AllowedHeadingTags } from '~components/Heading'
import { Text } from '~components/Text'
import { Icon } from '~components/__next__/Icon'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import styles from './GenericTile.module.scss'

export type TileAction = GenericButtonProps

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
  /** Provides accessible label for the title's info button @default "View more information: [title]" */
  infoButtonLabel?: string
  /** @deprecated Use `variant` instead */
  mood?: 'positive' | 'informative' | 'cautionary' | 'assertive' | 'negative' | 'prominent'
  /**
   * If you are transitioning from `mood`:
   * - `prominent` should be `expert-advice`
   * - all else should be `default`
   * @default default
   */
  variant?: 'default' | 'expert-advice'
  footer: React.ReactNode
} & OverrideClassName<Omit<HTMLAttributes<HTMLDivElement>, 'title'>>

export const GenericTile = ({
  children,
  title,
  titleTag = 'h3',
  metadata,
  information,
  infoButtonLabel,
  mood,
  variant = 'default',
  footer,
  classNameOverride,
  ...restProps
}: GenericTileProps): JSX.Element => {
  const [isFlipped, setIsFlipped] = useState<boolean | undefined>()

  const { formatMessage } = useIntl()
  const infoButtonRef = useRef<HTMLButtonElement>(null)
  const infoButtonReturnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (isFlipped === true) return infoButtonReturnRef.current!.focus()
    if (isFlipped === false) return infoButtonRef.current!.focus()
  }, [isFlipped])

  const translatedInfoLabel = formatMessage({
    id: 'kzGenericTile.infoButtonLabel',
    defaultMessage: 'View more information:',
    description: 'Prompts user to interact with button to reveal more information',
  })

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

  const renderFront = (): JSX.Element => (
    <div
      className={classnames(styles.face, styles.faceFront, mood ? styles[mood] : styles[variant])}
    >
      {information && (
        <div className={styles.informationBtn}>
          <IconButton
            label={infoButtonLabel ?? `${translatedInfoLabel} ${title}`}
            icon={<Icon name="info" isPresentational isFilled />}
            onClick={(): void => setIsFlipped(true)}
            disabled={isFlipped}
            aria-hidden={isFlipped}
            ref={infoButtonRef}
          />
        </div>
      )}
      {renderTitle()}
      <div className={styles.children}>{children && children}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  )

  const renderInformation = (
    informationProp: GenericTileProps['information'] | undefined,
  ): JSX.Element | React.ReactNode => {
    if (informationProp && typeof informationProp === 'object' && 'text' in informationProp) {
      return (
        <>
          <Text variant="body">{informationProp.text}</Text>
          {(informationProp.primaryAction ?? informationProp.secondaryAction) && (
            <div className={styles.footer}>
              <div className={styles.actions}>
                {informationProp.secondaryAction && (
                  <Button secondary disabled={!isFlipped} {...informationProp.secondaryAction} />
                )}
                {informationProp.primaryAction && (
                  <Button disabled={!isFlipped} {...informationProp.primaryAction} />
                )}
              </div>
            </div>
          )}
        </>
      )
    }

    return informationProp
  }

  const renderBack = (): ReactNode => {
    if (!information) return null

    const returnButtonLabel = formatMessage({
      id: 'kzGenericTile.infoButtonReturnLabel',
      defaultMessage: 'Hide information:',
      description: 'Prompts user to interact with button to hide information',
    })

    return (
      <div className={classnames(styles.face, styles.faceBack)}>
        <div className={styles.informationBtn}>
          <IconButton
            label={`${returnButtonLabel} ${title}`}
            icon={<Icon name="arrow_back" isPresentational />}
            onClick={(): void => setIsFlipped(false)}
            disabled={!isFlipped}
            aria-hidden={!isFlipped}
            ref={infoButtonReturnRef}
          />
        </div>
        <div className={styles.information}>{renderInformation(information)}</div>
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

GenericTile.displayName = 'GenericTile'
