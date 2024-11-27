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

const variants = [
  {
    title: "Informative",
    props: { variant: "informative" },
  },
  {
    title: "Success",
    props: { variant: "success" },
  },
  {
    title: "Cautionary",
    props: { variant: "cautionary" },
  },
  {
    title: "Warning",
    props: { variant: "warning" },
  },
  {
    title: "Security",
    props: { variant: "security" },
  },
  {
    title: "Persistent",
    props: { variant: "informative", persistent: true },
  },
] satisfies Array<{ title: string; props: Partial<GlobalNotificationProps> }>

const types = [
  {
    title: "Informative",
    props: { type: "informative" },
  },
  {
    title: "Success",
    props: { type: "positive" },
  },
  {
    title: "Cautionary",
    props: { type: "cautionary" },
  },
  {
    title: "Negative",
    props: { type: "negative" },
  },
  {
    title: "Security",
    props: { type: "security" },
  },
] satisfies Array<{ title: string; props: Partial<GlobalNotificationProps> }>

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => {
    const defaultProps = {
      persistent: false,
      children: (
        <span>
          {"This survey status has been changed to 'Archived'. "}
          <a href="/">View all</a>
        </span>
      ),
    } satisfies Partial<GlobalNotificationProps>

    return (
      <>
        <StickerSheet title="GlobalNotification" isReversed={isReversed}>
          {variants.map(({ title, props }) => (
            <StickerSheet.Row key={title} header={title}>
              <GlobalNotification {...defaultProps} {...props} />
            </StickerSheet.Row>
          ))}
        </StickerSheet>

        <StickerSheet title="Type (deprecated)" isReversed={isReversed}>
          {types.map(({ title, props }) => (
            <StickerSheet.Row key={title} header={title}>
              <GlobalNotification {...defaultProps} {...props} />
            </StickerSheet.Row>
          ))}
        </StickerSheet>
      </>
    )
  },
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
