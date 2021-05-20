import React from "react"
import { IntroductionsCaptureIntro } from "@kaizen/draft-illustration"
import { BrandMoment } from "../"

export default {
  title: "Brand Moment (React)",
  component: BrandMoment,
  parameters: {
    info: {
      text: `
        import { BrandMoment } from "@kaizen/brand-moment";
      `,
    },
  },
  decorators: [story => <div style={{ margin: "-1rem" }}>{story()}</div>],
}

export const DefaultStory = () => (
  <div>
    <BrandMoment
      illustration={<IntroductionsCaptureIntro alt="" />}
      subheading="A survey for Hooli"
      heading="Manager Effectiveness Survey"
      bodyText="Thank you for taking the time to respond to this survey. It'll help us better understand your experience and perspective."
      primaryAction={{
        label: "Take survey",
        href: "#",
      }}
      secondaryAction={{
        label: "About data safety",
      }}
    />
  </div>
)
DefaultStory.storyName = "Brand Moment"
