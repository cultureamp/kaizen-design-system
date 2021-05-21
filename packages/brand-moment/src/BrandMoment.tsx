import React, { ReactNode, ReactElement } from "react"
import { Heading, Box, Paragraph } from "@kaizen/component-library"
import { Button, ButtonProps } from "@kaizen/draft-button"
import { SceneProps } from "@kaizen/draft-illustration"
import classnames from "classnames"
import styles from "./BrandMoment.scss"

type Props = {
  backgroundColor: "blue" | "purple" | "green" | "red"
  header: ReactNode
  illustration: ReactElement<SceneProps>
  heading: ReactNode
  subheading?: ReactNode
  bodyText?: ReactNode
  primaryAction: ButtonProps
  secondaryAction?: ButtonProps
  footer?: ReactNode
}

export const BrandMoment = (props: Props) => (
  <div
    className={classnames(styles.body, {
      [styles.blue]: props.backgroundColor === "blue",
      [styles.green]: props.backgroundColor === "green",
      [styles.red]: props.backgroundColor === "red",
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
          {props.bodyText && (
            <Box mb={1.5}>
              {typeof props.bodyText === "string" && (
                <Paragraph variant="intro-lede">{props.bodyText}</Paragraph>
              )}
              {typeof props.bodyText !== "string" && props.bodyText}
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
    {props.footer && (
      <footer className={styles.footer}>
        {/* TODO: add "Powered By Culture Amp" part */}
        {typeof props.footer === "string" && (
          <Paragraph variant="extra-small" color="dark-reduced-opacity">
            {props.footer}
          </Paragraph>
        )}
        {typeof props.footer !== "string" && props.footer}
      </footer>
    )}
  </div>
)
