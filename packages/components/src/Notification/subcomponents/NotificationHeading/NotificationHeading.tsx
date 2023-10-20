import React from "react"
import { Heading, HeadingProps } from "@kaizen/typography"
import styles from "../GenericNotification/GenericNotification.module.scss"

type NotificationHeadingProps = {
  titleProp?: HeadingProps["children"]
  headingProps?: HeadingProps
}

export const NotificationHeading = ({
  titleProp,
  headingProps,
}: NotificationHeadingProps): JSX.Element | null => {
  if (headingProps) {
    return (
      <Heading
        variant={headingProps.variant || "heading-6"}
        tag={headingProps.tag || "div"}
        color={headingProps.color || "dark"}
        classNameOverride={styles.notificationTitle}
      >
        {headingProps.children}
      </Heading>
    )
  }

  if (titleProp) {
    return (
      <Heading
        variant="heading-6"
        tag="div"
        color="dark"
        classNameOverride={styles.notificationTitle}
      >
        {titleProp}
      </Heading>
    )
  }

  return null
}

NotificationHeading.displayName = "NotificationHeading"
