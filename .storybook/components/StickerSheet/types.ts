import { StoryObj } from "@storybook/react"
import { ColorSchema } from "~components/LikertScaleLegacy"

export type StickerSheetArgs = {
  isReversed?: boolean
  colorSchema?: ColorSchema
}

export type StickerSheetStory = StoryObj<StickerSheetArgs>
