import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { CheckboxField, CheckboxFieldProps } from "../index"

export default {
  title: "Forms/CheckboxField",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => {
    const defaultProps = {
      onCheck: () => undefined,
      reversed: isReversed,
    } satisfies Partial<CheckboxFieldProps>

    const rows = [
      { title: "Off", checkedStatus: "off" },
      { title: "On", checkedStatus: "on" },
      { title: "Mixed", checkedStatus: "mixed" },
    ] satisfies Array<{
      title: string
      checkedStatus: CheckboxFieldProps["checkedStatus"]
    }>

    return (
      <StickerSheet isReversed={isReversed}>
        <StickerSheet.Header
          headings={["Default", "Hover", "Focus", "Disabled"]}
          hasVerticalHeadings
        />
        <StickerSheet.Body>
          {rows.map(({ title, checkedStatus }) => (
            <StickerSheet.Row key={title} rowTitle={title}>
              <CheckboxField
                {...defaultProps}
                labelText="Checkbox"
                checkedStatus={checkedStatus}
              />
              <CheckboxField
                {...defaultProps}
                labelText="Hover"
                checkedStatus={checkedStatus}
                data-sb-pseudo-styles="hover"
              />
              <CheckboxField
                {...defaultProps}
                labelText="Focus"
                checkedStatus={checkedStatus}
                data-sb-pseudo-styles="focus"
              />
              <CheckboxField
                {...defaultProps}
                labelText="Disabled"
                checkedStatus={checkedStatus}
                disabled
              />
            </StickerSheet.Row>
          ))}
        </StickerSheet.Body>
      </StickerSheet>
    )
  },
  parameters: {
    pseudo: {
      hover: '[data-sb-pseudo-styles="hover"]',
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
