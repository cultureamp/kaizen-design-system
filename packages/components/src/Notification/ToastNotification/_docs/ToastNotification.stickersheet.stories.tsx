import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"

import { ToastNotification } from "../ToastNotification"

export default {
  title: "Components/Notifications/ToastNotification",
  parameters: {
    chromatic: { disable: false, delay: 600 },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    /** @note: If you have multiple StickerSheets to display, you can add a `heading` */
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Body>
        <StickerSheet.Row>
          <ToastNotification id="abc-123" title="Positive" type="positive">
            <div>
              New user data, imported by mackenzie@hooli.com has successfully
              uploaded. <a href="/">Manage users is now available</a>
            </div>
          </ToastNotification>
          <ToastNotification
            id="abc-234"
            title="Informative"
            type="informative"
          >
            <div>
              New user data, imported by mackenzie@hooli.com has successfully
              uploaded. <a href="/">Manage users is now available</a>
            </div>
          </ToastNotification>
          <ToastNotification id="abc-345" title="Cautionary" type="cautionary">
            <div>
              New user data, imported by mackenzie@hooli.com has successfully
              uploaded. <a href="/">Manage users is now available</a>
            </div>
          </ToastNotification>
          <ToastNotification id="abc-456" title="Negative" type="negative">
            <div>
              New user data, imported by mackenzie@hooli.com has successfully
              uploaded. <a href="/">Manage users is now available</a>
            </div>
          </ToastNotification>
          <ToastNotification id="abc-567" title="Security" type="security">
            <div>
              New user data, imported by mackenzie@hooli.com has successfully
              uploaded. <a href="/">Manage users is now available</a>
            </div>
          </ToastNotification>
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
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
    /** @note: Only required if template has parameters, otherwise this spread can be removed */
    ...StickerSheetTemplate.parameters,
    textDirection: "rtl",
  },
}
