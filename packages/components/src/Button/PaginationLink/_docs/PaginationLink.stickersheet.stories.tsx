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
      <StickerSheet.Header
        headings={["Base", "Hover", "Active", "Focus"]}
        hasVerticalHeadings
        verticalHeadingsWidth="10rem"
      />
      <StickerSheet.Body>
        {PAGINATION_LINK_PROPS.map(({ title, props }) => (
          <StickerSheet.Row key={title} rowTitle={title}>
            <PaginationLink {...props} reversed={isReversed} />
            <PaginationLink
              {...props}
              reversed={isReversed}
              classNameOverride="story__pagination-link--hover"
            />
            <PaginationLink
              {...props}
              reversed={isReversed}
              classNameOverride="story__pagination-link--active"
            />
            <PaginationLink
              {...props}
              reversed={isReversed}
              classNameOverride="story__pagination-link--focus"
            />
          </StickerSheet.Row>
        ))}
      </StickerSheet.Body>
    </StickerSheet>
  ),
  parameters: {
    pseudo: {
      hover: ".story__pagination-link--hover",
      active: ".story__pagination-link--active",
      focus: ".story__pagination-link--focus",
      focusVisible: ".story__pagination-link--focus",
    },
  },
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}

export const StickerSheetReversed: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Reversed)",
  parameters: {
    ...StickerSheetTemplate.parameters,
    backgrounds: { default: "Purple 700" },
  },
  args: { isReversed: true },
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    ...StickerSheetTemplate.parameters,
    textDirection: "rtl",
  },
}
