import * as React from "react"

import { Box, Button, Text } from "@kaizen/component-library"
import { Panel } from "../draft/Kaizen/Panel"

const reportDataIllustration = require("./illustrations/reporting-hero-data.png")

export default { title: "Panel", component: Panel }

export const DefaultPanel = () => (
  <Panel
    data-automation-id="panel"
    img={{
      src: reportDataIllustration,
      alt: "Call to action banner",
      width: 374,
      height: 233,
    }}
  >
    <Box pt={1}>
      <Text style="zen-heading-3" tag="h3">
        Try out the improved navigation experience
      </Text>
      <Text tag="p">
        {
          "We’ve made it easier to navigate between the Engagement and Performance products. Learn more about this improvement."
        }
      </Text>
      <Box mt={1}>
        <Button label="Try it" reversed />
      </Box>
    </Box>
  </Panel>
)

export const NoImagePanel = () => (
  <Panel data-automation-id="panel">
    <Box>
      <Text style="zen-heading-3" tag="h3">
        Try out the improved navigation experience
      </Text>
      <Text tag="p">
        {
          "We’ve made it easier to navigate between the Engagement and Performance products. Learn more about this improvement."
        }
      </Text>
      <Box py={1}>
        <Button label="Try it" reversed />
      </Box>
    </Box>
  </Panel>
)

DefaultPanel.story = {
  name: "Panel",
}
