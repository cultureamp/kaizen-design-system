import React, { ReactNode, ReactElement, HTMLAttributes } from "react"
import classnames from "classnames"
import { SceneProps } from "@kaizen/draft-illustration"
import { assetUrl } from "@kaizen/hosted-assets"
import { useMediaQueries } from "@kaizen/responsive"
import { Heading, Paragraph } from "@kaizen/typography"
import { Button, ButtonProps } from "~components/Button"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./BrandMoment.module.scss"

export interface BrandMomentProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  mood: "informative" | "positive" | "negative"
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
}

export const BrandMoment = ({
  mood,
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
      className={classnames(styles.body, styles[mood], classNameOverride)}
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
                  <Paragraph
                    variant="intro-lede"
                    classNameOverride={styles.body}
                  >
                    {text.body}
                  </Paragraph>
                )}
                {body && <div className={styles.body}>{body}</div>}
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
                <Paragraph variant="extra-small" color="dark-reduced-opacity">
                  Powered by
                </Paragraph>
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
                <Paragraph variant="extra-small">{text.footer}</Paragraph>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  )
}

BrandMoment.displayName = "BrandMoment"
