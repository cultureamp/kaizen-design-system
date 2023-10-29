import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { Pagination } from "../index"

export default {
  title: "Components/Pagination",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <StickerSheet>
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="Default">
          <Pagination
            currentPage={2}
            pageCount={5}
            ariaLabelNextPage="Next Page"
            ariaLabelPreviousPage="Previous Page"
            ariaLabelPage="Page"
            onPageChange={() => {
              alert("Page Change")
            }}
          />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Truncated (right)">
          <Pagination
            currentPage={2}
            pageCount={10}
            ariaLabelNextPage="Next Page"
            ariaLabelPreviousPage="Previous Page"
            ariaLabelPage="Page"
            onPageChange={() => {
              alert("Page Change")
            }}
          />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Truncated (left &amp; right)">
          <Pagination
            currentPage={5}
            pageCount={10}
            ariaLabelNextPage="Next Page"
            ariaLabelPreviousPage="Previous Page"
            ariaLabelPage="Page"
            onPageChange={() => {
              alert("Page Change")
            }}
          />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Truncated (left)">
          <Pagination
            currentPage={8}
            pageCount={10}
            ariaLabelNextPage="Next Page"
            ariaLabelPreviousPage="Previous Page"
            ariaLabelPage="Page"
            onPageChange={() => {
              alert("Page Change")
            }}
          />
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
  ),
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    textDirection: "rtl",
  },
}
