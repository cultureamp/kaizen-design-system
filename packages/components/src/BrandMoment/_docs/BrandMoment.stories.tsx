/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import isChromatic from "chromatic"
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  EmailIcon,
  FeedbackClassifyIcon,
  SecurityTipIcon,
} from "~components/Icon"
import {
  BrandMomentCaptureIntro,
  BrandMomentPositiveOutro,
  BrandMomentError,
  AnimatedSceneProps,
} from "~components/Illustration"
import { Text } from "~components/Text"
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

export const BlueIntro: Story = {
  ...IconRTLTemplate,
  name: "Blue intro",
  args: {
    color: "blue",
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

export const GreenOutro: Story = {
  ...IconRTLTemplate,
  name: "Positive outro",
  args: {
    color: "green",
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

export const BlueIntroCustomerFocused: Story = {
  ...IconRTLTemplate,
  name: "Blue intro (customer focused)",
  args: {
    color: "blue",
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

export const GreenOutroCustomerFocused: Story = {
  ...IconRTLTemplate,
  name: "Positive outro (customer focused)",
  args: {
    color: "green",
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
}

export const Red: Story = {
  ...IconRTLTemplate,
  args: {
    color: "red",
    illustration: <BrandMomentError {...illustrationProps} />,
    header: <FakeNavBar />,
    text: {
      title: "Page not found",
    },
    body: (
      <>
        <div className="mb-16">
          <Text variant="intro-lede">
            Sorry but we can&apos;t find the page you&apos;re looking for. Go
            back and try again, or head to <a href="#">Home</a>.
          </Text>
        </div>
        <Text variant="small" color="dark-reduced-opacity">
          Error code 404
        </Text>
      </>
    ),
    primaryAction: {
      label: "Go to Home",
      href: "#",
      icon: <ArrowRightIcon role="presentation" />,
      iconPosition: "end",
    },
    secondaryAction: {
      label: "Contact support",
      icon: <EmailIcon role="presentation" />,
    },
  },
}
