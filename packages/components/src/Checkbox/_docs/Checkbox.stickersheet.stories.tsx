import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { StickerSheet } from "../../../../../storybook/components/StickerSheet"
import { Checkbox } from "../index"
import styles from "./Checkbox.stories.module.scss"

export default {
  title: "Components/Checkbox",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta<typeof Checkbox>

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  /** @note: If you have multiple StickerSheets to display, you can add a `heading` */
  <StickerSheet isReversed={isReversed}>
    <StickerSheet.Header
      headings={["Default", "Hover", "Focus"]}
      hasVerticalHeadings
    />
    <StickerSheet.Body>
      <StickerSheet.Row rowTitle="Unchecked">
        <Checkbox checkedStatus="unchecked" />
        <Checkbox
          classNameOverride={styles["story-className--checkbox-unchecked"]}
          checkedStatus="unchecked"
        />
        <Checkbox
          classNameOverride={`${styles["story-className--checkbox-focus"]} ${styles["story-className--checkbox-unchecked"]}`}
          checkedStatus="unchecked"
        />
      </StickerSheet.Row>
      <StickerSheet.Row rowTitle="Checked">
        <Checkbox checkedStatus="checked" />
        <Checkbox
          classNameOverride={styles["story-className--checkbox-checked"]}
          checkedStatus="checked"
        />
        <Checkbox
          classNameOverride={`${styles["story-className--checkbox-focus"]} ${styles["story-className--checkbox-checked"]}`}
          checkedStatus="checked"
        />
      </StickerSheet.Row>
      <StickerSheet.Row rowTitle="Indeterminate">
        <Checkbox checkedStatus="indeterminate" />
        <Checkbox
          classNameOverride={styles["story-className--checkbox-checked"]}
          checkedStatus="indeterminate"
        />
        <Checkbox
          classNameOverride={`${styles["story-className--checkbox-focus"]} ${styles["story-className--checkbox-checked"]}`}
          checkedStatus="indeterminate"
        />
      </StickerSheet.Row>
    </StickerSheet.Body>
  </StickerSheet>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
