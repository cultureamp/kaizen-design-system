import React from "react"
import { CautionIcon } from "~components/Icon/CautionIcon"
import { ExclamationIcon } from "~components/Icon/ExclamationIcon"
import { InformationIcon } from "~components/Icon/InformationIcon"
import { SecurityTipIcon } from "~components/Icon/SecurityTipIcon"
import { SuccessIcon } from "~components/Icon/SuccessIcon"
import { NotificationType } from "~components/Notification/types"

export type NotificationIconProps = {
  type: NotificationType
}

export const NotificationIcon = ({
  type,
}: NotificationIconProps): JSX.Element => {
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

NotificationIcon.displayName = "NotificationIcon"
