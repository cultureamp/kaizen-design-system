import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { Label, LabelProps } from "../index"
import { LabelTypes } from "../types"

export default {
  title: "KAIO-staging/Label",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const InlineControl = (props: LabelProps): JSX.Element => (
  <Label {...props}>
    <span className="inline-block w-16 h-16 bg-gray-500"></span>
  </Label>
)

const BlockControl = (props: LabelProps): JSX.Element => (
  <>
    <Label {...props} />
    <span className="block w-200 h-16 bg-gray-500"></span>
  </>
)

const inlineTypes = ["checkbox", "radio", "toggle"]

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Header
        headings={["Type", "Default", "Disabled", "Prominent"]}
      />
      <StickerSheet.Body>
        {LabelTypes.map(type => (
          <>
            {inlineTypes.includes(type) ? (
              <StickerSheet.Row key={type} rowTitle={type}>
                <InlineControl
                  reversed={isReversed}
                  labelText={type}
                  labelType={type}
                />
                <InlineControl
                  reversed={isReversed}
                  labelText={type}
                  labelType={type}
                  disabled
                />
                <InlineControl
                  reversed={isReversed}
                  labelText={type}
                  labelType={type}
                  variant="prominent"
                />
              </StickerSheet.Row>
            ) : (
              <StickerSheet.Row key={type} rowTitle={type}>
                <BlockControl
                  reversed={isReversed}
                  labelText={type}
                  labelType={type}
                />
                <BlockControl
                  reversed={isReversed}
                  labelText={type}
                  labelType={type}
                  disabled
                />
                <BlockControl
                  reversed={isReversed}
                  labelText={type}
                  labelType={type}
                  variant="prominent"
                />
              </StickerSheet.Row>
            )}
          </>
        ))}
      </StickerSheet.Body>
    </StickerSheet>
  ),
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}

export const StickerSheetReversed: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Reversed)",
  parameters: { backgrounds: { default: "Purple 700" } },
  args: { isReversed: true },
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: { textDirection: "rtl" },
}
