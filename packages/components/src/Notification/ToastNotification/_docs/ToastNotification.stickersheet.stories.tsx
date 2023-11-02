import React from "react"
import { Meta } from "@storybook/react"
import { StickerSheetStory } from "~storybook/components/StickerSheet"
import { addToastNotification } from "../subcomponents/ToastNotificationManager"

export default {
  title: "Components/Notifications/ToastNotification",
  parameters: {
    chromatic: { disable: false, delay: 600 },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: () => {
    React.useEffect(() => {
      addToastNotification({
        type: "positive",
        title: "Positive",
        message: (
          <>
            New user data, imported by mackenzie@hooli.com has successfully
            uploaded. <a href="/">Manage users is now available</a>
          </>
        ),
      })
      addToastNotification({
        type: "informative",
        title: "Informative",
        message: (
          <>
            New user data is currently being processed. We’ll let you know when
            the process is completed. <a href="/">Manage users</a>
          </>
        ),
      })
      addToastNotification({
        type: "cautionary",
        title: "Cautionary",
        message: (
          <>
            New user data, imported by mackenzie@hooli.com has uploaded with
            some minor issues. <a href="/">View issues</a>
          </>
        ),
      })
      addToastNotification({
        type: "security",
        title: "Security",
        message: (
          <>
            Results hidden to protect confidentiality of individuals and small
            groups. <a href="/">Learn more</a>
          </>
        ),
      })
      addToastNotification({
        type: "negative",
        title: "Negative",
        message: (
          <>
            Check your connection and try again. <a href="/">Refresh</a>.
          </>
        ),
      })
      addToastNotification({
        type: "positive",
        title:
          "Very long Title Example Very long title Example VerylongTitleExampleVerylongtitleExample ",
        message: (
          <>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            semper odio vitae sem gravida rutrum. Praesent vel sapien eget eros
            dictum luctus scelerisque eu nibh. Etiam ullamcorper lobortis
            gravida. Suspendisse massa tortor, ultricies et ipsum at, iaculis
            bibendum est.
          </>
        ),
      })
    }, [])

    return <></>
  },
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
