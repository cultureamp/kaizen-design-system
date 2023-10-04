/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { Checkbox, CheckboxProps } from "../index"

export default {
  title: "KAIO-staging/Checkbox controls/Checkbox",
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

const CheckboxExampleGroup = (props: CheckboxProps): JSX.Element => (
  <div className="grid gap-8">
    <Checkbox {...props} />
    <Checkbox {...props} checkedStatus="on" />
    <Checkbox {...props} checkedStatus="mixed" />
  </div>
)

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
          <CheckboxExampleGroup onCheck={() => {}} />
          <CheckboxExampleGroup
            onCheck={() => {}}
            data-sb-pseudo-styles="hover"
          />
          <CheckboxExampleGroup
            onCheck={() => {}}
            data-sb-pseudo-styles="active"
          />
          <CheckboxExampleGroup
            onCheck={() => {}}
            data-sb-pseudo-styles="focus"
          />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Disabled">
          <CheckboxExampleGroup onCheck={() => {}} disabled />
          <CheckboxExampleGroup
            onCheck={() => {}}
            disabled
            data-sb-pseudo-styles="hover"
          />
          <CheckboxExampleGroup
            onCheck={() => {}}
            disabled
            data-sb-pseudo-styles="active"
          />
          <CheckboxExampleGroup
            onCheck={() => {}}
            disabled
            data-sb-pseudo-styles="focus"
          />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Read Only">
          <CheckboxExampleGroup />
          <CheckboxExampleGroup data-sb-pseudo-styles="hover" />
          <CheckboxExampleGroup data-sb-pseudo-styles="active" />
          <CheckboxExampleGroup data-sb-pseudo-styles="focus" />
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
