import * as React from "react"

import { Box, Button, Text } from "@kaizen/component-library"
import { Panel } from "../draft/Kaizen/Panel"

const reportDataIllustration = require("./illustrations/reporting-hero-data.png")

export default { title: "Panel", component: Panel }

export const Default = () => (
  <div style={{ lineHeight: 0 }}>
    <Panel
      data-automation-id="panel"
      img={{
        src: reportDataIllustration,
        alt: "Call to action banner",
        width: 374,
        height: 233,
      }}
      buttons={{
        accept: {
          label: "Try it",
          onClick: () => alert("Accept button clicked"),
        },
        decline: {
          label: "Maybe later",
          onClick: () => alert("Decline button clicked"),
        },
        dismiss: {
          label: "Close",
          onClick: () => alert("Dismiss button clicked"),
        },
      }}
      text={{
        title: "Try out the improved navigation experience",
        description:
          "We’ve made it easier to navigate between the Engagement and Performance products. Learn more about this improvement.",
      }}
    />
  </div>
)
