import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { ToggleSwitchField } from "../ToggleSwitchField"

export default {
  title: "Components/Toggle Switch controls/ToggleSwitchField",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    /** @note: If you have multiple StickerSheets to display, you can add a `heading` */
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Header
        headings={["Default", "Hover", "Focus", "Disabled"]}
        hasVerticalHeadings
      />
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="off">
          <ToggleSwitchField labelText="Toggle me" reversed={isReversed} />
          <ToggleSwitchField
            labelText="Toggle me"
            reversed={isReversed}
            data-sb-pseudo-styles="hover"
          />
          <ToggleSwitchField
            labelText="Toggle me"
            reversed={isReversed}
            data-sb-pseudo-styles="focus"
          />
          <ToggleSwitchField
            labelText="Toggle me"
            reversed={isReversed}
            disabled
          />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="on">
          <ToggleSwitchField
            labelText="Toggle me"
            toggledStatus="on"
            reversed={isReversed}
          />
          <ToggleSwitchField
            labelText="Toggle me"
            toggledStatus="on"
            reversed={isReversed}
            data-sb-pseudo-styles="hover"
          />
          <ToggleSwitchField
            labelText="Toggle me"
            toggledStatus="on"
            reversed={isReversed}
            data-sb-pseudo-styles="focus"
          />
          <ToggleSwitchField
            labelText="Toggle me"
            toggledStatus="on"
            reversed={isReversed}
            disabled
          />
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
  ),
  parameters: {
    pseudo: {
      hover: '[data-sb-pseudo-styles="hover"] + span',
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
    backgrounds: { default: "Purple 700" },
  },
  args: { isReversed: true },
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
