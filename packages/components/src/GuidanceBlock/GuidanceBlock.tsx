import React, { useState } from 'react'
import classNames from 'classnames'
import { Button as V1Button, type ButtonProps as V1ButtonProps } from '~components/ButtonV1'
import { Heading, type HeadingProps } from '~components/Heading'
import { Icon } from '~components/Icon'
import { type SceneProps, type SpotProps } from '~components/Illustration'
import { Text } from '~components/Text'
import { Tooltip, type TooltipProps } from '~components/TooltipV1'
import { useMediaQueries } from '~components/utils/useMediaQueries'
import { type VariantType } from './types'
import styles from './GuidanceBlock.module.css'

export type ActionProps = V1ButtonProps & {
  'tooltip'?: TooltipProps
  'aria-label'?: string
  'aria-labelledby'?: string
  'aria-describedby'?: string
}

type LayoutType = 'default' | 'inline' | 'stacked'

type IllustrationType = 'spot' | 'scene'

type TextAlignment = 'center' | 'left'

type GuidanceBlockActions = {
  primary: ActionProps
  secondary?: ActionProps
  dismiss?: {
    onClick: () => void
  }
}

type BaseGuidanceBlockProps = {
  layout?: LayoutType
  illustration: React.ReactElement<SpotProps | SceneProps>
  /*
   * Sets how the width and aspect ratio will respond to the Illustration passed in.
   */
  illustrationType?: IllustrationType
  smallScreenTextAlignment?: TextAlignment
  /** @deprecated use the `actionsSlot` prop with Button/next instead */
  actions?: GuidanceBlockActions
  /** A slot for the primary and secondary action. It is recommended to use the {@link https://cultureamp.design/?path=/docs/components-button-button-next-api-specification--docs | Button} or {@link https://cultureamp.design/?path=/docs/components-linkbutton-usage-guidelines--docs | LinkButton} wrapped in fragment. */
  actionsSlot?: React.ReactNode
  /** @deprecated this is no longer a used feature and is only the deprecated `actions` prop, ie: {secondary: { label: "Dismiss action" }}` */
  secondaryDismiss?: boolean
  variant?: VariantType
  /**  @deprecated use the `actionsSlot` and pass the icon into the JSX elements */
  withActionButtonArrow?: boolean
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

export type GuidanceBlockState = {
  hidden: boolean
  removed: boolean
}

type WithTooltipProps = {
  children: React.ReactNode
  tooltipProps?: TooltipProps
}

const WithTooltip = ({ tooltipProps, children }: WithTooltipProps): JSX.Element =>
  tooltipProps ? <Tooltip {...tooltipProps}>{children}</Tooltip> : <>{children}</>

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082093807/Guidance+Block Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-guidanceblock--docs Storybook}
 */
export const GuidanceBlock = ({
  layout = 'default',
  variant = 'default',
  withActionButtonArrow = true,
  noMaxWidth = false,
  illustrationType = 'spot',
  smallScreenTextAlignment = 'center',
  actions,
  illustration,
  secondaryDismiss,
  actionsSlot,
  ...restProps
}: GuidanceBlockProps): JSX.Element => {
  const [hidden, setHidden] = useState<boolean>(false)
  const [removed, setRemoved] = useState<boolean>(false)
  const { queries } = useMediaQueries()

  const containerRef = React.createRef<HTMLDivElement>()

  const handleDismissBanner = (): void => {
    setHidden(true)
    actions?.dismiss?.onClick()
  }

  const onTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>): void => {
    // Be careful: this assumes the final CSS property to be animated is "margin-top".
    if (hidden && e.propertyName === 'margin-top') {
      setRemoved(true)
    }
  }

  const marginTop = (): string => {
    if (hidden && containerRef.current) {
      return -containerRef.current.clientHeight + 'px'
    }

    return '0'
  }

  if (removed) {
    return <></>
  }

  return (
    <div
      className={classNames(
        styles.banner,
        variant && styles[variant],
        layout && styles[layout],
        hidden && styles.hidden,
        queries.isSmall && styles.centerContent,
        noMaxWidth && styles.noMaxWidth,
        illustrationType === 'scene' && styles.hasSceneIllustration,
        smallScreenTextAlignment === 'left' && styles.smallScreenTextAlignment,
      )}
      style={{
        marginTop: marginTop(),
      }}
      ref={containerRef}
      onTransitionEnd={onTransitionEnd}
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
        {actions?.primary || actionsSlot ? (
          <div className={styles.buttonContainer}>
            {actions?.primary && (
              <>
                <WithTooltip tooltipProps={actions.primary.tooltip}>
                  <V1Button
                    icon={
                      withActionButtonArrow ? (
                        <Icon name="arrow_forward" isPresentational shouldMirrorInRTL />
                      ) : undefined
                    }
                    iconPosition="end"
                    {...actions.primary}
                    fullWidth={queries.isSmall}
                  />
                </WithTooltip>
                {actions?.secondary && (
                  <WithTooltip tooltipProps={actions.secondary.tooltip}>
                    <div className={styles.secondaryAction}>
                      <V1Button
                        secondary
                        {...actions.secondary}
                        onClick={
                          secondaryDismiss
                            ? (): void => handleDismissBanner()
                            : actions?.secondary?.onClick
                        }
                        fullWidth={queries.isSmall}
                      />
                    </div>
                  </WithTooltip>
                )}
              </>
            )}
            {!actions && actionsSlot && actionsSlot}
          </div>
        ) : null}
      </div>
    </div>
  )
}

GuidanceBlock.displayName = 'GuidanceBlock'
