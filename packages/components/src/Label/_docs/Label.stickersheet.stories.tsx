import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { Label, LabelProps } from "../index"
import { BlockLabelTypes, InlineLabelTypes } from "../types"

export default {
  title: "KAIO-staging/Label",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const InlineControl = ({ labelText, ...props }: LabelProps): JSX.Element => (
  <Label
    {...props}
    labelText={
      <span data-sb-a11y-color-contrast-disable>
        {labelText}{" "}
        <a href="/" data-sb-a11y-color-contrast-disable>
          a
        </a>
      </span>
    }
  >
    <span className="inline-block w-16 h-16 bg-gray-500"></span>
  </Label>
)

const BlockControl = ({ labelText, ...props }: LabelProps): JSX.Element => (
  <>
    <Label
      {...props}
      labelText={
        <span data-sb-a11y-color-contrast-disable>
          {labelText}{" "}
          <a href="/" data-sb-a11y-color-contrast-disable>
            anchor
          </a>
        </span>
      }
    />
    <span className="block w-200 h-16 bg-gray-500"></span>
  </>
)

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Header
        headings={[
          "Default",
          "Default (disabled)",
          "Prominent",
          "Prominent (disabled)",
        ]}
        hasVerticalHeadings
      />
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="Base">
          <Label reversed={isReversed} labelText="Label" />
          <Label reversed={isReversed} labelText="Label" disabled />
          <Label reversed={isReversed} labelText="Label" variant="prominent" />
          <Label
            reversed={isReversed}
            labelText="Label"
            variant="prominent"
            disabled
          />
        </StickerSheet.Row>
      </StickerSheet.Body>

      <StickerSheet.Body>
        {InlineLabelTypes.map(type => (
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
            <InlineControl
              reversed={isReversed}
              labelText={type}
              labelType={type}
              variant="prominent"
              disabled
            />
          </StickerSheet.Row>
        ))}
      </StickerSheet.Body>

      <StickerSheet.Body>
        {BlockLabelTypes.map(type => (
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
            <BlockControl
              reversed={isReversed}
              labelText={type}
              labelType={type}
              variant="prominent"
              disabled
            />
          </StickerSheet.Row>
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
