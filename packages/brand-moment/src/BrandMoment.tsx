import React, { ReactNode } from "react"
import { Heading, Box, Paragraph } from "@kaizen/component-library"
import { IntroductionsCaptureIntro } from "@kaizen/draft-illustration"
import { Button, ButtonProps } from "@kaizen/draft-button"
import styles from "./BrandMoment.scss"

type Props = {
  heading: ReactNode
  subheading?: ReactNode
  bodyText?: ReactNode
  primaryAction: ButtonProps
  secondaryAction?: ButtonProps
}

export const BrandMoment = (props: Props) => (
  <div className={styles.container}>
    <div className={styles.left}>
      <div className={styles.leftInner}>
        <IntroductionsCaptureIntro alt="" />
      </div>
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
              <Paragraph variant="body">{props.bodyText}</Paragraph>
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
  </div>
)
