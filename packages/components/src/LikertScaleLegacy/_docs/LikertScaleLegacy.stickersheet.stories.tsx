import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { LikertScaleLegacy } from "../index"
import { Scale } from "../types"

export default {
  title: "Forms/LikertScaleLegacy",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const scale: Scale = [
  {
    value: -1,
    label: "Not rated",
  },
  {
    value: 1,
    label: "Strong Disagree",
  },
  {
    value: 2,
    label: "Disagree",
  },
  {
    value: 3,
    label: "Neither agree or disagree",
  },
  {
    value: 4,
    label: "Agree",
  },
  {
    value: 5,
    label: "Strongly agree",
  },
]

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed, colorSchema }) => (
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="Not rated">
          <LikertScaleLegacy
            scale={scale}
            labelId=""
            selectedItem={scale[0]}
            onSelect={(): void => undefined}
            reversed={isReversed}
            colorSchema={colorSchema}
          />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Strongly disagree">
          <LikertScaleLegacy
            scale={scale}
            labelId=""
            selectedItem={scale[1]}
            onSelect={(): void => undefined}
            reversed={isReversed}
            colorSchema={colorSchema}
          />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Disagree">
          <LikertScaleLegacy
            scale={scale}
            labelId=""
            selectedItem={scale[2]}
            onSelect={(): void => undefined}
            reversed={isReversed}
            colorSchema={colorSchema}
          />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Neither agree or disagree">
          <LikertScaleLegacy
            scale={scale}
            labelId=""
            selectedItem={scale[3]}
            onSelect={(): void => undefined}
            reversed={isReversed}
            colorSchema={colorSchema}
          />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Agree">
          <LikertScaleLegacy
            scale={scale}
            labelId=""
            selectedItem={scale[4]}
            onSelect={(): void => undefined}
            reversed={isReversed}
            colorSchema={colorSchema}
          />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Strongly agree">
          <LikertScaleLegacy
            scale={scale}
            labelId=""
            selectedItem={scale[5]}
            onSelect={(): void => undefined}
            reversed={isReversed}
            colorSchema={colorSchema}
          />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Validation">
          <LikertScaleLegacy
            scale={scale}
            labelId=""
            selectedItem={scale[0]}
            onSelect={(): void => undefined}
            reversed={isReversed}
            colorSchema={colorSchema}
            validationMessage="Error message here"
            status="error"
          />
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
  ),
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default - Classical)",
}

export const StickerBlueSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Blue)",
  args: { colorSchema: "blue" },
}

export const StickerSheetClassicalReversed: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Classical Reversed)",
  parameters: {
    backgrounds: { default: "Purple 700" },
  },
  args: { isReversed: true },
}

export const StickerSheetBlueReversed: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Blue Reversed)",
  parameters: {
    backgrounds: { default: "Purple 700" },
  },
  args: { isReversed: true, colorSchema: "blue" },
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    textDirection: "rtl",
  },
}
