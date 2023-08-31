import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { Card } from "../index"

export default {
  title: "Components/Card",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
    a11y: {
      config: {
        rules: [
          {
            // Looks like axe is having issues with the overlapping elements in stickersheets causing false positives.
            id: "color-contrast",
            enabled: false,
          },
        ],
      },
    },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    /** @note: If you have multiple StickerSheets to display, you can add a `heading` */
    <StickerSheet isReversed={isReversed}>
      {/* @note: Header is optional */}
      <StickerSheet.Header
        headings={[
          "Base",
          "Informative",
          "Positive",
          "Cautionary",
          "Destructive",
          "Assertive",
          "Highlight",
        ]}
      />
      <StickerSheet.Body>
        <StickerSheet.Row>
          <Card variant="default" />
          <Card variant="informative" />
          <Card variant="positive" />
          <Card variant="cautionary" />
          <Card variant="destructive" />
          <Card variant="assertive" />
          <Card variant="highlight" />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <Card variant="default" isElevated />
          <Card variant="informative" isElevated />
          <Card variant="positive" isElevated />
          <Card variant="cautionary" isElevated />
          <Card variant="destructive" isElevated />
          <Card variant="assertive" isElevated />
          <Card variant="highlight" isElevated />
        </StickerSheet.Row>
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
