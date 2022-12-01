import React from "react"
import { Story } from "@storybook/react"
import { Divider } from "@kaizen/draft-divider"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { flattenEntries } from "./helpers/flatten-entries"
import styles from "./styles.module.scss"

const prefix = "border-"
const classKeyVal: string[][] = Object.entries(
  kaizenTailwindTheme?.borderColor || []
)

const classEntries = flattenEntries(kaizenTailwindTheme?.borderColor || {})

export default {
  title: "Tailwind/Borders/Border Color",
  parameters: {
    docs: {
      description: {
        component: `Use class "${prefix}\\$\\{modifier}", ie: className="${prefix}${classKeyVal[0][0]}"`,
      },
    },
  },
}

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <>
    {console.log("classEntries", classEntries)}
    <StoryWrapper isReversed={isReversed}>
      <StoryWrapper.RowHeader headings={["Class", "Properties", "Example"]} />
      {classEntries.map((presetData, index) => {
        const [borderColorClassName, borderColorValue] = presetData

        return (
          <React.Fragment key={index}>
            <Divider variant="canvas" />
            <StoryWrapper.Row rowTitle="">
              <p>border-{borderColorClassName}</p>
              <p>{borderColorValue}</p>
              <div
                style={{ borderColor: borderColorValue }}
                className={styles.boxWithBorder}
              />
            </StoryWrapper.Row>
          </React.Fragment>
        )
      })}
    </StoryWrapper>
  </>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Border Color"
StickerSheetDefault.parameters = { chromatic: { disable: false } }
