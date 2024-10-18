import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { Card, CardProps } from "../index"

export default {
  title: "Containers/Card",
  args: {
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const colors = [
  "blue",
  "green",
  "gray",
  "orange",
  "purple",
  "red",
  "white",
  "yellow",
] satisfies Array<CardProps["color"]>

const variants = [
  "default",
  "informative",
  "positive",
  "cautionary",
  "destructive",
  "assertive",
  "highlight",
] satisfies Array<CardProps["variant"]>

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed, ...args }) => (
    <>
      <StickerSheet isReversed={isReversed} heading="Colors">
        <StickerSheet.Body>
          {colors.map(color => (
            <StickerSheet.Row key={color} rowTitle={color}>
              <Card {...args} color={color} />
            </StickerSheet.Row>
          ))}
        </StickerSheet.Body>
      </StickerSheet>
      <StickerSheet isReversed={isReversed} heading="Variants (deprecated)">
        <StickerSheet.Body>
          {variants.map(variant => (
            <StickerSheet.Row key={variant} rowTitle={variant}>
              <Card {...args} variant={variant} />
            </StickerSheet.Row>
          ))}
        </StickerSheet.Body>
      </StickerSheet>
    </>
  ),
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: { textDirection: "rtl" },
}
