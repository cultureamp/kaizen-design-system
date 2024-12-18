import React, { type HTMLAttributes } from 'react'
import classnames from 'classnames'
import { Heading, type HeadingProps } from '~components/Heading'
import {
  EmptyStatesInformative,
  EmptyStatesNegative,
  EmptyStatesNeutral,
  EmptyStatesPositive,
  type AnimatedSceneProps,
} from '~components/Illustration'
import { Text } from '~components/Text'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import styles from './EmptyState.module.css'

const ILLUSTRATIONS: Record<string, (props: AnimatedSceneProps) => JSX.Element> = {
  'success': EmptyStatesPositive,
  'warning': EmptyStatesNegative,
  'informative': EmptyStatesInformative,
  'expert-advice': EmptyStatesNeutral,
  /** @deprecated Replaced by success */
  'positive': EmptyStatesPositive,
  /** @deprecated Replaced by expert-advice */
  'neutral': EmptyStatesNeutral,
  /** @deprecated Replaced by warning */
  'negative': EmptyStatesNegative,
  /** @deprecated Replaced by warning */
  'action': EmptyStatesNegative,
}

export type EmptyStateProps = {
  children?: React.ReactNode
  id?: string
  /** @deprecated Use `variant` instead */
  illustrationType?: 'positive' | 'informative' | 'negative' | 'action' | 'neutral'
  /**
   * If you are transitioning from `illustrationType`:
   * - `positive` should be `success`
   * - `informative` remains as `informative`
   * - `negative` should be `warning`
   * - `action` should be `warning`
   * - `neutral` should be `expert-advice`
   * @default informative
   */
  variant?: 'success' | 'warning' | 'informative' | 'expert-advice'
  /** @deprecated - This prop no longer has any effect */
  layoutContext?: 'sidebarAndContent' | 'contentOnly'
  bodyText: string | React.ReactNode
  straightCorners?: boolean
  headingProps?: HeadingProps
} & OverrideClassName<HTMLAttributes<HTMLDivElement>> &
  Pick<AnimatedSceneProps, 'isAnimated' | 'loop'>

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082094098/Empty+State Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-empty-state--docs Storybook}
 */
export const EmptyState = ({
  children,
  id,
  illustrationType,
  variant = 'informative',
  layoutContext: _,
  headingProps,
  bodyText,
  straightCorners,
  isAnimated = true,
  loop = false,
  classNameOverride,
  ...props
}: EmptyStateProps): JSX.Element => {
  const IllustrationComponent = ILLUSTRATIONS[illustrationType ?? variant]

  return (
    <div
      className={classnames(
        styles.container,
        illustrationType ? styles[illustrationType] : styles[variant],
        straightCorners && styles.straightCorners,
        classNameOverride,
      )}
      id={id}
      {...props}
    >
      <div className={styles.content}>
        <div className={styles.illustrationContainer}>
          {isAnimated ? (
            <IllustrationComponent isAnimated loop={loop} classNameOverride={styles.illustration} />
          ) : (
            <IllustrationComponent classNameOverride={styles.illustration} />
          )}
        </div>
        <div className={styles.textContainer}>
          {headingProps && <Heading classNameOverride={styles.heading} {...headingProps} />}
          <Text variant="body">{bodyText}</Text>
          {children && <span>{children}</span>}
        </div>
      </div>
    </div>
  )
}

EmptyState.displayName = 'EmptyState'
