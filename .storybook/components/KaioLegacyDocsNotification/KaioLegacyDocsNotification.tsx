import React from "react"
import { InlineNotification } from "~components/Notification"

type KaioLegacyDocsNotificationProps = {
  version: string
}

export const KaioLegacyDocsNotification = ({
  version,
}: KaioLegacyDocsNotificationProps): JSX.Element => (
  <InlineNotification type="informative" persistent>
    If you are using <code>@kaizen/components</code> at {version} or lower,
    please refer to our legacy documentation.
  </InlineNotification>
)

KaioLegacyDocsNotification.title = "KaioLegacyDocsNotification"
