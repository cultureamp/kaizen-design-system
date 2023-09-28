import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { Radio } from "../index"

export default {
  title: "KAIO-staging/Radio controls/Radio",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
    a11y: {
      config: {
        rules: [
          {
            // Built with no label on purpose, to be used within `RadioField` where label is present
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
        headings={["Default", "Focus", "Hover"]}
        hasVerticalHeadings
      />
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="Off">
          <Radio
            id="radio1"
            name="radio1"
            value="radio1"
            reversed={isReversed}
          />
          <Radio
            id="radio2"
            name="radio2"
            value="radio2"
            reversed={isReversed}
            data-sb-pseudo-styles="focus"
          />
          <Radio
            id="radio3"
            name="radio3"
            value="radio3"
            reversed={isReversed}
            data-sb-pseudo-styles="hover"
          />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="On">
          <Radio
            id="radio11"
            name="radio11"
            value="radio11"
            reversed={isReversed}
            selectedStatus
          />
          <Radio
            id="radio22"
            name="radio22"
            value="radio22"
            reversed={isReversed}
            selectedStatus
            data-sb-pseudo-styles="focus"
          />
          <Radio
            id="radio33"
            name="radio33"
            value="radio33"
            reversed={isReversed}
            selectedStatus
            data-sb-pseudo-styles="hover"
          />
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
  ),
  parameters: {
    pseudo: {
      focus: '[data-sb-pseudo-styles="focus"]',
      hover: '[data-sb-pseudo-styles="hover"] + span',
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
