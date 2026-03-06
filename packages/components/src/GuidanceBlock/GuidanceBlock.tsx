import React from 'react'
import classNames from 'classnames'
import { Heading, type HeadingProps } from '~components/Heading'
import { type SceneProps, type SpotProps } from '~components/Illustration'
import { Text } from '~components/Text'
import { useMediaQueries } from '~components/utils/useMediaQueries'
import { type VariantType } from './types'
import styles from './GuidanceBlock.module.css'

type LayoutType = 'default' | 'inline' | 'stacked'

type IllustrationType = 'spot' | 'scene'

type TextAlignment = 'center' | 'left'

type BaseGuidanceBlockProps = {
  layout?: LayoutType
  illustration: React.ReactElement<SpotProps | SceneProps>
  /*
   * Sets how the width and aspect ratio will respond to the Illustration passed in.
   */
  illustrationType?: IllustrationType
  smallScreenTextAlignment?: TextAlignment
  /** A slot for the primary and secondary action. It is recommended to use the {@link https://cultureamp.design/?path=/docs/components-button-button-next-api-specification--docs | Button} or {@link https://cultureamp.design/?path=/docs/components-linkbutton-usage-guidelines--docs | LinkButton} wrapped in fragment. */
  actionsSlot?: React.ReactNode
  variant?: VariantType
  noMaxWidth?: boolean
}

type GuidanceBlockWithText = {
  text: {
    title: string
    titleTag?: HeadingProps['tag']
    description: string | React.ReactNode
  }
} & BaseGuidanceBlockProps

type GuidanceBlockPropsWithContent = {
  content: React.ReactElement
} & BaseGuidanceBlockProps

export type GuidanceBlockProps = GuidanceBlockWithText | GuidanceBlockPropsWithContent

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082093807/Guidance+Block Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-guidanceblock--docs Storybook}
 */
export const GuidanceBlock = ({
  layout = 'default',
  variant = 'default',
  noMaxWidth = false,
  illustrationType = 'spot',
  smallScreenTextAlignment = 'center',
  illustration,
  actionsSlot,
  ...restProps
}: GuidanceBlockProps): JSX.Element => {
  const { queries } = useMediaQueries()

  return (
    <div
      className={classNames(
        styles.banner,
        variant && styles[variant],
        layout && styles[layout],
        queries.isSmall && styles.centerContent,
        noMaxWidth && styles.noMaxWidth,
        illustrationType === 'scene' && styles.hasSceneIllustration,
        smallScreenTextAlignment === 'left' && styles.smallScreenTextAlignment,
      )}
    >
      <div className={styles.illustrationWrapper}>
        <div className={styles.illustration}>
          {illustrationType === 'scene'
            ? React.cloneElement(illustration, { enableAspectRatio: true })
            : illustration}
        </div>
      </div>
      <div className={styles.descriptionAndActions}>
        <div className={styles.descriptionContainer}>
          {'content' in restProps && restProps.content}
          {'text' in restProps && (
            <>
              <div className={styles.headingWrapper}>
                <Heading tag={restProps?.text?.titleTag ?? 'h3'} variant="heading-3">
                  {restProps?.text?.title}
                </Heading>
              </div>
              <Text tag="p" variant="body">
                {restProps?.text?.description}
              </Text>
            </>
          )}
        </div>
        {actionsSlot && <div className={styles.buttonContainer}>{actionsSlot}</div>}
      </div>
    </div>
  )
}

GuidanceBlock.displayName = 'GuidanceBlock'
