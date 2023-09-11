import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { Card, CardProps } from "../index"

export default {
  title: "KAIO-staging/Card",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const CardWrapper = (args: CardProps): JSX.Element => (
  <Card {...args}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </Card>
)

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed}>
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
          <CardWrapper variant="default" />
          <CardWrapper variant="informative" />
          <CardWrapper variant="positive" />
          <CardWrapper variant="cautionary" />
          <CardWrapper variant="destructive" />
          <CardWrapper variant="assertive" />
          <CardWrapper variant="highlight" />
        </StickerSheet.Row>
        <StickerSheet.Row>
          <CardWrapper variant="default" isElevated />
          <CardWrapper variant="informative" isElevated />
          <CardWrapper variant="positive" isElevated />
          <CardWrapper variant="cautionary" isElevated />
          <CardWrapper variant="destructive" isElevated />
          <CardWrapper variant="assertive" isElevated />
          <CardWrapper variant="highlight" isElevated />
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
