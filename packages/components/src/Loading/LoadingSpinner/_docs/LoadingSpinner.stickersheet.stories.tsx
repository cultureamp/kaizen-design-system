import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { LoadingSpinner } from "../index"

export default {
  title: "Components/Loading states/LoadingSpinner",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Header
        headings={['Size "sm"', 'Size "md"', "Custom colour"]}
      />
      <StickerSheet.Body>
        <StickerSheet.Row>
          <LoadingSpinner accessibilityLabel="Loading" size="sm" />
          <LoadingSpinner accessibilityLabel="Loading" size="md" />
          <LoadingSpinner
            accessibilityLabel="Loading"
            classNameOverride="text-purple-400"
          />
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
  ),
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}
