import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { LikertScaleLegacy, LikertScaleProps } from "../index"
import { Scale } from "../types"

export default {
  title: "Components/LikertScaleLegacy",
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

type Story = StickerSheetStory<{ colorSchema: LikertScaleProps["colorSchema"] }>

const StickerSheetTemplate: Story = {
  render: ({ isReversed, colorSchema }) => (
    <StickerSheet title="LikertScaleLegacy" isReversed={isReversed}>
      <StickerSheet.Row header="Not rated">
        <LikertScaleLegacy
          scale={scale}
          labelId=""
          selectedItem={scale[0]}
          onSelect={(): void => undefined}
          reversed={isReversed}
          colorSchema={colorSchema}
        />
      </StickerSheet.Row>
      <StickerSheet.Row header="Strongly disagree">
        <LikertScaleLegacy
          scale={scale}
          labelId=""
          selectedItem={scale[1]}
          onSelect={(): void => undefined}
          reversed={isReversed}
          colorSchema={colorSchema}
        />
      </StickerSheet.Row>
      <StickerSheet.Row header="Disagree">
        <LikertScaleLegacy
          scale={scale}
          labelId=""
          selectedItem={scale[2]}
          onSelect={(): void => undefined}
          reversed={isReversed}
          colorSchema={colorSchema}
        />
      </StickerSheet.Row>
      <StickerSheet.Row header="Neither agree or disagree">
        <LikertScaleLegacy
          scale={scale}
          labelId=""
          selectedItem={scale[3]}
          onSelect={(): void => undefined}
          reversed={isReversed}
          colorSchema={colorSchema}
        />
      </StickerSheet.Row>
      <StickerSheet.Row header="Agree">
        <LikertScaleLegacy
          scale={scale}
          labelId=""
          selectedItem={scale[4]}
          onSelect={(): void => undefined}
          reversed={isReversed}
          colorSchema={colorSchema}
        />
      </StickerSheet.Row>
      <StickerSheet.Row header="Strongly agree">
        <LikertScaleLegacy
          scale={scale}
          labelId=""
          selectedItem={scale[5]}
          onSelect={(): void => undefined}
          reversed={isReversed}
          colorSchema={colorSchema}
        />
      </StickerSheet.Row>
      <StickerSheet.Row header="Validation">
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
    </StickerSheet>
  ),
}

export const StickerSheetDefault: Story = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default - Classical)",
}

export const StickerBlueSheetDefault: Story = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Blue)",
  args: { colorSchema: "blue" },
}

export const StickerSheetClassicalReversed: Story = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Classical Reversed)",
  parameters: {
    backgrounds: { default: "Purple 700" },
  },
  args: { isReversed: true },
}

export const StickerSheetBlueReversed: Story = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Blue Reversed)",
  parameters: {
    backgrounds: { default: "Purple 700" },
  },
  args: { isReversed: true, colorSchema: "blue" },
}

export const StickerSheetRTL: Story = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    textDirection: "rtl",
  },
}
