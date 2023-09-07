import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { PaginationLink, PaginationLinkProps } from "../index"

export default {
  title: "KAIO-staging/Buttons/PaginationLink",
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

const PAGINATION_LINK_PROPS: Array<{
  title: string
  props: PaginationLinkProps
}> = [
  {
    title: "isActive={false}",
    props: {
      pageNumber: 1,
      "aria-label": "Page 1",
    },
  },
  {
    title: "isActive={true}",
    props: {
      pageNumber: 1,
      "aria-label": "Page 1",
      isActive: true,
    },
  },
]

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Header headings={["Base", "Hover", "Active", "Focus"]} />
      <StickerSheet.Body>
        {PAGINATION_LINK_PROPS.map(({ title, props }) => (
          <StickerSheet.Row key={title} rowTitle={title}>
            <PaginationLink
              {...props}
              reversed={isReversed}
              classNameOverride="story__button-hover"
            />
            <PaginationLink
              {...props}
              reversed={isReversed}
              classNameOverride="story__button-active"
            />
            <PaginationLink
              {...props}
              reversed={isReversed}
              classNameOverride="story__button-focus"
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
