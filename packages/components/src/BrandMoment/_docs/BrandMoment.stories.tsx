/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { Meta } from "@storybook/react"
import isChromatic from "chromatic"
import { ArrowRightIcon, FeedbackClassifyIcon } from "~components/Icon"
import {
  BrandMomentPositiveOutro,
  AnimatedSceneProps,
} from "~components/Illustration"
import { BrandMoment } from "../index"
import {
  MinimalBasic,
  MinimalCustomerFocused,
  FakeNavBar,
} from "./ExampleHeaders"

const IS_CHROMATIC = isChromatic()

const illustrationProps = (
  IS_CHROMATIC ? {} : { isAnimated: true, loop: true }
) satisfies AnimatedSceneProps

const meta = {
  title: "Components/Brand Moment",
  component: BrandMoment,
<<<<<<< HEAD
  args: {
    color: "green",
=======
  parameters: {
    chromatic: { disable: false },
  },
} satisfies Meta<typeof BrandMoment>

export default meta

type Story = StoryObj<typeof meta>

const IconRTLTemplate: Pick<Story, "render" | "parameters"> = {
  render: ({ primaryAction, ...args }, { globals }) => (
    <BrandMoment
      {...args}
      primaryAction={{
        label: "Primary action label",
        ...primaryAction,
        icon:
          globals.textDirection === "ltr" ? (
            <ArrowRightIcon role="presentation" />
          ) : (
            <ArrowLeftIcon role="presentation" />
          ),
      }}
    />
  ),
  parameters: {
    docs: {
      source: {
        // Code snippets will cause the browser to freeze when using JSX.Elements
        // within an object form prop, thus we must disable them to flip the
        // primaryAction icon when changing the global text direction
        code: "disabled",
      },
    },
  },
}

export const InformativeIntro: Story = {
  ...IconRTLTemplate,
  name: "Informative intro",
  args: {
    mood: "informative",
    illustration: <BrandMomentCaptureIntro {...illustrationProps} />,
    header: <MinimalBasic />,
    text: {
      subtitle: "Welcome to Culture Amp",
      title: "Let's dive in and see how it works",
    },
    primaryAction: {
      label: "Get started",
      href: "#",
      icon: <ArrowRightIcon role="presentation" />,
      iconPosition: "end",
    },
  },
}

export const PositiveOutro: Story = {
  ...IconRTLTemplate,
  name: "Positive outro",
  args: {
    mood: "positive",
    illustration: <BrandMomentPositiveOutro {...illustrationProps} />,
    header: <MinimalBasic />,
    text: {
      title: "Import in progress",
      body: (
        <>
          That&apos;s it for now. Your data is importing but you don&apos;t need
          to hang out here while it happens. Get on with your day and we&apos;ll
          let you know on the <a href="#">Users page</a> when it&apos;s
          complete.
        </>
      ),
    },
    primaryAction: {
      label: "Go to Users",
      href: "#",
      icon: <ArrowRightIcon role="presentation" />,
      iconPosition: "end",
    },
  },
}

export const InformativeIntroCustomerFocused: Story = {
  ...IconRTLTemplate,
  name: "Informative intro (customer focused)",
  args: {
    mood: "informative",
    illustration: <BrandMomentCaptureIntro {...illustrationProps} />,
    header: <MinimalCustomerFocused />,
    text: {
      subtitle: "A survey for Hooli",
      title: "Manager Effectiveness Survey",
      body: "Thank you for taking the time to respond to this survey. It'll help us better understand your experience and perspective.",
      footer: (
        <>
          Your responses and information are securely collected and kept by
          Culture Amp in accordance with our <a href="#">Privacy Policy</a>.
          Your responses will be reported to Hooli based on the specific rules
          for this survey. If you have any additional questions, please contact
          us at <a href="#">support@cultureamp.com</a>.
        </>
      ),
    },
    primaryAction: {
      label: "Take survey",
      href: "#",
      icon: <ArrowRightIcon role="presentation" />,
      iconPosition: "end",
    },
    secondaryAction: {
      label: "About data safety",
      icon: <SecurityTipIcon role="presentation" />,
    },
  },
}

export const PositiveOutroCustomerFocused: Story = {
  ...IconRTLTemplate,
  name: "Positive outro (customer focused)",
  args: {
    mood: "positive",
>>>>>>> parent of 34d12991c (update mood to variant, blue green red)
    illustration: <BrandMomentPositiveOutro {...illustrationProps} />,
    header: <MinimalCustomerFocused />,
    text: {
      subtitle: "Manager Effectiveness Survey",
      title: "That's it — thank you",
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
    },
    primaryAction: {
      label: "Go to Home",
      href: "#",
      icon: <ArrowRightIcon role="presentation" />,
      iconPosition: "end",
    },
    secondaryAction: {
      label: "Rate this survey",
      icon: <FeedbackClassifyIcon role="presentation" />,
    },
  },
  parameters: {
    chromatic: { disable: false },
  },
} satisfies Meta<typeof BrandMoment>

export default meta

export const Red = {
  args: { color: "red", header: <MinimalBasic /> },
}

<<<<<<< HEAD
export const Green = {
  args: {
    color: "green",
=======
export const Error: Story = {
  ...IconRTLTemplate,
  args: {
    mood: "negative",
    illustration: <BrandMomentError {...illustrationProps} />,
>>>>>>> parent of 34d12991c (update mood to variant, blue green red)
    header: <FakeNavBar />,
  },
}

export const Blue = {
  args: { color: "blue" },
}
