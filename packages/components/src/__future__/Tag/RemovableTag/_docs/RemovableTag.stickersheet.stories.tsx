import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { RemovableTag } from "../index"

export default {
  title: "Components/Tag/Future/RemovableTag",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <>
      <StickerSheet heading="Button Group">
        <StickerSheet.Header
          headings={["Default", "Hover", "Focus", "Focus visible"]}
        />
        <StickerSheet.Body>
          <StickerSheet.Row>
            <RemovableTag
              removeButtonProps={{
                ariaLabel: "Remove tag",
                onClick: () => alert("clicked"),
              }}
            >
              My tag
            </RemovableTag>
            <RemovableTag
              data-sb-pseudo-styles="hover"
              removeButtonProps={{
                ariaLabel: "Remove tag",
                onClick: () => alert("clicked"),
              }}
            >
              My tag
            </RemovableTag>
            <RemovableTag
              data-sb-pseudo-styles="focus"
              removeButtonProps={{
                ariaLabel: "Remove tag",
                onClick: () => alert("clicked"),
              }}
            >
              My tag
            </RemovableTag>
            <RemovableTag
              data-sb-pseudo-styles="focus-visible"
              removeButtonProps={{
                ariaLabel: "Remove tag",
                onClick: () => alert("clicked"),
              }}
            >
              My tag
            </RemovableTag>
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>
    </>
  ),
  parameters: {
    pseudo: {
      hover: [
        '[data-sb-pseudo-styles="hover"]',
        '[data-sb-pseudo-styles="hover"] > button',
      ],
      focus: [
        '[data-sb-pseudo-styles="focus"]',
        '[data-sb-pseudo-styles="focus"] > button',
      ],
      focusVisible: [
        '[data-sb-pseudo-styles="focus-visible"]',
        '[data-sb-pseudo-styles="focus-visible"] > button',
      ],
    },
  },
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: { ...StickerSheetTemplate.parameters, textDirection: "rtl" },
}
