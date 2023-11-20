import React from "react"
import { InlineNotification } from "~components/Notification"
import { LinkTo } from "../../../../LinkTo"

export const KaioNotification = (): JSX.Element => (
  <InlineNotification type="cautionary" persistent>
    This component is part of our upcoming All-in-One solution and requires
    extra installation steps to use.{" "}
    <LinkTo pageId="guides-app-starter--docs">See documentation</LinkTo>
  </InlineNotification>
)

KaioNotification.title = "KaioNotification"
