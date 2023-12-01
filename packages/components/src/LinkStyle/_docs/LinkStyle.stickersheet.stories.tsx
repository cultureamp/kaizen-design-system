/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { Meta } from "@storybook/react"
import { Heading } from "~components/Heading"
import { Text } from "~components/Text"
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
  render: ({ isReversed }) => {
    const textColor = isReversed ? "white" : "dark"
    return (
      <>
        <StickerSheet isReversed={isReversed} heading="LinkStyle">
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
                <a href="#" data-sb-pseudo-styles="hover">
                  Anchor
                </a>
              </LinkStyle>
              <LinkStyle isReversed={isReversed} data-sb-pseudo-styles="active">
                <a href="#" data-sb-pseudo-styles="active">
                  Anchor
                </a>
              </LinkStyle>
              <LinkStyle isReversed={isReversed}>
                <a href="#" data-sb-pseudo-styles="focus">
                  Anchor
                </a>
              </LinkStyle>
            </StickerSheet.Row>

            <StickerSheet.Row rowTitle="<button>">
              <LinkStyle isReversed={isReversed}>
                <button type="button">Button</button>
              </LinkStyle>
              <LinkStyle isReversed={isReversed}>
                <button type="button" data-sb-pseudo-styles="hover">
                  Button
                </button>
              </LinkStyle>
              <LinkStyle isReversed={isReversed} data-sb-pseudo-styles="active">
                <button type="button" data-sb-pseudo-styles="active">
                  Button
                </button>
              </LinkStyle>
              <LinkStyle isReversed={isReversed}>
                <button type="button" data-sb-pseudo-styles="focus">
                  Button
                </button>
              </LinkStyle>
            </StickerSheet.Row>
          </StickerSheet.Body>
        </StickerSheet>

        <StickerSheet isReversed={isReversed} heading="Font inheritance">
          <StickerSheet.Header
            headings={[]}
            verticalHeadingsWidth="12rem"
            hasVerticalHeadings
          />
          <StickerSheet.Body>
            <StickerSheet.Row rowTitle="Heading display-0">
              <Heading variant="display-0" color={textColor}>
                The{" "}
                <LinkStyle isReversed={isReversed}>
                  <a href="#">lazy</a>
                </LinkStyle>{" "}
                Snorlax slept on the beanbag
              </Heading>
            </StickerSheet.Row>
            <StickerSheet.Row rowTitle="Heading heading-1">
              <Heading variant="heading-1" color={textColor}>
                The{" "}
                <LinkStyle isReversed={isReversed}>
                  <a href="#">lazy</a>
                </LinkStyle>{" "}
                Snorlax slept on the beanbag
              </Heading>
            </StickerSheet.Row>
            <StickerSheet.Row rowTitle="Heading heading-2">
              <Heading variant="heading-2" color={textColor}>
                The{" "}
                <LinkStyle isReversed={isReversed}>
                  <a href="#">lazy</a>
                </LinkStyle>{" "}
                Snorlax slept on the beanbag
              </Heading>
            </StickerSheet.Row>
            <StickerSheet.Row rowTitle="Heading heading-3">
              <Heading variant="heading-3" color={textColor}>
                The{" "}
                <LinkStyle isReversed={isReversed}>
                  <a href="#">lazy</a>
                </LinkStyle>{" "}
                Snorlax slept on the beanbag
              </Heading>
            </StickerSheet.Row>
            <StickerSheet.Row rowTitle="Heading heading-4">
              <Heading variant="heading-4" color={textColor}>
                The{" "}
                <LinkStyle isReversed={isReversed}>
                  <a href="#">lazy</a>
                </LinkStyle>{" "}
                Snorlax slept on the beanbag
              </Heading>
            </StickerSheet.Row>
            <StickerSheet.Row rowTitle="Heading heading-5">
              <Heading variant="heading-5" color={textColor}>
                The{" "}
                <LinkStyle isReversed={isReversed}>
                  <a href="#">lazy</a>
                </LinkStyle>{" "}
                Snorlax slept on the beanbag
              </Heading>
            </StickerSheet.Row>
            <StickerSheet.Row rowTitle="Heading heading-6">
              <Heading variant="heading-6" color={textColor}>
                The{" "}
                <LinkStyle isReversed={isReversed}>
                  <a href="#">lazy</a>
                </LinkStyle>{" "}
                Snorlax slept on the beanbag
              </Heading>
            </StickerSheet.Row>
            <StickerSheet.Row rowTitle="Text intro-lede">
              <Text variant="intro-lede" color={textColor}>
                The{" "}
                <LinkStyle isReversed={isReversed}>
                  <a href="#">lazy</a>
                </LinkStyle>{" "}
                Snorlax slept on the beanbag
              </Text>
            </StickerSheet.Row>
            <StickerSheet.Row rowTitle="Text body">
              <Text variant="body" color={textColor}>
                The{" "}
                <LinkStyle isReversed={isReversed}>
                  <a href="#">lazy</a>
                </LinkStyle>{" "}
                Snorlax slept on the beanbag
              </Text>
            </StickerSheet.Row>
            <StickerSheet.Row rowTitle="Text small">
              <Text variant="small" color={textColor}>
                The{" "}
                <LinkStyle isReversed={isReversed}>
                  <button type="button">lazy</button>
                </LinkStyle>{" "}
                Snorlax slept on the beanbag
              </Text>
            </StickerSheet.Row>
            <StickerSheet.Row rowTitle="Text extra-small">
              <Text variant="extra-small" color={textColor}>
                The{" "}
                <LinkStyle isReversed={isReversed}>
                  <a href="#">lazy</a>
                </LinkStyle>{" "}
                Snorlax slept on the beanbag
              </Text>
            </StickerSheet.Row>
          </StickerSheet.Body>
        </StickerSheet>
      </>
    )
  },
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
