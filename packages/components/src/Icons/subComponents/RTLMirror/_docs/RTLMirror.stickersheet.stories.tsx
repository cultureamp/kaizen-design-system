import React from "react"
import { Meta } from "@storybook/react"
import { ArrowLeftIcon } from "~components/Icons/ArrowLeftIcon"
import { DeltaPositiveIcon } from "~components/Icons/DeltaPositiveIcon"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { RTLMirror } from "../RTLMirror"

export default {
  title: "Components/Icons/RTL Mirror",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <StickerSheet>
      <StickerSheet.Header
        headings={["LTR", "RTL"]}
        hasVerticalHeadings
        verticalHeadingsWidth="8rem"
      />
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="Arrow Left">
          <StickerSheet.Cell>
            <RTLMirror>
              <ArrowLeftIcon role="presentation" />
            </RTLMirror>
          </StickerSheet.Cell>
          <StickerSheet.Cell dir="rtl">
            <RTLMirror>
              <ArrowLeftIcon role="presentation" />
            </RTLMirror>
          </StickerSheet.Cell>
        </StickerSheet.Row>

        <StickerSheet.Row rowTitle="Delta Positive">
          <StickerSheet.Cell>
            <RTLMirror>
              <DeltaPositiveIcon role="presentation" />
            </RTLMirror>
          </StickerSheet.Cell>
          <StickerSheet.Cell dir="rtl">
            <RTLMirror>
              <DeltaPositiveIcon role="presentation" />
            </RTLMirror>
          </StickerSheet.Cell>
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
  ),
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}
