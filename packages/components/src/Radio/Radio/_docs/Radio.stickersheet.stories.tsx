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
      <StickerSheet.Header headings={["Default", "Disabled", "Focus"]} />
      <StickerSheet.Body>
        <StickerSheet.Row>
          <Radio id="radio" name="radio" value="radio" reversed={isReversed} />
          <Radio
            id="radio"
            name="radio"
            value="radio"
            reversed={isReversed}
            disabled
          />
          <Radio
            id="radio4"
            name="radio"
            value="radio4"
            reversed={isReversed}
            data-sb-pseudo-styles="focus"
          />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <Radio
            id="radio"
            name="radio"
            value="radio"
            reversed={isReversed}
            selectedStatus
          />
          <Radio
            id="radio"
            name="radio"
            value="radio"
            reversed={isReversed}
            selectedStatus
            disabled
          />
          <Radio
            id="radio4"
            name="radio"
            value="radio4"
            reversed={isReversed}
            selectedStatus
            data-sb-pseudo-styles="focus"
          />
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
  ),
  parameters: {
    pseudo: {
      // Unfortunately the way this component is built, these selectors can't be applied to the inner element
      // to provide the pseudo state affect
      focus: '[data-sb-pseudo-styles="focus"]',
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
    backgrounds: { default: "Purple 700" },
    // Focus state on Reverse takes a bit of time
    chromatic: { delay: 300 },
  },
  args: { isReversed: true },
}
