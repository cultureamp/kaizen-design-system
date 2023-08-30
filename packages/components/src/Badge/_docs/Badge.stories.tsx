import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { classNameOverrideArgType } from "~storybook/argTypes"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { Badge } from "../index"

const meta = {
  title: "Components/Badge",
  component: Badge,
  argTypes: { ...classNameOverrideArgType, reversed: { control: "disabled" } },
  args: {
    children: "3",
  },
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Header headings={["Default", "Active", "Dot"]} />
      <StickerSheet.Body>
        <StickerSheet.Row>
          <Badge size="small" variant="default" reversed={isReversed}>
            3
          </Badge>
          <Badge size="small" variant="active" reversed={isReversed}>
            3
          </Badge>
          <Badge size="small" variant="dot" reversed={isReversed} />
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
  ),
}

export const Reversed: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Reversed)",
  parameters: { backgrounds: { default: "Purple 700" } },
  args: { isReversed: true },
}
