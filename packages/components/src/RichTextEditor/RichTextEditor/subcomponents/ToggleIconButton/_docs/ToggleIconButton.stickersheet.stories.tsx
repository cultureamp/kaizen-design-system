import React from "react"
import { Meta } from "@storybook/react"
import { BoldIcon } from "~components/Icon"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { ToggleIconButton } from "../index"

export default {
  title: "Components/RichTextEditor/subcomponents/ToggleIconButton",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <StickerSheet>
      <StickerSheet.Header headings={["Default", "Hover", "Active", "Focus"]} />
      <StickerSheet.Body>
        <StickerSheet.Row>
          <ToggleIconButton
            label="bold"
            icon={<BoldIcon role="presentation" />}
          />
          <ToggleIconButton
            label="bold"
            icon={<BoldIcon role="presentation" />}
            data-sb-pseudo-styles="hover"
          />
          <ToggleIconButton
            label="bold"
            icon={<BoldIcon role="presentation" />}
            isActive
          />
          <ToggleIconButton
            label="bold"
            icon={<BoldIcon role="presentation" />}
            data-sb-pseudo-styles="focus"
          />
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
  ),
  parameters: {
    pseudo: {
      hover: '[data-sb-pseudo-styles="hover"]',
      focus: '[data-sb-pseudo-styles="focus"]',
      focusVisible: '[data-sb-pseudo-styles="focus"]',
    },
  },
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}
