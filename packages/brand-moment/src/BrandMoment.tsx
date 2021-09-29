import React, { ReactNode, ReactElement } from "react"
import { Heading, Box, Paragraph } from "@kaizen/component-library"
import { Button, ButtonProps } from "@kaizen/draft-button"
import { useMediaQueries } from "@kaizen/responsive"
import { SceneProps } from "@kaizen/draft-illustration"
import { assetUrl } from "@kaizen/hosted-assets"
import classnames from "classnames"
import styles from "./BrandMoment.scss"

type Props = {
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

export const BrandMoment = (props: Props) => {
  const { queries } = useMediaQueries()

  return (
    <div
      className={classnames(styles.body, {
        [styles.informative]: props.mood === "informative",
        [styles.positive]: props.mood === "positive",
        [styles.negative]: props.mood === "negative",
      })}
    >
      <header className={styles.header}>{props.header}</header>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.mainInner}>
            <div className={styles.left}>
              <div className={styles.leftInner}>{props.illustration}</div>
            </div>
            <div className={styles.right}>
              <div className={styles.rightInner}>
                {props.text.subtitle && (
                  <Box mb={0.5}>
                    <Heading variant="heading-3" tag="h1">
                      {props.text.subtitle}
                    </Heading>
                  </Box>
                )}
                <Box mb={1.5}>
                  <Heading
                    variant="display-0"
                    tag={props.text.subtitle ? "h2" : "h1"}
                  >
                    {props.text.title}
                  </Heading>
                </Box>
                {props.text.body && (
                  <Box mb={1.5}>
                    <Paragraph variant="intro-lede">
                      {props.text.body}
                    </Paragraph>
                  </Box>
                )}
                {props.body && <Box mb={1.5}>{props.body}</Box>}
                <div className={styles.actions}>
                  {props.primaryAction && (
                    <Button
                      primary
                      fullWidth={queries.isSmall}
                      {...props.primaryAction}
                    />
                  )}
                  {props.secondaryAction && (
                    <div className={styles.secondaryAction}>
                      <Button
                        secondary
                        fullWidth={queries.isSmall}
                        {...props.secondaryAction}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {props.text.footer && (
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
                <Paragraph variant="extra-small">{props.text.footer}</Paragraph>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  )
}
