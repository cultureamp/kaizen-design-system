import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import {
  GlobalNotificationProps,
  GlobalNotification,
} from "../GlobalNotification"

export default {
  title: "KAIO-staging/Notifications/Global Notification",
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
    {"This survey status has been changed to 'Archived'. "}
    <a href="/">View all</a>
  </span>
)

const DEFAULT_PROPS = {
  persistent: false,
  children: DEFAULT_CHILDREN,
} satisfies Partial<GlobalNotificationProps>

const VARIANTS_PROPS: Array<{
  title: string
  props: GlobalNotificationProps
}> = [
  {
    title: "Informative",
    props: {
      ...DEFAULT_PROPS,
      type: "informative",
    },
  },
  {
    title: "Positive",
    props: {
      ...DEFAULT_PROPS,
      type: "positive",
    },
  },
  {
    title: "Negative",
    props: {
      ...DEFAULT_PROPS,
      type: "negative",
    },
  },
  {
    title: "Cautionary",
    props: {
      ...DEFAULT_PROPS,
      type: "cautionary",
    },
  },
  {
    title: "Security",
    props: {
      ...DEFAULT_PROPS,
      type: "security",
    },
  },
  {
    title: "Persistent",
    props: {
      ...DEFAULT_PROPS,
      type: "informative",
      persistent: true,
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
              <GlobalNotification {...props} />
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
