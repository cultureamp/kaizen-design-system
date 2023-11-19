import React from "react"
import { Meta } from "@storybook/react"
import { BoldIcon } from "~components/Icon"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { ToggleIconButton, ToggleIconButtonProps } from "../index"
import { moodsList } from "../types"

export default {
  title: "Components/RichTextEditor/Subcomponents/ToggleIconButton",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const ToggleIconButtonGroup = ({
  rowTitle,
  ...props
}: Omit<ToggleIconButtonProps, "label" | "icon"> & {
  rowTitle: string
}): JSX.Element => (
  <StickerSheet.Row rowTitle={rowTitle}>
    <ToggleIconButton
      label="bold"
      icon={<BoldIcon role="presentation" />}
      {...props}
    />
    <ToggleIconButton
      label="bold"
      icon={<BoldIcon role="presentation" />}
      {...props}
      data-sb-pseudo-styles="hover"
    />
    <ToggleIconButton
      label="bold"
      icon={<BoldIcon role="presentation" />}
      {...props}
      isActive
    />
    <ToggleIconButton
      label="bold"
      icon={<BoldIcon role="presentation" />}
      {...props}
      data-sb-pseudo-styles="focus"
    />
    <ToggleIconButton
      label="bold"
      icon={<BoldIcon role="presentation" />}
      {...props}
      disabled
    />
  </StickerSheet.Row>
)

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <StickerSheet>
      <StickerSheet.Header
        headings={["Default", "Hover", "Active", "Focus", "Disabled"]}
        hasVerticalHeadings
      />
      <StickerSheet.Body>
        {moodsList.map(mood => (
          <ToggleIconButtonGroup key={mood} rowTitle={mood} mood={mood} />
        ))}
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
