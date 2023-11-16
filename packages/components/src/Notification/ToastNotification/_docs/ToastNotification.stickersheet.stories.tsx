import React from "react"
import { Meta } from "@storybook/react"
import { StickerSheetStory } from "~storybook/components/StickerSheet"
import { ToastNotification } from "../ToastNotification"

export default {
  title: "Components/Notifications/ToastNotification",
  parameters: {
    chromatic: { disable: false, delay: 600 },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <>
      <ToastNotification type="positive" title="Positive">
        New user data, imported by mackenzie@hooli.com has successfully
        uploaded. <a href="/">Manage users is now available</a>
      </ToastNotification>
      <ToastNotification type="informative" title="Informative">
        New user data is currently being processed. We&apos;ll let you know when
        the process is completed. <a href="/">Manage users</a>
      </ToastNotification>
      <ToastNotification type="cautionary" title="Cautionary">
        New user data, imported by mackenzie@hooli.com has uploaded with some
        minor issues. <a href="/">View issues</a>
      </ToastNotification>
      <ToastNotification type="security" title="Security">
        Results hidden to protect confidentiality of individuals and small
        groups. <a href="/">Learn more</a>
      </ToastNotification>
      <ToastNotification type="negative" title="Negative">
        Check your connection and try again. <a href="/">Refresh</a>.
      </ToastNotification>
      <ToastNotification
        type="positive"
        title="Very long Title Example Very long title Example VerylongTitleExampleVerylongtitleExample"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla semper
        odio vitae sem gravida rutrum. Praesent vel sapien eget eros dictum
        luctus scelerisque eu nibh. Etiam ullamcorper lobortis gravida.
        Suspendisse massa tortor, ultricies et ipsum at, iaculis bibendum est.
      </ToastNotification>
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
  parameters: {
    ...StickerSheetTemplate.parameters,
    textDirection: "rtl",
  },
}
