import React from "react"
import { action } from "@storybook/addon-actions"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { EditableRichTextContent } from "../index"
import defaultContent from "./defaultContent.json"

const meta = {
  title: "Forms/RichTextEditor/EditableRichTextContent",
  component: EditableRichTextContent,
} satisfies Meta<typeof EditableRichTextContent>

export default meta

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <div>
      <StickerSheet className="" heading="Pseudo states">
        <StickerSheet.Body>
          <StickerSheet.Row rowTitle="Default">
            <StickerSheet.Cell className=" w-1/2">
              <EditableRichTextContent
                onClick={action("Toggle RTE")}
                content={[]}
                labelText="Label"
              />
            </StickerSheet.Cell>
            <StickerSheet.Cell className=" w-1/2">
              <EditableRichTextContent
                onClick={action("Toggle RTE")}
                content={defaultContent}
                labelText="Label"
              />
            </StickerSheet.Cell>
          </StickerSheet.Row>
          <StickerSheet.Row rowTitle="Hover">
            <StickerSheet.Cell className=" w-1/2">
              <EditableRichTextContent
                onClick={action("Toggle RTE")}
                data-sb-pseudo-styles="hover"
                content={[]}
                labelText="Label"
              />
            </StickerSheet.Cell>
            <StickerSheet.Cell className=" w-1/2">
              <EditableRichTextContent
                onClick={action("Toggle RTE")}
                data-sb-pseudo-styles="hover"
                content={defaultContent}
                labelText="Label"
              />
            </StickerSheet.Cell>
          </StickerSheet.Row>
          <StickerSheet.Row rowTitle="Focus">
            <StickerSheet.Cell className=" w-1/2">
              <EditableRichTextContent
                onClick={action("Toggle RTE")}
                data-sb-pseudo-styles="focusWithin"
                content={[]}
                labelText="Label"
              />
            </StickerSheet.Cell>
            <StickerSheet.Cell className=" w-1/2">
              <EditableRichTextContent
                onClick={action("Toggle RTE")}
                data-sb-pseudo-styles="focusWithin"
                content={defaultContent}
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
