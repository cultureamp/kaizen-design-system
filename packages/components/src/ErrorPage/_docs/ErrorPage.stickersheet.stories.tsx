import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { ErrorPage, ErrorPageProps } from "../ErrorPage"

export default {
  title: "Pages/Error Page",
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
      timeout: 1000,
    },
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const ERROR_CODES = [
  "400",
  "401",
  "403",
  "404",
  "422",
  "500",
  "502",
  "503",
  "504",
] satisfies Array<ErrorPageProps["code"]>

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <>
      {ERROR_CODES.map(code => (
        <StickerSheet
          key={code}
          heading={`Error ${code}`}
          isReversed={isReversed}
        >
          <StickerSheet.Body>
            <StickerSheet.Row>
              <ErrorPage code={code} />
            </StickerSheet.Row>
          </StickerSheet.Body>
        </StickerSheet>
      ))}

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
