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
  title: "Components/Notifications/GlobalNotification",
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
    title: "Success",
    props: {
      ...DEFAULT_PROPS,
      variant: "success",
    },
  },
  {
    title: "Cautionary",
    props: {
      ...DEFAULT_PROPS,
      variant: "cautionary",
    },
  },
  {
    title: "Warning",
    props: {
      ...DEFAULT_PROPS,
      variant: "warning",
    },
  },
  {
    title: "Security",
    props: {
      ...DEFAULT_PROPS,
      variant: "security",
    },
  },
  {
    title: "Persistent",
    props: {
      ...DEFAULT_PROPS,
      variant: "informative",
      persistent: true,
    },
  },
]
const TYPE_PROPS: Array<{
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
    title: "Success",
    props: {
      ...DEFAULT_PROPS,
      type: "positive",
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
    title: "Negative",
    props: {
      ...DEFAULT_PROPS,
      type: "negative",
    },
  },
  {
    title: "Security",
    props: {
      ...DEFAULT_PROPS,
      type: "security",
      persistent: true,
    },
  },
]

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <>
      <StickerSheet heading="GlobalNotification" isReversed={isReversed}>
        <StickerSheet.Body>
          {VARIANTS_PROPS.map(({ title, props }) => (
            <StickerSheet.Row key={title} rowTitle={title}>
              <GlobalNotification {...props} />
            </StickerSheet.Row>
          ))}
        </StickerSheet.Body>
      </StickerSheet>
      <StickerSheet heading="Type (deprecated)" isReversed={isReversed}>
        <StickerSheet.Body>
          {TYPE_PROPS.map(({ title, props }) => (
            <StickerSheet.Row key={title} rowTitle={title}>
              <GlobalNotification {...DEFAULT_PROPS} {...props} />
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
