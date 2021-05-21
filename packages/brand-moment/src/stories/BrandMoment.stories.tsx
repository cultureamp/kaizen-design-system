import React from "react"
import { IntroductionsCaptureIntro } from "@kaizen/draft-illustration"
import { BrandMoment } from "../../"
import { MinimalCustomerFocused } from "./ExampleHeaders"

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
      backgroundColor="blue"
      header={<MinimalCustomerFocused />}
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
      footer="Your responses and information are securely collected and kept by Culture Amp in accordance with our Privacy Policy. Your responses will be reported to Hooli based on the specific rules for this survey. If you have any additional questions, please contact us at support@cultureamp.com."
    />
  </div>
)
DefaultStory.storyName = "Brand Moment"
