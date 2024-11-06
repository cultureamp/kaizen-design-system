import React, { ReactNode, ReactElement, HTMLAttributes } from 'react'
import classnames from 'classnames'
import { Heading } from '~components/Heading'
import { SceneProps } from '~components/Illustration'
import { Text } from '~components/Text'
import { Button, ButtonProps } from '~components/__actions__/v2'
import { OverrideClassName } from '~components/types/OverrideClassName'
import { assetUrl } from '~components/utils/hostedAssets'
import { useMediaQueries } from '~components/utils/useMediaQueries'
import styles from './BrandMoment.module.scss'

type DeprecatedMoodProps = {
  /** @deprecated Use `variant` instead */
  mood: 'informative' | 'positive' | 'negative'
  variant?: never
}

type VariantProps = {
  /**
   * If you are transitioning from `mood`:
   * - `informative` remains as `informative`
   * - `positive` should be `success`
   * - `negative` should be `warning`
   */
  variant: 'informative' | 'success' | 'warning'
  /** @deprecated Use `variant` instead */
  mood?: never
}

export type BrandMomentProps = {
  illustration: ReactElement<SceneProps>
  header: ReactNode
  body?: ReactNode
  primaryAction?: ButtonProps
  secondaryAction?: ButtonProps
  text: {
    title: ReactNode
    subtitle?: ReactNode
    body?: ReactNode
    footer?: ReactNode
  }
} & OverrideClassName<HTMLAttributes<HTMLDivElement>> &
  (DeprecatedMoodProps | VariantProps)

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082061589/Brand+Moment Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-brand-moment--docs Storybook}
 */
export const BrandMoment = ({
  mood,
  variant,
  illustration,
  header,
  body,
  primaryAction,
  secondaryAction,
  text,
  classNameOverride,
  ...restProps
}: BrandMomentProps): JSX.Element => {
  const { queries } = useMediaQueries()

  return (
    <div
      className={classnames(
        styles.body,
        variant ? styles[variant] : styles[mood],
        classNameOverride,
      )}
      {...restProps}
    >
      <header className={styles.header}>{header}</header>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.mainInner}>
            <div className={styles.left}>
              <div className={styles.leftInner}>{illustration}</div>
            </div>
            <div className={styles.right}>
              <div className={styles.rightInner}>
                {text.subtitle && (
                  <Heading
                    variant="heading-3"
                    tag="h1"
                    classNameOverride={styles.subtitle}
                  >
                    {text.subtitle}
                  </Heading>
                )}
                <Heading
                  variant="display-0"
                  tag={text.subtitle ? 'h2' : 'h1'}
                  classNameOverride={styles.title}
                >
                  {text.title}
                </Heading>
                {text.body && (
                  <Text
                    variant="intro-lede"
                    classNameOverride={styles.textBody}
                  >
                    {text.body}
                  </Text>
                )}
                {body && <div className={styles.textBody}>{body}</div>}
                <div className={styles.actions}>
                  {primaryAction && (
                    <Button
                      primary
                      fullWidth={queries.isSmall}
                      {...primaryAction}
                    />
                  )}
                  {secondaryAction && (
                    <div className={styles.secondaryAction}>
                      <Button
                        secondary
                        fullWidth={queries.isSmall}
                        {...secondaryAction}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {text.footer && (
        <footer className={styles.footer}>
          <div className={styles.container}>
            <div className={styles.footerInner}>
              <div className={styles.poweredByContainer}>
                <Text variant="extra-small" color="dark-reduced-opacity">
                  Powered by
                </Text>
                <a
                  href="https://www.cultureamp.com"
                  className={styles.poweredByLogo}
                >
                  <img
                    src={assetUrl('brand/logo-horizontal-default.svg')}
                    alt="Culture Amp"
                  />
                </a>
              </div>
              <div className={styles.footerTextContainer}>
                <Text variant="extra-small">{text.footer}</Text>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  )
}

BrandMoment.displayName = 'BrandMoment'
