import { HeroPanel } from "@kaizen/draft-hero-panel"

import * as React from "react"
const reportHeroData = require("./illustrations/reporting-hero-data.png")

export default {
  title: "HeroPanel (React)",
}
export const Default = () => (
  <HeroPanel
    data-automation-id="panel"
    img={{
      src: reportHeroData,
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
        onClick: () => alert("Dismiss button clicked"),
      },
    }}
    text={{
      title: "Try out the improved navigation experience",
      description:
        "We’ve made it easier to navigate between the Engagement and Performance products. Learn more about this improvement.",
    }}
  />
)

Default.story = {
  name: "Default",
}
