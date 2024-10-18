import React from "react"
import { Meta } from "@storybook/react"
import { ArrowForwardIcon, AddIcon, TrashIcon } from "~components/Icon"
import { LoadingSpinner } from "~components/Loading"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { Button } from "../index"

export default {
  title: "Actions/Button/Button (v3)/Tests",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <>
      <StickerSheet heading="Button" isReversed={isReversed}>
        <StickerSheet.Header
          headings={["Base", "Disabled", "working"]}
          headingsWidth="10rem"
          hasVerticalHeadings
          verticalHeadingsWidth="12rem"
        />
        <StickerSheet.Body>
          <StickerSheet.Row rowTitle="Default">
            <Button>Label</Button>

            <Button isDisabled>Label</Button>
            <Button isDisabled>
              <LoadingSpinner size="sm" accessibilityLabel="submitting label" />
            </Button>
          </StickerSheet.Row>
          <StickerSheet.Row rowTitle="Icon start">
            <Button>
              <AddIcon role="presentation" />
              Label
            </Button>
            <Button isDisabled>
              <AddIcon role="presentation" />
              Label
            </Button>
            <Button isDisabled>
              <LoadingSpinner size="sm" accessibilityLabel="submitting label" />
            </Button>
          </StickerSheet.Row>
          <StickerSheet.Row rowTitle="Icon end">
            <Button>
              Label
              <ArrowForwardIcon role="presentation" />
            </Button>
            <Button isDisabled>
              Label
              <ArrowForwardIcon role="presentation" />
            </Button>
            <Button isDisabled>
              <LoadingSpinner size="sm" accessibilityLabel="submitting label" />
            </Button>
          </StickerSheet.Row>
          <StickerSheet.Row rowTitle="Icon only">
            <Button aria-label="Label">
              <TrashIcon role="presentation" />
            </Button>
            <Button aria-label="Label" isDisabled>
              <TrashIcon role="presentation" />
            </Button>
            <Button aria-label="Label" isDisabled>
              <LoadingSpinner size="sm" accessibilityLabel="submitting label" />
            </Button>
          </StickerSheet.Row>
          <StickerSheet.Row rowTitle="Small">
            <Button size="small">
              Label
              <ArrowForwardIcon role="presentation" />
            </Button>
            <Button size="small" isDisabled>
              Label
              <ArrowForwardIcon role="presentation" />
            </Button>
            <Button size="small" isDisabled>
              <LoadingSpinner size="xs" accessibilityLabel="submitting label" />
            </Button>
          </StickerSheet.Row>
          <StickerSheet.Row rowTitle="Icon only small">
            <Button size="small">
              <TrashIcon role="img" aria-label="Remove label" />
            </Button>
            <Button size="small" isDisabled>
              <TrashIcon role="img" aria-label="Remove label" />
            </Button>
            <Button size="small" isDisabled>
              <LoadingSpinner size="xs" accessibilityLabel="Removing label" />
            </Button>
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>
    </>
  ),
  parameters: {
    pseudo: {
      hover: '[data-hovered="true"]',
      active: '[data-pressed="true"]',
      focus: '[data-focused="true"]',
      focusVisible: '[data-focus-visible="true"]',
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
  parameters: {
    textDirection: "rtl",
  },
}

export const StickerSheetReversed: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Reversed)",
  parameters: {
    reverseColors: true,
  },
  args: {
    isReversed: true,
  },
}
