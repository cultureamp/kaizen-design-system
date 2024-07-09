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
  title: "Actions/Button/v3",
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
          headings={["Base", "Hover", "Focus", "Disabled", "working"]}
          headingsWidth="10rem"
          hasVerticalHeadings
          verticalHeadingsWidth="12rem"
        />
        <StickerSheet.Body>
          <StickerSheet.Row rowTitle="Default">
            <Button>Label</Button>
            <Button>Label</Button>
            <Button>Label</Button>
            <Button isDisabled>Label</Button>
            <Button>Label</Button>
          </StickerSheet.Row>
          <StickerSheet.Row rowTitle="Icon start">
            <Button>
              <AddIcon role="presentation" />
              Label
            </Button>
            <Button>
              <AddIcon role="presentation" />
              Label
            </Button>
            <Button>
              <AddIcon role="presentation" />
              Label
            </Button>
            <Button isDisabled>
              <AddIcon role="presentation" />
              Label
            </Button>
            <Button>
              <AddIcon role="presentation" />
              Label
            </Button>
          </StickerSheet.Row>
          <StickerSheet.Row rowTitle="Icon end">
            <Button>
              Label
              <ArrowForwardIcon role="presentation" />
            </Button>
            <Button>
              Label
              <ArrowForwardIcon role="presentation" />
            </Button>
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
            <Button aria-label="Label">
              <TrashIcon role="presentation" />
            </Button>
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
          <StickerSheet.Row rowTitle="small">
            <Button size="small">
              Label
              <ArrowForwardIcon role="presentation" />
            </Button>
            <Button size="small">
              Label
              <ArrowForwardIcon role="presentation" />
            </Button>
            <Button size="small">
              Label
              <ArrowForwardIcon role="presentation" />
            </Button>
            <Button size="small" isDisabled>
              Label
              <ArrowForwardIcon role="presentation" />
            </Button>
            <Button size="small" isDisabled>
              <LoadingSpinner size="sm" accessibilityLabel="submitting label" />
            </Button>
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>
    </>
  ),
  parameters: {
    pseudo: {
      hover: '[data-sb-pseudo-styles="hover"]',
      active: '[data-sb-pseudo-styles="active"]',
      focus: '[data-sb-pseudo-styles="focus"]',
      focusVisible: '[data-sb-pseudo-styles="focus-visible"]',
    },
  },
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}
