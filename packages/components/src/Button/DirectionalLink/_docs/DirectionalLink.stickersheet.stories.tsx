import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { DirectionalLink, DirectionalLinkProps } from "../index"

export default {
  title: "KAIO-staging/Buttons/DirectionalLink",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
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
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Body>
        {DIRECTIONAL_LINK_PROPS.map(({ title, props }) => (
          <StickerSheet.Row key={title} rowTitle={title}>
            <DirectionalLink {...props} reversed={isReversed} />
            <DirectionalLink
              {...props}
              reversed={isReversed}
              classNameOverride="story__directional-link--hover"
            />
            <DirectionalLink
              {...props}
              reversed={isReversed}
              classNameOverride="story__directional-link--active"
            />
            <DirectionalLink
              {...props}
              reversed={isReversed}
              classNameOverride="story__directional-link--focus"
            />
            <DirectionalLink {...props} reversed={isReversed} disabled />
          </StickerSheet.Row>
        ))}
      </StickerSheet.Body>
    </StickerSheet>
  ),
  parameters: {
    pseudo: {
      hover: ".story__directional-link--hover",
      active: ".story__directional-link--active",
      focus: ".story__directional-link--focus",
      focusVisible: ".story__directional-link--focus",
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
