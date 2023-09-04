import { Meta, StoryObj } from "@storybook/react"
import {
  InlineNotification,
  InlineNotificationProps,
} from "../InlineNotification"

const DEFAULT_PROPS: Partial<InlineNotificationProps> = {
  headingProps: {
    children: "Informative",
    tag: "span",
    variant: "heading-6",
  },
  type: "informative",
  children:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quibusdam natus doloremque",
}

const meta = {
  title: "Components/Notifications/Inline Notification",
  component: InlineNotification,
  argTypes: {
    isSubtle: { type: "boolean" },
    forceMultiline: { type: "boolean" },
    noBottomMargin: { type: "boolean" },
  },
  args: {
    ...DEFAULT_PROPS,
  },
} satisfies Meta<typeof InlineNotification>

export default meta

export const Playground: StoryObj<typeof meta> = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

/**
 * `persistent` notification will remain on screen and cannot be removed by the user. This will also remove the fly in animation on page load
 */
export const Persistent: StoryObj<typeof meta> = {
  args: {
    persistent: true,
    type: "negative",
    children: "Please fill in all required fields before submitting",
    headingProps: {
      children: "Form error",
      variant: "heading-6",
      tag: "span",
    },
  },
}

/**
 * `forceMultiline` will break child content onto a new line, regardless of content width. Without this prop, child content will be next to the heading until it stretches past its maximum content width. */
export const ForceMultilineDemo: StoryObj<typeof meta> = {
  args: {
    forceMultiline: true,
    children: "Even with a small amount of text",
  },
}

/**
 * Without the `forceMultiline` prop, child content must exceed the maximum width of the container before it breaks onto a new line. */
export const ContentMultilineDemo: StoryObj<typeof meta> = {
  args: {
    forceMultiline: true,
    children:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis esse, iste, obcaecati laborum dolorum eius, similique fugit itaque illum ipsam sapiente facilis cum? Accusamus eos possimus quae voluptates laboriosam necessitatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis esse, iste, obcaecati laborum dolorum eius, similique fugit itaque illum ipsam sapiente facilis cum? Accusamus eos possimus quae voluptates laboriosam necessitatibus.",
  },
}
