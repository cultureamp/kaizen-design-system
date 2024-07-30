import React from "react"
import { CautionIcon } from "~components/Icon/CautionIcon"
import { ExclamationIcon } from "~components/Icon/ExclamationIcon"
import { InformationIcon } from "~components/Icon/InformationIcon"
import { SecurityTipIcon } from "~components/Icon/SecurityTipIcon"
import { SuccessIcon } from "~components/Icon/SuccessIcon"
import {
  NotificationType,
  NotificationVariant,
} from "~components/Notification/types"

export type NotificationIconTypeProps = {
  type: NotificationType
}

export const NotificationIconType = ({
  type,
}: NotificationIconTypeProps): JSX.Element => {
  switch (type) {
    case "positive":
      return <SuccessIcon role="presentation" inheritSize />
    case "negative":
      return <ExclamationIcon role="presentation" inheritSize />
    case "cautionary":
      return <CautionIcon role="presentation" inheritSize />
    case "informative":
      return <InformationIcon role="presentation" inheritSize />
    case "security":
      return <SecurityTipIcon role="presentation" inheritSize />
    default:
      return <InformationIcon role="presentation" inheritSize />
  }
}

NotificationIconType.displayName = "NotificationIconType"

export type NotificationIconVariantProps = {
  variant: NotificationVariant
}

export const NotificationIconVariant = ({
  variant,
}: NotificationIconVariantProps): JSX.Element => {
  switch (variant) {
    case "success":
      return <SuccessIcon role="presentation" inheritSize />
    case "warning":
      return <ExclamationIcon role="presentation" inheritSize />
    case "cautionary":
      return <CautionIcon role="presentation" inheritSize />
    case "informative":
      return <InformationIcon role="presentation" inheritSize />
  }
}

NotificationIconVariant.displayName = "NotificationIconVariant"
