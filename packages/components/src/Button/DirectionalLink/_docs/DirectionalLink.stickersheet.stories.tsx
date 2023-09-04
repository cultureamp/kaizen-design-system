import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { DirectionalLink, DirectionalLinkProps } from "../index"

export default {
  title: "Components/Buttons/DirectionalLink",
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

const DIRECTIONAL_LINK_PROPS: Array<{
  title: string
  props: DirectionalLinkProps
}> = [
  {
    title: "Prev",
    props: {
      direction: "prev",
      label: "Previous page",
    },
  },
  {
    title: "Next",
    props: {
      direction: "next",
      label: "Next page",
    },
  },
  {
    title: "Start",
    props: {
      direction: "start",
      label: "First page",
    },
  },
  {
    title: "End",
    props: {
      direction: "end",
      label: "Last page",
    },
  },
]

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    /** @note: If you have multiple StickerSheets to display, you can add a `heading` */
    <StickerSheet isReversed={isReversed}>
      {/* @note: Header is optional */}
      <StickerSheet.Header headings={["COLUMN 1", "COLUMN 2"]} />
      <StickerSheet.Body>
        {DIRECTIONAL_LINK_PROPS.map(({ title, props }) => (
          <StickerSheet.Row key={title} rowTitle={title}>
            <DirectionalLink {...props} reversed={isReversed} />
            <DirectionalLink
              {...props}
              reversed={isReversed}
              classNameOverride="story__button-hover"
            />
            <DirectionalLink
              {...props}
              reversed={isReversed}
              classNameOverride="story__button-active"
            />
            <DirectionalLink
              {...props}
              reversed={isReversed}
              classNameOverride="story__button-focus"
            />
            <DirectionalLink {...props} reversed={isReversed} disabled />
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
