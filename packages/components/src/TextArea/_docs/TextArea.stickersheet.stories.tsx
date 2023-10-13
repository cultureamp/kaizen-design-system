import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { TextArea } from "../index"

export default {
  title: "Components/Text Input controls/Text Area",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
    a11y: {
      config: {
        rules: [
          {
            // Built with no label on purpose, to be used within `TextField` where label is present
            id: "label",
            enabled: false,
          },
        ],
      },
    },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Header
        headings={["Default", "Hover", "Active", "Focus"]}
        hasVerticalHeadings
      />
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="Enabled">
          <TextArea reversed={isReversed} />
          <TextArea reversed={isReversed} data-sb-pseudo-styles="hover" />
          <TextArea reversed={isReversed} data-sb-pseudo-styles="active" />
          <TextArea reversed={isReversed} data-sb-pseudo-styles="focus" />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Disabled">
          <TextArea reversed={isReversed} disabled />
          <TextArea
            reversed={isReversed}
            disabled
            data-sb-pseudo-styles="hover"
          />
          <TextArea
            reversed={isReversed}
            disabled
            data-sb-pseudo-styles="active"
          />
          <TextArea
            reversed={isReversed}
            disabled
            data-sb-pseudo-styles="focus"
          />
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
  ),
  parameters: {
    pseudo: {
      hover: '[data-sb-pseudo-styles="hover"]',
      active: '[data-sb-pseudo-styles="active"]',
      focus: '[data-sb-pseudo-styles="focus"]',
      focusVisible: '[data-sb-pseudo-styles="focus"]',
    },
  },
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}

export const StickerSheetReversed: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Reversed)",
  parameters: {
    ...StickerSheetTemplate.parameters,
    backgrounds: { default: "Purple 700" },
  },
  args: { isReversed: true },
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    ...StickerSheetTemplate.parameters,
    textDirection: "rtl",
  },
}
