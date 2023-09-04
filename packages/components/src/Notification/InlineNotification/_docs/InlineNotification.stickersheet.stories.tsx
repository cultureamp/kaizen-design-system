import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import {
  InlineNotificationProps,
  InlineNotification,
} from "../InlineNotification"

export default {
  title: "Components/Notifications/Inline Notification",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
    a11y: {
      // Fade-in animation has colour contrast issues.
      timeout: 1000,
    },
  },
} satisfies Meta

const DEFAULT_CHILDREN: JSX.Element = (
  <span>
    New user data, imported by mackenzie@hooli.com has successfully uploaded.{" "}
    <a href="/">Manage users is now available</a>
  </span>
)

const DEFAULT_PROPS = {
  hideCloseIcon: false,
  persistent: false,
  children: DEFAULT_CHILDREN,
} satisfies Partial<InlineNotificationProps>

const VARIANTS_PROPS: Array<{
  title: string
  props: InlineNotificationProps
}> = [
  {
    title: "Informative",
    props: {
      ...DEFAULT_PROPS,
      type: "informative",
      headingProps: {
        variant: "heading-6",
        tag: "span",
        children: "Informative title",
      },
    },
  },
  {
    title: "Positive",
    props: {
      ...DEFAULT_PROPS,
      type: "positive",
      headingProps: {
        variant: "heading-6",
        tag: "span",
        children: "Positive title",
      },
    },
  },
  {
    title: "Negative",
    props: {
      ...DEFAULT_PROPS,
      type: "negative",
      headingProps: {
        variant: "heading-6",
        tag: "span",
        children: "Negative title",
      },
    },
  },
  {
    title: "Cautionary",
    props: {
      ...DEFAULT_PROPS,
      type: "cautionary",
      headingProps: {
        variant: "heading-6",
        tag: "span",
        children: "Cautionary title",
      },
    },
  },
  {
    title: "Security",
    props: {
      ...DEFAULT_PROPS,
      type: "security",
      headingProps: {
        variant: "heading-6",
        tag: "span",
        children: "Security title",
      },
    },
  },
  {
    title: "Persistent",
    props: {
      ...DEFAULT_PROPS,
      type: "informative",
      persistent: true,
      headingProps: {
        variant: "heading-6",
        tag: "span",
        children: "Security title",
      },
    },
  },
  {
    title: "Subtle",
    props: {
      ...DEFAULT_PROPS,
      type: "informative",
      isSubtle: true,
      persistent: true,
      headingProps: {
        variant: "heading-6",
        tag: "span",
        children: "Subtle title",
      },
      children: "All notification types can have a subtle variant",
    },
  },
  {
    title: "Multiline",
    props: {
      ...DEFAULT_PROPS,
      children:
        "Content longer that the width of the container will break onto a new line. Lorem ipsum dolor, sit amet consectetur adipisicing elit. In aperiam voluptatem molestias saepe quia vitae quod ex illum, unde nihil impedit possimus officia labore atque quidem necessitatibus sint, maiores velit.",
      type: "positive",
      headingProps: {
        variant: "heading-6",
        tag: "span",
        children: "Content enforced multiline",
      },
    },
  },
  {
    title: "Forced multiline",
    props: {
      ...DEFAULT_PROPS,
      children:
        "forceMultiline will break children onto a new line regardless of width",
      type: "negative",
      headingProps: {
        variant: "heading-6",
        tag: "span",
        children: "Prop enforced multiline",
      },
      forceMultiline: true,
    },
  },
]

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <>
      <StickerSheet heading="Button" isReversed={isReversed}>
        <StickerSheet.Body>
          {VARIANTS_PROPS.map(({ title, props }) => (
            <StickerSheet.Row key={title} rowTitle={title}>
              <InlineNotification {...props} />
            </StickerSheet.Row>
          ))}
        </StickerSheet.Body>
      </StickerSheet>
    </>
  ),
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: { textDirection: "rtl" },
}
