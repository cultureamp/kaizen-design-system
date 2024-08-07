/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import isChromatic from "chromatic"
import {
  ArrowRightIcon,
  EmailIcon,
  FeedbackClassifyIcon,
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
  title: "Components/BrandMoment",
  component: BrandMoment,
  argTypes: {
    mood: { control: false },
  },
} satisfies Meta<typeof BrandMoment>

export default meta

type Story = StoryObj<typeof meta>

export const Informative: Story = {
  args: {
    variant: "informative",
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

export const Success: Story = {
  args: {
    variant: "success",
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

export const Warning: Story = {
  args: {
    variant: "warning",
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
