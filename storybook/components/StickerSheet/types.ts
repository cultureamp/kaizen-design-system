import { StoryObj } from "@storybook/react"
import {ColorSchema} from "~components/LikertScaleLegacy/types";

export type StickerSheetArgs = {
  isReversed?: boolean
  colorSchema?: ColorSchema
}

export type StickerSheetStory = StoryObj<StickerSheetArgs>
