import React from "react"
import { InlineNotification } from "~components/Notification"

export const SbReleaseNotification = (): JSX.Element => (
  <InlineNotification persistent type="negative">
    This component has not been officially released. Please wait for the an
    announcement in <code>#update_design_system</code> and for the design
    guidance to be published to Figma and Confluence before consuming.
  </InlineNotification>
)

SbReleaseNotification.displayName = "SbReleaseNotification"
