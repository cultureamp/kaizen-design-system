import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { CheckboxField } from "../index"

export default {
  title: "KAIO-staging/Checkbox controls/CheckboxField",
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
        headings={["Default", "Hover", "Active", "Focus"]}
        hasVerticalHeadings
      />
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="Enabled">
          <CheckboxField labelText="Checkbox" reversed={isReversed} />
          <CheckboxField
            labelText="Hover"
            reversed={isReversed}
            data-sb-pseudo-styles="hover"
          />
          <CheckboxField
            labelText="Active"
            reversed={isReversed}
            data-sb-pseudo-styles="active"
          />
          <CheckboxField
            labelText="Focus"
            reversed={isReversed}
            data-sb-pseudo-styles="focus"
          />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Disabled">
          <CheckboxField labelText="Checkbox" disabled reversed={isReversed} />
          <CheckboxField
            labelText="Hover"
            reversed={isReversed}
            disabled
            data-sb-pseudo-styles="hover"
          />
          <CheckboxField
            labelText="Active"
            reversed={isReversed}
            disabled
            data-sb-pseudo-styles="active"
          />
          <CheckboxField
            labelText="Focus"
            reversed={isReversed}
            disabled
            data-sb-pseudo-styles="focus"
          />
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
