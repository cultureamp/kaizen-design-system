import React from "react"
import { action } from "@storybook/addon-actions"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"

import { EditableRichTextContent } from "../index"
import dummyContent from "./dummyContent.json"

const meta = {
  title: "Components/RichTextEditor/EditableRichTextContent",
  component: EditableRichTextContent,
} satisfies Meta<typeof EditableRichTextContent>

export default meta

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <div>
      <StickerSheet className="" heading="Pseudo states">
        <StickerSheet.Body>
          <StickerSheet.Row rowTitle="Default">
            <StickerSheet.Cell className="w-full">
              <EditableRichTextContent
                onClick={action("Toggle RTE")}
                content={dummyContent}
                labelText="Label"
              />
            </StickerSheet.Cell>
          </StickerSheet.Row>
          <StickerSheet.Row rowTitle="Hover">
            <StickerSheet.Cell className="w-full">
              <EditableRichTextContent
                onClick={action("Toggle RTE")}
                data-sb-pseudo-styles="hover"
                content={dummyContent}
                labelText="Label"
              />
            </StickerSheet.Cell>
          </StickerSheet.Row>
          <StickerSheet.Row rowTitle="Focus">
            <StickerSheet.Cell className="w-full">
              <EditableRichTextContent
                onClick={action("Toggle RTE")}
                data-sb-pseudo-styles="focusWithin"
                content={dummyContent}
                labelText="Label"
              />
            </StickerSheet.Cell>
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>
    </div>
  ),
  parameters: {
    pseudo: {
      hover: ['[data-sb-pseudo-styles="hover"]'],
      focusWithin: [
        '[data-sb-pseudo-styles="focusWithin"] > [class^="VisuallyHidden"]',
      ],
    },
  },
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
