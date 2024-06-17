import React from "react"
import { Meta } from "@storybook/react"
import { Button } from "~components/Button"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { Tooltip, TooltipTrigger } from "../index"

export default {
  title: "Overlays/Tooltip/v2",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    /** @note: If you have multiple StickerSheets to display, you can add a `heading` */
    <StickerSheet>
      <StickerSheet.Header headings={["Default", "Hover", "Active", "Focus"]} />
      <StickerSheet.Body>
        <StickerSheet.Row>
          <TooltipTrigger defaultOpen={true}>
            <Button label="Button with tooltip" />
            <Tooltip>Tooltip content</Tooltip>
          </TooltipTrigger>
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
  ),
  /** @note: Only required if you have pseudo states, otherwise this can be removed */
  parameters: {
    /** @todo: Remove any inapplicable pseudo states */
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
    /** @note: Only required if template has parameters, otherwise this spread can be removed */
    ...StickerSheetTemplate.parameters,
    reverseColors: true,
  },
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
