import React, { ReactNode, ReactElement } from "react"
import { Heading, Box, Paragraph } from "@kaizen/component-library"
import { Button, ButtonProps } from "@kaizen/draft-button"
import { SceneProps } from "@kaizen/draft-illustration"
import { assetUrl } from "@kaizen/hosted-assets"
import classnames from "classnames"
import styles from "./BrandMoment.scss"

type Props = {
  mood: "informative" | "positive" | "negative"
  header: ReactNode
  illustration: ReactElement<SceneProps>
  heading: ReactNode
  subheading?: ReactNode
  body?: ReactNode
  primaryAction: ButtonProps
  secondaryAction?: ButtonProps
  footerContent?: ReactNode
}

export const BrandMoment = (props: Props) => (
  <div
    className={classnames(styles.body, {
      [styles.informative]: props.mood === "informative",
      [styles.positive]: props.mood === "positive",
      [styles.negative]: props.mood === "negative",
    })}
  >
    <header className={styles.header}>{props.header}</header>
    <main className={styles.main}>
      <div className={styles.left}>
        <div className={styles.leftInner}>{props.illustration}</div>
      </div>
      <div className={styles.right}>
        <div className={styles.rightInner}>
          {props.subheading && (
            <Box mb={0.5}>
              <Heading variant="heading-3" tag="h1">
                {props.subheading}
              </Heading>
            </Box>
          )}
          <Box mb={1.5}>
            <Heading variant="display-0" tag={props.subheading ? "h2" : "h1"}>
              {props.heading}
            </Heading>
          </Box>
          {props.body && (
            <Box mb={1.5}>
              <Paragraph variant="intro-lede">{props.body}</Paragraph>
            </Box>
          )}

          <div className={styles.actions}>
            <Button primary {...props.primaryAction} />
            {props.secondaryAction && (
              <Box ml={0.5}>
                <Button secondary {...props.secondaryAction} />
              </Box>
            )}
          </div>
        </div>
      </div>
    </main>
    {props.footerContent && (
      <footer className={styles.footer}>
        <Box mr={2}>
          <div className={styles.poweredByContainer}>
            <div className={styles.poweredByText}>
              <Paragraph variant="extra-small" color="dark-reduced-opacity">
                Powered by
              </Paragraph>
            </div>
            <div>
              <img
                src={assetUrl("brand/logo-horizontal-default.svg")}
                alt="Culture Amp"
                width={133}
              />
            </div>
          </div>
        </Box>
        <Paragraph variant="extra-small" color="dark-reduced-opacity">
          {props.footerContent}
        </Paragraph>
      </footer>
    )}
  </div>
)
