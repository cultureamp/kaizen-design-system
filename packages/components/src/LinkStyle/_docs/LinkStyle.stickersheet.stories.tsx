/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { LinkStyle } from "../index"

export default {
  title: "Components/LinkStyle",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Header
      headings={["Default", "Hover", "Active", "Focus"]}
      hasVerticalHeadings
       />
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="<a>">
          <LinkStyle isReversed={isReversed}>
            <a href="#">Anchor</a>
          </LinkStyle>
          <LinkStyle isReversed={isReversed}>
            <a href="#" data-sb-pseudo-styles="hover">Anchor</a>
            </LinkStyle>
          <LinkStyle isReversed={isReversed}
            data-sb-pseudo-styles="active">
            <a href="#" data-sb-pseudo-styles="active">Anchor</a>
          </LinkStyle>
          <LinkStyle isReversed={isReversed}>
            <a href="#" data-sb-pseudo-styles="focus">Anchor</a>
          </LinkStyle>
        </StickerSheet.Row>

        <StickerSheet.Row rowTitle="<button>">
          <LinkStyle isReversed={isReversed}>
            <button type="button">Button</button>
          </LinkStyle>
          <LinkStyle isReversed={isReversed}>
            <button type="button" data-sb-pseudo-styles="hover">Button</button>
            </LinkStyle>
          <LinkStyle isReversed={isReversed}
            data-sb-pseudo-styles="active">
            <button type="button" data-sb-pseudo-styles="active">Button</button>
          </LinkStyle>
          <LinkStyle isReversed={isReversed}>
            <button type="button" data-sb-pseudo-styles="focus">Button</button>
          </LinkStyle>
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
  ),
  parameters: {
    pseudo: {
      hover: '[data-sb-pseudo-styles="hover"]',
      active: '[data-sb-pseudo-styles="active"]',
      focus: '[data-sb-pseudo-styles="focus"]',
      focusVisible: '[data-sb-pseudo-styles="focus"]',
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
    /** @note: Only required if template has parameters, otherwise this spread can be removed */
    ...StickerSheetTemplate.parameters,
    backgrounds: { default: "Purple 700" },
  },
  args: { isReversed: true },
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    /** @note: Only required if template has parameters, otherwise this spread can be removed */
    ...StickerSheetTemplate.parameters,
    textDirection: "rtl",
  },
}
