import React from "react"
import {
  BrandMomentCaptureIntro,
  BrandMomentPositiveOutro,
  BrandMomentError,
} from "@kaizen/draft-illustration"
import arrowRightIcon from "@kaizen/component-library/icons/arrow-right.icon.svg"
import securityTipIcon from "@kaizen/component-library/icons/security-tip.icon.svg"
import mailIcon from "@kaizen/component-library/icons/email.icon.svg"
import feedbackClassifyIcon from "@kaizen/component-library/icons/feedback-classify.icon.svg"
import { Box, Paragraph } from "@kaizen/component-library"
import { BrandMoment } from "../../"
import {
  MinimalBasic,
  MinimalCustomerFocused,
  FakeNavBar,
} from "./ExampleHeaders"

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

export const InformativeIntro = () => (
  <BrandMoment
    mood="informative"
    illustration={<BrandMomentCaptureIntro isAnimated loop />}
    header={<MinimalBasic />}
    text={{
      subtitle: "Welcome to Culture Amp",
      title: "Let’s dive in and see how it works",
    }}
    primaryAction={{
      label: "Get started",
      href: "#",
      icon: arrowRightIcon,
      iconPosition: "end",
    }}
  />
)
InformativeIntro.storyName = "Informative intro"

export const PositiveOutro = () => (
  <BrandMoment
    mood="positive"
    illustration={<BrandMomentPositiveOutro isAnimated loop />}
    header={<MinimalBasic />}
    text={{
      title: "Import in progress",
      body: (
        <>
          That’s it for now. Your data is importing but you don’t need to hang
          out here while it happens. Get on with your day and we’ll let you know
          on the <a href="#">Users page</a> when it’s complete.
        </>
      ),
    }}
    primaryAction={{
      label: "Go to Users",
      href: "#",
      icon: arrowRightIcon,
      iconPosition: "end",
    }}
  />
)
PositiveOutro.storyName = "Positive outro"

export const InformativeIntroCustomerFocused = () => (
  <BrandMoment
    mood="informative"
    illustration={<BrandMomentCaptureIntro isAnimated loop />}
    header={<MinimalCustomerFocused />}
    text={{
      subtitle: "A survey for Hooli",
      title: "Manager Effectiveness Survey",
      body:
        "Thank you for taking the time to respond to this survey. It’ll help us better understand your experience and perspective.",
      footer: (
        <>
          Your responses and information are securely collected and kept by
          Culture Amp in accordance with our <a href="#">Privacy Policy</a>.
          Your responses will be reported to Hooli based on the specific rules
          for this survey. If you have any additional questions, please contact
          us at <a href="#">support@cultureamp.com</a>.
        </>
      ),
    }}
    primaryAction={{
      label: "Take survey",
      href: "#",
      icon: arrowRightIcon,
      iconPosition: "end",
    }}
    secondaryAction={{
      label: "About data safety",
      icon: securityTipIcon,
    }}
  />
)
InformativeIntroCustomerFocused.storyName =
  "Informative intro (customer focused)"

export const PositiveOutroCustomerFocused = () => (
  <BrandMoment
    mood="positive"
    illustration={<BrandMomentPositiveOutro isAnimated loop />}
    header={<MinimalCustomerFocused />}
    text={{
      subtitle: "Manager Effectiveness Survey",
      title: "That’s it — thank you",
      body: (
        <>
          Your responses have been securely recorded. If you need to, you can{" "}
          <a href="#">retake the survey</a>.
        </>
      ),
      footer: (
        <>
          Your responses and information are securely collected and kept by
          Culture Amp in accordance with our <a href="#">Privacy Policy</a>.
          Your responses will be reported to Hooli based on the specific rules
          for this survey. If you have any additional questions, please contact
          us at <a href="#">support@cultureamp.com</a>.
        </>
      ),
    }}
    primaryAction={{
      label: "Go to Home",
      href: "#",
      icon: arrowRightIcon,
      iconPosition: "end",
    }}
    secondaryAction={{
      label: "Rate this survey",
      icon: feedbackClassifyIcon,
    }}
  />
)
PositiveOutroCustomerFocused.storyName = "Positive outro (customer focused)"

export const Error = () => (
  <BrandMoment
    mood="negative"
    illustration={<BrandMomentError isAnimated loop />}
    header={<FakeNavBar />}
    text={{
      title: "Missing pages are one of life’s mysteries",
    }}
    body={
      <>
        <Box mb={1.75}>
          <Paragraph variant="intro-lede">
            Sorry but we can’t find the page you’re looking for. Go back and try
            again, or head to <a href="#">Home</a>.
          </Paragraph>
        </Box>
        <Paragraph variant="small" color="dark-reduced-opacity">
          Error code 404
        </Paragraph>
      </>
    }
    primaryAction={{
      label: "Go to Home",
      href: "#",
      icon: arrowRightIcon,
      iconPosition: "end",
    }}
    secondaryAction={{
      label: "Contact support",
      icon: mailIcon,
    }}
  />
)
