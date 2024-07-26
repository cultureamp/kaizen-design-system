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
  parameters: {
    chromatic: { disable: false },
  },
} satisfies Meta<typeof BrandMoment>

export default meta

export const Red = {
  args: { color: "red", header: <MinimalBasic /> },
}

export const Green = {
  args: {
    color: "green",
    header: <FakeNavBar />,
  },
}

export const Blue = {
  args: { color: "blue" },
}
