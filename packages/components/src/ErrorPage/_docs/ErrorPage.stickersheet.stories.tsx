import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { ErrorPage } from "../ErrorPage"

export default {
  title: "Layout/ErrorPage",
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // There's gonna be duplicate landmarks here because it's a stickersheet
            id: "landmark-no-duplicate-banner",
            enabled: false,
          },
          {
            // There's gonna be duplicate landmarks here because it's a stickersheet
            id: "landmark-no-duplicate-main",
            enabled: false,
          },
        ],
      },
    },
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <>
      <StickerSheet heading="ErrorPage" isReversed={isReversed}>
        <StickerSheet.Body>
          <StickerSheet.Row>
            <ErrorPage code="400" />
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>

      <StickerSheet heading="Custom error" isReversed={isReversed}>
        <StickerSheet.Body>
          <StickerSheet.Row>
            <ErrorPage
              code="400"
              title="This is a 400 custom title"
              message="This is a custom 400 message"
              callToAction={{
                onContactSupport: () => alert("Custom handler"),
                homeHref: "/anewhome",
              }}
            />
          </StickerSheet.Row>
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
