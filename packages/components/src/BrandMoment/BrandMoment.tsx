import React, { ReactNode, ReactElement, HTMLAttributes } from "react"
import classnames from "classnames"
import { assetUrl } from "@kaizen/hosted-assets"
import { Heading } from "~components/Heading"
import { SceneProps } from "~components/Illustration"
import { Text } from "~components/Text"
import { Button, ButtonProps } from "~components/__actions__/v2"
import { OverrideClassName } from "~types/OverrideClassName"
import { useMediaQueries } from "~utils/useMediaQueries"
import styles from "./BrandMoment.module.scss"

<<<<<<< HEAD
type BaseBrandMomentProps = {
=======
export type BrandMomentProps = {
<<<<<<< HEAD
  mood: "informative" | "positive" | "negative"
>>>>>>> parent of 34d12991c (update mood to variant, blue green red)
=======
  // @deprecated use `variant` instead
  mood?: "informative" | "positive" | "negative"
  variant: "blue" | "green" | "red"
>>>>>>> parent of 7431c8dc4 (change variant to color)
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
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

type BrandMomentMoods = {
  color?: never
  mood: "informative" | "positive" | "negative"
}

type BrandMomentColors = {
  color: "blue" | "green" | "red"
  mood?: never
}

export type BrandMomentProps = BaseBrandMomentProps &
  (BrandMomentMoods | BrandMomentColors)

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082061589/Brand+Moment Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-brand-moment--docs Storybook}
 */
export const BrandMoment = ({
  mood,
<<<<<<< HEAD
<<<<<<< HEAD
  color,
=======
>>>>>>> parent of 34d12991c (update mood to variant, blue green red)
=======
  variant,
>>>>>>> parent of 7431c8dc4 (change variant to color)
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
<<<<<<< HEAD
      className={classnames(
        styles.body,
<<<<<<< HEAD
        color ? styles[color] : styles[mood],
=======
        mood ? styles[mood] : styles[variant],
>>>>>>> parent of 7431c8dc4 (change variant to color)
        classNameOverride
      )}
=======
      className={classnames(styles.body, styles[mood], classNameOverride)}
>>>>>>> parent of 34d12991c (update mood to variant, blue green red)
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
                  tag={text.subtitle ? "h2" : "h1"}
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
                    src={assetUrl("brand/logo-horizontal-default.svg")}
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

BrandMoment.displayName = "BrandMoment"
